/* ============================================================
   SHARED — particles, vignette, wipe, typewriter, helpers
   ============================================================ */
const { useState, useEffect, useRef, useCallback, useMemo } = React;
const { motion, AnimatePresence } = window.FramerMotion || { motion: window.motion, AnimatePresence: window.AnimatePresence };

// Hooks aren't globals — make them available to other Babel scripts
Object.assign(window, { useState, useEffect, useRef, useCallback, useMemo });

/* Typewriter hook */
function useTypewriter(lines, speed = 45, startDelay = 300) {
  const [displayed, setDisplayed] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex >= lines.length) { setDone(true); return; }
    if (charIndex === 0) {
      const t = setTimeout(() => {
        setDisplayed(prev => [...prev, '']);
        setCharIndex(1);
      }, lineIndex === 0 ? startDelay : 380);
      return () => clearTimeout(t);
    }
    const currentLine = lines[lineIndex];
    if (charIndex <= currentLine.length) {
      const t = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev];
          next[lineIndex] = currentLine.slice(0, charIndex);
          return next;
        });
        setCharIndex(c => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIndex(i => i + 1);
        setCharIndex(0);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [lineIndex, charIndex, lines, speed, startDelay]);

  return { displayed, done };
}

/* Ambient drifting blue particles — global atmospheric */
function Particles({ count = 22, intensity = 1 }) {
  const items = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const size = 1 + Math.random() * 2.5;
      return {
        id: i,
        left: Math.random() * 100,
        bottom: -10 - Math.random() * 30,
        size,
        dur: 16 + Math.random() * 18,
        delay: -Math.random() * 22,
        dx: (Math.random() - 0.5) * 80,
        opacity: (0.25 + Math.random() * 0.4) * intensity,
      };
    });
  }, [count, intensity]);
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {items.map(p => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left + '%',
            bottom: p.bottom + '%',
            width: p.size,
            height: p.size,
            '--p-dur': p.dur + 's',
            '--p-delay': p.delay + 's',
            '--p-dx': p.dx + 'px',
            '--p-opacity': p.opacity,
          }}
        />
      ))}
    </div>
  );
}

/* Persistent overlays */
function Atmosphere({ particles = true }) {
  return (
    <>
      <div className="scanline" />
      <div className="noise-overlay" />
      <div className="vignette" />
      {particles && <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 47 }}><Particles count={24} /></div>}
    </>
  );
}

/* VHS Wipe — corrupted horizontal glitch transition */
function VHSWipe({ active, onDone }) {
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => onDone && onDone(), 650);
    return () => clearTimeout(t);
  }, [active, onDone]);
  if (!active) return null;
  return (
    <div className="vhs-wipe">
      {/* horizontal RGB-tinted bands sweeping across */}
      {[0, 1, 2, 3, 4, 5].map(i => (
        <div
          key={i}
          className="vhs-wipe__band"
          style={{
            top: (i * 17) + '%',
            animation: `vhs-wipe-band ${0.35 + i * 0.04}s cubic-bezier(.7,.1,.3,1) ${i * 0.05}s forwards`,
          }}
        />
      ))}
      {/* RGB tears */}
      <motion.div
        className="vhs-wipe__rgb-r"
        animate={{ opacity: [0, 0.5, 0.2, 0.6, 0], x: [0, -14, 8, -6, 0] }}
        transition={{ duration: 0.6 }}
      />
      <motion.div
        className="vhs-wipe__rgb-b"
        animate={{ opacity: [0, 0.5, 0.2, 0.6, 0], x: [0, 14, -8, 6, 0] }}
        transition={{ duration: 0.6 }}
      />
      {/* black scanline frames */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'repeating-linear-gradient(0deg, rgba(0,0,0,0.55) 0, rgba(0,0,0,0.55) 2px, transparent 2px, transparent 5px)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0] }}
        transition={{ duration: 0.55 }}
      />
    </div>
  );
}

/* Glitch text wrapper */
function GlitchText({ children, className = '', style = {} }) {
  return <span className={`glitch-text ${className}`} style={style}>{children}</span>;
}

/* Scene container — handles enter/exit animation */
function SceneShell({ children, className = '', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(6px)' }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-0 ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* Typing indicator (three animated dots) */
function TypingDots({ kind = 'him' }) {
  return (
    <div className={`typing typing--${kind}`}>
      <span /><span /><span />
    </div>
  );
}

Object.assign(window, {
  useTypewriter, Particles, Atmosphere, VHSWipe, GlitchText, SceneShell, TypingDots,
});
