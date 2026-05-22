/* ============================================================
   motion-shim.js  v3
   ──────────────────────────────────────────────────────────
   ENTRY:   initial → paint → double-RAF → animate (real CSS)
   EXIT:    AnimatePresence clones child with __exiting=true;
            MotionEl applies `exit` styles; removed after duration
   CHANGE:  animateKey useEffect, skipped until entry completes
   WAIT:    mode="wait" queues entering children until current
            exit finishes before starting the entry animation
   ============================================================ */
(function () {
  const R = React;

  /* ── Apply a style object to a live DOM element ─────────── */
  function applyVars(el, obj) {
    if (!obj || !el) return;
    let tx = '';
    if (obj.x      != null) tx += `translateX(${typeof obj.x === 'number' ? obj.x + 'px' : obj.x}) `;
    if (obj.y      != null) tx += `translateY(${typeof obj.y === 'number' ? obj.y + 'px' : obj.y}) `;
    if (obj.scale  != null) tx += `scale(${obj.scale}) `;
    if (obj.scaleX != null) tx += `scaleX(${obj.scaleX}) `;
    if (obj.scaleY != null) tx += `scaleY(${obj.scaleY}) `;
    if (obj.rotate != null) tx += `rotate(${typeof obj.rotate === 'number' ? obj.rotate + 'deg' : obj.rotate}) `;
    if (tx) el.style.transform = tx.trim();

    const last = v => (Array.isArray(v) ? v[v.length - 1] : v);
    if (obj.opacity    != null) el.style.opacity    = last(obj.opacity);
    if (obj.filter     != null) el.style.filter     = last(obj.filter);
    if (obj.width      != null) el.style.width      = last(obj.width);
    if (obj.height     != null) el.style.height     = last(obj.height);
    if (obj.background != null) el.style.background = last(obj.background);
    if (obj.color      != null) el.style.color      = last(obj.color);
  }

  /* ── Step through keyframe-array values over time ─────── */
  function stepKF(el, obj, durSec) {
    const keys = Object.keys(obj).filter(k => Array.isArray(obj[k]));
    if (!keys.length) return;
    const len = Math.max(...keys.map(k => obj[k].length));
    if (len <= 1) return;
    const dt = (durSec * 1000) / (len - 1);
    let i = 1;
    const tick = () => {
      if (!el.isConnected) return;
      let tx = '';
      keys.forEach(k => {
        const v = obj[k][Math.min(i, obj[k].length - 1)];
        if      (k === 'opacity') el.style.opacity = v;
        else if (k === 'filter')  el.style.filter  = v;
        else if (k === 'x')  tx += `translateX(${typeof v === 'number' ? v + 'px' : v}) `;
        else if (k === 'y')  tx += `translateY(${typeof v === 'number' ? v + 'px' : v}) `;
        else if (k === 'scale') tx += `scale(${v}) `;
      });
      if (tx.trim()) el.style.transform = tx.trim();
      if (++i < len) setTimeout(tick, dt);
    };
    setTimeout(tick, dt);
  }

  /* ── Build CSS transition string ─────────────────────── */
  function mkTs(t) {
    const dur   = t?.duration ?? 0.45;
    const delay = t?.delay    ?? 0;
    const ease  = t?.ease     || 'cubic-bezier(.22,.68,0,1.2)';
    return `all ${dur}s ${ease} ${delay}s`;
  }

  /* ── motion element factory ──────────────────────────── */
  function makeMotion(tag) {
    return R.forwardRef(function MotionEl(props, outerRef) {
      const {
        initial, animate, exit, transition,
        whileHover, whileTap,
        __exiting,    // injected by AnimatePresence when child leaves DOM
        style, children,
        ...rest
      } = props;

      const elRef     = R.useRef(null);
      const entryDone = R.useRef(false);
      const ts  = mkTs(transition);
      const dur = transition?.duration ?? 0.45;

      R.useImperativeHandle(outerRef, () => elRef.current, []);

      /* ── Entry: initial → paint → double-RAF → animate ── */
      R.useLayoutEffect(() => {
        const el = elRef.current;
        if (!el) return;
        entryDone.current = false;

        if (!initial) {
          // No initial defined — snap to animate, no transition needed
          if (animate) { el.style.transition = 'none'; applyVars(el, animate); }
          entryDone.current = true;
          return;
        }

        // 1. Apply initial state with zero transition (instant)
        el.style.transition = 'none';
        applyVars(el, initial);

        // 2. Double RAF ensures the browser has committed the initial paint
        //    before we switch on the transition and drive to animate.
        let r1, r2;
        r1 = requestAnimationFrame(() => {
          r2 = requestAnimationFrame(() => {
            if (!el.isConnected) return;
            el.style.transition = ts;
            if (animate) {
              applyVars(el, animate);
              stepKF(el, animate, dur);
            }
            entryDone.current = true;
          });
        });
        return () => { cancelAnimationFrame(r1); r2 && cancelAnimationFrame(r2); };
      }, []); // eslint-disable-line

      /* ── Exit: AnimatePresence flips __exiting → true ─── */
      R.useEffect(() => {
        if (!__exiting || !exit) return;
        const el = elRef.current;
        if (!el) return;
        el.style.transition = ts;
        applyVars(el, exit);
      }, [__exiting]); // eslint-disable-line

      /* ── Animate on prop change (phase / state driven) ── */
      const ak = JSON.stringify(animate ?? {});
      R.useEffect(() => {
        if (!entryDone.current) return;
        const el = elRef.current;
        if (!el || !animate) return;
        el.style.transition = ts;
        applyVars(el, animate);
        stepKF(el, animate, dur);
      }, [ak]); // eslint-disable-line

      /* ── whileHover / whileTap ──────────────────────── */
      const [hov, setHov] = R.useState(false);
      const [tap, setTap] = R.useState(false);
      R.useEffect(() => {
        const el = elRef.current;
        if (!el || !entryDone.current) return;
        if      (hov && whileHover) applyVars(el, whileHover);
        else if (tap && whileTap)   applyVars(el, whileTap);
        else if (animate)           applyVars(el, animate);
      }, [hov, tap]); // eslint-disable-line

      const evts = {};
      if (whileHover) {
        evts.onMouseEnter = e => { setHov(true);  rest.onMouseEnter?.(e); };
        evts.onMouseLeave = e => { setHov(false); setTap(false); rest.onMouseLeave?.(e); };
      }
      if (whileTap) {
        evts.onMouseDown = e => { setTap(true);  rest.onMouseDown?.(e); };
        evts.onMouseUp   = e => { setTap(false); rest.onMouseUp?.(e); };
      }

      return R.createElement(tag, { ref: elRef, style, ...rest, ...evts }, children);
    });
  }

  const motion = new Proxy({}, { get(t, k) { return t[k] || (t[k] = makeMotion(k)); } });

  /* ── AnimatePresence ─────────────────────────────────── */
  /*
     Manages a `slots` array that mirrors children but:
       – keeps exiting children alive (as __exiting clones) until
         their transition finishes, then removes them
       – mode="wait": queues entering children until all exits are done
  */
  function AnimatePresence({ children, mode }) {
    const toArr = c => R.Children.toArray(c).filter(Boolean);

    const [slots, setSlots]   = R.useState(() => toArr(children));
    const prevKs      = R.useRef(toArr(children).map(c => c.key).join('\0'));
    const prevChildren = R.useRef(children); // raw prop ref to detect parent re-renders
    const timers   = R.useRef({});
    const waitQ    = R.useRef([]); // pending entries for mode="wait"

    /* Flush the wait queue into slots (called after an exit finishes) */
    function flushWaitQ() {
      if (!waitQ.current.length) return;
      const incoming = waitQ.current;
      waitQ.current  = [];
      setSlots(s => {
        const out = s.filter(c => !c.props?.__exiting);
        incoming.forEach(c => { if (!out.find(x => x.key === c.key)) out.push(c); });
        return out.length === s.length && out.every((c, i) => c === s[i]) ? s : out;
      });
    }

    /* Run after every render; guards itself with prevKs ref */
    R.useEffect(() => {
      const nextList = toArr(children);
      const nextKs   = nextList.map(c => c.key).join('\0');

      if (nextKs === prevKs.current) {
        // Keys unchanged. If the parent re-rendered (children ref changed), refresh slot
        // props without touching animation state. Skip if this is our own re-render
        // (children ref unchanged = no parent re-render = no prop updates to forward).
        if (children === prevChildren.current) return;
        prevChildren.current = children;
        const nextMap = new Map(nextList.map(c => [c.key, c]));
        setSlots(cur => cur.map(c =>
          (!c.props?.__exiting && nextMap.has(c.key)) ? nextMap.get(c.key) : c
        ));
        return;
      }

      prevKs.current = nextKs;
      prevChildren.current = children;
      const nextMap = new Map(nextList.map(c => [c.key, c]));

      setSlots(cur => {
        const out       = [];
        let   exiting   = false; // any child starting to exit this pass?

        for (const c of cur) {
          if (nextMap.has(c.key)) {
            /* still present — update to latest props, cancel exit if any */
            if (timers.current[c.key]) {
              clearTimeout(timers.current[c.key]);
              delete timers.current[c.key];
            }
            out.push(nextMap.get(c.key));
            nextMap.delete(c.key);
          } else if (!c.props?.__exiting) {
            /* just left — keep alive, inject __exiting so MotionEl animates */
            exiting = true;
            const exitDur = ((c.props?.transition?.duration) ?? 0.45) * 1000 + 80;
            if (timers.current[c.key]) clearTimeout(timers.current[c.key]);
            timers.current[c.key] = setTimeout(() => {
              setSlots(s => s.filter(x => x.key !== c.key));
              delete timers.current[c.key];
              if (mode === 'wait') flushWaitQ(); // release queued entries
            }, exitDur);
            out.push(R.cloneElement(c, { __exiting: true }));
          } else {
            /* already exiting, leave as-is */
            out.push(c);
          }
        }

        /* Append brand-new children */
        for (const [, c] of nextMap) {
          if (mode === 'wait' && exiting) {
            waitQ.current = [...waitQ.current.filter(x => x.key !== c.key), c];
          } else {
            out.push(c);
          }
        }

        return out.length === cur.length && out.every((c, i) => c === cur[i]) ? cur : out;
      });
    }); // intentionally no deps — guarded by prevKs/prevChildren refs

    /* Cleanup on unmount */
    R.useEffect(() => () => Object.values(timers.current).forEach(clearTimeout), []);

    if (slots.length === 0) return null;
    if (slots.length === 1) return slots[0];
    return slots;
  }

  window.motion          = motion;
  window.AnimatePresence = AnimatePresence;
  window.FramerMotion    = { motion, AnimatePresence };
})();
