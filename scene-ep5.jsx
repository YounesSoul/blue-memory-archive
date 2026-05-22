/* ============================================================
   EPISODE 5 — SHIBUYA WAS NEVER EMPTY
   Tokyo crossing: deleted itinerary, rain, the blue door ahead.
   ============================================================ */

/* ── Shibuya Crossing SVG ────────────────────────────────────── */
const SHIBUYA_RAIN = Array.from({ length: 55 }, (_, i) => ({
  x:   ((i * 131 + 17) % 1500) + 50,
  dur: 0.65 + (i % 5) * 0.09,
  del: -(i * 0.13) % 1.4,
  len: 16 + (i % 4) * 8,
  op:  0.28 + (i % 4) * 0.1,
  thick: i % 7 === 0,
}));

function ShibuyaSVG({ collapsed }) {
  return (
    <div className={'shibuya-stage' + (collapsed ? ' shibuya-stage--collapsed' : '')}>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="shibuya-svg">
        <defs>
          <linearGradient id="sbg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#010208" />
            <stop offset="55%"  stopColor="#040918" />
            <stop offset="100%" stopColor="#060d22" />
          </linearGradient>
          <linearGradient id="sground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#050c1e" />
            <stop offset="100%" stopColor="#030810" />
          </linearGradient>
          <radialGradient id="sneon1" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(255,80,120,0.55)" />
            <stop offset="100%" stopColor="rgba(255,80,120,0)"    />
          </radialGradient>
          <radialGradient id="sneon2" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(80,200,255,0.35)" />
            <stop offset="100%" stopColor="rgba(80,200,255,0)"    />
          </radialGradient>
          <radialGradient id="sneon3" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(120,255,180,0.2)" />
            <stop offset="100%" stopColor="rgba(120,255,180,0)"   />
          </radialGradient>
          <radialGradient id="scenter" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(140,180,255,0.12)" />
            <stop offset="100%" stopColor="rgba(140,180,255,0)"    />
          </radialGradient>
          <linearGradient id="srefl" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="rgba(90,150,255,0.25)" />
            <stop offset="100%" stopColor="rgba(90,150,255,0)"    />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect width="1600" height="900" fill="url(#sbg)" />

        {/* ── Building silhouettes ─────────────────────────────── */}
        {/* Left tower block */}
        <rect x="0"   y="60"  width="200" height="540" fill="#010306" />
        <rect x="200" y="130" width="140" height="470" fill="#020408" />
        <rect x="340" y="90"  width="110" height="510" fill="#010307" />
        {/* Right tower block */}
        <rect x="1250" y="50"  width="350" height="550" fill="#010306" />
        <rect x="1160" y="120" width="130" height="480" fill="#020408" />
        <rect x="1080" y="80"  width="110" height="520" fill="#010307" />

        {/* Building neon windows — left side */}
        {[
          [22,  120, 14, 9],  [22,  150, 14, 9],  [22,  180, 14, 9],
          [52,  130, 14, 9],  [52,  160, 14, 9],  [52,  200, 14, 9],
          [82,  120, 14, 9],  [82,  160, 14, 9],
          [120, 145, 14, 9],  [120, 175, 14, 9],  [120, 215, 14, 9],
          [152, 155, 14, 9],  [152, 195, 14, 9],
          [210, 165, 12, 8],  [210, 195, 12, 8],  [210, 235, 12, 8],
          [230, 175, 12, 8],  [230, 205, 12, 8],
          [350, 120, 12, 8],  [350, 150, 12, 8],  [350, 185, 12, 8],
          [370, 130, 12, 8],  [370, 165, 12, 8],  [370, 200, 12, 8],
        ].map(([x, y, w, h], i) => (
          <rect key={`wl${i}`} x={x} y={y} width={w} height={h} rx="1"
            fill={`rgba(${i%3===0?'180,220,255':i%3===1?'255,200,180':'220,255,220'},${0.08+i%4*0.03})`} />
        ))}

        {/* Building neon windows — right side */}
        {[
          [1270, 90,  14, 9],  [1270, 120, 14, 9],  [1270, 155, 14, 9],
          [1300, 100, 14, 9],  [1300, 135, 14, 9],  [1300, 170, 14, 9],
          [1335, 90,  14, 9],  [1335, 130, 14, 9],  [1335, 165, 14, 9],
          [1370, 110, 14, 9],  [1370, 145, 14, 9],
          [1410, 95,  12, 8],  [1410, 130, 12, 8],  [1410, 165, 12, 8],
          [1445, 115, 12, 8],  [1445, 150, 12, 8],
          [1480, 100, 12, 8],  [1480, 135, 12, 8],  [1480, 170, 12, 8],
          [1515, 80,  12, 8],  [1515, 115, 12, 8],  [1515, 155, 12, 8],
          [1163, 145, 12, 8],  [1163, 180, 12, 8],  [1163, 215, 12, 8],
          [1185, 160, 12, 8],  [1185, 195, 12, 8],
          [1090, 120, 12, 8],  [1090, 155, 12, 8],  [1090, 195, 12, 8],
          [1115, 135, 12, 8],  [1115, 170, 12, 8],
        ].map(([x, y, w, h], i) => (
          <rect key={`wr${i}`} x={x} y={y} width={w} height={h} rx="1"
            fill={`rgba(${i%3===0?'180,220,255':i%3===1?'255,200,180':'255,180,220'},${0.07+i%4*0.03})`} />
        ))}

        {/* ── Large neon sign – left billboard ─────────────────── */}
        <rect x="60" y="280" width="280" height="120" rx="4"
          fill="rgba(2,4,14,0.9)" stroke="rgba(255,70,110,0.45)" strokeWidth="2" />
        <ellipse cx="200" cy="340" rx="115" ry="46" fill="url(#sneon1)" />
        {/* 渋谷 in red */}
        {['渋', '谷'].map((ch, i) => (
          <text key={i} x={115 + i * 80} y={348} textAnchor="middle" fontSize="52"
            fontFamily="serif" fill="rgba(255,90,130,0.88)"
            style={{ filter: 'drop-shadow(0 0 8px rgba(255,70,110,0.8))' }}>
            {ch}
          </text>
        ))}
        <text x="200" y="376" textAnchor="middle" fontSize="10"
          fontFamily="monospace" fill="rgba(255,90,130,0.55)" letterSpacing="4">
          SHIBUYA  CROSSING
        </text>

        {/* ── Large screen billboard – right ───────────────────── */}
        <rect x="1260" y="260" width="280" height="140" rx="4"
          fill="rgba(3,6,18,0.92)" stroke="rgba(80,200,255,0.35)" strokeWidth="2" />
        <ellipse cx="1400" cy="330" rx="110" ry="54" fill="url(#sneon2)" />
        <text x="1400" y="316" textAnchor="middle" fontSize="13"
          fontFamily="monospace" fill="rgba(80,200,255,0.7)" letterSpacing="3">
          TOKYO
        </text>
        <text x="1400" y="336" textAnchor="middle" fontSize="22"
          fontFamily="serif" fontStyle="italic" fill="rgba(140,220,255,0.82)"
          style={{ filter: 'drop-shadow(0 0 10px rgba(80,200,255,0.7))' }}>
          東京
        </text>
        <text x="1400" y="370" textAnchor="middle" fontSize="9"
          fontFamily="monospace" fill="rgba(80,200,255,0.4)" letterSpacing="6">
          MEMORY  ARCHIVE
        </text>

        {/* ── Ground / crossing approach ────────────────────────── */}
        {/* Wet ground base */}
        <rect x="0" y="580" width="1600" height="320" fill="url(#sground)" />

        {/* Ground glow reflections from neon */}
        <ellipse cx="200" cy="660" rx="180" ry="55" fill="url(#sneon1)" opacity="0.55" />
        <ellipse cx="1400" cy="660" rx="170" ry="55" fill="url(#sneon2)" opacity="0.4" />
        <ellipse cx="800" cy="680" rx="310" ry="70" fill="url(#scenter)" />

        {/* Wet ground sheen — streaks */}
        {[0,1,2,3,4,5,6,7].map(i => (
          <rect key={`gs${i}`}
            x={50 + i * 190} y={590 + i * 14} width={60 + i * 22} height={2}
            fill={`rgba(140,180,255,${0.06+i*0.015})`} rx="1" />
        ))}

        {/* ── Crossing painted stripes (perspective) ───────────── */}
        {[0,1,2,3,4,5,6,7].map(i => {
          const t = i / 7;
          const y0 = 600 + t * 260;
          const xOff = 480 * (1 - t);
          const w = 1600 - xOff * 2;
          const stripe = 22 + t * 14;
          return (
            <rect key={`cs${i}`}
              x={xOff} y={y0} width={w} height={stripe}
              fill={`rgba(230,240,255,${0.028 + t * 0.02})`} />
          );
        })}

        {/* Vertical crossing lines */}
        {[-3,-1,1,3].map((offset, i) => {
          const cx = 800 + offset * 95;
          return (
            <line key={`cv${i}`}
              x1={cx - offset * 30} y1={600}
              x2={cx + offset * 45} y2={880}
              stroke={`rgba(220,235,255,0.06)`} strokeWidth="1.5" />
          );
        })}

        {/* Ground reflection streaks of the crossing */}
        {[0,1,2,3].map(i => (
          <rect key={`gr${i}`}
            x={680 + i * 70} y={585} width={20} height={240}
            fill={`rgba(160,200,255,0.03)`} />
        ))}

        {/* ── Traffic lights ────────────────────────────────────── */}
        {/* Left traffic light */}
        <rect x="452" y="448" width="8" height="140" fill="#060e1e" />
        <rect x="440" y="420" width="32" height="64" rx="4"
          fill="#030810" stroke="rgba(80,130,200,0.2)" strokeWidth="1" />
        <circle cx="456" cy="437" r="9" fill="rgba(220,60,60,0.18)"
          stroke="rgba(220,60,60,0.35)" strokeWidth="1" />
        <circle cx="456" cy="452" r="9" fill="rgba(240,210,60,0.12)"
          stroke="rgba(220,200,60,0.25)" strokeWidth="1" />
        <circle cx="456" cy="467" r="9" fill="rgba(60,200,100,0.6)"
          stroke="rgba(60,220,110,0.5)" strokeWidth="1"
          style={{ filter: 'drop-shadow(0 0 6px rgba(60,220,100,0.7))' }} />

        {/* Right traffic light */}
        <rect x="1140" y="448" width="8" height="140" fill="#060e1e" />
        <rect x="1128" y="420" width="32" height="64" rx="4"
          fill="#030810" stroke="rgba(80,130,200,0.2)" strokeWidth="1" />
        <circle cx="1144" cy="437" r="9" fill="rgba(220,60,60,0.18)"
          stroke="rgba(220,60,60,0.35)" strokeWidth="1" />
        <circle cx="1144" cy="452" r="9" fill="rgba(240,210,60,0.12)"
          stroke="rgba(220,200,60,0.25)" strokeWidth="1" />
        <circle cx="1144" cy="467" r="9" fill="rgba(60,200,100,0.6)"
          stroke="rgba(60,220,110,0.5)" strokeWidth="1"
          style={{ filter: 'drop-shadow(0 0 6px rgba(60,220,100,0.7))' }} />

        {/* ── Pedestrian silhouettes (sparse) ──────────────────── */}
        {[680, 760, 830, 900, 980].map((x, i) => {
          const sc = 0.55 + i * 0.08;
          const y = 630 - i * 6;
          return (
            <g key={`ped${i}`} transform={`translate(${x},${y}) scale(${sc})`} opacity={0.18 + i * 0.04}>
              <ellipse cx="0" cy="-42" rx="8" ry="9" fill="rgba(200,220,255,0.6)" />
              <rect x="-6" y="-33" width="12" height="26" rx="3" fill="rgba(200,220,255,0.5)" />
              <rect x="-10" y="1" width="8" height="22" rx="2" fill="rgba(200,220,255,0.4)" />
              <rect x="2"  y="1" width="8" height="22" rx="2" fill="rgba(200,220,255,0.4)" />
            </g>
          );
        })}

        {/* ── Rain drops ───────────────────────────────────────── */}
        {SHIBUYA_RAIN.map((r, i) => (
          <line key={`rd${i}`}
            x1={r.x} y1={0} x2={r.x + 4} y2={r.len}
            stroke={`rgba(180,215,255,${r.op})`}
            strokeWidth={r.thick ? 1.8 : 1.2}
            style={{
              animation: `rain-fall ${r.dur}s linear ${r.del}s infinite`,
            }} />
        ))}

        {/* ── Café window glow (left, mid-ground) ──────────────── */}
        <rect x="455" y="510" width="220" height="140" rx="4"
          fill="rgba(255,200,120,0.06)" stroke="rgba(255,185,80,0.18)" strokeWidth="1.5" />
        <rect x="455" y="510" width="220" height="140" rx="4"
          fill="url(#sneon3)" opacity="0.3" />
        <text x="565" y="545" textAnchor="middle" fontSize="8"
          fontFamily="monospace" fill="rgba(255,200,120,0.45)" letterSpacing="3">
          CAFÉ
        </text>
        <text x="565" y="560" textAnchor="middle" fontSize="8"
          fontFamily="monospace" fill="rgba(255,200,120,0.3)" letterSpacing="2">
          窓際
        </text>

        {/* ── Vignette ─────────────────────────────────────────── */}
        <rect x="0"    y="0"   width="1600" height="80"  fill="rgba(0,0,0,0.5)"  />
        <rect x="0"    y="820" width="1600" height="80"  fill="rgba(0,0,0,0.45)" />
        <rect x="0"    y="0"   width="80"   height="900" fill="rgba(0,0,0,0.22)" />
        <rect x="1520" y="0"   width="80"   height="900" fill="rgba(0,0,0,0.22)" />

        {/* Haze / fog bottom */}
        <rect x="0" y="760" width="1600" height="140"
          fill="rgba(10,18,38,0.35)" style={{ filter: 'blur(2px)' }} />
      </svg>
    </div>
  );
}

