/* ============================================================
   EPISODE 6 — THE FIRST FREE TIMELINE
   Final Archive Trial: evidence, deduction, choice, ending.
   ============================================================ */

/* ── Pre-computed stars ──────────────────────────────────────── */
const TRIAL_STARS = Array.from({ length: 55 }, (_, i) => ({
  x:  ((i * 179 + 41) % 1500) + 50,
  y:  ((i * 97  + 23) % 800)  + 40,
  r:  0.5 + (i % 4) * 0.45,
  op: 0.08 + (i % 6) * 0.04,
}));

/* ── Trial Core SVG Background ───────────────────────────────── */
function TrialCoreSVG() {
  return (
    <div className="trial-stage">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="trial-svg">
        <defs>
          <radialGradient id="tbg" cx="50%" cy="55%" r="70%">
            <stop offset="0%"   stopColor="#010a1e" />
            <stop offset="100%" stopColor="#000208" />
          </radialGradient>
          <radialGradient id="tcore" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(55,115,235,0.2)"  />
            <stop offset="60%"  stopColor="rgba(30,70,180,0.07)"  />
            <stop offset="100%" stopColor="rgba(10,30,90,0)"      />
          </radialGradient>
          <radialGradient id="thim" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(70,155,255,0.2)"  />
            <stop offset="100%" stopColor="rgba(70,155,255,0)"    />
          </radialGradient>
          <radialGradient id="tarch" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(255,75,100,0.16)" />
            <stop offset="100%" stopColor="rgba(255,75,100,0)"    />
          </radialGradient>
          <radialGradient id="tloop" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(110,195,255,0.14)"/>
            <stop offset="100%" stopColor="rgba(110,195,255,0)"   />
          </radialGradient>
          <radialGradient id="tchair" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(190,220,255,0.28)"/>
            <stop offset="100%" stopColor="rgba(90,150,235,0)"    />
          </radialGradient>
          <radialGradient id="tring" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(220,235,255,0.35)"/>
            <stop offset="100%" stopColor="rgba(100,160,240,0)"   />
          </radialGradient>
        </defs>

        {/* Background */}
        <rect width="1600" height="900" fill="url(#tbg)" />

        {/* Stars */}
        {TRIAL_STARS.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fill={`rgba(200,220,255,${s.op})`} />
        ))}

        {/* Subtle hex-grid dots */}
        {Array.from({ length: 10 }, (_, row) =>
          Array.from({ length: 18 }, (_, col) => {
            const x = col * 94 + (row % 2) * 47 + 10;
            const y = row * 90 + 10;
            return <circle key={`hx${row}${col}`} cx={x} cy={y} r="1.2" fill="rgba(55,110,215,0.045)" />;
          })
        )}

        {/* Archive circuit radials from center */}
        {[0, 40, 80, 120, 165, 200, 240, 285, 320].map((deg, i) => {
          const rad = deg * Math.PI / 180;
          return (
            <line key={`cl${i}`}
              x1="800" y1="590"
              x2={800 + Math.cos(rad) * 580} y2={590 + Math.sin(rad) * 310}
              stroke="rgba(55,115,235,0.04)" strokeWidth="1" />
          );
        })}

        {/* Floor sweep line */}
        <line x1="120" y1="730" x2="1480" y2="730" stroke="rgba(60,120,235,0.07)" strokeWidth="1" />
        <line x1="0"   y1="750" x2="1600" y2="750" stroke="rgba(60,120,235,0.04)" strokeWidth="1" />

        {/* Core glow platform */}
        <ellipse cx="800" cy="630" rx="440" ry="195" fill="url(#tcore)" />

        {/* ── HIM zone — left ──────────────────────────────────── */}
        <ellipse cx="180" cy="530" rx="155" ry="210" fill="url(#thim)" />
        <ellipse cx="180" cy="408" rx="24" ry="26"
          fill="rgba(70,150,255,0.11)" stroke="rgba(70,150,255,0.2)" strokeWidth="1.5" />
        <rect x="150" y="434" width="60" height="95" rx="9"
          fill="rgba(70,150,255,0.08)" stroke="rgba(70,150,255,0.14)" strokeWidth="1.5" />
        <text x="180" y="566" textAnchor="middle" fontSize="9"
          fontFamily="monospace" fill="rgba(80,165,255,0.42)" letterSpacing="4">
          HIM
        </text>

        {/* ── UNKNOWN_ARCHIVE zone — right ─────────────────────── */}
        <ellipse cx="1420" cy="530" rx="155" ry="210" fill="url(#tarch)" />
        <ellipse cx="1420" cy="408" rx="24" ry="26"
          fill="rgba(255,75,100,0.09)" stroke="rgba(255,75,100,0.18)" strokeWidth="1.5" />
        <rect x="1390" y="434" width="60" height="95" rx="9"
          fill="rgba(255,75,100,0.07)" stroke="rgba(255,75,100,0.13)" strokeWidth="1.5" />
        <text x="1420" y="566" textAnchor="middle" fontSize="8"
          fontFamily="monospace" fill="rgba(255,85,108,0.4)" letterSpacing="2">
          FUTURE_HER
        </text>

        {/* ── THE LOOP zone — top center ───────────────────────── */}
        <ellipse cx="800" cy="155" rx="190" ry="105" fill="url(#tloop)" />
        <circle cx="800" cy="155" r="42" fill="none"
          stroke="rgba(110,195,255,0.2)" strokeWidth="2" strokeDasharray="9 7" />
        <circle cx="800" cy="155" r="27" fill="none"
          stroke="rgba(110,195,255,0.13)" strokeWidth="1.5" />
        <circle cx="800" cy="155" r="11"
          fill="rgba(110,195,255,0.1)" stroke="rgba(110,195,255,0.24)" strokeWidth="1" />
        <text x="800" y="228" textAnchor="middle" fontSize="9"
          fontFamily="monospace" fill="rgba(120,205,255,0.36)" letterSpacing="5">
          THE  LOOP
        </text>

        {/* Connecting dashed lines zone → chair */}
        <line x1="204" y1="510" x2="762" y2="592"
          stroke="rgba(70,150,255,0.055)" strokeWidth="1" strokeDasharray="7 9" />
        <line x1="1396" y1="510" x2="838" y2="592"
          stroke="rgba(255,75,100,0.055)" strokeWidth="1" strokeDasharray="7 9" />
        <line x1="800" y1="197" x2="800" y2="580"
          stroke="rgba(110,195,255,0.055)" strokeWidth="1" strokeDasharray="7 9" />

        {/* ── Promise ring — floating center ───────────────────── */}
        <ellipse cx="800" cy="480" rx="68" ry="68" fill="url(#tring)" opacity="0.45" />
        <circle cx="800" cy="480" r="30" fill="none"
          stroke="rgba(210,230,255,0.55)" strokeWidth="4.5"
          style={{ filter: 'drop-shadow(0 0 10px rgba(110,175,255,0.65))' }} />
        <circle cx="800" cy="480" r="22" fill="none"
          stroke="rgba(210,230,255,0.18)" strokeWidth="1.5" />
        <path d="M795,464 Q800,458 805,464" fill="none"
          stroke="rgba(240,228,185,0.58)" strokeWidth="2.5" strokeLinecap="round" />

        {/* Memory fragment orbs around ring */}
        {[0,1,2,3,4,5,6,7].map(i => {
          const a = (i * 45 - 22) * Math.PI / 180;
          const rx = 155, ry = 90;
          return (
            <circle key={`mo${i}`}
              cx={800 + Math.cos(a) * rx} cy={480 + Math.sin(a) * ry}
              r="3.5" fill={`rgba(130,190,255,${0.14 + i * 0.03})`}
              stroke={`rgba(130,190,255,${0.28 + i * 0.04})`} strokeWidth="0.8" />
          );
        })}

        {/* ── Central empty chair ──────────────────────────────── */}
        <ellipse cx="800" cy="672" rx="88" ry="32"
          fill="rgba(190,220,255,0.055)" stroke="rgba(190,220,255,0.14)" strokeWidth="1" />
        <rect x="768" y="592" width="64" height="50" rx="4"
          fill="rgba(90,155,255,0.05)" stroke="rgba(120,185,255,0.16)" strokeWidth="1.5" />
        <rect x="764" y="638" width="72" height="17" rx="3"
          fill="rgba(90,155,255,0.07)" stroke="rgba(120,185,255,0.18)" strokeWidth="1.5" />
        <rect x="770" y="655" width="5" height="26" rx="2" fill="rgba(90,155,255,0.09)" />
        <rect x="825" y="655" width="5" height="26" rx="2" fill="rgba(90,155,255,0.09)" />
        <ellipse cx="800" cy="642" rx="52" ry="35" fill="url(#tchair)" opacity="0.5" />
        <text x="800" y="706" textAnchor="middle" fontSize="8"
          fontFamily="monospace" fill="rgba(190,220,255,0.28)" letterSpacing="5">
          HER  CHOICE
        </text>

        {/* Vignette */}
        <rect x="0"    y="0"   width="1600" height="85"  fill="rgba(0,0,0,0.5)"  />
        <rect x="0"    y="815" width="1600" height="85"  fill="rgba(0,0,0,0.45)" />
        <rect x="0"    y="0"   width="85"   height="900" fill="rgba(0,0,0,0.22)" />
        <rect x="1515" y="0"   width="85"   height="900" fill="rgba(0,0,0,0.22)" />
      </svg>
    </div>
  );
}

