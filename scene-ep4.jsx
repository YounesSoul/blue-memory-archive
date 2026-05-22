/* ============================================================
   EPISODE 4 — THE RING THAT STAYED
   University hallway: third-floor couch, promise ring, hidden truth.
   ============================================================ */

/* ── University Building SVG ─────────────────────────────────── */
function UniBuildingSVG({ collapsed }) {
  return (
    <div className={'uni-stage' + (collapsed ? ' uni-stage--collapsed' : '')}>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="uni-svg">
        <defs>
          <linearGradient id="ubg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#010510" />
            <stop offset="100%" stopColor="#020818" />
          </linearGradient>
          <linearGradient id="uceil" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#010408" />
            <stop offset="100%" stopColor="#020715" />
          </linearGradient>
          <linearGradient id="ufloor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#040c22" />
            <stop offset="100%" stopColor="#060e28" />
          </linearGradient>
          <linearGradient id="uwalll" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%"   stopColor="#03091c" />
            <stop offset="100%" stopColor="#020614" />
          </linearGradient>
          <linearGradient id="uwallr" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#03091c" />
            <stop offset="100%" stopColor="#020614" />
          </linearGradient>
          <radialGradient id="ubackglow" cx="50%" cy="50%" r="55%">
            <stop offset="0%"   stopColor="rgba(55,110,235,0.18)" />
            <stop offset="100%" stopColor="rgba(30,70,180,0)"     />
          </radialGradient>
          <linearGradient id="uwinext" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#01071c" />
            <stop offset="60%"  stopColor="#020c26" />
            <stop offset="100%" stopColor="#040f2c" />
          </linearGradient>
          <radialGradient id="uwinglow" cx="50%" cy="50%" r="55%">
            <stop offset="0%"   stopColor="rgba(100,160,255,0.07)" />
            <stop offset="100%" stopColor="rgba(50,110,220,0)"     />
          </radialGradient>
          <radialGradient id="ucouchglow" cx="50%" cy="28%" r="65%">
            <stop offset="0%"   stopColor="rgba(65,115,235,0.14)" />
            <stop offset="100%" stopColor="rgba(30,60,160,0)"     />
          </radialGradient>
        </defs>

        {/* Background */}
        <rect width="1600" height="900" fill="url(#ubg)" />

        {/* Ceiling plane — wider vanishing point for spacious feel */}
        <polygon points="0,0 350,150 1250,150 1600,0" fill="url(#uceil)" />

        {/* Floor plane */}
        <polygon points="0,900 350,520 1250,520 1600,900" fill="url(#ufloor)" />

        {/* Left wall */}
        <polygon points="0,0 350,150 350,520 0,900" fill="url(#uwalll)" />

        {/* Right wall */}
        <polygon points="1600,0 1250,150 1250,520 1600,900" fill="url(#uwallr)" />

        {/* Back wall */}
        <rect x="350" y="150" width="900" height="370" fill="#020815" />
        <ellipse cx="800" cy="335" rx="400" ry="220" fill="url(#ubackglow)" />

        {/* ── LARGE WINDOW — dominates back wall ── */}
        {/* Snow-night exterior */}
        <rect x="440" y="168" width="720" height="330" rx="3" fill="url(#uwinext)" />
        {/* Snow accumulation on sill */}
        <rect x="440" y="466" width="720" height="32" rx="2" fill="rgba(120,160,230,0.055)" />
        {/* Soft light spill into room */}
        <ellipse cx="800" cy="335" rx="340" ry="185" fill="url(#uwinglow)" />
        {/* Window frame */}
        <rect x="440" y="168" width="720" height="330" rx="3" fill="none"
          stroke="rgba(85,145,255,0.24)" strokeWidth="5" />
        {/* Pane dividers */}
        <line x1="800" y1="168" x2="800" y2="498" stroke="rgba(85,145,255,0.2)"  strokeWidth="4" />
        <line x1="440" y1="333" x2="1160" y2="333" stroke="rgba(85,145,255,0.2)" strokeWidth="4" />
        {/* Snow dots */}
        {[
          [520,195],[640,210],[755,190],[875,205],[995,195],[1105,212],
          [555,248],[672,262],[790,240],[908,257],[1028,248],[1118,238],
          [492,298],[588,284],[718,305],[838,292],[958,307],[1088,288],
          [532,352],[648,368],[768,346],[888,360],[1008,350],[1108,364],
          [572,412],[682,400],[800,418],[918,404],[1038,414],[1128,398],
        ].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r={1.2 + (i%3)*0.55}
            fill={`rgba(195,215,255,${0.10 + (i%5)*0.03})`} />
        ))}

        {/* Ceiling fluorescent lights receding */}
        {[
          { x: 800, w: 340, op: 0.50 },
          { x: 640, w: 150, op: 0.30 },
          { x: 960, w: 150, op: 0.30 },
          { x: 490, w: 85,  op: 0.18 },
          { x: 1110,w: 85,  op: 0.18 },
        ].map((l, i) => (
          <g key={i}>
            <rect x={l.x - l.w/2} y={148} width={l.w} height={3} fill={`rgba(130,185,255,${l.op})`} />
            <rect x={l.x - l.w*1.5} y={151} width={l.w*3} height={18} fill="rgba(70,130,255,0.025)" />
          </g>
        ))}

        {/* Near ceiling strips */}
        <rect x="0"    y="0" width="350"  height="2" fill="rgba(90,150,255,0.16)" />
        <rect x="1250" y="0" width="350"  height="2" fill="rgba(90,150,255,0.16)" />

        {/* Left wall — elevator shaft */}
        <rect x="0"  y="155" width="64" height="645" fill="#010610" />
        <rect x="3"  y="200" width="58" height="560" fill="#020916" stroke="rgba(60,110,210,0.14)" strokeWidth="1.5" />
        <line x1="32" y1="370" x2="32" y2="630" stroke="rgba(60,110,210,0.22)" strokeWidth="1.5" />
        <rect x="65" y="345" width="36" height="98" fill="#020c1e" stroke="rgba(60,110,210,0.22)" strokeWidth="1" rx="3" />
        {[0,1,2].map(i => (
          <circle key={i} cx="83" cy={364 + i*27} r="7"
            fill="rgba(30,70,170,0.22)" stroke="rgba(80,140,230,0.3)" strokeWidth="1" />
        ))}

        {/* Left wall — hallway doors */}
        <rect x="90"  y="285" width="145" height="235" fill="#020614" stroke="rgba(60,100,200,0.1)" strokeWidth="1.5" />
        <rect x="103" y="298" width="119" height="222" fill="#010510" />
        <rect x="250" y="325" width="82"  height="195" fill="#020614" stroke="rgba(60,100,200,0.08)" strokeWidth="1.5" />
        <rect x="261" y="336" width="60"  height="184" fill="#010510" />

        {/* Right wall — stairwell + doors */}
        <rect x="1536" y="78"  width="64" height="722" fill="#010408" />
        <line x1="1536" y1="78" x2="1536" y2="800" stroke="rgba(60,100,200,0.12)" strokeWidth="1.5" />
        <rect x="1365" y="285" width="145" height="235" fill="#020614" stroke="rgba(60,100,200,0.1)" strokeWidth="1.5" />
        <rect x="1378" y="298" width="119" height="222" fill="#010510" />
        <rect x="1268" y="325" width="82"  height="195" fill="#020614" stroke="rgba(60,100,200,0.08)" strokeWidth="1.5" />
        <rect x="1279" y="336" width="60"  height="184" fill="#010510" />

        {/* Floor perspective lines */}
        {[0.18, 0.38, 0.58, 0.78, 0.93].map((t, i) => {
          const y  = 520 + t * 380;
          const xl = 350 * (1 - t * 0.9);
          return (
            <line key={i} x1={xl} y1={y} x2={1600 - xl} y2={y}
              stroke="rgba(55,95,200,0.05)" strokeWidth="1.5" />
          );
        })}

        {/* ── COUCH ── */}
        {/* Floor shadow */}
        <ellipse cx="800" cy="856" rx="355" ry="24" fill="rgba(0,0,0,0.38)" />

        {/* Main frame */}
        <rect x="448" y="628" width="704" height="222" rx="14" fill="rgba(10,22,58,0.96)" />

        {/* Back cushions × 2 */}
        <rect x="458" y="636" width="330" height="96" rx="11" fill="rgba(16,34,82,0.98)" />
        <rect x="812" y="636" width="330" height="96" rx="11" fill="rgba(16,34,82,0.98)" />
        {/* Back cushion top highlight */}
        <rect x="458" y="636" width="330" height="9" rx="6" fill="rgba(38,72,158,0.38)" />
        <rect x="812" y="636" width="330" height="9" rx="6" fill="rgba(38,72,158,0.38)" />
        {/* Back cushion vertical crease */}
        <line x1="623" y1="646" x2="623" y2="724" stroke="rgba(7,16,44,0.55)" strokeWidth="2" />
        <line x1="977" y1="646" x2="977" y2="724" stroke="rgba(7,16,44,0.55)" strokeWidth="2" />

        {/* Seat cushions × 2 */}
        <rect x="458" y="740" width="330" height="104" rx="9" fill="rgba(14,30,74,0.96)" />
        <rect x="812" y="740" width="330" height="104" rx="9" fill="rgba(14,30,74,0.96)" />
        {/* Seat front edge highlight */}
        <rect x="458" y="836" width="330" height="7" rx="4" fill="rgba(24,50,108,0.45)" />
        <rect x="812" y="836" width="330" height="7" rx="4" fill="rgba(24,50,108,0.45)" />

        {/* Armrests */}
        <rect x="448" y="625" width="60" height="228" rx="16" fill="rgba(12,26,65,0.98)" />
        <rect x="1092" y="625" width="60" height="228" rx="16" fill="rgba(12,26,65,0.98)" />
        {/* Armrest top pad */}
        <rect x="448" y="618" width="60" height="28" rx="13" fill="rgba(20,44,102,0.96)" />
        <rect x="1092" y="618" width="60" height="28" rx="13" fill="rgba(20,44,102,0.96)" />
        {/* Inner armrest shadow */}
        <rect x="504" y="625" width="4" height="228" fill="rgba(6,14,40,0.5)" />
        <rect x="1092" y="625" width="4" height="228" fill="rgba(6,14,40,0.5)" />

        {/* Legs */}
        <rect x="482"  y="844" width="17" height="17" rx="4" fill="rgba(7,16,42,0.92)" />
        <rect x="616"  y="844" width="17" height="17" rx="4" fill="rgba(7,16,42,0.92)" />
        <rect x="967"  y="844" width="17" height="17" rx="4" fill="rgba(7,16,42,0.92)" />
        <rect x="1101" y="844" width="17" height="17" rx="4" fill="rgba(7,16,42,0.92)" />

        {/* Window light falling across couch top */}
        <rect x="458" y="636" width="684" height="5" rx="2" fill="rgba(85,145,255,0.07)" />
        {/* Couch ambient glow */}
        <ellipse cx="800" cy="676" rx="310" ry="75" fill="url(#ucouchglow)" />

        {/* Vignette */}
        <rect x="0"    y="0"   width="1600" height="105" fill="rgba(0,0,0,0.45)" />
        <rect x="0"    y="795" width="1600" height="105" fill="rgba(0,0,0,0.38)" />
        <rect x="0"    y="0"   width="105"  height="900" fill="rgba(0,0,0,0.22)" />
        <rect x="1495" y="0"   width="105"  height="900" fill="rgba(0,0,0,0.22)" />
      </svg>
    </div>
  );
}

