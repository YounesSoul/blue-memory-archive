/* ============================================================
   SCENE 7 — DOOR (Ken Burns zoom, chromatic RUN, thud knocks,
                   screen flash, fade to black)
   ============================================================ */
function SceneDoor({ onDoorOpen }) {
  const [phase, setPhase] = useState(0);
  const [runIndex, setRunIndex] = useState(0);
  const [knockIndex, setKnockIndex] = useState(0);
  const [showMessages, setShowMessages] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [fadeBlack, setFadeBlack] = useState(false);
  const [endText, setEndText] = useState(false);
  const [flash, setFlash] = useState(null);
  const [doorReveal, setDoorReveal] = useState(false);
  const [showEp2, setShowEp2] = useState(false);
  const [trustPath, setTrustPath] = useState(false);   // "Leave it closed" path
  const [trustStep, setTrustStep] = useState(0);       // 0‒3 flavor lines

  useEffect(() => {
    const seq = [
      [800,  () => setPhase(1)],
      [1400, () => setRunIndex(1)],
      [2000, () => setRunIndex(2)],
      [2600, () => setRunIndex(3)],
      [3800, () => setPhase(2)],
      [4600, () => setKnockIndex(1)],
      [5400, () => setKnockIndex(2)],
      [5900, () => setKnockIndex(3)],
      [7200, () => setKnockIndex(4)],
      [8000, () => setKnockIndex(5)],
      [9200, () => setPhase(3)],
      [10000, () => setShowMessages(true)],
      [11500, () => setShowButtons(true)],
    ];
    const timers = seq.map(([d, fn]) => setTimeout(fn, d));
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleChoice = () => {
    setFlash('red');
    setTimeout(() => setFlash(null), 500);
    setTimeout(() => setDoorReveal(true), 350);
    setTimeout(() => setFadeBlack(true), 5200);
    setTimeout(() => setEndText(true), 6400);
    setTimeout(() => setShowEp2(true), 8400);
  };

  // "Leave it closed" — she tries to trust him, the door opens anyway
  const handleTrust = () => {
    setTrustPath(true);
    setTrustStep(1);
    setTimeout(() => setTrustStep(2), 2000);
    setTimeout(() => setTrustStep(3), 3800);
    // door opens from the other side after she steps back
    setTimeout(() => setFlash('red'), 5000);
    setTimeout(() => setFlash(null), 5500);
    setTimeout(() => setDoorReveal(true), 5200);
    setTimeout(() => setFadeBlack(true), 10000);
    setTimeout(() => setEndText(true), 11200);
    setTimeout(() => setShowEp2(true), 13200);
  };

  const RunLine = ({ delay }) => (
    <motion.p
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="run-line"
      style={{ display: 'flex', justifyContent: 'center', gap: '0.12em' }}
    >
      {'RUN'.split('').map((c, i) => (
        <span key={i} className="run-letter" data-char={c}>{c}</span>
      ))}
    </motion.p>
  );

  return (
    <SceneShell style={{ background: '#02060f' }}>
      {/* Ken Burns dark background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="ken-burns">
          <div className="door-shape" />
        </div>
      </div>

      <Atmosphere />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-4 overflow-y-auto" style={{ zIndex: 10 }}>
        <div className="max-w-md w-full text-center space-y-4">

          {/* RUN screen */}
          {phase >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass glass--warn glass--dark px-5 py-3 mb-1"
            >
              <p className="t-eyebrow mb-2" style={{ color: 'var(--muted-2)' }}>
                COMPUTER SCREEN
              </p>
              <div className="space-y-0">
                {runIndex >= 1 && <RunLine delay={0} />}
                {runIndex >= 2 && <RunLine delay={0.1} />}
                {runIndex >= 3 && <RunLine delay={0.2} />}
              </div>
            </motion.div>
          )}

          {/* Knocking with thud animation */}
          {phase >= 2 && (
            <div className="space-y-0">
              {knockIndex >= 1 && (
                <p key="k1" className="t-credits thud" style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', color: 'rgba(244,247,251,0.92)' }}>
                  Knock.
                </p>
              )}
              {knockIndex >= 2 && (
                <p key="k2" className="t-credits thud" style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', color: 'rgba(244,247,251,0.92)', animationDelay: '0.05s' }}>
                  Knock.
                </p>
              )}
              {knockIndex >= 3 && (
                <p key="k3" className="t-credits thud" style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', color: 'rgba(244,247,251,0.92)' }}>
                  Knock.
                </p>
              )}
              {knockIndex >= 4 && <div style={{ height: 14 }} />}
              {knockIndex >= 5 && (
                <>
                  <p key="k5a" className="t-credits thud" style={{ fontSize: 'clamp(20px, 2.4vw, 28px)', color: 'rgba(244,247,251,0.95)' }}>
                    Knock.
                  </p>
                  <p key="k5b" className="t-credits thud" style={{ fontSize: 'clamp(20px, 2.4vw, 28px)', color: 'rgba(244,247,251,0.95)', animationDelay: '0.35s' }}>
                    Knock.
                  </p>
                </>
              )}
            </div>
          )}

          {/* Door unlocks */}
          {phase >= 3 && (
            <motion.p
              initial={{ opacity: 0, scale: 1.04, filter: 'blur(4px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0)' }}
              className="t-title"
              style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', color: 'var(--text)' }}
            >
              THE DOOR UNLOCKS.
            </motion.p>
          )}

          {/* Messages */}
          <AnimatePresence>
            {showMessages && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                <div className="bubble-him text-left">
                  <p className="sender-him mb-2">HIM</p>
                  <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 17 }}>
                    "Don't open the door."
                  </p>
                </div>
                <div className="bubble-unknown text-right" style={{ position: 'relative' }}>
                  <p className="sender-unknown mb-2">UNKNOWN_ARCHIVE</p>
                  <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 17 }}>
                    "Open it if you want to know what he did."
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Choice buttons */}
          <AnimatePresence>
            {showButtons && !trustPath && (
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center gap-4 pt-3"
              >
                <button className="btn btn--danger btn--lg btn--pulse-red" onClick={handleChoice}>
                  Open the door
                </button>
                <button
                  onClick={handleTrust}
                  className="t-eyebrow"
                  style={{
                    background: 'none',
                    border: '1px solid rgba(111,184,240,0.22)',
                    color: 'var(--muted)',
                    padding: '8px 22px',
                    borderRadius: 6,
                    letterSpacing: '0.3em',
                    fontSize: 10,
                    cursor: 'crosshair',
                  }}
                >
                  Leave it closed
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Trust path — she steps back, door opens anyway */}
          <AnimatePresence>
            {trustPath && (
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="space-y-4 pt-3 text-center"
              >
                {trustStep >= 1 && (
                  <motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="t-credits"
                    style={{ fontSize: 'clamp(16px,2vw,22px)', color: 'rgba(244,247,251,0.88)' }}
                  >
                    You step back.
                  </motion.p>
                )}
                {trustStep >= 2 && (
                  <motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="t-credits"
                    style={{ fontSize: 'clamp(16px,2vw,22px)', color: 'rgba(244,247,251,0.88)' }}
                  >
                    You press your hand to the wood.
                  </motion.p>
                )}
                {trustStep >= 3 && (
                  <motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="t-body-it"
                    style={{ fontSize: 'clamp(15px,1.8vw,20px)', color: 'var(--glitch)' }}
                  >
                    The handle turns from the other side.
                  </motion.p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Screen flash */}
      {flash && <div className={`screen-flash screen-flash--${flash}`} />}

      {/* Door opening reveal (when user opens the door) */}
      <AnimatePresence>
        {doorReveal && <DoorOpeningReveal />}
      </AnimatePresence>

      {/* Fade to black + end card */}
      <AnimatePresence>
        {fadeBlack && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0 }}
            className="fixed inset-0 flex flex-col items-center justify-center"
            style={{ background: '#000', zIndex: 300 }}
          >
            <Particles count={18} intensity={0.5} />
            {endText && (
              <motion.div
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1.2 }}
                className="text-center space-y-5"
              >
                <p
                  className="t-display"
                  style={{
                    fontSize: 'clamp(28px, 4vw, 48px)',
                    color: 'var(--text)',
                    letterSpacing: '0.42em',
                    fontWeight: 300,
                  }}
                >
                  END  OF  EPISODE  1
                </p>
                <div className="w-32 h-px mx-auto divider-line" />
                <p className="t-body-it" style={{ color: 'var(--muted)' }}>
                  {trustPath
                    ? 'You tried to trust him. The archive remembered that too.'
                    : 'The archive will remember your choice.'
                  }
                </p>
                <AnimatePresence>
                  {showEp2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9 }}
                    >
                      <button
                        className="btn btn--lg pulse-glow"
                        style={{ marginTop: 12 }}
                        onClick={onDoorOpen}
                      >
                        ▸ Begin Episode 2
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </SceneShell>
  );
}