/* ── Scene 1 — Unlock Screen ─────────────────────────────────── */
function SceneEp6Unlock({ onComplete }) {
  const [step,    setStep]    = useState(0);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const ts = [
      [500,  () => setStep(1)],
      [1800, () => setStep(2)],
      [3100, () => setStep(3)],
      [4400, () => setStep(4)],
      [5500, () => setStep(5)],
      [6400, () => setShowBar(true)],
      [8800, () => onComplete()],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <SceneShell style={{ background: '#000208' }}>
      <Particles count={10} intensity={0.25} />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8" style={{ zIndex: 10 }}>
        <div className="max-w-md w-full space-y-4">
          {step >= 1 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.35em', fontSize: 12 }}>
              FINAL_DEDUCTION.trial ready.
            </motion.p>
          )}
          {step >= 2 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="terminal" style={{ color: 'var(--muted-2)' }}>
              Opening final archive judgment…
            </motion.p>
          )}
          {step >= 3 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="terminal" style={{ color: 'var(--glitch)', letterSpacing: '0.25em' }}>
              Warning: No memory can continue until the player chooses.
            </motion.p>
          )}
          {step >= 4 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="terminal" style={{ color: 'var(--muted-2)' }}>
              Initializing final archive trial…
            </motion.p>
          )}
          {step >= 5 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="t-body-it" style={{ color: 'var(--glitch)' }}>
              One last question remains.
            </motion.p>
          )}
          {showBar && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6">
              <p className="t-eyebrow mb-2" style={{ color: 'var(--muted)', letterSpacing: '0.3em', fontSize: 9 }}>
                LOADING FINAL ARCHIVE
              </p>
              <div className="ep2-loading">
                <div className="ep2-loading-fill" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </SceneShell>
  );
}