/* ── EP4 Unlock Screen ───────────────────────────────────────── */
function SceneEp4Unlock({ onComplete }) {
  const [step,    setStep]    = useState(0);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const ts = [
      [700,  () => setStep(1)],
      [2000, () => setStep(2)],
      [3300, () => setStep(3)],
      [4500, () => setStep(4)],
      [5600, () => setStep(5)],
      [6500, () => setShowBar(true)],
      [8800, () => onComplete()],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <SceneShell style={{ background: '#000510' }}>
      <Particles count={10} intensity={0.3} />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8" style={{ zIndex: 10 }}>
        <div className="max-w-md w-full space-y-4">
          {step >= 1 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.35em', fontSize: 12 }}>
              PROMISE_RING.memory detected.
            </motion.p>
          )}
          {step >= 2 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="terminal" style={{ color: 'var(--muted-2)' }}>
              Access previously denied.
            </motion.p>
          )}
          {step >= 3 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="terminal" style={{ color: 'var(--muted-2)' }}>
              Reopening object memory...
            </motion.p>
          )}
          {step >= 4 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="terminal" style={{ color: 'var(--glitch)', letterSpacing: '0.25em' }}>
              Warning:
            </motion.p>
          )}
          {step >= 5 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="t-body-it" style={{ color: 'var(--glitch)' }}>
              This memory resisted deletion in every timeline.
            </motion.p>
          )}
          {showBar && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6">
              <p className="t-eyebrow mb-2" style={{ color: 'var(--muted)', letterSpacing: '0.3em', fontSize: 9 }}>
                LOADING UNIVERSITY MEMORY
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

/* ── Elevator Memory Puzzle ───────────────────────────────────── */
const ELEVATOR_OPTS = [
  { id: 'wait',    text: 'Waiting for the floor',            msg: 'The elevator does not remember waiting.'        },
  { id: 'kiss',    text: 'A kiss until the doors open',      correct: true                                         },
  { id: 'reflect', text: 'Watching each other in the doors', msg: 'The doors were a countdown, not a mirror.'      },
  { id: 'count',   text: 'Counting the seconds',             msg: 'The elevator kept no count. Neither did you.'   },
  { id: 'buttons', text: 'Looking at the buttons',           msg: 'The buttons were never the point.'              },
  { id: 'laugh',   text: 'Trying not to laugh',              msg: 'That was a different ride.'                     },
];

function ElevatorPuzzle({ onSolve, onClose }) {
  const [selected,     setSelected] = useState(null);
  const [wrongMsg,     setWrongMsg] = useState('');
  const [solved,       setSolved]   = useState(false);
  const [step,         setStep]     = useState(0);
  const [showContinue, setShowCon]  = useState(false);

  const choose = (opt) => {
    if (solved || wrongMsg) return;
    setSelected(opt.id);
    if (opt.correct) {
      setSolved(true);
      setTimeout(() => setStep(1), 1000);
      setTimeout(() => setStep(2), 3000);
      setTimeout(() => setStep(3), 5200);
      setTimeout(() => setShowCon(true), 7000);
    } else {
      setWrongMsg(opt.msg);
      setTimeout(() => { setWrongMsg(''); setSelected(null); }, 2000);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center p-5"
      style={{ background: 'rgba(1,4,18,0.94)', backdropFilter: 'blur(12px)', zIndex: 70 }}
      onClick={solved ? undefined : onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="glass max-w-sm w-full p-7"
        style={{ borderColor: 'rgba(80,130,240,0.28)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <p className="t-eyebrow mb-1" style={{ color: 'rgba(100,160,255,0.9)', letterSpacing: '0.4em' }}>ELEVATOR MEMORY</p>
          <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
            "The elevator does not remember floors.
            It remembers what happened every time the doors closed."
          </p>
        </div>

        {!solved && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }} className="mb-4">
            {ELEVATOR_OPTS.map(opt => (
              <button key={opt.id}
                className="t-body-it"
                onClick={() => choose(opt)}
                style={{
                  padding: '12px 8px',
                  background: selected === opt.id && !wrongMsg ? 'rgba(30,60,160,0.3)' : 'rgba(4,10,28,0.88)',
                  border: `1px solid ${selected === opt.id && !wrongMsg ? 'rgba(100,160,255,0.5)' : 'rgba(70,110,220,0.22)'}`,
                  borderRadius: 8, color: 'var(--muted)', fontSize: 11,
                  cursor: 'pointer', transition: 'all 0.22s', textAlign: 'center',
                }}>
                {opt.text}
              </button>
            ))}
          </div>
        )}

        {wrongMsg && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal text-center mb-4"
            style={{ color: 'var(--glitch)', letterSpacing: '0.18em', whiteSpace: 'pre-line', fontSize: 10 }}>
            {wrongMsg}
          </motion.p>
        )}

        {solved && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 text-center">
            <p className="terminal" style={{ color: 'var(--phosphor)', letterSpacing: '0.3em' }}>
              ELEVATOR MEMORY RESTORED.
            </p>
            {step >= 1 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
                Every time. Third floor, first floor, it did not matter.
                The doors closed and the world outside waited.
              </motion.p>
            )}
            {step >= 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em' }}>HIM</p>
                <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
                  "I stopped pretending to look at the buttons
                  a long time ago."
                </p>
              </motion.div>
            )}
            {step >= 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
                <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 12 }}>
                  "This memory lasted maybe twenty seconds each time.
                  I thought it was too brief to matter. I was wrong."
                </p>
              </motion.div>
            )}
            {showContinue && (
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                <button className="btn pulse-glow" onClick={onSolve}>Continue</button>
              </motion.div>
            )}
          </motion.div>
        )}

        {!solved && (
          <button onClick={onClose} className="t-eyebrow"
            style={{ display: 'block', margin: '8px auto 0', color: 'var(--muted-2)', background: 'none', border: 'none', fontSize: 10, letterSpacing: '0.3em' }}>
            [ CLOSE ]
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ── Couch Memory Reconstruction Puzzle ──────────────────────── */
const WATCH_OPTS = [
  { id: 'aot',  label: 'Attack on Titan',    msg: 'A different night. A different ending.'  },
  { id: 'ror',  label: 'Record of Ragnarok', correct: true                                  },
  { id: 'ds',   label: 'Demon Slayer',       msg: 'Close. But not this memory.'             },
  { id: 'dn',   label: 'Death Note',         msg: 'A different mood entirely.'              },
  { id: 'jjk',  label: 'Jujutsu Kaisen',    msg: 'That was later.'                         },
  { id: 'hxh',  label: 'Hunter × Hunter',   msg: 'Another season. Another couch.'          },
];

function CouchMemoryPuzzle({ onSolve, onClose }) {
  const [wrongMsg,     setWrongMsg] = useState('');
  const [done,         setDone]     = useState(false);
  const [step,         setStep]     = useState(0);
  const [showContinue, setShowCon]  = useState(false);

  const choose = (opt) => {
    if (done || wrongMsg) return;
    if (opt.correct) {
      setDone(true);
      setTimeout(() => setStep(1), 900);
      setTimeout(() => setStep(2), 2800);
      setTimeout(() => setStep(3), 5000);
      setTimeout(() => setStep(4), 7200);
      setTimeout(() => setShowCon(true), 9000);
    } else {
      setWrongMsg(opt.msg);
      setTimeout(() => setWrongMsg(''), 2000);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center p-5"
      style={{ background: 'rgba(1,4,18,0.94)', backdropFilter: 'blur(12px)', zIndex: 70 }}
      onClick={done ? undefined : onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="glass max-w-lg w-full p-7"
        style={{ borderColor: 'rgba(80,130,240,0.25)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <p className="t-eyebrow mb-1" style={{ color: 'rgba(100,160,255,0.9)', letterSpacing: '0.4em' }}>THIRD-FLOOR COUCH</p>
          <p className="t-body-it mb-2" style={{ color: 'var(--muted)', fontSize: 13 }}>
            "The couch holds something the archive could not name."
          </p>
          <p className="terminal" style={{ color: 'var(--muted-2)', fontSize: 10, letterSpacing: '0.22em' }}>
            What did the couch watch with you?
          </p>
        </div>

        {!done && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9 }} className="mb-4">
            {WATCH_OPTS.map(opt => (
              <button key={opt.id}
                onClick={() => choose(opt)}
                className="t-body-it"
                style={{
                  padding: '12px 10px', textAlign: 'center',
                  background: 'rgba(4,10,28,0.88)',
                  border: '1px solid rgba(55,95,200,0.22)',
                  borderRadius: 8, color: 'var(--muted)',
                  fontSize: 12, cursor: 'pointer', transition: 'all 0.2s',
                }}>
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {wrongMsg && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal text-center mb-3" style={{ color: 'var(--glitch)', letterSpacing: '0.2em', fontSize: 10 }}>
            {wrongMsg}
          </motion.p>
        )}

        {done && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 text-center">
            <p className="terminal" style={{ color: 'var(--phosphor)', letterSpacing: '0.3em' }}>RECORD OF RAGNAROK. CONFIRMED.</p>
            {step >= 1 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
                Gods versus humanity. A tournament at the end of the world.
                You watched it like the outcome still mattered.
              </motion.p>
            )}
            {step >= 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em' }}>HIM</p>
                <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
                  "I kept pausing to explain the mythology.
                  You kept telling me to just let it play."
                </p>
              </motion.div>
            )}
            {step >= 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
                  "I remember the light more than the screen.
                  Dark blue. Almost morning."
                </p>
              </motion.div>
            )}
            {step >= 4 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
                <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 12 }}>
                  "This memory had no dramatic reason to survive.
                  That made it harder to remove."
                </p>
              </motion.div>
            )}
            {showContinue && (
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                <button className="btn pulse-glow" onClick={onSolve}>Continue</button>
              </motion.div>
            )}
          </motion.div>
        )}

        {!done && (
          <button onClick={onClose} className="t-eyebrow"
            style={{ display: 'block', margin: '8px auto 0', color: 'var(--muted-2)', background: 'none', border: 'none', fontSize: 10, letterSpacing: '0.3em', cursor: 'pointer' }}>
            [ CLOSE ]
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ── Window Reflection Puzzle ───────────────────────────────── */
const LILY_REFS = [
  { id: 'snow',    text: 'Snow covering the street below.',         real: true  },
  { id: 'end',     text: 'A city saying its final goodbye.',        real: false },
  { id: 'quiet',   text: 'A city gone quiet under white.',          real: true  },
  { id: 'promise', text: 'The promise of a bright future.',         real: true  },
  { id: 'empty',   text: 'An empty world with no way back.',        real: false },
  { id: 'morning', text: 'A morning that felt like it could last.', real: true  },
];

function LilyReflectionPuzzle({ onSolve, onClose }) {
  const [selected,     setSelected] = useState(new Set());
  const [wrongId,      setWrongId]  = useState(null);
  const [done,         setDone]     = useState(false);
  const [step,         setStep]     = useState(0);
  const [showContinue, setShowCon]  = useState(false);

  const realIds = LILY_REFS.filter(r => r.real).map(r => r.id);

  const toggle = (id, isReal) => {
    if (done || wrongId) return;
    if (!isReal) {
      setWrongId(id);
      setTimeout(() => setWrongId(null), 1700);
      return;
    }
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
    if (realIds.every(rid => next.has(rid)) && next.size === realIds.length) {
      setDone(true);
      setTimeout(() => setStep(1), 1200);
      setTimeout(() => setStep(2), 3000);
      setTimeout(() => setStep(3), 5000);
      setTimeout(() => setShowCon(true), 7000);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center p-5"
      style={{ background: 'rgba(1,4,18,0.94)', backdropFilter: 'blur(12px)', zIndex: 70 }}
      onClick={done ? undefined : onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="glass max-w-md w-full p-7"
        style={{ borderColor: 'rgba(195,155,255,0.28)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="text-center mb-5">
          <p className="t-eyebrow mb-1" style={{ color: 'rgba(200,225,255,0.9)', letterSpacing: '0.4em' }}>WINDOW REFLECTION</p>
          <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
            "It was snowing. The city had gone quiet.
            Choose what was really in the window."
          </p>
        </div>

        <div className="space-y-2 mb-4">
          {LILY_REFS.map(r => {
            const sel  = selected.has(r.id);
            const bad  = wrongId === r.id;
            return (
              <button key={r.id}
                onClick={() => toggle(r.id, r.real)}
                className="t-body-it"
                style={{
                  width: '100%', padding: '10px 14px', textAlign: 'left',
                  background: done && sel ? 'rgba(45,120,75,0.22)' : sel ? 'rgba(45,75,155,0.25)' : bad ? 'rgba(130,30,30,0.22)' : 'rgba(4,10,28,0.88)',
                  border: `1px solid ${done && sel ? 'rgba(80,210,130,0.5)' : sel ? 'rgba(100,150,255,0.45)' : bad ? 'rgba(210,60,60,0.6)' : 'rgba(120,90,195,0.22)'}`,
                  borderRadius: 8,
                  color: done && sel ? 'rgba(80,210,130,0.9)' : sel ? 'rgba(130,180,255,0.9)' : 'var(--muted)',
                  fontSize: 12, cursor: 'pointer', transition: 'all 0.22s',
                }}>
                {r.text}
              </button>
            );
          })}
        </div>

        {wrongId && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal text-center mb-3" style={{ color: 'var(--glitch)', letterSpacing: '0.18em', fontSize: 10 }}>
            Corrupted reflection selected.
            The archive replaced this with an ending.
          </motion.p>
        )}

        {done && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 text-center">
            <p className="terminal" style={{ color: 'var(--phosphor)', letterSpacing: '0.3em' }}>WINDOW REFLECTION RESTORED.</p>
            {step >= 1 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
                The snow did not mean goodbye.
                The city, mesmerised by our love, chose to make everything quiet,
                just for us.
              </motion.p>
            )}
            {step >= 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
                <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 12 }}>
                  "I tried to turn the snow into an ending.
                  The window kept showing me a beginning."
                </p>
              </motion.div>
            )}
            {step >= 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em' }}>HIM</p>
                <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 12 }}>
                  "I remember watching the street turn white.
                  You were still asleep. It was the most beautiful morning."
                </p>
              </motion.div>
            )}
            {showContinue && (
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                <button className="btn pulse-glow" onClick={onSolve}>Continue</button>
              </motion.div>
            )}
          </motion.div>
        )}

        {!done && (
          <button onClick={onClose} className="t-eyebrow"
            style={{ display: 'block', margin: '6px auto 0', color: 'var(--muted-2)', background: 'none', border: 'none', fontSize: 10, letterSpacing: '0.3em' }}>
            [ CLOSE ]
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ── Promise Ring Alignment Puzzle ───────────────────────────── */
const RING_SYMBOLS  = ['moon', 'lily', 'blue', 'couch', 'ring', 'Japan'];
const RING_CORRECT  = { moon: 'quiet', lily: 'love', blue: 'resemblance', couch: 'a new beginning', ring: 'promise', Japan: 'dream' };
const RING_MEANINGS = ['promise', 'a new beginning', 'dream', 'quiet', 'resemblance', 'love'];

function RingAlignmentPuzzle({ onSolve, onClose }) {
  const [activeSym,    setActiveSym] = useState(null);
  const [pairs,        setPairs]     = useState({});
  const [wrongFlash,   setWrong]     = useState(false);
  const [done,         setDone]      = useState(false);
  const [step,         setStep]      = useState(0);
  const [showContinue, setShowCon]   = useState(false);

  const usedMeanings = new Set(Object.values(pairs));

  const pickSym = (s) => {
    if (done || pairs[s]) return;
    setActiveSym(prev => prev === s ? null : s);
  };

  const pickMeaning = (m) => {
    if (!activeSym || done || usedMeanings.has(m)) return;
    if (RING_CORRECT[activeSym] === m) {
      const next = { ...pairs, [activeSym]: m };
      setPairs(next);
      setActiveSym(null);
      if (Object.keys(next).length === 6) {
        setDone(true);
        setTimeout(() => setStep(1), 1200);
        setTimeout(() => setStep(2), 3200);
        setTimeout(() => setStep(3), 5400);
        setTimeout(() => setShowCon(true), 7400);
      }
    } else {
      setWrong(true);
      setTimeout(() => setWrong(false), 1400);
    }
  };

  const pairsCount = Object.keys(pairs).length;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center p-5"
      style={{ background: 'rgba(1,4,18,0.94)', backdropFilter: 'blur(12px)', zIndex: 70 }}
      onClick={done ? undefined : onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="glass max-w-md w-full p-7"
        style={{ borderColor: 'rgba(175,210,255,0.28)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="text-center mb-4">
          <p className="t-eyebrow mb-1" style={{ color: 'rgba(175,210,255,0.9)', letterSpacing: '0.4em' }}>RING MEMORY DOOR</p>
          <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
            "Align each symbol with what it meant,
            not what the archive says it became."
          </p>
          {activeSym && !done && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="terminal mt-2" style={{ color: 'var(--glow)', fontSize: 10, letterSpacing: '0.22em' }}>
              → select meaning for: {activeSym}
            </motion.p>
          )}
        </div>

        {/* Ring visual */}
        <div className="flex justify-center mb-5">
          <svg width="80" height="80" viewBox="0 0 80 80" className="ring-svg">
            <circle cx="40" cy="40" r="34" fill="none"
              stroke={done ? 'rgba(80,210,130,0.7)' : `rgba(175,210,255,${0.3 + pairsCount * 0.07})`}
              strokeWidth="5" />
            <circle cx="40" cy="40" r="27" fill="none"
              stroke={done ? 'rgba(80,210,130,0.3)' : 'rgba(175,210,255,0.18)'} strokeWidth="1.5" />
            <path d="M35,25 Q40,20 45,25" fill="none"
              stroke={done ? 'rgba(80,210,130,0.7)' : 'rgba(240,220,180,0.5)'}
              strokeWidth="2.5" strokeLinecap="round" />
            <text x="40" y="44" textAnchor="middle" fontSize="11"
              fontFamily="var(--mono)" fill={done ? 'rgba(80,210,130,0.8)' : 'rgba(175,210,255,0.5)'}
              letterSpacing="1">
              {pairsCount}/6
            </text>
          </svg>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {/* Symbols */}
          <div className="space-y-2">
            <p className="t-eyebrow mb-1" style={{ color: 'var(--muted-2)', fontSize: 8, letterSpacing: '0.3em' }}>SYMBOLS</p>
            {RING_SYMBOLS.map(s => {
              const paired = pairs[s];
              return (
                <button key={s} onClick={() => pickSym(s)}
                  className="t-eyebrow"
                  style={{
                    display: 'block', width: '100%', padding: '7px 10px',
                    background: activeSym === s ? 'rgba(55,95,200,0.3)' : paired ? 'rgba(45,75,150,0.18)' : 'rgba(4,10,28,0.85)',
                    border: `1px solid ${activeSym === s ? 'rgba(100,160,255,0.6)' : paired ? 'rgba(80,130,240,0.35)' : 'rgba(70,110,220,0.2)'}`,
                    borderRadius: 7, fontSize: 10, letterSpacing: '0.22em', textAlign: 'left',
                    color: activeSym === s ? 'rgba(140,190,255,0.95)' : paired ? 'rgba(90,150,255,0.75)' : 'var(--muted)',
                    cursor: paired ? 'default' : 'pointer', transition: 'all 0.2s',
                  }}>
                  {s}{paired ? ` → ${paired}` : ''}
                </button>
              );
            })}
          </div>

          {/* Meanings */}
          <div className="space-y-2">
            <p className="t-eyebrow mb-1" style={{ color: 'var(--muted-2)', fontSize: 8, letterSpacing: '0.3em' }}>MEANINGS</p>
            {RING_MEANINGS.map(m => {
              const used = usedMeanings.has(m);
              return (
                <button key={m} onClick={() => pickMeaning(m)}
                  className="t-eyebrow"
                  style={{
                    display: 'block', width: '100%', padding: '7px 10px',
                    background: used ? 'rgba(45,75,150,0.15)' : wrongFlash && activeSym ? 'rgba(130,28,28,0.14)' : 'rgba(4,10,28,0.85)',
                    border: `1px solid ${used ? 'rgba(80,130,240,0.28)' : wrongFlash && activeSym ? 'rgba(210,55,55,0.4)' : 'rgba(70,110,220,0.2)'}`,
                    borderRadius: 7, fontSize: 10, letterSpacing: '0.22em',
                    color: used ? 'rgba(90,150,255,0.5)' : 'var(--muted)',
                    cursor: used ? 'default' : 'pointer', transition: 'all 0.2s', opacity: used ? 0.6 : 1,
                  }}>
                  {m}
                </button>
              );
            })}
          </div>
        </div>

        {wrongFlash && !done && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal text-center mt-3" style={{ color: 'var(--glitch)', letterSpacing: '0.2em', fontSize: 10 }}>
            The ring turns, but does not open.
          </motion.p>
        )}

        {done && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 text-center mt-5">
            <p className="terminal" style={{ color: 'var(--phosphor)', letterSpacing: '0.3em' }}>PROMISE RING RESTORED.</p>
            {step >= 1 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
                The ring was not a chain.
                It was not a warning.
                It was a small circle saying:
                something real can travel with you.
              </motion.p>
            )}
            {step >= 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em' }}>HIM</p>
                <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
                  "I gave it to you because I wanted something real to stay with you."
                </p>
              </motion.div>
            )}
            {step >= 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
                <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 12 }}>
                  "That is why this memory survived every version."
                </p>
              </motion.div>
            )}
            {showContinue && (
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                <button className="btn pulse-glow" onClick={onSolve}>Continue</button>
              </motion.div>
            )}
          </motion.div>
        )}

        {!done && (
          <button onClick={onClose} className="t-eyebrow"
            style={{ display: 'block', margin: '12px auto 0', color: 'var(--muted-2)', background: 'none', border: 'none', fontSize: 10, letterSpacing: '0.3em' }}>
            [ CLOSE ]
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ── Hidden Archive Truth ────────────────────────────────────── */
function Ep4HiddenTruth({ onDone }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const ts = [
      [700,   () => setStep(1)],
      [2400,  () => setStep(2)],
      [4000,  () => setStep(3)],
      [5600,  () => setStep(4)],
      [7200,  () => setStep(5)],
      [8800,  () => setStep(6)],
      [10600, () => setStep(7)],
      [12400, () => setStep(8)],
      [14200, () => setStep(9)],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="fixed inset-0 flex flex-col items-center justify-center px-8 py-12"
      style={{ background: 'rgba(1,3,14,0.98)', zIndex: 80 }}>
      <Particles count={16} intensity={0.42} />
      <div className="max-w-md w-full space-y-5" style={{ zIndex: 10, position: 'relative' }}>

        {step >= 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="glass px-5 py-3" style={{ borderColor: 'rgba(210,70,55,0.35)' }}>
            <p className="terminal" style={{ color: 'var(--glitch)', letterSpacing: '0.3em' }}>
              Hidden deletion found.
            </p>
          </motion.div>
        )}
        {step >= 2 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--muted-2)', letterSpacing: '0.22em' }}>
            This file was not removed by UNKNOWN_ARCHIVE.
          </motion.p>
        )}
        {step >= 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="glass px-5 py-3" style={{ borderColor: 'rgba(80,130,240,0.35)' }}>
            <p className="terminal mb-1" style={{ color: 'var(--muted-2)', fontSize: 9, letterSpacing: '0.3em' }}>
              Deletion signature detected:
            </p>
            <p className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.4em', fontSize: 14 }}>HIM.</p>
          </motion.div>
        )}
        {step >= 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
            <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em' }}>HIM</p>
            <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
              "I did not delete it to lie to you."
            </p>
          </motion.div>
        )}
        {step >= 5 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
            <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
              "I deleted it because I thought I could carry the fear alone."
            </p>
          </motion.div>
        )}
        {step >= 6 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
            <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
              "He hid the fear alone. I hid the grief alone. Two people protecting you from opposite ends."
            </p>
          </motion.div>
        )}
        {step >= 7 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="glass px-5 py-4" style={{ borderColor: 'rgba(80,130,240,0.22)', background: 'rgba(2,6,20,0.9)' }}>
            <p className="terminal mb-2" style={{ color: 'var(--muted)', fontSize: 9, letterSpacing: '0.28em' }}>
              Recovered file preview:
            </p>
            <p className="terminal mb-3" style={{ color: 'var(--glow)', letterSpacing: '0.25em' }}>
              JAPAN_ITINERARY_FINAL.deleted
            </p>
            {['Tokyo arrival', 'Blue door', 'Shibuya crossing', '░░░░░░░░░░░░░░░', '░░░░░░░░░░░░░░░'].map((line, i) => (
              <p key={i} className="terminal" style={{ color: `rgba(80,130,240,${0.45 - i * 0.08})`, fontSize: 9, letterSpacing: '0.18em' }}>
                {line}
              </p>
            ))}
          </motion.div>
        )}
        {step >= 8 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="glass px-5 py-3" style={{ borderColor: 'rgba(100,165,255,0.42)', background: 'rgba(4,10,28,0.95)' }}>
            <p className="terminal mb-1" style={{ color: 'var(--muted-2)', fontSize: 9, letterSpacing: '0.22em' }}>
              Only readable line:
            </p>
            <p className="t-body-it" style={{ color: 'rgba(140,195,255,0.95)', fontSize: 14 }}>
              "If the archive opens in Japan, do not let her choose alone."
            </p>
          </motion.div>
        )}
        {step >= 9 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <button className="btn btn--lg pulse-glow" onClick={onDone}>Continue</button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

/* ── EP4 Ending ──────────────────────────────────────────────── */
function Ep4Ending({ onComplete }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const ts = [
      [700,  () => setStep(1)],
      [2400, () => setStep(2)],
      [4000, () => setStep(3)],
      [5800, () => setStep(4)],
      [7600, () => setStep(5)],
      [9400, () => setStep(6)],
      [11200,() => setStep(7)],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <div className="ep4-ending">
      <Particles count={16} intensity={0.38} />
      <div className="max-w-md text-center space-y-5" style={{ zIndex: 10, position: 'relative' }}>
        {step >= 1 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.35em', fontSize: 11 }}>
            Promise memory stabilized.
          </motion.p>
        )}
        {step >= 2 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.3em', fontSize: 11 }}>
            Hidden file recovered.
          </motion.p>
        )}
        {step >= 3 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--glitch)', letterSpacing: '0.25em', fontSize: 11 }}>
            Next archive location unlocked: SHIBUYA_CROSSING
          </motion.p>
        )}
        {step >= 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
            <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
              "Now you know. He hid things too."
            </p>
          </motion.div>
        )}
        {step >= 5 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
            <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em' }}>HIM</p>
            <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
              "Yes. And I am done hiding."
            </p>
          </motion.div>
        )}
        {step >= 6 && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-28 h-px mx-auto mb-5 divider-line" />
            <p className="t-display"
              style={{ fontSize: 'clamp(22px,3.5vw,40px)', color: 'var(--text)', letterSpacing: '0.38em', fontWeight: 300 }}>
              END  OF  EPISODE  4
            </p>
          </motion.div>
        )}
        {step >= 7 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 15 }}>
              Next memory: Shibuya Was Never Empty
            </p>
            <p className="t-body-it" style={{ color: 'var(--glitch)', fontSize: 14, letterSpacing: '0.06em' }}>
              "The ring did not reveal who was right.
              It revealed that both of them were afraid."
            </p>
            <button className="btn pulse-glow" onClick={onComplete}>
              Begin Episode 5
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ── Info overlays for non-puzzle locations ──────────────────── */
const UNI_INFO = {
  stair: {
    title: 'STAIRWELL',
    body: 'The stairwell is familiar. She would have taken the stairs three floors up, every time. The sound the building made when it was almost empty.',
    quote: '"The building sounded different when no one was watching."',
  },
  door: {
    title: 'CLASSROOM DOOR',
    body: 'A classroom door. Locked now. The light through the glass is the same shade of dark blue as the memory.',
    quote: '"The room does not remember the lesson. It remembers who stayed after."',
  },
  light: {
    title: 'DARK BLUE LIGHT',
    body: 'A hallway light that never found the right white. It always leaned toward blue. She liked it. He noticed that she liked it.',
    quote: '"Dark blue. It was always dark blue with them."',
  },
};

