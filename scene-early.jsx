/* ============================================================
   SCENE 1 — OPENING
   Beat 1: corrupted incoming message notification
   Beat 2: archive restore log with story context
   ============================================================ */
function SceneOpening({ onComplete }) {
  const [phase,     setPhase]     = useState('notification'); // 'notification' | 'archive'
  const [notifStep, setNotifStep] = useState(0);
  const [exiting,   setExiting]   = useState(false);
  const [loadStage, setLoadStage] = useState(0);
  const [glitching, setGlitching] = useState(false);
  const [showEnter, setShowEnter] = useState(false);

  const stages = [
    { label: 'LOCATING SUBJECT',    value: 'HER'           },
    { label: 'LAST SESSION',        value: '3 MONTHS AGO'  },
    { label: 'ACCOUNT STATUS',      value: 'DELETED'       },
    { label: 'INCOMING MESSAGE',    value: 'DETECTED'      },
    { label: 'MESSAGE SENDER',      value: 'UNKNOWN'       },
    { label: 'ORIGIN',              value: 'UNVERIFIABLE'  },
    { label: 'ERROR — CHECKSUM',    value: 'FAIL',  error: true },
    { label: 'MEMORY CONFLICT',     value: 'TIMELINE', error: true },
  ];

  // Notification phase: build up the card then exit-glitch it
  useEffect(() => {
    const timers = [
      setTimeout(() => setNotifStep(1), 800),    // ● NEW MESSAGE
      setTimeout(() => setNotifStep(2), 2600),   // From / Sent — 1800ms to read label
      setTimeout(() => setNotifStep(3), 5000),   // Quote card — 2400ms to read the date
      setTimeout(() => setNotifStep(4), 7400),   // Corrupted lines — 2400ms to read the quote
      setTimeout(() => setExiting(true),  11200), // Start exit — 3800ms to read all 3 lines
      setTimeout(() => setPhase('archive'), 12200), // Switch phases — 1s glitch exit
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Archive phase: stagger the log lines then show Enter
  useEffect(() => {
    if (phase !== 'archive') return;
    const timers = stages.map((s, i) =>
      setTimeout(() => {
        setLoadStage(i + 1);
        if (s.error) {
          setGlitching(true);
          setTimeout(() => setGlitching(false), 240);
        }
      }, 400 + i * 900)
    );
    const t = setTimeout(() => setShowEnter(true), 400 + stages.length * 900 + 1200);
    return () => { timers.forEach(clearTimeout); clearTimeout(t); };
  }, [phase]);

  return (
    <SceneShell style={{ background: 'radial-gradient(ellipse at 50% 60%, #0a1a30 0%, #050d1c 50%, #02060f 100%)' }}>
      <Atmosphere />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-8" style={{ zIndex: 10 }}>
        <div className="max-w-xl w-full text-center">

          {/* Brand mark */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 0.4 }}
            className="t-eyebrow mb-14"
            style={{ color: 'rgba(143,164,189,0.5)' }}
          >
            BLUE MEMORY ARCHIVE   //   EP.01
          </motion.div>

          <AnimatePresence mode="wait">

            {/* ── Beat 1: incoming message ── */}
            {phase === 'notification' && (
              <motion.div
                key="notif"
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93, y: -6, filter: 'blur(5px)' }}
                transition={{ duration: 0.55 }}
                className={'glass max-w-sm mx-auto px-7 py-6 text-left' + (exiting ? ' shake' : '')}
                style={{ borderColor: 'rgba(111,184,240,0.3)' }}
              >
                {notifStep >= 1 && (
                  <motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="t-eyebrow mb-4"
                    style={{ color: 'var(--glow)', letterSpacing: '0.42em', fontSize: 10 }}
                  >
                    ●  NEW  MESSAGE
                  </motion.p>
                )}

                {notifStep >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                    className="space-y-1 mb-4"
                  >
                    <p className="terminal" style={{ color: 'var(--muted-2)', fontSize: 12 }}>
                      From:  Him
                    </p>
                    <p className="terminal flicker" style={{ color: 'var(--glitch)', fontSize: 12, letterSpacing: '0.12em' }}>
                      Sent:  3 months from now
                    </p>
                  </motion.div>
                )}

                {notifStep >= 3 && (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="glass px-4 py-3 mb-4"
                    style={{ background: 'rgba(3,9,18,0.85)', borderColor: 'rgba(111,184,240,0.1)' }}
                  >
                    <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 15 }}>
                      "If she finds this before you do..."
                    </p>
                  </motion.div>
                )}

                {notifStep >= 4 && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <p className="t-eyebrow" style={{ color: 'var(--glitch)', letterSpacing: '0.3em', fontSize: 10 }}>
                      ⚠  MESSAGE CORRUPTED
                    </p>
                    <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.8 }}>
                      You deleted this conversation.<br />
                      You deleted this account.<br />
                      And yet here it is.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* ── Beat 2: archive restore log ── */}
            {phase === 'archive' && (
              <motion.div
                key="archive"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass max-w-md mx-auto px-7 py-6 text-left"
                style={glitching ? { transform: 'translateX(2px)' } : {}}
              >
                <p className="t-eyebrow mb-4" style={{ color: 'var(--glow)' }}>
                  ▮  RESTORING ARCHIVE
                </p>
                <div className="space-y-1.5">
                  {stages.slice(0, loadStage).map(({ label, value, error }, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="terminal flex items-center justify-between gap-3"
                      style={{
                        color: error ? 'var(--glitch)' : 'rgba(143,164,189,0.85)',
                        fontSize: 11,
                        letterSpacing: '0.1em',
                        whiteSpace: 'nowrap',
                        ...(error && glitching ? { filter: 'blur(0.6px)' } : {}),
                      }}
                    >
                      <span>{error ? '⚠ ' : '› '}{label}</span>
                      <span style={{ color: error ? 'var(--glitch)' : 'var(--glow)', opacity: 0.85 }}>
                        {value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Enter button */}
          <AnimatePresence>
            {showEnter && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-10"
              >
                <button className="btn btn--lg pulse-glow" onClick={onComplete}>
                  Enter Archive
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </SceneShell>
  );
}

/* ============================================================
   SCENE 2 — LOGIN
   ============================================================ */
function SceneLogin({ onComplete }) {
  const [password, setPassword] = useState('');
  const [error,    setError]    = useState('');
  const [attempt,  setAttempt]  = useState(0);
  const [shaking,  setShaking]  = useState(false);
  const [success,  setSuccess]  = useState(false);

  const errors = [
    'NO.',
    "DON'T.",
    "YOU'RE EARLY.",
    'THAT MEMORY IS LOCKED.',
    'TRY WHERE IT BEGAN.',
  ];
  const validPasswords = ['maison fresh et bio', 'maison fresh', 'fresh et bio', 'maison'];

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const val = password.toLowerCase().trim();
    const valid = validPasswords.some(p => val.includes(p));
    if (valid) {
      setSuccess(true);
      setTimeout(onComplete, 2400);
    } else {
      setError(errors[attempt % errors.length]);
      setAttempt(a => a + 1);
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
    }
  };

  return (
    <SceneShell style={{ background: 'radial-gradient(ellipse at 50% 40%, #0a1a30 0%, #050d1c 60%, #02060f 100%)' }}>
      <Atmosphere />

      <div className="absolute inset-0 flex items-center justify-center p-6" style={{ zIndex: 10 }}>
        <div className="w-full max-w-md">

          {/* Header */}
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-9"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5"
              style={{
                background: 'rgba(111,184,240,0.08)',
                border: '1px solid rgba(111,184,240,0.25)',
                whiteSpace: 'nowrap',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full pulse-glow" style={{ background: 'var(--glow)' }} />
              <span className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.32em' }}>SYSTEM v2.0.7</span>
            </div>
            <h1
              className="t-title glitch-text"
              style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', color: 'var(--text)' }}
            >
              BLUE MEMORY ARCHIVE
            </h1>
            <p className="t-eyebrow mt-2" style={{ color: 'var(--muted-2)', letterSpacing: '0.28em' }}>
              SUBJECT:  HER  ·  SESSION TRIGGERED BY INCOMING MESSAGE
            </p>
          </motion.div>

          {/* Panel */}
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`glass p-8 ${shaking ? 'shake' : ''}`}
          >
            {!success ? (
              <>
                <div className="terminal mb-6 space-y-1" style={{ color: 'var(--muted-2)' }}>
                  <p>{'>'} account previously deleted.</p>
                  <p>{'>'} session restored by incoming signal.</p>
                  <p style={{ color: 'var(--glow)' }}>{'>'} memory key required to continue.</p>
                </div>

                <form onSubmit={handlePasswordSubmit} className="space-y-5">
                  <div>
                    <label className="t-eyebrow block mb-1" style={{ color: 'var(--muted)' }}>
                      MEMORY KEY
                    </label>
                    <p className="t-body-it mb-3" style={{ color: 'var(--muted)', fontSize: 14 }}>
                      "The name of the place where you went on your first date."
                    </p>
                    <input
                      type="text"
                      value={password}
                      onChange={e => { setPassword(e.target.value); setError(''); }}
                      placeholder="..."
                      autoFocus
                    />
                  </div>

                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                        className="t-eyebrow flicker"
                        style={{ color: 'var(--glitch)', letterSpacing: '0.5em' }}
                      >
                        ⚠  {error}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <button type="submit" className="btn w-full">Unlock Memory</button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-center space-y-3 py-4"
              >
                <p className="terminal" style={{ color: 'var(--glow)' }}>{'>'} memory recognized.</p>
                <p className="terminal" style={{ color: 'var(--muted)' }}>{'>'} session restored.</p>
                <p className="terminal flicker" style={{ color: 'var(--glitch)', letterSpacing: '0.2em' }}>
                  {'>'} warning: this memory was marked for deletion.
                </p>
                <motion.div
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                  transition={{ duration: 1.8, ease: 'easeInOut' }}
                  className="h-px mt-4 divider-line"
                  style={{ transformOrigin: 'left' }}
                />
              </motion.div>
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="text-center t-eyebrow mt-6 tracking-credits"
            style={{ color: 'rgba(143,164,189,0.35)' }}
          >
            EPISODE 1 — THE LAST MESSAGE
          </motion.p>

        </div>
      </div>
    </SceneShell>
  );
}

Object.assign(window, { SceneOpening, SceneLogin });