/* ── Scene 2 — Trial Intro Overlay ───────────────────────────── */
function TrialIntro({ onComplete }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const ts = [
      [700,  () => setStep(1)],
      [2300, () => setStep(2)],
      [3800, () => setStep(3)],
      [5200, () => setStep(4)],
      [6600, () => setStep(5)],
      [8000, () => setStep(6)],
      [9400, () => setStep(7)],
      [10800,() => setStep(8)],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-8" style={{ zIndex: 20 }}>
      <div className="max-w-lg w-full space-y-4">
        {step >= 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="glass px-6 py-4" style={{ borderColor: 'rgba(80,155,255,0.28)' }}>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>
              "The archive no longer pretends to know the truth.
              For the first time, it waits."
            </p>
          </motion.div>
        )}
        {step >= 2 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.3em' }}>
            Final question: Who killed the memory?
          </motion.p>
        )}
        {step >= 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3">
            <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em', paddingTop: 3, minWidth: 120 }}>
              UNKNOWN_ARCHIVE
            </p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
              "I know what I built."
            </p>
          </motion.div>
        )}
        {step >= 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3">
            <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em', paddingTop: 3, minWidth: 120 }}>
              HIM
            </p>
            <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
              "And I know what I hid."
            </p>
          </motion.div>
        )}
        {step >= 5 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--muted-2)', letterSpacing: '0.22em' }}>
            "Then let her decide."
          </motion.p>
        )}
        {step >= 6 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="glass px-5 py-3" style={{ borderColor: 'rgba(80,155,255,0.22)' }}>
            <p className="t-eyebrow mb-1" style={{ color: 'var(--muted-2)', fontSize: 8, letterSpacing: '0.3em' }}>
              EPISODE 6 QUESTION
            </p>
            <p className="t-body-it" style={{ color: 'rgba(140,195,255,0.9)', fontSize: 14 }}>
              "Who gets to decide what the memory means?"
            </p>
          </motion.div>
        )}
        {step >= 7 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--muted-2)', fontSize: 9, letterSpacing: '0.4em' }}>
            EVIDENCE BOARD UNLOCKED
          </motion.p>
        )}
        {step >= 8 && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
            <button className="btn pulse-glow" onClick={onComplete}>
              Review Evidence
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ── Evidence Data ───────────────────────────────────────────── */
const EP6_EVIDENCE = [
  { id: 'message',  ep: 'EP1', icon: '✉', title: 'The Last Message',
    body: 'They went to Tokyo together.\nShe came home. He did not.\nThe archive has been running ever since.' },
  { id: 'noodles',  ep: 'EP2', icon: '≈', title: 'Chicken Noodles',
    body: 'He used soft memories to mask the ones he had replaced.\nThe archive kept finding them anyway.' },
  { id: 'pomegran', ep: 'EP2', icon: '❋', title: 'Pomegranate Seeds',
    body: 'Some fragments were real.\nOthers were planted by him.' },
  { id: 'fes',      ep: 'EP3', icon: '◌', title: 'Fes Memory Map',
    body: 'He replaced the happiest Fes memories first.\nHe thought less joy meant she would stop looking.' },
  { id: 'moon',     ep: 'EP3', icon: '◗', title: 'Stormy — Moon',
    body: 'The moment he asked her out survived because it was chosen, not forced.' },
  { id: 'ring',     ep: 'EP4', icon: '◯', title: 'Promise Ring',
    body: 'The ring survived every timeline because it carried something real.' },
  { id: 'japan',    ep: 'EP5', icon: '✈', title: 'Deleted Japan Itinerary',
    body: 'He deleted every trace that showed she was with him.\nHe did not want her to spend her life knowing she was the one he stepped in front of.' },
  { id: 'door',     ep: 'EP5', icon: '◫', title: 'Shibuya Blue Door',
    body: 'Future Her built the archive to find a timeline where he survives.\nShe has been running the loop ever since.' },
  { id: 'choice',   ep: 'EP6', icon: '◇', title: 'Choice Removed Archive',
    body: 'The true victim was not a person.\nIt was her choice.' },
];

/* ── Scene 2 — Evidence Board ────────────────────────────────── */
function EvidenceBoard({ onReady }) {
  const [opened,  setOpened]  = useState(new Set());
  const [viewing, setViewing] = useState(null);

  const open = (id) => {
    setOpened(prev => new Set([...prev, id]));
    setViewing(id);
  };

  const ready = opened.size >= 5;
  const viewedEv = EP6_EVIDENCE.find(e => e.id === viewing);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-4" style={{ zIndex: 20 }}>
      <div className="max-w-2xl w-full">
        <div className="text-center mb-4">
          <p className="t-eyebrow mb-1" style={{ color: 'rgba(100,170,255,0.9)', letterSpacing: '0.4em' }}>
            EVIDENCE BOARD
          </p>
          <p className="t-body-it mb-1" style={{ color: 'var(--muted)', fontSize: 13 }}>
            "Every memory leaves a trace. Review what you found."
          </p>
          <p className="terminal" style={{ color: 'var(--muted-2)', fontSize: 9, letterSpacing: '0.25em' }}>
            {opened.size} / 9 reviewed
            {!ready && ` · open ${5 - opened.size} more to continue`}
            {ready && ' · deduction ready'}
          </p>
        </div>

        <div className="evidence-grid mb-4">
          {EP6_EVIDENCE.map(ev => {
            const isOpen = opened.has(ev.id);
            return (
              <button key={ev.id}
                className={'evidence-card' + (isOpen ? ' evidence-card--opened' : '')}
                onClick={() => open(ev.id)}>
                <span className="evidence-ep-badge">{ev.ep}</span>
                <span style={{ fontSize: 20, lineHeight: 1, margin: '4px 0' }}>{ev.icon}</span>
                <span className="t-eyebrow"
                  style={{ color: isOpen ? 'rgba(70,200,120,0.9)' : 'var(--muted-2)', fontSize: 7, letterSpacing: '0.18em', textAlign: 'center' }}>
                  {ev.title}
                </span>
                {isOpen && (
                  <span style={{ fontSize: 10, color: 'rgba(70,200,120,0.75)', marginTop: 2 }}>✓</span>
                )}
              </button>
            );
          })}
        </div>

        {ready && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <button className="btn pulse-glow" onClick={onReady}>
              Begin Final Deduction
            </button>
          </motion.div>
        )}
      </div>

      {/* Evidence detail modal */}
      {viewing && viewedEv && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center p-6"
          style={{ background: 'rgba(1,2,12,0.92)', backdropFilter: 'blur(14px)', zIndex: 80 }}
          onClick={() => setViewing(null)}>
          <motion.div
            initial={{ scale: 0.9, y: 16 }} animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 265, damping: 22 }}
            className="glass max-w-sm w-full p-7 text-center"
            style={{ borderColor: 'rgba(80,155,255,0.3)' }}
            onClick={e => e.stopPropagation()}>
            <p className="t-eyebrow mb-1"
              style={{ color: 'rgba(80,165,255,0.8)', letterSpacing: '0.4em', fontSize: 9 }}>
              {viewedEv.ep} · EVIDENCE
            </p>
            <div style={{ fontSize: 28, margin: '10px 0' }}>{viewedEv.icon}</div>
            <p className="t-eyebrow mb-3"
              style={{ color: 'rgba(140,195,255,0.9)', letterSpacing: '0.3em', fontSize: 11 }}>
              {viewedEv.title}
            </p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 14, whiteSpace: 'pre-line' }}>
              {viewedEv.body}
            </p>
            <button className="t-eyebrow mt-6"
              style={{ color: 'var(--muted-2)', background: 'none', border: 'none', fontSize: 10, letterSpacing: '0.3em', cursor: 'pointer' }}
              onClick={() => setViewing(null)}>
              [ CLOSE ]
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

/* ── Deduction Data ──────────────────────────────────────────── */
const DEDUCTION_QS = [
  {
    q:       'What started the loop?',
    opts:    ['Her forgetting', 'His death', 'A wrong choice', 'The archive'],
    correct: 'His death',
    success: 'He was killed at Shibuya crossing.\nFuture Her built the archive to undo that day.',
  },
  {
    q:       'Who built the archive?',
    opts:    ['Him', 'Future Her', 'The crossing', 'The loop'],
    correct: 'Future Her',
    success: 'Future Her created the loop.\nShe thought love could reverse what time had sealed.',
  },
  {
    q:       'What was the weapon?',
    opts:    ['The blue door', 'Memory editing', 'The ring', 'Japan'],
    correct: 'Memory editing',
    success: 'The weapon was not violence.\nIt was control over what could be remembered.',
  },
  {
    q:       'Who hid the first evidence?',
    opts:    ['Him', 'Future Her', 'The cats', 'The player'],
    correct: 'Him',
    success: 'He deleted the Japan files because he did not want her to know she was the one he saved.\nHe chose to carry it alone.',
  },
];