/* ── EP5 Unlock Screen ───────────────────────────────────────── */
function SceneEp5Unlock({ onComplete }) {
  const [step,    setStep]    = useState(0);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const ts = [
      [600,  () => setStep(1)],
      [1900, () => setStep(2)],
      [3100, () => setStep(3)],
      [4300, () => setStep(4)],
      [5400, () => setStep(5)],
      [6300, () => setShowBar(true)],
      [8600, () => onComplete()],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <SceneShell style={{ background: '#000408' }}>
      <Particles count={10} intensity={0.28} />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8" style={{ zIndex: 10 }}>
        <div className="max-w-md w-full space-y-4">
          {step >= 1 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.35em', fontSize: 12 }}>
              JAPAN_ITINERARY.deleted — recovering…
            </motion.p>
          )}
          {step >= 2 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="terminal" style={{ color: 'var(--muted-2)' }}>
              Location signature: SHIBUYA_CROSSING.
            </motion.p>
          )}
          {step >= 3 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="terminal" style={{ color: 'var(--muted-2)' }}>
              Rain memory layer: active.
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
              The crossing remembers every version of this moment.
            </motion.p>
          )}
          {showBar && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6">
              <p className="t-eyebrow mb-2" style={{ color: 'var(--muted)', letterSpacing: '0.3em', fontSize: 9 }}>
                LOADING SHIBUYA MEMORY
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

/* ── Scramble Memory Puzzle ──────────────────────────────────── */
const SCRAMBLE_FRAGS = [
  { id: 'together', text: 'walking onto the crossing together'   },
  { id: 'car',      text: 'the car coming through the red light' },
  { id: 'push',     text: 'him stepping in front of her'         },
  { id: 'quiet',    text: 'the crossing going quiet'             },
  { id: 'other',    text: 'finding herself on the other side'    },
  { id: 'turn',     text: 'turning to find he was not there'     },
];
const SCRAMBLE_DISPLAY = ['quiet', 'other', 'together', 'turn', 'car', 'push'];
const SCRAMBLE_ORDER   = ['together', 'car', 'push', 'quiet', 'other', 'turn'];

const CROSSING_NARRATIVE = [
  'They crossed together.',
  'She was on his right.',
  'The car came from the left.',
  'The crossing went quiet.',
  'She found herself on the other side.',
  'He was not there.',
];

function ScrambleMemoryPuzzle({ onSolve, onClose }) {
  const [introPhase,   setIntroPhase] = useState('reading'); // 'reading' | 'puzzle'
  const [introStep,    setIntroStep]  = useState(0);
  const [showBegin,    setShowBegin]  = useState(false);
  const [seq,          setSeq]        = useState([]);
  const [wrong,        setWrong]      = useState(false);
  const [done,         setDone]       = useState(false);
  const [step,         setStep]       = useState(0);
  const [showContinue, setShowCon]    = useState(false);

  // Auto-reveal narrative lines
  useEffect(() => {
    if (introPhase !== 'reading') return;
    const timers = CROSSING_NARRATIVE.map((_, i) =>
      setTimeout(() => setIntroStep(i + 1), 800 + i * 1300)
    );
    const t = setTimeout(() => setShowBegin(true), 800 + CROSSING_NARRATIVE.length * 1300 + 600);
    return () => { timers.forEach(clearTimeout); clearTimeout(t); };
  }, [introPhase]);

  const fragMap     = Object.fromEntries(SCRAMBLE_FRAGS.map(f => [f.id, f]));
  const displayFrgs = SCRAMBLE_DISPLAY.map(id => fragMap[id]);

  const pick = (id) => {
    if (wrong || done) return;
    const next = [...seq, id];
    setSeq(next);
    if (next.length < 6) return;
    if (next.every((v, i) => v === SCRAMBLE_ORDER[i])) {
      setDone(true);
      setTimeout(() => setStep(1), 1400);
      setTimeout(() => setStep(2), 3400);
      setTimeout(() => setStep(3), 5600);
      setTimeout(() => setShowCon(true), 7400);
    } else {
      setWrong(true);
      setTimeout(() => { setSeq([]); setWrong(false); }, 1800);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center p-5"
      style={{ background: 'rgba(1,3,14,0.95)', backdropFilter: 'blur(12px)', zIndex: 70 }}
      onClick={done ? undefined : onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="glass max-w-lg w-full p-7"
        style={{ borderColor: 'rgba(80,180,255,0.25)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="text-center mb-5">
          <p className="t-eyebrow mb-1" style={{ color: 'rgba(100,190,255,0.9)', letterSpacing: '0.4em' }}>CROSSING MEMORY</p>
        </div>

        {/* ── Intro: narrate the 6 moments ── */}
        <AnimatePresence mode="wait">
        {introPhase === 'reading' && (
          <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="t-eyebrow text-center mb-5" style={{ color: 'var(--muted-2)', fontSize: 10, letterSpacing: '0.28em' }}>
              THE ARCHIVE RECOVERED THIS MUCH:
            </p>
            <div className="space-y-3 mb-6">
              {CROSSING_NARRATIVE.map((line, i) => (
                introStep > i && (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                    className="t-body-it"
                    style={{ color: i === 5 ? 'var(--glow)' : 'var(--muted)', fontSize: 14, paddingLeft: 8 }}
                  >
                    {line}
                  </motion.p>
                )
              ))}
            </div>
            {showBegin && (
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                <p className="t-body-it mb-4" style={{ color: 'var(--muted)', fontSize: 12 }}>
                  "The crossing holds the order. Rebuild it."
                </p>
                <button className="btn pulse-glow" onClick={() => setIntroPhase('puzzle')}>
                  Rebuild the Memory
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* ── Puzzle phase ── */}
        {introPhase === 'puzzle' && (
          <motion.div key="puzzle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="terminal text-center mb-4" style={{ color: 'var(--muted-2)', fontSize: 10, letterSpacing: '0.22em' }}>
              Select the moments in the order they happened.
            </p>

        <div className="mb-4 p-3 glass"
          style={{ background: 'rgba(2,6,20,0.8)', minHeight: 46, display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
          {seq.length === 0
            ? <span className="t-eyebrow" style={{ color: 'var(--muted-2)', fontSize: 9, letterSpacing: '0.25em', margin: 'auto' }}>select moments in order…</span>
            : seq.map((id, i) => (
                <span key={i} className="t-eyebrow"
                  style={{ padding: '3px 10px', background: 'rgba(40,100,210,0.2)', border: '1px solid rgba(80,170,255,0.35)', borderRadius: 20, color: 'rgba(110,195,255,0.9)', fontSize: 9, letterSpacing: '0.16em' }}>
                  {i + 1}. {fragMap[id].text}
                </span>
              ))
          }
        </div>

        {!done && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9 }} className="mb-4">
            {displayFrgs.map(f => {
              const picked = seq.includes(f.id);
              return (
                <button key={f.id}
                  onClick={() => pick(f.id)}
                  disabled={picked}
                  className="t-body-it"
                  style={{
                    padding: '10px 12px', textAlign: 'left',
                    background: picked ? 'rgba(30,80,170,0.22)' : 'rgba(4,10,28,0.88)',
                    border: `1px solid ${picked ? 'rgba(80,170,255,0.4)' : 'rgba(50,110,220,0.2)'}`,
                    borderRadius: 8, color: picked ? 'rgba(80,180,255,0.65)' : 'var(--muted)',
                    fontSize: 12, cursor: picked ? 'default' : 'pointer', transition: 'all 0.2s',
                  }}>
                  {f.text}
                </button>
              );
            })}
          </div>
        )}

        {wrong && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal text-center mb-3"
            style={{ color: 'var(--glitch)', letterSpacing: '0.2em', fontSize: 10 }}>
            The crossing remembers the order differently.
          </motion.p>
        )}

        {done && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 text-center">
            <p className="terminal" style={{ color: 'var(--phosphor)', letterSpacing: '0.3em' }}>CROSSING MEMORY RESTORED.</p>
            {step >= 1 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
                They were not the only two people on the crossing.
                But to the crossing, they were the only memory that stayed.
              </motion.p>
            )}
            {step >= 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em' }}>HIM</p>
                <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
                  "I saw it coming from the left. I had enough time to make one choice."
                </p>
              </motion.div>
            )}
            {step >= 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
                <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 12 }}>
                  "He erased the part where she was standing beside him. He wanted her to think she played no part in how it ended."
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
          <div className="flex gap-3 justify-center mt-2">
            <button className="t-eyebrow" onClick={() => setSeq([])}
              style={{ color: 'var(--muted-2)', background: 'none', border: 'none', fontSize: 10, letterSpacing: '0.3em', cursor: 'pointer' }}>
              RESET
            </button>
            <button onClick={onClose} className="t-eyebrow"
              style={{ color: 'var(--muted-2)', background: 'none', border: 'none', fontSize: 10, letterSpacing: '0.3em', cursor: 'pointer' }}>
              CLOSE
            </button>
          </div>
        )}
          </motion.div>
        )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

/* ── Deleted Message Puzzle ──────────────────────────────────── */
const MSG_FRAGS = [
  { id: 'rain',     text: "I'm at the crossing. It's beautiful in the rain.",         real: true  },
  { id: 'waiting',  text: "Your train delay doesn't matter. I'll wait all day.",      real: true  },
  { id: 'door',     text: "I found the blue door. I wanted to show you first.",       real: true  },
  { id: 'soon',     text: "Come soon. I have something to tell you.",                 real: true  },
  { id: 'mistake',  text: "I think I made a mistake coming here alone.",              real: false },
  { id: 'unfinish', text: "Maybe some things are better left unfinished.",            real: false },
];

function DeletedMessagePuzzle({ onSolve, onClose }) {
  const [selected,     setSelected]   = useState(new Set());
  const [submitting,   setSubmitting] = useState(false);
  const [wrongCards,   setWrongCards] = useState(new Set());
  const [done,         setDone]       = useState(false);
  const [step,         setStep]       = useState(0);
  const [showContinue, setShowCon]    = useState(false);

  const realIds = MSG_FRAGS.filter(r => r.real).map(r => r.id);
  const NEEDED  = 4;

  const toggle = (id) => {
    if (submitting || done) return;
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const submit = () => {
    if (selected.size !== NEEDED || submitting) return;
    const fakes = [...selected].filter(id => !realIds.includes(id));
    if (fakes.length > 0) {
      setSubmitting(true);
      setWrongCards(new Set(fakes));
      setTimeout(() => {
        setSubmitting(false);
        setWrongCards(new Set());
        setSelected(new Set());
      }, 2400);
    } else {
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
      style={{ background: 'rgba(1,3,14,0.95)', backdropFilter: 'blur(12px)', zIndex: 70 }}
      onClick={done ? undefined : onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="glass max-w-md w-full p-7"
        style={{ borderColor: 'rgba(100,200,255,0.25)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="text-center mb-4">
          <p className="t-eyebrow mb-2" style={{ color: 'rgba(110,200,255,0.9)', letterSpacing: '0.4em' }}>
            DELETED MESSAGE
          </p>
          <p className="t-body-it mb-1" style={{ color: 'var(--muted)', fontSize: 13 }}>
            "Select the 4 messages HIM actually sent."
          </p>
          <p className="terminal" style={{ color: 'var(--glitch)', fontSize: 10, letterSpacing: '0.2em' }}>
            He replaced 2 lines. He did not want her to know she was there.
          </p>
        </div>

        {/* Selection counter */}
        {!done && (
          <div className="flex justify-center mb-4">
            <span className="t-eyebrow" style={{
              fontSize: 10, letterSpacing: '0.3em',
              padding: '3px 14px', borderRadius: 20,
              border: `1px solid ${selected.size === NEEDED ? 'rgba(111,184,240,0.4)' : 'rgba(111,184,240,0.14)'}`,
              color: selected.size === NEEDED ? 'var(--glow)' : 'var(--muted-2)',
              transition: 'all 0.3s',
            }}>
              {selected.size} / {NEEDED} SELECTED
            </span>
          </div>
        )}

        {/* Message cards */}
        <div className="space-y-2 mb-5">
          {MSG_FRAGS.map(r => {
            const sel  = selected.has(r.id);
            const bad  = wrongCards.has(r.id);
            const good = done && sel;
            return (
              <button key={r.id}
                onClick={() => toggle(r.id)}
                style={{
                  width: '100%', padding: '11px 14px', textAlign: 'left',
                  borderRadius: 8, cursor: done ? 'default' : 'pointer',
                  transition: 'all 0.22s',
                  display: 'flex', alignItems: 'center', gap: 11,
                  background: good ? 'rgba(35,100,65,0.28)'
                            : bad  ? 'rgba(130,28,28,0.28)'
                            : sel  ? 'rgba(20,60,165,0.28)'
                                   : 'rgba(4,10,28,0.88)',
                  border: `1px solid ${
                    good ? 'rgba(70,200,120,0.55)'
                  : bad  ? 'rgba(210,60,60,0.65)'
                  : sel  ? 'rgba(80,170,255,0.55)'
                         : 'rgba(50,120,220,0.2)'}`,
                }}
              >
                {/* Checkbox */}
                <span style={{
                  width: 16, height: 16, borderRadius: 3, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, fontWeight: 700, transition: 'all 0.2s',
                  background: good ? 'rgba(70,200,120,0.35)'
                            : bad  ? 'rgba(210,60,60,0.35)'
                            : sel  ? 'rgba(80,170,255,0.3)'
                                   : 'transparent',
                  border: `1px solid ${
                    good ? 'rgba(70,200,120,0.6)'
                  : bad  ? 'rgba(210,60,60,0.65)'
                  : sel  ? 'rgba(80,170,255,0.6)'
                         : 'rgba(111,184,240,0.2)'}`,
                  color: good ? 'rgba(70,200,120,0.95)'
                       : bad  ? 'rgba(210,80,80,0.95)'
                              : 'rgba(110,195,255,0.9)',
                }}>
                  {(sel || bad) ? '✓' : ''}
                </span>

                <span className="t-body-it" style={{
                  fontSize: 13,
                  color: good ? 'rgba(80,210,130,0.9)'
                       : bad  ? 'var(--glitch)'
                       : sel  ? 'rgba(130,205,255,0.95)'
                              : 'var(--muted)',
                }}>
                  {r.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Wrong selection feedback */}
        <AnimatePresence>
          {submitting && wrongCards.size > 0 && (
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="terminal text-center mb-4"
              style={{ color: 'var(--glitch)', letterSpacing: '0.18em', fontSize: 10 }}
            >
              These words belong to the archive, not to him.
            </motion.p>
          )}
        </AnimatePresence>

        {/* Submit / close */}
        {!done && (
          <div className="space-y-2">
            <button
              onClick={submit}
              disabled={selected.size !== NEEDED || submitting}
              className="btn w-full"
              style={{ opacity: selected.size === NEEDED && !submitting ? 1 : 0.32, transition: 'opacity 0.3s' }}
            >
              Recover Selected Messages
            </button>
            <button onClick={onClose} className="t-eyebrow"
              style={{ display: 'block', margin: '2px auto 0', color: 'var(--muted-2)', background: 'none', border: 'none', fontSize: 10, letterSpacing: '0.3em', cursor: 'crosshair' }}>
              [ CLOSE ]
            </button>
          </div>
        )}

        {/* Success sequence */}
        {done && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 text-center">
            <p className="terminal" style={{ color: 'var(--phosphor)', letterSpacing: '0.3em' }}>MESSAGE RECOVERED.</p>
            {step >= 1 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
                He sent these while he waited for her at the crossing.
                Four messages. All written before she arrived.
              </motion.p>
            )}
            {step >= 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
                <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 12 }}>
                  "He replaced the last two with words that made it look like he went alone. He did not want her to carry what happened on that crossing."
                </p>
              </motion.div>
            )}
            {step >= 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em' }}>HIM</p>
                <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 12 }}>
                  "Every line I wrote meant: she is coming. I will be here when she arrives."
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
      </motion.div>
    </motion.div>
  );
}

/* ── Blue Door Gate Puzzle ───────────────────────────────────── */
const DOOR_SYMBOLS  = ['shibuya', 'door', 'rain', 'tickets'];
const DOOR_CORRECT  = { shibuya: 'beginning', door: 'promise', rain: 'memory', tickets: 'hope' };
const DOOR_MEANINGS = ['hope', 'promise', 'beginning', 'memory'];

function BlueDoorGatePuzzle({ onSolve, onClose }) {
  const [activeSym,    setActiveSym] = useState(null);
  const [pairs,        setPairs]     = useState({});
  const [wrongFlash,   setWrong]     = useState(false);
  const [done,         setDone]      = useState(false);
  const [step,         setStep]      = useState(0);
  const [showContinue, setShowCon]   = useState(false);

  const usedMeanings = new Set(Object.values(pairs));
  const pairsCount   = Object.keys(pairs).length;

  const pickSym = (s) => {
    if (done || pairs[s]) return;
    setActiveSym(prev => prev === s ? null : s);
  };

  const pickMeaning = (m) => {
    if (!activeSym || done || usedMeanings.has(m)) return;
    if (DOOR_CORRECT[activeSym] === m) {
      const next = { ...pairs, [activeSym]: m };
      setPairs(next);
      setActiveSym(null);
      if (Object.keys(next).length === 4) {
        setDone(true);
        setTimeout(() => setStep(1), 1200);
        setTimeout(() => setStep(2), 3200);
        setTimeout(() => setStep(3), 5200);
        setTimeout(() => setShowCon(true), 7200);
      }
    } else {
      setWrong(true);
      setTimeout(() => setWrong(false), 1400);
    }
  };

  const symLabels = { shibuya: '渋谷', door: 'blue door', rain: 'rain', tickets: 'tickets' };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center p-5"
      style={{ background: 'rgba(1,3,14,0.96)', backdropFilter: 'blur(12px)', zIndex: 70 }}
      onClick={done ? undefined : onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="glass max-w-md w-full p-7"
        style={{ borderColor: 'rgba(80,160,255,0.28)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="text-center mb-4">
          <p className="t-eyebrow mb-1" style={{ color: 'rgba(80,170,255,0.9)', letterSpacing: '0.4em' }}>THE BLUE DOOR</p>
          <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
            "Align each symbol with what it meant to the two of you,
            not what the archive says it became."
          </p>
          {activeSym && !done && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="terminal mt-2" style={{ color: 'var(--glow)', fontSize: 10, letterSpacing: '0.22em' }}>
              → select meaning for: {symLabels[activeSym]}
            </motion.p>
          )}
        </div>

        <div className="flex justify-center mb-5">
          <svg width="80" height="80" viewBox="0 0 80 80">
            <rect x="20" y="10" width="40" height="62" rx="3" fill="none"
              stroke={done ? 'rgba(70,200,120,0.7)' : `rgba(80,160,255,${0.25 + pairsCount * 0.15})`}
              strokeWidth="4" />
            <rect x="20" y="10" width="40" height="62" rx="3"
              fill={done ? 'rgba(40,120,80,0.12)' : `rgba(20,60,160,${0.05 + pairsCount * 0.04})`} />
            <circle cx="53" cy="41" r="4"
              fill={done ? 'rgba(70,200,120,0.9)' : 'rgba(80,160,255,0.5)'}
              style={{ filter: done ? 'drop-shadow(0 0 6px rgba(70,200,120,0.8))' : 'none' }} />
            <text x="40" y="44" textAnchor="middle" fontSize="10"
              fontFamily="var(--mono)" fill={done ? 'rgba(70,200,120,0.8)' : 'rgba(80,160,255,0.5)'}
              letterSpacing="1">
              {pairsCount}/4
            </text>
          </svg>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <div className="space-y-2">
            <p className="t-eyebrow mb-1" style={{ color: 'var(--muted-2)', fontSize: 8, letterSpacing: '0.3em' }}>SYMBOLS</p>
            {DOOR_SYMBOLS.map(s => {
              const paired = pairs[s];
              return (
                <button key={s} onClick={() => pickSym(s)}
                  className="t-eyebrow"
                  style={{
                    display: 'block', width: '100%', padding: '7px 10px',
                    background: activeSym === s ? 'rgba(30,80,200,0.3)' : paired ? 'rgba(25,65,150,0.18)' : 'rgba(4,10,28,0.85)',
                    border: `1px solid ${activeSym === s ? 'rgba(80,180,255,0.6)' : paired ? 'rgba(80,160,255,0.35)' : 'rgba(50,120,230,0.2)'}`,
                    borderRadius: 7, fontSize: 10, letterSpacing: '0.22em', textAlign: 'left',
                    color: activeSym === s ? 'rgba(110,195,255,0.95)' : paired ? 'rgba(70,180,255,0.75)' : 'var(--muted)',
                    cursor: paired ? 'default' : 'pointer', transition: 'all 0.2s',
                  }}>
                  {symLabels[s]}{paired ? ` → ${paired}` : ''}
                </button>
              );
            })}
          </div>

          <div className="space-y-2">
            <p className="t-eyebrow mb-1" style={{ color: 'var(--muted-2)', fontSize: 8, letterSpacing: '0.3em' }}>MEANINGS</p>
            {DOOR_MEANINGS.map(m => {
              const used = usedMeanings.has(m);
              return (
                <button key={m} onClick={() => pickMeaning(m)}
                  className="t-eyebrow"
                  style={{
                    display: 'block', width: '100%', padding: '7px 10px',
                    background: used ? 'rgba(25,65,150,0.15)' : wrongFlash && activeSym ? 'rgba(130,28,28,0.14)' : 'rgba(4,10,28,0.85)',
                    border: `1px solid ${used ? 'rgba(80,160,255,0.28)' : wrongFlash && activeSym ? 'rgba(210,55,55,0.4)' : 'rgba(50,120,230,0.2)'}`,
                    borderRadius: 7, fontSize: 10, letterSpacing: '0.22em',
                    color: used ? 'rgba(70,180,255,0.5)' : 'var(--muted)',
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
            className="terminal text-center mt-3"
            style={{ color: 'var(--glitch)', letterSpacing: '0.2em', fontSize: 10 }}>
            The door does not open. The meaning is wrong.
          </motion.p>
        )}

        {done && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 text-center mt-5">
            <p className="terminal" style={{ color: 'var(--phosphor)', letterSpacing: '0.3em' }}>BLUE DOOR UNLOCKED.</p>
            {step >= 1 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
                The door was never locked against her.
                It was locked against everything that wanted to prevent her
                from being there.
              </motion.p>
            )}
            {step >= 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em' }}>HIM</p>
                <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
                  "I knew the door the moment I found it.
                  I waited until I could show you."
                </p>
              </motion.div>
            )}
            {step >= 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
                <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 12 }}>
                  "I called it an ending. The door called it an arrival."
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

/* ── Info overlay data ───────────────────────────────────────── */
const SHIBUYA_INFO = {
  sign: {
    title: 'SHIBUYA SIGN',
    body: 'The sign above the crossing does not point anywhere. It just says the name of the place. She always thought that was enough — to simply name where you are.',
    quote: '"Not every sign is a direction. Some just say: you are here."',
  },
  cafe: {
    title: 'CAFÉ WINDOW',
    body: 'A window table. She would have pressed her face to the glass when the crossing flooded with people. He would have watched her watching the crowd.',
    quote: '"The city was loud. But she made quiet things louder."',
  },
  rain: {
    title: 'TOKYO RAIN',
    body: 'The rain in Tokyo is different from the rain in Fes. Lighter. It does not announce itself. It simply arrives, the way some things do.',
    quote: '"Every city we planned had rain in it. We liked that."',
  },
};

/* ── Main EP5 Scene ──────────────────────────────────────────── */
const SHIBUYA_LOCS = [
  { id: 'crossing', label: 'The Crossing',   icon: '⊕', pos: { left: '50%',  top: '65%' }                   },
  { id: 'sign',     label: 'Shibuya Sign',   icon: '文', pos: { left: '12%',  top: '38%' }, info: true        },
  { id: 'cafe',     label: 'Café Window',    icon: '□', pos: { left: '32%',  top: '58%' }, info: true        },
  { id: 'rain',     label: 'Tokyo Rain',     icon: '∷', pos: { left: '84%',  top: '28%' }, info: true        },
  { id: 'phone',    label: 'Deleted Message',icon: '▦', pos: { left: '72%',  top: '62%' }                   },
  { id: 'door',     label: 'The Blue Door',  icon: '◫', pos: { left: '50%',  top: '45%' }, isDoor: true      },
];

const EP5_INTRO = [
  'SHIBUYA MEMORY DETECTED.\nJapan itinerary partially recovered.\nCrossing layer: active.',
  'The rain did not stop them.\nThe lights changed.\nSomewhere on the crossing, a moment is still waiting.',
];

function SceneShibuyaMap({ onComplete }) {
  const [crossingSolved, setCrossing] = useState(false);
  const [phoneSolved,    setPhone]    = useState(false);

  const [overlay,   setOverlay]  = useState(null);
  const [mapPhase,  setMapPhase] = useState('intro');
  const [introStep, setIntro]    = useState(0);
  const [showMsg,   setShowMsg]  = useState(false);
  const [collapsed, setCollapsed]= useState(false);

  const allSolved = crossingSolved && phoneSolved;

  useEffect(() => {
    const ts = [
      [700,  () => setIntro(1)],
      [3000, () => setIntro(2)],
      [5800, () => setIntro(3)],
      [8200, () => { setMapPhase('map'); setTimeout(() => setShowMsg(true), 2000); }],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  const handleLocClick = (loc) => {
    if (loc.isDoor) {
      if (allSolved) setOverlay('door');
      return;
    }
    setOverlay(loc.id);
  };

  const solvedMap = { crossing: crossingSolved, phone: phoneSolved };

  if (mapPhase === 'hidden')  return <Ep5HiddenTruth onDone={() => setMapPhase('ending')} />;
  if (mapPhase === 'ending')  return <Ep5Ending onComplete={onComplete} />;

  return (
    <SceneShell style={{ background: '#01030c' }}>
      <ShibuyaSVG collapsed={collapsed} />
      <Atmosphere />

      {/* Intro */}
      {mapPhase === 'intro' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8" style={{ zIndex: 20 }}>
          <div className="max-w-md text-center space-y-5">
            {introStep >= 1 && (
              <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                className="terminal"
                style={{ color: 'var(--glow)', letterSpacing: '0.32em', fontSize: 11, whiteSpace: 'pre-line' }}>
                {EP5_INTRO[0]}
              </motion.p>
            )}
            {introStep >= 2 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="t-body-it" style={{ color: 'var(--muted)', fontSize: 14, whiteSpace: 'pre-line' }}>
                {EP5_INTRO[1]}
              </motion.p>
            )}
            {introStep >= 3 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="t-eyebrow" style={{ color: 'var(--muted-2)', fontSize: 9, letterSpacing: '0.4em' }}>
                LOADING CROSSING MEMORY…
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
            <p className="t-eyebrow" style={{ color: 'rgba(80,180,255,0.6)', letterSpacing: '0.38em', fontSize: 9 }}>
              MEMORY ARCHIVE · TOKYO
            </p>
            <p className="t-eyebrow" style={{ color: 'rgba(80,180,255,0.32)', letterSpacing: '0.3em', fontSize: 8 }}>
              EPISODE 5 · SHIBUYA WAS NEVER EMPTY
            </p>
          </div>

          {/* Progress pips */}
          <div className="absolute flex gap-2" style={{ top: 16, right: 20 }}>
            {[crossingSolved, phoneSolved, allSolved].map((s, i) => (
              <span key={i} className={'clue-pip' + (s ? ' clue-pip--on' : '')} />
            ))}
          </div>

          {/* Location buttons */}
          {SHIBUYA_LOCS.map(loc => {
            const solved      = solvedMap[loc.id] || false;
            const isGateLock  = loc.isDoor && !allSolved;
            return (
              <div key={loc.id} className="absolute" style={loc.pos}>
                <button
                  className={
                    'shibya-loc-btn' +
                    (solved      ? ' shibya-loc-btn--solved'   : '') +
                    (loc.isDoor && !isGateLock ? ' shibya-loc-btn--door-open' : '') +
                    (loc.isDoor && isGateLock  ? ' shibya-loc-btn--door'      : '')
                  }
                  onClick={() => !isGateLock && handleLocClick(loc)}
                  title={isGateLock ? 'Solve the crossing and message puzzles first' : loc.label}
                >
                  <span style={{ fontSize: 16 }}>{loc.icon}</span>
                  <span className="t-eyebrow"
                    style={{ color: solved ? 'rgba(70,200,120,0.9)' : 'var(--muted)', fontSize: 8, letterSpacing: '0.22em' }}>
                    {loc.label}
                  </span>
                  {loc.isDoor && (
                    <span className="t-eyebrow"
                      style={{ color: allSolved ? 'rgba(70,200,120,0.8)' : 'rgba(50,90,150,0.5)', fontSize: 7, letterSpacing: '0.2em' }}>
                      {allSolved ? 'OPEN' : 'LOCKED'}
                    </span>
                  )}
                  {!loc.isDoor && !loc.info && !solved && <span className="shibya-loc-dot" />}
                </button>
              </div>
            );
          })}

          {/* Bottom message panel */}
          {showMsg && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute"
              style={{ bottom: 22, left: '50%', transform: 'translateX(-50%)', width: '92%', maxWidth: 480 }}>
              <div className="glass px-5 py-4 space-y-3">
                <div>
                  <p className="t-eyebrow mb-1" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
                  <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 12 }}>
                    "He deleted the itinerary because it showed she was there when it happened.
                    I kept a copy. That is why you are here."
                  </p>
                </div>
                <div className="divider-line h-px" />
                <div>
                  <p className="t-eyebrow mb-1" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em' }}>HIM</p>
                  <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 12 }}>
                    "I chose the crossing because it was the most beautiful place I had seen.
                    I never got to show her."
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Info overlays */}
      {overlay && SHIBUYA_INFO[overlay] && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center p-6"
          style={{ background: 'rgba(1,3,14,0.88)', backdropFilter: 'blur(8px)', zIndex: 60 }}
          onClick={() => setOverlay(null)}>
          <motion.div initial={{ scale: 0.92, y: 14 }} animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="glass max-w-sm w-full p-7 text-center"
            style={{ borderColor: 'rgba(80,160,255,0.25)' }}
            onClick={e => e.stopPropagation()}>
            <p className="t-eyebrow mb-3" style={{ color: 'rgba(80,180,255,0.9)', letterSpacing: '0.4em' }}>
              {SHIBUYA_INFO[overlay].title}
            </p>
            <p className="t-body-it mb-3" style={{ color: 'var(--muted)', fontSize: 14 }}>
              {SHIBUYA_INFO[overlay].body}
            </p>
            <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
              {SHIBUYA_INFO[overlay].quote}
            </p>
            <button className="t-eyebrow mt-6"
              style={{ color: 'var(--muted-2)', background: 'none', border: 'none', fontSize: 10, letterSpacing: '0.3em', cursor: 'pointer' }}
              onClick={() => setOverlay(null)}>[ CLOSE ]</button>
          </motion.div>
        </motion.div>
      )}

      {/* Puzzle overlays */}
      {overlay === 'crossing' && !crossingSolved && (
        <ScrambleMemoryPuzzle
          onSolve={() => { setCrossing(true); setOverlay(null); }}
          onClose={() => setOverlay(null)}
        />
      )}
      {overlay === 'phone' && !phoneSolved && (
        <DeletedMessagePuzzle
          onSolve={() => { setPhone(true); setOverlay(null); }}
          onClose={() => setOverlay(null)}
        />
      )}
      {overlay === 'door' && (
        <BlueDoorGatePuzzle
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
          style={{ background: 'rgba(1,3,14,0.85)', backdropFilter: 'blur(8px)', zIndex: 60 }}
          onClick={() => setOverlay(null)}>
          <motion.div initial={{ scale: 0.92, y: 14 }} animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="glass max-w-sm w-full p-7 text-center"
            style={{ borderColor: 'rgba(70,200,120,0.28)' }}
            onClick={e => e.stopPropagation()}>
            <p className="t-eyebrow mb-3" style={{ color: 'rgba(70,200,120,0.9)', letterSpacing: '0.4em' }}>MEMORY RESTORED</p>
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

/* ── Hidden Archive Truth ────────────────────────────────────── */
function Ep5HiddenTruth({ onDone }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const ts = [
      [700,   () => setStep(1)],
      [2400,  () => setStep(2)],
      [4000,  () => setStep(3)],
      [5500,  () => setStep(4)],
      [7000,  () => setStep(5)],
      [8600,  () => setStep(6)],
      [10200, () => setStep(7)],
      [12000, () => setStep(8)],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="fixed inset-0 flex flex-col items-center justify-center px-8 py-12"
      style={{ background: 'rgba(1,2,12,0.99)', zIndex: 80 }}>
      <Particles count={14} intensity={0.38} />
      <div className="max-w-md w-full space-y-5" style={{ zIndex: 10, position: 'relative' }}>

        {step >= 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="glass px-5 py-3" style={{ borderColor: 'rgba(80,180,255,0.35)' }}>
            <p className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.3em' }}>
              Full itinerary recovered.
            </p>
          </motion.div>
        )}
        {step >= 2 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--muted-2)', letterSpacing: '0.22em' }}>
            JAPAN_ITINERARY_FINAL — 18 days. 4 cities.
          </motion.p>
        )}
        {step >= 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="glass px-5 py-3" style={{ borderColor: 'rgba(80,180,255,0.32)' }}>
            {['Tokyo — 5 days', 'Kyoto — 4 days', 'Osaka — 3 days', '░░░░░░░ — 6 days'].map((line, i) => (
              <p key={i} className="terminal"
                style={{ color: `rgba(80,${150+i*20},255,${0.55 - i * 0.08})`, fontSize: 9, letterSpacing: '0.18em' }}>
                {line}
              </p>
            ))}
          </motion.div>
        )}
        {step >= 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="glass px-5 py-3" style={{ borderColor: 'rgba(80,180,255,0.35)' }}>
            <p className="terminal mb-1" style={{ color: 'var(--muted-2)', fontSize: 9, letterSpacing: '0.3em' }}>
              Last entry before deletion:
            </p>
            <p className="t-body-it" style={{ color: 'rgba(130,200,255,0.92)', fontSize: 14 }}>
              "Day 1 — Shibuya crossing. 09:12. Her train cancelled. Still waiting."
            </p>
          </motion.div>
        )}
        {step >= 5 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
            <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em' }}>HIM</p>
            <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
              "She was two hours away. I went to find the spot she would have loved."
            </p>
          </motion.div>
        )}
        {step >= 6 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
            <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
              "A car crossed the signal at the wrong moment."
            </p>
          </motion.div>
        )}
        {step >= 7 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
            <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
            <p className="t-body-it" style={{ color: 'var(--glitch)', fontSize: 13 }}>
              "He was standing exactly where she was supposed to stand. The accident was meant for her."
            </p>
          </motion.div>
        )}
        {step >= 8 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <button className="btn btn--lg pulse-glow" onClick={onDone}>Continue</button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

/* ── EP5 Ending ──────────────────────────────────────────────── */
function Ep5Ending({ onComplete }) {
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
    <div className="ep5-ending">
      <Particles count={18} intensity={0.4} />
      <div className="max-w-md text-center space-y-5" style={{ zIndex: 10, position: 'relative' }}>
        {step >= 1 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.35em', fontSize: 11 }}>
            Shibuya memory stabilized.
          </motion.p>
        )}
        {step >= 2 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.3em', fontSize: 11 }}>
            Full itinerary recovered.
          </motion.p>
        )}
        {step >= 3 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal" style={{ color: 'var(--glitch)', letterSpacing: '0.25em', fontSize: 11 }}>
            Next archive location unlocked: THE_BLUE_DOOR
          </motion.p>
        )}
        {step >= 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
            <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
              "Now you know what he was carrying alone."
            </p>
          </motion.div>
        )}
        {step >= 5 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
            <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em' }}>HIM</p>
            <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
              "I did not want it to be your weight to carry."
            </p>
          </motion.div>
        )}
        {step >= 6 && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-28 h-px mx-auto mb-5 divider-line" />
            <p className="t-display"
              style={{ fontSize: 'clamp(22px,3.5vw,40px)', color: 'var(--text)', letterSpacing: '0.38em', fontWeight: 300 }}>
              END  OF  EPISODE  5
            </p>
          </motion.div>
        )}
        {step >= 7 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 15 }}>
              Next memory: The Blue Door
            </p>
            <p className="t-body-it" style={{ color: 'var(--glitch)', fontSize: 14, letterSpacing: '0.06em' }}>
              "The itinerary did not reveal where they were going.
              It revealed that he had always intended to take her."
            </p>
            <button className="btn pulse-glow" onClick={onComplete}>
              Begin Episode 6
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { SceneEp5Unlock, SceneShibuyaMap });
