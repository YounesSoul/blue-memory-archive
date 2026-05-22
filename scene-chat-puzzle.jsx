/* ============================================================
   SCENE 4 — CHAT (typing indicators, bubble personality)
   ============================================================ */
function SceneChat({ onUnlockClick, onBack }) {
  const himMessages = useMemo(() => [
    "If you're reading this, it means I disappeared again.",
    "I don't know how many times you've found this.",
    "But every time you do, she gets closer.",
    "Don't trust the recordings.",
    "Especially hers.",
  ], []);

  const unknownMessages = useMemo(() => [
    'Close the computer.',
    'He lied to you.',
    'You have 43 minutes before you remember what happened.',
    'Do not open FINAL_ROOM.mp4.',
  ], []);

  // Use staged reveal: each message gets a "typing" preroll then the bubble.
  const [himState, setHimState] = useState({ shown: 0, typing: false });
  const [glitching, setGlitching] = useState(false);
  const [unknownState, setUnknownState] = useState({ shown: 0, typing: false });
  const [showLocked, setShowLocked] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [himState, unknownState, showLocked]);

  /* Run the staged sequence: him → glitch divider → unknown → locked file */
  useEffect(() => {
    let alive = true;
    const timers = [];

    const reveal = async () => {
      // Him messages
      for (let i = 0; i < himMessages.length; i++) {
        if (!alive) return;
        await wait(i === 0 ? 700 : 900);
        setHimState({ shown: i, typing: true });
        await wait(900 + Math.random() * 300);
        if (!alive) return;
        setHimState({ shown: i + 1, typing: false });
      }
      // Glitch interrupt
      await wait(1500);
      if (!alive) return;
      setGlitching(true);
      await wait(1200);
      if (!alive) return;
      setGlitching(false);

      // Unknown messages
      for (let i = 0; i < unknownMessages.length; i++) {
        if (!alive) return;
        await wait(i === 0 ? 500 : 850);
        setUnknownState({ shown: i, typing: true });
        await wait(900 + Math.random() * 300);
        if (!alive) return;
        setUnknownState({ shown: i + 1, typing: false });
      }

      await wait(1600);
      if (!alive) return;
      setShowLocked(true);
    };

    function wait(ms) {
      return new Promise(res => {
        const t = setTimeout(res, ms);
        timers.push(t);
      });
    }

    reveal();
    return () => { alive = false; timers.forEach(clearTimeout); };
  }, [himMessages, unknownMessages]);

  return (
    <SceneShell style={{ background: 'radial-gradient(ellipse at 50% 20%, #0a1a30 0%, #050d1c 60%, #02060f 100%)' }}>
      <Atmosphere />

      {/* Header */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4"
        style={{ zIndex: 12, borderBottom: '1px solid rgba(111,184,240,0.12)', background: 'rgba(5,13,28,0.6)', backdropFilter: 'blur(10px)' }}
      >
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="t-eyebrow" style={{ color: 'var(--muted)', background: 'none', border: 'none' }}>
            ← BACK
          </button>
          <span style={{ color: 'rgba(111,184,240,0.25)' }}>│</span>
          <div>
            <p className="t-mono" style={{ color: 'var(--text)', fontSize: 13, fontWeight: 500 }}>
              Recovered Chat Log
            </p>
            <p className="t-eyebrow mt-0.5" style={{ color: 'var(--muted-2)' }}>
              LAST MODIFIED · TOMORROW 02:14 AM
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 t-eyebrow flicker"
          style={{ color: 'var(--glitch)' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--glitch)', boxShadow: '0 0 6px var(--glitch)' }} />
          CORRUPTED
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="absolute inset-0 overflow-y-auto px-6 pt-24 pb-12"
        style={{ zIndex: 10 }}
      >
        <div className="max-w-2xl mx-auto space-y-5">

          {/* Him */}
          {himMessages.map((msg, i) => {
            if (i >= himState.shown && !(i === himState.shown && himState.typing)) return null;
            const visible = i < himState.shown;
            return (
              <div key={`him-${i}`} className="flex flex-col gap-1.5 items-start">
                {i === 0 && (
                  <span className="sender-him">HIM</span>
                )}
                {visible ? (
                  <motion.div
                    initial={{ opacity: 0, x: -12, y: 6 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bubble-him"
                    style={{ maxWidth: 460 }}
                  >
                    <p className="t-body" style={{ color: 'var(--text)', fontSize: 16 }}>
                      {msg}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <TypingDots kind="him" />
                  </motion.div>
                )}
              </div>
            );
          })}

          {/* Glitch divider */}
          <AnimatePresence>
            {glitching && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0.6 }}
                animate={{ opacity: [0, 1, 0.4, 1, 0.6, 1], scaleX: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1 }}
                className="my-4 py-3 text-center"
                style={{
                  background: 'repeating-linear-gradient(90deg, rgba(255,77,109,0.15) 0, rgba(255,77,109,0.15) 4px, transparent 4px, transparent 8px)',
                  borderTop: '1px solid rgba(255,77,109,0.4)',
                  borderBottom: '1px solid rgba(255,77,109,0.4)',
                }}
              >
                <p className="t-eyebrow" style={{ color: 'var(--glitch)' }}>
                  ████  SIGNAL INTERRUPTED  ████  CONNECTION HIJACKED  ████
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Unknown */}
          {unknownMessages.map((msg, i) => {
            if (i >= unknownState.shown && !(i === unknownState.shown && unknownState.typing)) return null;
            const visible = i < unknownState.shown;
            return (
              <div key={`unknown-${i}`} className="flex flex-col gap-1.5 items-end">
                {i === 0 && (
                  <span className="sender-unknown">UNKNOWN_ARCHIVE</span>
                )}
                {visible ? (
                  <motion.div
                    initial={{ opacity: 0, x: 12, y: 6 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bubble-unknown"
                    style={{ position: 'relative', maxWidth: 460 }}
                  >
                    <p className="t-body" style={{ color: 'var(--text)', fontSize: 16 }}>
                      {msg}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <TypingDots kind="unknown" />
                  </motion.div>
                )}
              </div>
            );
          })}

          {/* Locked file card */}
          <AnimatePresence>
            {showLocked && (
              <motion.div
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center pt-4"
              >
                <div className="glass glass--warn w-full max-w-sm p-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span style={{ color: 'var(--glitch)', fontSize: 20 }}>🔒</span>
                    <p className="t-mono" style={{ color: 'var(--text)', fontSize: 13, fontWeight: 500, letterSpacing: '0.18em' }}>
                      FINAL_ROOM.mp4
                    </p>
                  </div>
                  <p className="t-eyebrow mb-5" style={{ color: 'var(--muted)' }}>
                    LOCKED  ·  TWO MEMORY KEYS REQUIRED
                  </p>
                  <button className="btn btn--danger" onClick={onUnlockClick}>
                    Unlock File
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div style={{ height: 40 }} />
        </div>
      </div>
    </SceneShell>
  );
}

/* ============================================================
   SCENE 5 — PUZZLE (OTP-style slot inputs)
   ============================================================ */
function OTPInput({ length = 4, value, onChange, error }) {
  const inputRef = useRef(null);
  const handleClick = () => inputRef.current && inputRef.current.focus();
  const chars = value.padEnd(length, ' ').split('').slice(0, length);
  return (
    <div className={'otp-row' + (error ? ' otp-row--error' : '')} onClick={handleClick}>
      {chars.map((c, i) => {
        const filled = c !== ' ';
        const active = i === value.length && !error;
        return (
          <div
            key={i}
            className={
              'otp-slot' +
              (filled ? ' otp-slot--filled' : '') +
              (active ? ' otp-slot--active' : '')
            }
          >
            {filled ? c : ''}
          </div>
        );
      })}
      <input
        ref={inputRef}
        type="text"
        inputMode="numeric"
        value={value}
        maxLength={length}
        autoFocus
        onChange={e => onChange(e.target.value.replace(/[^0-9]/g, '').slice(0, length))}
        className="otp-input-hidden no-caret"
      />
    </div>
  );
}

function ScenePuzzle({ onComplete }) {
  const [step, setStep] = useState(1);
  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [error, setError] = useState('');
  const [key1Unlocked, setKey1Unlocked] = useState(false);
  const [key2Unlocked, setKey2Unlocked] = useState(false);
  const [shaking, setShaking] = useState(false);

  const shake = () => { setShaking(true); setTimeout(() => setShaking(false), 500); };

  const handleKey1 = (e) => {
    e.preventDefault();
    if (code1.trim() === '0210') {
      setKey1Unlocked(true); setError('');
      setTimeout(() => setStep(2), 1100);
    } else {
      setError('That is not her day.'); shake();
    }
  };
  const handleKey2 = (e) => {
    e.preventDefault();
    if (code2.trim() === '0501') {
      setKey2Unlocked(true); setError('');
      setTimeout(() => setStep(3), 1100);
    } else {
      setError('You remembered her. Why not him?'); shake();
    }
  };

  return (
    <SceneShell style={{ background: 'radial-gradient(ellipse at center, #0a1929 0%, #050d1c 50%, #02060f 100%)' }}>
      <Atmosphere />

      <div className="absolute inset-0 flex items-center justify-center px-6" style={{ zIndex: 10 }}>
        <div className="max-w-md w-full">

          <motion.div initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center mb-8">
            <p className="t-eyebrow mb-3" style={{ color: 'var(--muted-2)' }}>
              MEMORY AUTHENTICATION
            </p>
            <h2 className="t-title glitch-text" style={{ fontSize: 'clamp(20px, 2.4vw, 26px)', color: 'var(--text)' }}>
              FINAL_ROOM.mp4
            </h2>
          </motion.div>

          {/* Key slots */}
          <div className="space-y-3 mb-6">
            {[
              { n: 1, label: 'MEMORY KEY 01', unlocked: key1Unlocked },
              { n: 2, label: 'MEMORY KEY 02', unlocked: key2Unlocked },
            ].map(({ n, label, unlocked }) => (
              <div
                key={n}
                className="flex items-center gap-3 p-3.5 rounded-xl"
                style={{
                  background: unlocked ? 'rgba(111,184,240,0.08)' : 'rgba(8,18,34,0.55)',
                  border: `1px solid ${unlocked ? 'rgba(111,184,240,0.4)' : 'rgba(111,184,240,0.12)'}`,
                  boxShadow: unlocked ? '0 0 24px rgba(111,184,240,0.18)' : 'none',
                  transition: 'all 0.4s ease',
                }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: unlocked ? 'rgba(111,184,240,0.2)' : 'rgba(8,18,34,0.8)',
                    border: `1px solid ${unlocked ? 'rgba(111,184,240,0.7)' : 'rgba(111,184,240,0.2)'}`,
                    color: unlocked ? 'var(--glow)' : 'var(--muted-2)',
                    boxShadow: unlocked ? '0 0 12px rgba(111,184,240,0.5)' : 'none',
                  }}
                >
                  {unlocked ? '✓' : '○'}
                </div>
                <div>
                  <p className="t-eyebrow" style={{ color: unlocked ? 'var(--glow)' : 'var(--muted)', letterSpacing: '0.32em' }}>{label}</p>
                  {unlocked && <p className="t-eyebrow" style={{ color: 'rgba(111,184,240,0.6)', marginTop: 2 }}>MEMORY RESTORED.</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Input area */}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className={`glass p-7 ${shaking ? 'shake' : ''}`}
              >
                <p className="t-eyebrow" style={{ color: 'var(--glow)' }}>MEMORY KEY 01</p>
                <p className="t-body-it mt-2 mb-6" style={{ color: 'var(--muted)' }}>
                  "Remember her."
                </p>
                <form onSubmit={handleKey1} className="space-y-5">
                  <OTPInput length={4} value={code1} onChange={v => { setCode1(v); setError(''); }} error={!!error} />
                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="t-eyebrow text-center flicker" style={{ color: 'var(--glitch)', letterSpacing: '0.32em' }}
                      >
                        ⚠  {error}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <button type="submit" className="btn w-full" disabled={code1.length !== 4}
                    style={code1.length !== 4 ? { opacity: 0.4, pointerEvents: 'none' } : {}}>
                    Confirm Key
                  </button>
                </form>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className={`glass p-7 ${shaking ? 'shake' : ''}`}
              >
                <p className="t-eyebrow" style={{ color: 'var(--glow)' }}>MEMORY KEY 02</p>
                <p className="t-body-it mt-2 mb-6" style={{ color: 'var(--muted)' }}>
                  "Now remember him."
                </p>
                <form onSubmit={handleKey2} className="space-y-5">
                  <OTPInput length={4} value={code2} onChange={v => { setCode2(v); setError(''); }} error={!!error} />
                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="t-eyebrow text-center flicker" style={{ color: 'var(--glitch)', letterSpacing: '0.28em' }}
                      >
                        ⚠  {error}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <button type="submit" className="btn w-full" disabled={code2.length !== 4}
                    style={code2.length !== 4 ? { opacity: 0.4, pointerEvents: 'none' } : {}}>
                    Confirm Key
                  </button>
                </form>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                className="glass glass--warn p-7 text-center"
              >
                <p className="t-eyebrow mb-3" style={{ color: 'var(--glow)' }}>
                  TWO MEMORIES RESTORED.  OPENING FINAL_ROOM.MP4...
                </p>
                <p className="t-mono mb-6 flicker" style={{ color: 'var(--glitch)', fontSize: 13, letterSpacing: '0.14em' }}>
                  ⚠  THIS FILE WAS DELETED IN 6 TIMELINES.
                </p>
                <button className="btn btn--danger" onClick={() => setTimeout(onComplete, 400)}>
                  Play anyway
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SceneShell>
  );
}

Object.assign(window, { SceneChat, ScenePuzzle, OTPInput });