/* ── University Map Scene (main EP4 scene) ───────────────────── */
const UNI_LOCS = [
  { id: 'elevator', label: 'Elevator',           icon: '▦', pos: { left: '5.5%', top: '50%' }                   },
  { id: 'stair',    label: 'Stairwell',           icon: '↑', pos: { left: '94%',  top: '38%' }, info: true        },
  { id: 'door',     label: 'Classroom',           icon: '▭', pos: { left: '13%',  top: '60%' }, info: true        },
  { id: 'light',    label: 'Blue Light',          icon: '◌', pos: { left: '32%',  top: '22%' }, info: true        },
  { id: 'lily',     label: 'Window Reflection',   icon: '◻', pos: { left: '50%',  top: '35%' }                   },
  { id: 'couch',    label: 'Third-Floor Couch',   icon: '▬', pos: { left: '50%',  top: '72%' }                   },
  { id: 'ring',     label: 'Ring Memory Door',    icon: '◯', pos: { left: '50%',  top: '52%' }, isRing: true      },
];

const UNI_INTRO = [
  'UNIVERSITY MEMORY DETECTED.\nLast days on campus.\nThird floor partially restored.',
  'The building is quiet.\nThe lights hum softly.\nSomewhere above, a couch remembers what the archive could not.',
];