/* ── Scene 3 — Final Deduction Puzzle ───────────────────────── */
function FinalDeductionPuzzle({ onComplete }) {
  const [qIdx,     setQIdx]    = useState(0);
  const [wrongId,  setWrongId] = useState(null);
  const [succMsg,  setSuccMsg] = useState('');
  const [allDone,  setAllDone] = useState(false);
  const [step,     setStep]    = useState(0);

  const current = DEDUCTION_QS[qIdx];

  const choose = (opt) => {
    if (wrongId || succMsg) return;
    if (opt === current.correct) {
      setSuccMsg(current.success);
      if (qIdx < DEDUCTION_QS.length - 1) {
        setTimeout(() => { setSuccMsg(''); setQIdx(i => i + 1); }, 2400);
      } else {
        setTimeout(() => {
          setSuccMsg('');
          setAllDone(true);
          setTimeout(() => setStep(1), 800);
          setTimeout(() => setStep(2), 2200);
          setTimeout(() => setStep(3), 3800);
          setTimeout(() => setStep(4), 5400);
          setTimeout(() => setStep(5), 7200);
        }, 2400);
      }
    } else {
      setWrongId(opt);
      setTimeout(() => setWrongId(null), 1500);
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-4" style={{ zIndex: 20 }}>
      <div className="max-w-lg w-full">
        {!allDone && (
          <>
            <div className="text-center mb-5">
              <p className="t-eyebrow mb-1"
                style={{ color: 'rgba(100,175,255,0.9)', letterSpacing: '0.4em' }}>
                FINAL DEDUCTION
              </p>
              <div className="flex justify-center gap-2 mb-3">
                {DEDUCTION_QS.map((_, i) => (
                  <span key={i} className={'clue-pip' + (i < qIdx ? ' clue-pip--on' : i === qIdx ? ' clue-pip--on' : '')}
                    style={{ background: i < qIdx ? 'var(--phosphor)' : i === qIdx ? 'var(--glow)' : undefined }} />
                ))}
              </div>
              <p className="terminal mb-1" style={{ color: 'var(--muted-2)', fontSize: 9, letterSpacing: '0.3em' }}>
                QUESTION {qIdx + 1} OF {DEDUCTION_QS.length}
              </p>
              <p className="t-body-it" style={{ color: 'rgba(200,225,255,0.92)', fontSize: 16 }}>
                "{current.q}"
              </p>
            </div>

            {!succMsg && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }} className="mb-4">
                {current.opts.map(opt => (
                  <button key={opt}
                    onClick={() => choose(opt)}
                    className="t-body-it"
                    style={{
                      padding: '14px 16px', textAlign: 'center',
                      background: wrongId === opt ? 'rgba(130,20,30,0.3)' : 'rgba(4,10,28,0.85)',
                      border: `1px solid ${wrongId === opt ? 'rgba(220,60,60,0.65)' : 'rgba(60,130,230,0.22)'}`,
                      borderRadius: 10, fontSize: 13,
                      color: wrongId === opt ? 'var(--glitch)' : 'var(--muted)',
                      cursor: 'pointer', transition: 'all 0.22s',
                    }}>
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {wrongId && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="terminal text-center"
                style={{ color: 'var(--glitch)', letterSpacing: '0.2em', fontSize: 10 }}>
                The archive does not agree.
              </motion.p>
            )}

            {succMsg && (
              <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                className="glass px-5 py-4 text-center"
                style={{ borderColor: 'rgba(70,200,120,0.35)' }}>
                <p className="terminal mb-2" style={{ color: 'var(--phosphor)', letterSpacing: '0.3em', fontSize: 10 }}>
                  CORRECT.
                </p>
                <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13, whiteSpace: 'pre-line' }}>
                  {succMsg}
                </p>
              </motion.div>
            )}
          </>
        )}

        {allDone && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <p className="terminal text-center"
              style={{ color: 'var(--phosphor)', letterSpacing: '0.35em' }}>
              FINAL DEDUCTION COMPLETE.
            </p>
            {step >= 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="glass px-5 py-4" style={{ borderColor: 'rgba(80,155,255,0.28)' }}>
                <p className="t-eyebrow mb-2" style={{ color: 'var(--muted-2)', fontSize: 8, letterSpacing: '0.3em' }}>
                  CASE RESULT
                </p>
                <p className="t-body-it" style={{ color: 'rgba(160,200,255,0.9)', fontSize: 14 }}>
                  "The memory was killed by protection without choice."
                </p>
              </motion.div>
            )}
            {step >= 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                {[
                  { label: 'VICTIM',  value: 'Choice' },
                  { label: 'WEAPON',  value: 'Memory editing' },
                  { label: 'SUSPECTS', value: 'HIM\nFUTURE_HER\nTHE LOOP' },
                ].map(item => (
                  <div key={item.label} className="glass px-3 py-3 text-center"
                    style={{ borderColor: 'rgba(60,120,230,0.2)' }}>
                    <p className="t-eyebrow mb-1" style={{ color: 'var(--muted-2)', fontSize: 7, letterSpacing: '0.28em' }}>
                      {item.label}
                    </p>
                    <p className="terminal" style={{ color: 'var(--glow)', fontSize: 9, whiteSpace: 'pre-line', lineHeight: 1.7 }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
            {step >= 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="glass px-5 py-4" style={{ borderColor: 'rgba(80,155,255,0.22)', background: 'rgba(2,6,20,0.9)' }}>
                <p className="t-eyebrow mb-2" style={{ color: 'var(--muted-2)', fontSize: 8, letterSpacing: '0.28em' }}>
                  FINAL TRUTH
                </p>
                <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13, lineHeight: 1.7 }}>
                  "They both loved her.
                  They both feared losing her.
                  They both forgot to let her choose."
                </p>
              </motion.div>
            )}
            {step >= 4 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="terminal text-center"
                style={{ color: 'var(--muted-2)', fontSize: 9, letterSpacing: '0.35em' }}>
                CHOICE RESTORATION PENDING
              </motion.p>
            )}
            {step >= 5 && (
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                <button className="btn pulse-glow" onClick={onComplete}>
                  Continue
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ── Scene 4 — Choice Restored ───────────────────────────────── */
function ChoiceRestoredScene({ onComplete }) {
  const [step,     setStep]    = useState(0);
  const [showBtn,  setShowBtn] = useState(false);

  useEffect(() => {
    const ts = [
      [600,  () => setStep(1)],
      [2200, () => setStep(2)],
      [3800, () => setStep(3)],
      [5400, () => setStep(4)],
      [7000, () => setStep(5)],
      [8600, () => setStep(6)],
      [10000,() => setStep(7)],
      [11400,() => setShowBtn(true)],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-8" style={{ zIndex: 20 }}>
      <div className="max-w-lg w-full space-y-4">
        {step >= 1 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal text-center" style={{ color: 'var(--phosphor)', letterSpacing: '0.35em' }}>
            Choice restored.
          </motion.p>
        )}
        {step >= 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3">
            <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em', paddingTop: 3, minWidth: 130 }}>
              FUTURE_HER
            </p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
              "I thought if I found the right timeline, I could bring him back."
            </p>
          </motion.div>
        )}
        {step >= 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3">
            <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em', paddingTop: 3, minWidth: 130 }}>
              HIM
            </p>
            <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
              "I thought if I hid what happened, you would not have to carry it."
            </p>
          </motion.div>
        )}
        {step >= 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3">
            <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em', paddingTop: 3, minWidth: 130 }}>
              FUTURE_HER
            </p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
              "We were both trying to save someone."
            </p>
          </motion.div>
        )}
        {step >= 5 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3">
            <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em', paddingTop: 3, minWidth: 130 }}>
              HIM
            </p>
            <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
              "We both forgot you never asked us to."
            </p>
          </motion.div>
        )}
        {step >= 6 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--muted-2)', letterSpacing: '0.22em' }}>
            No further memory edits allowed.
          </motion.p>
        )}
        {step >= 7 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="glass px-5 py-4 text-center" style={{ borderColor: 'rgba(190,220,255,0.3)' }}>
            <p className="t-body-it" style={{ color: 'rgba(200,225,255,0.9)', fontSize: 15 }}>
              "The final choice belongs to her."
            </p>
          </motion.div>
        )}
        {showBtn && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <button className="btn btn--lg pulse-glow" onClick={onComplete}>
              Make Your Choice
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ── Scene 5 — Final Choice ──────────────────────────────────── */
const FINAL_CHOICES = [
  {
    id:    'restore',
    label: 'Accept His Sacrifice',
    desc:  'Recover everything he erased.\nHe saved you. You were there. Let that be the full story.\nThe loop may not close — but the memory will be whole.',
    glow:  'rgba(80,155,255,0.55)',
    border:'rgba(80,155,255,0.45)',
    bg:    'rgba(10,30,80,0.55)',
  },
  {
    id:    'trust',
    label: 'Trust Future Her',
    desc:  'Trust that your future self knows the way.\nLet the loop keep running until a timeline exists where he survives.\nYou may never stop searching — but you will find him.',
    glow:  'rgba(200,230,255,0.45)',
    border:'rgba(180,215,255,0.38)',
    bg:    'rgba(8,20,40,0.55)',
  },
  {
    id:    'break',
    label: 'Break the Archive',
    desc:  'Refuse what he hid. Refuse the loop she built.\nYou were on that crossing. That memory is yours.\nTake it back — and end this.',
    glow:  'rgba(100,210,255,0.6)',
    border:'rgba(90,200,255,0.55)',
    bg:    'rgba(4,25,55,0.6)',
  },
];

function FinalChoiceScene({ onChoose }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-4" style={{ zIndex: 20 }}>
      <div className="max-w-3xl w-full">
        <div className="text-center mb-6">
          <p className="t-eyebrow mb-1" style={{ color: 'rgba(190,220,255,0.85)', letterSpacing: '0.45em' }}>
            THE FINAL CHOICE
          </p>
          <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 14 }}>
            "This choice cannot be undone. Choose what the memory means."
          </p>
        </div>

        <div className="choice-grid">
          {FINAL_CHOICES.map(c => (
            <button key={c.id}
              className="final-choice-card"
              onMouseEnter={() => setHovered(c.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onChoose(c.id)}
              style={{
                borderColor: hovered === c.id ? c.border : 'rgba(80,130,220,0.22)',
                background: hovered === c.id ? c.bg : 'rgba(3,8,22,0.75)',
                boxShadow: hovered === c.id
                  ? `0 0 40px -10px ${c.glow}, 0 8px 32px -12px rgba(0,0,0,0.7), 0 1px 0 rgba(255,255,255,0.04) inset`
                  : '0 4px 18px -8px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.03) inset',
              }}>
              <p className="t-eyebrow mb-3"
                style={{ color: hovered === c.id ? 'rgba(200,230,255,0.95)' : 'rgba(140,185,255,0.7)', letterSpacing: '0.35em', fontSize: 11 }}>
                {c.label}
              </p>
              <p className="t-body-it"
                style={{ color: hovered === c.id ? 'var(--muted)' : 'var(--muted-2)', fontSize: 13, whiteSpace: 'pre-line', lineHeight: 1.65 }}>
                {c.desc}
              </p>
              <div className="final-choice-arrow"
                style={{ color: hovered === c.id ? 'rgba(200,230,255,0.6)' : 'rgba(80,130,220,0.25)' }}>
                →
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Scene 6 — Memory Select ─────────────────────────────────── */
const FINAL_MEMORIES = [
  { id: 'maison',   label: 'Maison Fresh et Bio',    line: 'Where everything started still glows softly.' },
  { id: 'dictator', label: 'The Dictator',           line: 'Some laughter survives even corrupted files.' },
  { id: 'noodles',  label: 'Chicken Noodles',        line: 'Warmth was never small.' },
  { id: 'pomegran', label: 'Pomegranate',             line: 'Not every seed became a wound.\nSome became memory.' },
  { id: 'moon',     label: 'Stormy — Moon',           line: 'The road remembers the moment before the question.' },
  { id: 'fes',      label: 'Fes',                    line: 'The first city outside the familiar kept its lights on.' },
  { id: 'catcafe',  label: 'The Cat Coffee Shop',    line: 'The cats knew comfort before anyone named it.' },
  { id: 'candle',   label: 'The Candlelight Festival',line: 'The shadow kept what the light almost missed.' },
  { id: 'ring',     label: 'The Promise Ring',       line: 'Small things can carry impossible weight.' },
  { id: 'couch',    label: 'The Third-Floor Couch',  line: 'Nothing special happened there.\nThat is why it stayed.' },
];

function MemorySelectScene({ onSelect }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-4" style={{ zIndex: 20 }}>
      <div className="max-w-xl w-full">
        <div className="text-center mb-5">
          <p className="t-eyebrow mb-1" style={{ color: 'rgba(190,220,255,0.85)', letterSpacing: '0.4em' }}>
            FINAL MEMORY
          </p>
          <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
            "Before the archive closes, choose one memory to keep."
          </p>
        </div>

        <div className="memory-select-grid">
          {FINAL_MEMORIES.map(m => (
            <button key={m.id}
              className="memory-select-card"
              onMouseEnter={() => setHovered(m.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onSelect(m)}
              style={{
                borderColor: hovered === m.id ? 'rgba(160,210,255,0.55)' : 'rgba(60,120,230,0.18)',
                background: hovered === m.id ? 'rgba(8,22,50,0.88)' : 'rgba(3,8,22,0.75)',
              }}>
              <span className="t-body-it"
                style={{ color: hovered === m.id ? 'rgba(200,225,255,0.95)' : 'var(--muted)', fontSize: 12 }}>
                {m.label}
              </span>
              {hovered === m.id && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="t-eyebrow"
                  style={{ color: 'rgba(120,185,255,0.65)', fontSize: 8, letterSpacing: '0.2em', marginTop: 3, whiteSpace: 'pre-line', lineHeight: 1.5 }}>
                  {m.line}
                </motion.span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Ending A — Restore Him ──────────────────────────────────── */
function EndingA({ memory, onDone }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    window.AudioManager?.switchToEnding();
    const ts = [
      [600,  () => setStep(1)],
      [2200, () => setStep(2)],
      [3800, () => setStep(3)],
      [5400, () => setStep(4)],
      [7000, () => setStep(5)],
      [8600, () => setStep(6)],
      [10200,() => setStep(7)],
      [11800,() => setStep(8)],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <div className="ep6-ending ep6-ending--a">
      <Particles count={22} intensity={0.5} />
      <div className="max-w-md text-center space-y-4" style={{ zIndex: 10, position: 'relative' }}>
        <p className="t-eyebrow" style={{ color: 'rgba(80,165,255,0.7)', letterSpacing: '0.55em', fontSize: 10 }}>
          ENDING UNLOCKED
        </p>
        <p className="t-display" style={{ fontSize: 'clamp(20px,3vw,34px)', color: 'var(--text)', letterSpacing: '0.3em', fontWeight: 300 }}>
          THE LOOP LIVES
        </p>
        <div className="divider-line" style={{ width: 100, margin: '0 auto' }} />

        {step >= 1 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'rgba(200,225,255,0.9)', fontSize: 15 }}>
            "You accepted his sacrifice."
          </motion.p>
        )}
        {step >= 2 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
            "Every file opens.
            Every voice returns.
            Every missing piece finds its place."
          </motion.p>
        )}
        {step >= 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3 justify-center">
            <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em', paddingTop: 3 }}>HIM</p>
            <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>"I remember you."</p>
          </motion.div>
        )}
        {step >= 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3 justify-center">
            <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em', paddingTop: 3 }}>FUTURE_HER</p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>"And the archive remembers the loop."</p>
          </motion.div>
        )}
        {step >= 5 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--glitch)', letterSpacing: '0.22em', fontSize: 11 }}>
            Timeline instability detected.
          </motion.p>
        )}
        {step >= 6 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
            "But for one beautiful second, nothing is missing."
          </motion.p>
        )}
        {step >= 7 && memory && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="glass px-5 py-3" style={{ borderColor: 'rgba(80,155,255,0.28)' }}>
            <p className="t-eyebrow mb-1" style={{ color: 'var(--muted-2)', fontSize: 8, letterSpacing: '0.3em' }}>MEMORY KEPT</p>
            <p className="t-body-it" style={{ color: 'rgba(150,200,255,0.9)', fontSize: 13 }}>{memory.label}</p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 11, whiteSpace: 'pre-line', marginTop: 4 }}>{memory.line}</p>
          </motion.div>
        )}
        {step >= 7 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'rgba(150,200,255,0.8)', fontSize: 15, fontStyle: 'italic' }}>
            "Some loves are worth the risk."
          </motion.p>
        )}
        {step >= 8 && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
            <button className="btn pulse-glow" onClick={onDone}>Continue</button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ── Ending B — Trust Future Her ─────────────────────────────── */
function EndingB({ memory, onDone }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    window.AudioManager?.switchToEnding();
    const ts = [
      [600,  () => setStep(1)],
      [2200, () => setStep(2)],
      [4000, () => setStep(3)],
      [5800, () => setStep(4)],
      [7400, () => setStep(5)],
      [9200, () => setStep(6)],
      [11000,() => setStep(7)],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <div className="ep6-ending ep6-ending--b">
      <Particles count={14} intensity={0.3} />
      <div className="max-w-md text-center space-y-4" style={{ zIndex: 10, position: 'relative' }}>
        <p className="t-eyebrow" style={{ color: 'rgba(190,215,255,0.65)', letterSpacing: '0.55em', fontSize: 10 }}>
          ENDING UNLOCKED
        </p>
        <p className="t-display" style={{ fontSize: 'clamp(20px,3vw,34px)', color: 'var(--text)', letterSpacing: '0.3em', fontWeight: 300 }}>
          THE BLUE GOODBYE
        </p>
        <div className="divider-line" style={{ width: 100, margin: '0 auto' }} />

        {step >= 1 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'rgba(200,225,255,0.88)', fontSize: 15 }}>
            "You chose to keep searching."
          </motion.p>
        )}
        {step >= 2 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
            "The archive does not close.
            It resets.
            She is still out there — still running the loop."
          </motion.p>
        )}
        {step >= 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3 justify-center">
            <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em', paddingTop: 3 }}>FUTURE_HER</p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
              "I knew you would trust me.
              I have been waiting a long time for someone who would."
            </p>
          </motion.div>
        )}
        {step >= 4 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.22em', fontSize: 10 }}>
            Somewhere, there is a timeline where this ends differently.
          </motion.p>
        )}
        {step >= 5 && memory && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="glass px-5 py-3" style={{ borderColor: 'rgba(180,215,255,0.25)' }}>
            <p className="t-eyebrow mb-1" style={{ color: 'var(--muted-2)', fontSize: 8, letterSpacing: '0.3em' }}>MEMORY KEPT</p>
            <p className="t-body-it" style={{ color: 'rgba(180,215,255,0.9)', fontSize: 13 }}>{memory.label}</p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 11, whiteSpace: 'pre-line', marginTop: 4 }}>{memory.line}</p>
          </motion.div>
        )}
        {step >= 6 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'rgba(180,215,255,0.8)', fontSize: 15, fontStyle: 'italic' }}>
            "The loop has run before.
            It will run again.
            She will not stop until she finds the way."
          </motion.p>
        )}
        {step >= 7 && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
            <button className="btn pulse-glow" onClick={onDone}>Continue</button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ── Ending C — Break the Archive (canon) ────────────────────── */
function EndingC({ memory, onDone }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    window.AudioManager?.switchToEnding();
    const ts = [
      [600,  () => setStep(1)],
      [2200, () => setStep(2)],
      [3800, () => setStep(3)],
      [5200, () => setStep(4)],
      [6800, () => setStep(5)],
      [8400, () => setStep(6)],
      [10000,() => setStep(7)],
      [11600,() => setStep(8)],
      [13200,() => setStep(9)],
      [14800,() => setStep(10)],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <div className="ep6-ending ep6-ending--c">
      <Particles count={26} intensity={0.55} />
      <div className="max-w-md text-center space-y-4" style={{ zIndex: 10, position: 'relative' }}>
        <p className="t-eyebrow" style={{ color: 'rgba(100,210,255,0.8)', letterSpacing: '0.55em', fontSize: 10 }}>
          ENDING UNLOCKED · CANON
        </p>
        <p className="t-display" style={{ fontSize: 'clamp(18px,2.8vw,32px)', color: 'var(--text)', letterSpacing: '0.28em', fontWeight: 300 }}>
          THE FIRST FREE TIMELINE
        </p>
        <div className="divider-line" style={{ width: 120, margin: '0 auto' }} />

        {step >= 1 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'rgba(160,230,255,0.92)', fontSize: 16 }}>
            "You chose yourself."
          </motion.p>
        )}
        {step >= 2 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'var(--muted)', fontSize: 14 }}>
            "Not the version he wanted.
            Not the version she feared.
            You."
          </motion.p>
        )}
        {step >= 3 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--glitch)', letterSpacing: '0.22em', fontSize: 11 }}>
            Archive authority revoked.
          </motion.p>
        )}
        {step >= 4 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--glitch)', letterSpacing: '0.22em', fontSize: 11 }}>
            Loop control disabled.
          </motion.p>
        )}
        {step >= 5 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--phosphor)', letterSpacing: '0.22em', fontSize: 11 }}>
            Memory ownership restored.
          </motion.p>
        )}
        {step >= 6 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3 justify-center">
            <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em', paddingTop: 3 }}>HIM</p>
            <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
              "You found me.
              That was enough."
            </p>
          </motion.div>
        )}
        {step >= 7 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3 justify-center">
            <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em', paddingTop: 3 }}>FUTURE_HER</p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
              "You did what I never could.
              You let the story end."
            </p>
          </motion.div>
        )}
        {step >= 8 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
            "The archive tried to preserve love by trapping it.
            But love was never meant to be an archive.
            It was meant to be lived."
          </motion.p>
        )}
        {step >= 9 && memory && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="glass px-5 py-3" style={{ borderColor: 'rgba(100,210,255,0.32)' }}>
            <p className="t-eyebrow mb-1" style={{ color: 'var(--muted-2)', fontSize: 8, letterSpacing: '0.3em' }}>MEMORY KEPT</p>
            <p className="t-body-it" style={{ color: 'rgba(130,220,255,0.92)', fontSize: 13 }}>{memory.label}</p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 11, whiteSpace: 'pre-line', marginTop: 4 }}>{memory.line}</p>
          </motion.div>
        )}
        {step >= 9 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal text-center" style={{ color: 'rgba(100,210,255,0.8)', letterSpacing: '0.35em', fontSize: 11 }}>
            BLUE MEMORY ARCHIVE CLOSED.
          </motion.p>
        )}
        {step >= 10 && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
            <button className="btn pulse-glow" onClick={onDone}>Continue</button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ── Ending A Extra — His Final Message ──────────────────────── */
function HimFinalMessage({ onDone }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const ts = [
      [800,  () => setStep(1)],
      [2400, () => setStep(2)],
      [4400, () => setStep(3)],
      [6600, () => setStep(4)],
      [9000, () => setStep(5)],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <div className="ep6-ending ep6-ending--a">
      <Particles count={12} intensity={0.28} />
      <div className="max-w-md text-center space-y-5" style={{ zIndex: 10, position: 'relative' }}>
        {step >= 1 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.35em', fontSize: 10 }}>
            ONE FINAL MESSAGE RECOVERED.
          </motion.p>
        )}
        {step >= 2 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="glass px-7 py-6 text-left space-y-4"
            style={{ borderColor: 'rgba(111,184,240,0.2)', background: 'rgba(4,10,28,0.8)' }}>
            <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em' }}>HIM</p>
            {step >= 3 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="t-body-it" style={{ color: 'rgba(220,235,255,0.95)', fontSize: 14, lineHeight: 1.9 }}>
                "If you are reading this, then you know what happened.
                I need you to know something too."
              </motion.p>
            )}
            {step >= 4 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="t-body-it" style={{ color: 'rgba(200,220,255,0.9)', fontSize: 14, lineHeight: 1.9 }}>
                "I saw the car. I had time to choose.
                I used that time for you.
                I would use it the same way every single time —
                without hesitation, without regret."
              </motion.p>
            )}
            {step >= 4 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="t-body-it" style={{ color: 'rgba(170,205,255,0.88)', fontSize: 15, fontStyle: 'italic', lineHeight: 1.9 }}>
                "Do not carry this as weight.
                Carry it the way I meant it —
                as proof that what we had
                was worth everything."
              </motion.p>
            )}
          </motion.div>
        )}
        {step >= 5 && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <button className="btn pulse-glow" onClick={onDone}>Continue</button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ── Ending B Extra — Loop Restart Glitch ────────────────────── */
function LoopRestartScene({ onRestart }) {
  const [step,    setStep]   = useState(0);
  const [glitch,  setGlitch] = useState(false);

  useEffect(() => {
    const ts = [
      [600,  () => setStep(1)],
      [1800, () => setStep(2)],
      [2800, () => { setStep(3); setGlitch(true); setTimeout(() => setGlitch(false), 180); }],
      [3800, () => { setStep(4); setGlitch(true); setTimeout(() => setGlitch(false), 240); }],
      [4800, () => setStep(5)],
      [5600, () => { setStep(6); setGlitch(true); setTimeout(() => setGlitch(false), 160); }],
      [6600, () => { setStep(7); setGlitch(true); }],
      [8200, () => onRestart()],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center px-8"
      style={{ background: '#000208', zIndex: 90 }}>
      <div className="max-w-md w-full space-y-3"
        style={{ filter: glitch ? 'blur(1.2px) brightness(1.5)' : 'none', transition: 'filter 0.08s',
                 transform: glitch ? 'translateX(3px)' : 'none' }}>
        {step >= 1 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--phosphor)', letterSpacing: '0.35em', fontSize: 11 }}>
            Archive closure acknowledged.
          </motion.p>
        )}
        {step >= 2 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.3em', fontSize: 11 }}>
            Restoring loop from last checkpoint…
          </motion.p>
        )}
        {step >= 3 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal flicker" style={{ color: 'var(--glitch)', letterSpacing: '0.28em', fontSize: 11 }}>
            ⚠  FUTURE_HER PROTOCOL STILL ACTIVE
          </motion.p>
        )}
        {step >= 4 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal flicker" style={{ color: 'var(--glitch)', letterSpacing: '0.28em', fontSize: 11 }}>
            ⚠  TIMELINE RESET IN PROGRESS
          </motion.p>
        )}
        {step >= 5 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'var(--muted-2)', fontSize: 12 }}>
            "She built this to find him.
            The archive will not let you stop it."
          </motion.p>
        )}
        {step >= 6 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--muted-2)', letterSpacing: '0.22em', fontSize: 10 }}>
            Session memory wiped. Reinitializing…
          </motion.p>
        )}
        {step >= 7 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal flicker" style={{ color: 'var(--glitch)', letterSpacing: '0.4em', fontSize: 13 }}>
            RESTARTING…
          </motion.p>
        )}
      </div>
    </div>
  );
}