Object.assign(window, { SceneDoor });

/* ============================================================
   DOOR OPENING REVEAL — cinematic when user chooses to open
   ============================================================ */
function DoorOpeningReveal() {
  const [step, setStep] = useState(0);
  // 0 → initial render; 1 → door starts opening; 2 → light blooms; 3 → figure appears
  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 900);  // door swings
    const t2 = setTimeout(() => setStep(2), 1700); // warm light + red glow
    const t3 = setTimeout(() => setStep(3), 2600); // figure
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="door-stage"
    >
      <Particles count={20} intensity={0.6} />

      <motion.p
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="t-eyebrow"
        style={{
          position: 'absolute', top: '6%', left: 0, right: 0,
          textAlign: 'center',
          color: 'rgba(143,164,189,0.7)', letterSpacing: '0.42em',
          padding: '0 24px',
        }}
      >
        YOU REACH FOR THE HANDLE.
      </motion.p>

      <div className="door-frame">
        <div className={'door-light' + (step >= 2 ? ' door-light--on' : '')} />

        <div className={'door-figure' + (step >= 3 ? ' door-figure--on' : '')}>
          <svg viewBox="0 0 100 200" preserveAspectRatio="xMidYMax meet">
            <defs>
              <linearGradient id="figGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#000" />
                <stop offset="100%" stopColor="#1a0a14" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="38" r="22" fill="url(#figGrad)" />
            <path d="M 26 70 Q 26 90 36 100 L 36 200 L 64 200 L 64 100 Q 74 90 74 70 Q 70 60 50 60 Q 30 60 26 70 Z"
                  fill="url(#figGrad)" />
          </svg>
        </div>

        <div className={'door-leaf' + (step >= 1 ? ' door-leaf--open' : '')} />

        <div className={'door-red-glow' + (step >= 2 ? ' door-red-glow--on' : '')} />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.0, duration: 1 }}
        className="t-body-it door-caption"
        style={{
          color: 'rgba(244,247,251,0.92)',
          fontSize: 'clamp(16px, 2vw, 22px)',
          textShadow: '0 1px 14px rgba(0,0,0,0.95)',
        }}
      >
        She was waiting on the other side.
      </motion.p>
    </motion.div>
  );
}

Object.assign(window, { DoorOpeningReveal });