function SceneUniversityMap({ onComplete }) {
  const [elevSolved,   setElev]   = useState(false);
  const [couchSolved,  setCouch]  = useState(false);
  const [lilySolved,   setLily]   = useState(false);

  const [overlay,      setOverlay]  = useState(null);
  const [mapPhase,     setMapPhase] = useState('intro');
  const [introStep,    setIntro]    = useState(0);
  const [showMsg,      setShowMsg]  = useState(false);
  const [collapsed,    setCollapsed]= useState(false);

  const allSolved = couchSolved && lilySolved;

  useEffect(() => {
    const ts = [
      [700,  () => setIntro(1)],
      [3000, () => setIntro(2)],
      [5800, () => setIntro(3)],
      [8400, () => { setMapPhase('map'); setTimeout(() => setShowMsg(true), 2200); }],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  const handleLocClick = (loc) => {
    if (loc.isRing) {
      if (allSolved) setOverlay('ring');
      return;
    }
    setOverlay(loc.id);
  };

  const solvedMap = { elevator: elevSolved, couch: couchSolved, lily: lilySolved };

  if (mapPhase === 'hidden')  return <Ep4HiddenTruth onDone={() => setMapPhase('ending')} />;
  if (mapPhase === 'ending')  return <Ep4Ending onComplete={onComplete} />;

  return (
    <SceneShell style={{ background: '#01040e' }}>
      <UniBuildingSVG collapsed={collapsed} />
      <Atmosphere />

      {/* Intro */}
      {mapPhase === 'intro' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8" style={{ zIndex: 20 }}>
          <div className="max-w-md text-center space-y-5">
            {introStep >= 1 && (
              <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.32em', fontSize: 11, whiteSpace: 'pre-line' }}>
                {UNI_INTRO[0]}
              </motion.p>
            )}
            {introStep >= 2 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="t-body-it" style={{ color: 'var(--muted)', fontSize: 14, whiteSpace: 'pre-line' }}>
                {UNI_INTRO[1]}
              </motion.p>
            )}
            {introStep >= 3 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="t-eyebrow" style={{ color: 'var(--muted-2)', fontSize: 9, letterSpacing: '0.4em' }}>
                LOADING MAP FRAGMENTS…
              </motion.p>
            )}
          </div>
        </div>
      )}

      {/* Map UI */}
      {mapPhase === 'map' && (
        <div className="absolute inset-0" style={{ zIndex: 15 }}>

          {/* Header */}
          <div className="absolute" style={{ top: 16, left: 20 }}>
            <p className="t-eyebrow" style={{ color: 'rgba(100,160,255,0.6)', letterSpacing: '0.38em', fontSize: 9 }}>
              MEMORY ARCHIVE · UNIVERSITY
            </p>
            <p className="t-eyebrow" style={{ color: 'rgba(100,160,255,0.32)', letterSpacing: '0.3em', fontSize: 8 }}>
              EPISODE 4 · THE RING THAT STAYED
            </p>
          </div>

          {/* Progress pips */}
          <div className="absolute flex gap-2" style={{ top: 16, right: 20 }}>
            {[elevSolved, couchSolved, lilySolved, allSolved].map((s, i) => (
              <span key={i} className={'clue-pip' + (s ? ' clue-pip--on' : '')} />
            ))}
          </div>

          {/* Location buttons */}
          {UNI_LOCS.map(loc => {
            const solved     = solvedMap[loc.id] || false;
            const isGateLock = loc.isRing && !allSolved;
            const isLocked   = (loc.id === 'couch' && !elevSolved) || (loc.id === 'lily' && !couchSolved);
            return (
              <div key={loc.id} className="absolute" style={loc.pos}>
                <button
                  className={
                    'uni-loc-btn' +
                    (solved   ? ' uni-loc-btn--solved'  : '') +
                    (isLocked ? ' uni-loc-btn--locked'  : '') +
                    (loc.isRing && !isGateLock ? ' uni-loc-btn--ring-open' : '') +
                    (loc.isRing && isGateLock  ? ' uni-loc-btn--ring'      : '')
                  }
                  onClick={() => !isLocked && handleLocClick(loc)}
                  title={isGateLock ? 'Solve the couch and lily puzzles first' : isLocked ? 'Locked' : loc.label}
                >
                  <span style={{ fontSize: 16 }}>{loc.icon}</span>
                  <span className="t-eyebrow"
                    style={{ color: solved ? 'rgba(80,210,130,0.9)' : isLocked ? 'rgba(80,100,150,0.5)' : 'var(--muted)', fontSize: 8, letterSpacing: '0.22em' }}>
                    {loc.label}
                  </span>
                  {loc.isRing && (
                    <span className="t-eyebrow"
                      style={{ color: allSolved ? 'rgba(80,210,130,0.8)' : 'rgba(60,90,150,0.5)', fontSize: 7, letterSpacing: '0.2em' }}>
                      {allSolved ? 'OPEN' : 'LOCKED'}
                    </span>
                  )}
                  {!loc.isRing && !loc.info && !isLocked && <span className="uni-loc-dot" />}
                </button>
              </div>
            );
          })}

          {/* Bottom message panel */}
          {showMsg && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute" style={{ bottom: 22, left: '50%', transform: 'translateX(-50%)', width: '92%', maxWidth: 480 }}>
              <div className="glass px-5 py-4 space-y-3">
                <div>
                  <p className="t-eyebrow mb-1" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
                  <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 12 }}>
                    "He erased the memories that might lead you back to him. Trips. Messages. Plans.
                    The quiet ones — the couch, the elevator, the snow — he could not find those."
                  </p>
                </div>
                <div className="divider-line h-px" />
                <div>
                  <p className="t-eyebrow mb-1" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em' }}>HIM</p>
                  <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 12 }}>
                    "I thought if I took the big memories she would stop looking.
                    I did not know she had already saved the small ones."
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Info overlays */}
      {overlay && UNI_INFO[overlay] && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center p-6"
          style={{ background: 'rgba(1,4,18,0.88)', backdropFilter: 'blur(8px)', zIndex: 60 }}
          onClick={() => setOverlay(null)}>
          <motion.div initial={{ scale: 0.92, y: 14 }} animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="glass max-w-sm w-full p-7 text-center"
            style={{ borderColor: 'rgba(80,130,240,0.25)' }}
            onClick={e => e.stopPropagation()}>
            <p className="t-eyebrow mb-3" style={{ color: 'rgba(100,160,255,0.9)', letterSpacing: '0.4em' }}>
              {UNI_INFO[overlay].title}
            </p>
            <p className="t-body-it mb-3" style={{ color: 'var(--muted)', fontSize: 14 }}>
              {UNI_INFO[overlay].body}
            </p>
            <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
              {UNI_INFO[overlay].quote}
            </p>
            <button className="t-eyebrow mt-6"
              style={{ color: 'var(--muted-2)', background: 'none', border: 'none', fontSize: 10, letterSpacing: '0.3em', cursor: 'pointer' }}
              onClick={() => setOverlay(null)}>[ CLOSE ]</button>
          </motion.div>
        </motion.div>
      )}

      {/* Puzzle overlays */}
      {overlay === 'elevator' && !elevSolved && (
        <ElevatorPuzzle onSolve={() => { setElev(true); setOverlay(null); }} onClose={() => setOverlay(null)} />
      )}
      {overlay === 'couch' && !couchSolved && (
        <CouchMemoryPuzzle onSolve={() => { setCouch(true); setOverlay(null); }} onClose={() => setOverlay(null)} />
      )}
      {overlay === 'lily' && !lilySolved && (
        <LilyReflectionPuzzle onSolve={() => { setLily(true); setOverlay(null); }} onClose={() => setOverlay(null)} />
      )}
      {overlay === 'ring' && (
        <RingAlignmentPuzzle
          onSolve={() => {
            setOverlay(null);
            setCollapsed(true);
            setTimeout(() => setMapPhase('hidden'), 800);
          }}
          onClose={() => setOverlay(null)}
        />
      )}

      {/* Already-solved modal */}
      {overlay && solvedMap[overlay] && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center p-6"
          style={{ background: 'rgba(1,4,18,0.85)', backdropFilter: 'blur(8px)', zIndex: 60 }}
          onClick={() => setOverlay(null)}>
          <motion.div initial={{ scale: 0.92, y: 14 }} animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="glass max-w-sm w-full p-7 text-center"
            style={{ borderColor: 'rgba(80,210,130,0.28)' }}
            onClick={e => e.stopPropagation()}>
            <p className="t-eyebrow mb-3" style={{ color: 'rgba(80,210,130,0.9)', letterSpacing: '0.4em' }}>MEMORY RESTORED</p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 14 }}>
              This memory has already been recovered.
            </p>
            <button className="t-eyebrow mt-5"
              style={{ color: 'var(--muted-2)', background: 'none', border: 'none', fontSize: 10, letterSpacing: '0.3em', cursor: 'pointer' }}
              onClick={() => setOverlay(null)}>[ CLOSE ]</button>
          </motion.div>
        </motion.div>
      )}
    </SceneShell>
  );
}

Object.assign(window, { SceneEp4Unlock, SceneUniversityMap });