/* ── Ending C Extra — Japan Epilogue ─────────────────────────── */
function JapanEpilogue({ memory, onDone }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const ts = [
      [800,  () => setStep(1)],
      [2600, () => setStep(2)],
      [4600, () => setStep(3)],
      [6800, () => setStep(4)],
      [9000, () => setStep(5)],
      [11400,() => setStep(6)],
      [13600,() => setStep(7)],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <div className="ep6-ending ep6-ending--c">
      <Particles count={18} intensity={0.38} />
      <div className="max-w-md text-center space-y-5" style={{ zIndex: 10, position: 'relative' }}>
        {step >= 1 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--muted-2)', letterSpacing: '0.4em', fontSize: 9 }}>
            YEARS LATER  ·  TOKYO
          </motion.p>
        )}
        {step >= 2 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8 }}>
            "She came back alone.
            She had promised herself she would, one day."
          </motion.p>
        )}
        {step >= 3 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.8 }}>
            "The crossing looked exactly the same.
            The lights still counted down.
            The rain still made the signs bleed colour."
          </motion.p>
        )}
        {step >= 4 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'rgba(200,225,255,0.9)', fontSize: 14, lineHeight: 1.8 }}>
            "She found the blue door.
            Three blocks east, just like he said."
          </motion.p>
        )}
        {step >= 5 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'rgba(170,210,255,0.85)', fontSize: 14, fontStyle: 'italic', lineHeight: 1.8 }}>
            "She stood there for a long time.
            Not grieving. Not asking why.
            Just — with him, the way she had always been."
          </motion.p>
        )}
        {step >= 6 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="glass px-6 py-5 text-center"
            style={{ borderColor: 'rgba(100,210,255,0.25)', background: 'rgba(4,10,28,0.72)' }}>
            <p className="t-body-it" style={{ color: 'rgba(140,220,255,0.92)', fontSize: 15, fontStyle: 'italic', lineHeight: 1.9 }}>
              "She lived a full life.
              She lived it for both of them."
            </p>
          </motion.div>
        )}
        {step >= 7 && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <button className="btn pulse-glow" onClick={onDone}>Continue</button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ── Scene 8 — Archive Closure ───────────────────────────────── */
function ArchiveClosure({ choice, memory, onRestart }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const ts = [
      [700,  () => setStep(1)],
      [2500, () => setStep(2)],
      [4300, () => setStep(3)],
      [6100, () => setStep(4)],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  const choiceLabel = { restore: 'HIS SACRIFICE ACCEPTED', trust: 'THE LOOP CONTINUES', break: 'THE FIRST FREE TIMELINE' };

  return (
    <div className="ep6-closure">
      <Particles count={18} intensity={0.35} />
      <div className="max-w-md text-center space-y-5" style={{ zIndex: 10, position: 'relative' }}>
        {step >= 1 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'rgba(190,220,255,0.85)', fontSize: 16 }}>
            "Thank you for entering the Blue Memory Archive."
          </motion.p>
        )}
        {step >= 2 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'var(--muted)', fontSize: 14 }}>
            "Some memories were broken.
            Some were edited.
            Some survived."
          </motion.p>
        )}
        {step >= 3 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'rgba(160,215,255,0.8)', fontSize: 14, fontStyle: 'italic' }}>
            "And one of them chose itself."
          </motion.p>
        )}
        {step >= 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="glass px-5 py-4" style={{ borderColor: 'rgba(80,155,255,0.2)' }}>
            <p className="t-eyebrow mb-1" style={{ color: 'var(--muted-2)', fontSize: 8, letterSpacing: '0.3em' }}>YOUR PATH</p>
            <p className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.22em', fontSize: 10 }}>
              {choiceLabel[choice] || 'ARCHIVE CLOSED'}
            </p>
            {memory && (
              <>
                <div className="divider-line" style={{ margin: '10px 0' }} />
                <p className="t-eyebrow mb-1" style={{ color: 'var(--muted-2)', fontSize: 8, letterSpacing: '0.3em' }}>KEPT MEMORY</p>
                <p className="t-body-it" style={{ color: 'rgba(160,205,255,0.85)', fontSize: 12 }}>{memory.label}</p>
              </>
            )}
          </motion.div>
        )}
        {step >= 4 && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-3">
            <button className="btn pulse-glow" onClick={onRestart}>
              Return to Beginning
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ── Main EP6 Scene ──────────────────────────────────────────── */
function SceneArchiveTrial({ onComplete }) {
  const [phase,       setPhase]   = useState('intro');
  const [finalChoice, setChoice]  = useState(null);
  const [memory,      setMemory]  = useState(null);

  const advance = (next) => setPhase(next);

  const handleChoose = (choiceId) => {
    setChoice(choiceId);
    setPhase('memory-select');
  };

  const handleMemory = (mem) => {
    setMemory(mem);
    setPhase('ending');
  };

  const handleEndingDone = () => {
    if (finalChoice === 'restore') setPhase('ending-a-message');
    else if (finalChoice === 'trust') setPhase('ending-b-loop');
    else setPhase('ending-c-japan');
  };

  if (phase === 'ending' && finalChoice === 'restore') {
    return <EndingA memory={memory} onDone={handleEndingDone} />;
  }
  if (phase === 'ending' && finalChoice === 'trust') {
    return <EndingB memory={memory} onDone={handleEndingDone} />;
  }
  if (phase === 'ending' && finalChoice === 'break') {
    return <EndingC memory={memory} onDone={handleEndingDone} />;
  }
  if (phase === 'ending-a-message') {
    return <HimFinalMessage onDone={() => setPhase('closure')} />;
  }
  if (phase === 'ending-b-loop') {
    return <LoopRestartScene onRestart={onComplete} />;
  }
  if (phase === 'ending-c-japan') {
    return <JapanEpilogue memory={memory} onDone={() => setPhase('closure')} />;
  }
  if (phase === 'closure') {
    return <ArchiveClosure choice={finalChoice} memory={memory} onRestart={onComplete} />;
  }

  return (
    <SceneShell style={{ background: '#000208' }}>
      <TrialCoreSVG />
      <Atmosphere />

      {phase === 'intro' && (
        <TrialIntro onComplete={() => advance('evidence')} />
      )}
      {phase === 'evidence' && (
        <EvidenceBoard onReady={() => advance('deduction')} />
      )}
      {phase === 'deduction' && (
        <FinalDeductionPuzzle onComplete={() => advance('choice-restored')} />
      )}
      {phase === 'choice-restored' && (
        <ChoiceRestoredScene onComplete={() => advance('final-choice')} />
      )}
      {phase === 'final-choice' && (
        <FinalChoiceScene onChoose={handleChoose} />
      )}
      {phase === 'memory-select' && (
        <MemorySelectScene onSelect={handleMemory} />
      )}
    </SceneShell>
  );
}

Object.assign(window, { SceneEp6Unlock, SceneArchiveTrial });
