/* ============================================================
   EPISODE 3 — THE EDITED CITY
   Dreamlike Fes memory: cats, lilies, candles, moonlit road.
   ============================================================ */

/* ── Pre-computed star positions (stable) ─────────────────── */
const FES_STARS = Array.from({ length: 58 }, (_, i) => ({
  x:  ((i * 137 + 53) % 1500) + 50,
  y:  ((i * 89  + 23) % 760)  + 18,
  r:  0.7 + (i % 3) * 0.55,
  op: 0.22 + (i % 5) * 0.13,
}));

/* ── Fes Memory Map SVG Background ──────────────────────────── */
function FesMapSVG({ collapsed }) {
  return (
    <div className={'fes-stage' + (collapsed ? ' fes-stage--collapsed' : '')}>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="fes-svg">
        <defs>
          <linearGradient id="fsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#010309" />
            <stop offset="50%"  stopColor="#030b1f" />
            <stop offset="100%" stopColor="#050e28" />
          </linearGradient>
          <radialGradient id="fmg" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(215,225,255,0.92)" />
            <stop offset="42%"  stopColor="rgba(180,205,255,0.62)" />
            <stop offset="100%" stopColor="rgba(90,130,220,0)"     />
          </radialGradient>
          <linearGradient id="fgnd" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#060e24" />
            <stop offset="100%" stopColor="#030810" />
          </linearGradient>
          <linearGradient id="fwall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0b1830" />
            <stop offset="100%" stopColor="#06101e" />
          </linearGradient>
          <radialGradient id="fplaz" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(100,160,240,0.07)" />
            <stop offset="100%" stopColor="rgba(100,160,240,0)"    />
          </radialGradient>
          <radialGradient id="fcatg" cx="50%" cy="50%" r="55%">
            <stop offset="0%"   stopColor="rgba(230,165,80,0.09)" />
            <stop offset="100%" stopColor="rgba(230,165,80,0)"    />
          </radialGradient>
          <radialGradient id="fllyg" cx="50%" cy="50%" r="55%">
            <stop offset="0%"   stopColor="rgba(215,185,255,0.08)" />
            <stop offset="100%" stopColor="rgba(215,185,255,0)"    />
          </radialGradient>
          <radialGradient id="fcndg" cx="50%" cy="50%" r="55%">
            <stop offset="0%"   stopColor="rgba(255,185,60,0.1)" />
            <stop offset="100%" stopColor="rgba(255,185,60,0)"   />
          </radialGradient>
          <radialGradient id="fmng" cx="50%" cy="50%" r="55%">
            <stop offset="0%"   stopColor="rgba(180,215,255,0.07)" />
            <stop offset="100%" stopColor="rgba(180,215,255,0)"    />
          </radialGradient>
          <radialGradient id="fgtg" cx="50%" cy="50%" r="55%">
            <stop offset="0%"   stopColor="rgba(55,120,240,0.1)" />
            <stop offset="100%" stopColor="rgba(55,120,240,0)"   />
          </radialGradient>
        </defs>

        {/* Sky */}
        <rect width="1600" height="900" fill="url(#fsky)" />

        {/* Stars */}
        {FES_STARS.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fill={`rgba(255,255,255,${s.op})`} />
        ))}

        {/* Moon halo + disk */}
        <ellipse cx="1392" cy="88" rx="118" ry="118" fill="url(#fmg)" />
        <circle  cx="1392" cy="88" r="36"   fill="rgba(215,228,255,0.88)" />
        <circle  cx="1379" cy="80" r="6.5"  fill="rgba(185,205,245,0.22)" />
        <circle  cx="1400" cy="99" r="4.5"  fill="rgba(185,205,245,0.17)" />

        {/* Horizon silhouette */}
        <path d="M0,502 L95,465 L185,482 L285,447 L404,458 L492,428 L614,442 L734,416 L862,434 L972,409 L1092,427 L1224,402 L1355,420 L1475,398 L1600,410 L1600,900 L0,900 Z"
          fill="url(#fgnd)" />

        {/* City walls */}
        <path d="M0,578 L128,557 L128,514 L148,514 L148,557 L214,542 L214,507 L236,507 L236,542 L344,526 L344,900 L0,900 Z"
          fill="url(#fwall)" />
        <path d="M1600,570 L1478,550 L1478,512 L1458,512 L1458,550 L1378,536 L1378,900 L1600,900 Z"
          fill="url(#fwall)" />

        {/* Buildings — left cluster */}
        <rect x="55"  y="478" width="85"  height="162" fill="#060e22" />
        <rect x="78"  y="458" width="40"  height="22"  fill="#050c1e" />
        <rect x="152" y="490" width="62"  height="150" fill="#060d21" />
        <rect x="244" y="466" width="88"  height="170" fill="#070f24" />
        <rect x="275" y="445" width="28"  height="24"  fill="#050c1e" />
        <rect x="287" y="434" width="6"   height="14"  fill="#04091a" />

        {/* Buildings — center-left */}
        <rect x="380" y="458" width="98"  height="180" fill="#061020" />
        <rect x="420" y="436" width="22"  height="24"  fill="#040b1c" />
        <rect x="492" y="472" width="72"  height="166" fill="#070f22" />

        {/* Buildings — center */}
        <rect x="682" y="442" width="55"  height="178" fill="#06101e" />
        <rect x="752" y="456" width="46"  height="162" fill="#060f1c" />
        <rect x="822" y="446" width="62"  height="172" fill="#070f20" />
        <rect x="840" y="426" width="20"  height="24"  fill="#040a1a" />

        {/* Buildings — right */}
        <rect x="1054" y="458" width="88"  height="175" fill="#070f22" />
        <rect x="1084" y="438" width="24"  height="24"  fill="#040b1c" />
        <rect x="1148" y="468" width="72"  height="165" fill="#060e20" />
        <rect x="1234" y="455" width="96"  height="178" fill="#07101e" />

        {/* Arched doorways */}
        <path d="M278,530 A18,22 0 0,1 314,530 L314,568 L278,568 Z" fill="#040a18" />
        <path d="M496,536 A16,20 0 0,1 528,536 L528,574 L496,574 Z" fill="#040a18" />
        <path d="M826,530 A17,21 0 0,1 860,530 L860,568 L826,568 Z" fill="#040a18" />
        <path d="M1056,532 A17,21 0 0,1 1088,532 L1088,570 L1056,570 Z" fill="#040a18" />

        {/* Ground */}
        <rect x="0" y="608" width="1600" height="292" fill="url(#fgnd)" />
        <rect x="0" y="608" width="1600" height="2"   fill="rgba(111,184,240,0.04)" />

        {/* Central plaza */}
        <ellipse cx="800" cy="562" rx="328" ry="168" fill="url(#fplaz)" />
        <polygon points="678,620 720,588 882,588 924,620 882,652 720,652"
          fill="#060f22" stroke="rgba(111,184,240,0.07)" strokeWidth="1" />
        <ellipse cx="800" cy="620" rx="38" ry="13"   fill="#070e20" stroke="rgba(111,184,240,0.11)" strokeWidth="1" />
        <ellipse cx="800" cy="620" rx="20" ry="7"    fill="rgba(111,184,240,0.06)" />
        <line x1="800" y1="608" x2="800" y2="598"   stroke="rgba(111,184,240,0.16)" strokeWidth="1.5" />
        <circle cx="800" cy="620" r="54" fill="none" stroke="rgba(111,184,240,0.05)" strokeWidth="1" strokeDasharray="4,6" />

        {/* Street paths */}
        <path d="M350,248 Q418,320 452,392"  stroke="rgba(111,184,240,0.17)" strokeWidth="1.5" fill="none" strokeDasharray="6,4" />
        <path d="M494,398 Q604,350 726,300"  stroke="rgba(111,184,240,0.14)" strokeWidth="1.5" fill="none" strokeDasharray="5,4" />
        <path d="M760,310 Q730,424 700,506"  stroke="rgba(200,170,255,0.11)" strokeWidth="1.5" fill="none" strokeDasharray="5,4" />
        <path d="M730,514 Q875,504 1014,444" stroke="rgba(175,210,255,0.12)" strokeWidth="1.5" fill="none" strokeDasharray="5,4" />
        <path d="M700,514 Q760,592 794,644"  stroke="rgba(111,184,240,0.11)" strokeWidth="1.5" fill="none" strokeDasharray="5,4" />
        <path d="M1014,450 Q925,570 812,644" stroke="rgba(111,184,240,0.09)" strokeWidth="1.5" fill="none" strokeDasharray="5,4" />

        {/* Location ambient glows */}
        <ellipse cx="350"  cy="242" rx="55" ry="40"  fill="rgba(111,184,240,0.06)" />
        <ellipse cx="457"  cy="392" rx="62" ry="46"  fill="url(#fcatg)" />
        <ellipse cx="750"  cy="296" rx="64" ry="46"  fill="url(#fllyg)" />
        <ellipse cx="702"  cy="512" rx="68" ry="50"  fill="url(#fcndg)" />
        <ellipse cx="1022" cy="437" rx="67" ry="50"  fill="url(#fmng)"  />
        <ellipse cx="800"  cy="652" rx="72" ry="52"  fill="url(#fgtg)"  />

        {/* Hello Kitty corrupted ghost */}
        <text x="1155" y="457" fontSize="9" opacity="0.06" fill="rgba(255,200,200,1)" fontFamily="sans-serif">ʜᴋ</text>

        {/* Mist */}
        <ellipse cx="380"  cy="600" rx="368" ry="112" fill="rgba(10,25,60,0.13)" />
        <ellipse cx="1220" cy="582" rx="314" ry="98"  fill="rgba(10,25,60,0.11)" />

        {/* Vignette */}
        <rect x="0"    y="0" width="55"  height="900" fill="rgba(0,0,0,0.2)"  />
        <rect x="1545" y="0" width="55"  height="900" fill="rgba(0,0,0,0.2)"  />
        <rect x="0"    y="822" width="1600" height="78" fill="rgba(0,0,0,0.24)" />
      </svg>
    </div>
  );
}

/* ── Ring silhouette ─────────────────────────────────────────── */
function RingSVG({ size = 64, opacity = 0.7 }) {
  return (
    <svg className="ring-svg" width={size} height={size} viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="24" fill="none"
        stroke={`rgba(175,210,255,${opacity})`} strokeWidth="5.5" />
      <circle cx="32" cy="32" r="19" fill="none"
        stroke={`rgba(175,210,255,${opacity * 0.45})`} strokeWidth="1.5" />
      <path d="M28,20 Q32,16 36,20" fill="none"
        stroke={`rgba(240,220,180,${opacity * 0.65})`} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* ── Cat Coffee Shop Puzzle ──────────────────────────────────── */
const CATS = [
  { id: 'door',     Icon: CatAlert,    name: 'At the Door',      desc: 'Staring at the locked door'       },
  { id: 'sleeping', Icon: CatSleeping, name: 'Under the Chair',  desc: 'Sleeping under a dark blue chair' },
  { id: 'lily',     Icon: CatReaching, name: 'At the Flower',    desc: 'Knocking over a lily'             },
  { id: 'scratch',  Icon: CatScratch,  name: 'On the Couch',     desc: 'Scratching the couch'             },
  { id: 'cup',      Icon: CatSitting,  name: 'Beside the Cup',   desc: 'Sitting beside a warm cup'        },
];
const CAT_ORDER = ['sleeping', 'cup', 'scratch', 'lily', 'door'];

function CatCoffeePuzzle({ onSolve, onClose }) {
  const [seq,         setSeq]     = useState([]);
  const [wrong,       setWrong]   = useState(false);
  const [done,        setDone]    = useState(false);
  const [showContinue,setShowCon] = useState(false);

  const handleCat = (id) => {
    if (wrong || done) return;
    const next = [...seq, id];
    setSeq(next);
    if (next.length < 5) return;
    const ok = next.every((v, i) => v === CAT_ORDER[i]);
    if (ok) {
      setDone(true);
      setTimeout(() => setShowCon(true), 2400);
    } else {
      setWrong(true);
      setTimeout(() => { setSeq([]); setWrong(false); }, 1600);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center p-5"
      style={{ background: 'rgba(2,6,15,0.92)', backdropFilter: 'blur(10px)', zIndex: 70 }}
      onClick={done ? undefined : onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="glass max-w-lg w-full p-7"
        style={{ borderColor: 'rgba(111,184,240,0.28)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <p className="t-eyebrow mb-1" style={{ color: 'var(--glow)', letterSpacing: '0.4em' }}>CAT COFFEE SHOP</p>
          <p className="t-body-it mb-3" style={{ color: 'var(--muted)', fontSize: 13 }}>
            "Click them in the order they noticed the memory changing."
          </p>
          <div className="glass px-4 py-3" style={{ background: 'rgba(3,9,18,0.7)', borderColor: 'rgba(111,184,240,0.12)', textAlign: 'left' }}>
            <p className="t-eyebrow mb-1" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.3em' }}>UNKNOWN_ARCHIVE</p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 12 }}>
              "The most comfortable one felt the change first.
              The one watching the door felt it last."
            </p>
          </div>
        </div>

        <div className="cat-grid mb-5">
          {CATS.map(cat => {
            const idx = seq.indexOf(cat.id);
            return (
              <button
                key={cat.id}
                className={
                  'cat-card' +
                  (idx !== -1 && !wrong ? ' cat-card--sel' : '') +
                  (wrong ? ' cat-card--wrong' : '') +
                  (done && idx !== -1 ? ' cat-card--correct' : '')
                }
                onClick={() => handleCat(cat.id)}
              >
                {idx !== -1 && !wrong && <span className="cat-num">{idx + 1}</span>}
                <div style={{ height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <cat.Icon size={44} />
                </div>
                <span className="t-eyebrow" style={{ color: 'var(--muted)', fontSize: 9, letterSpacing: '0.2em' }}>{cat.name}</span>
                <span className="t-body-it" style={{ color: 'var(--muted-2)', fontSize: 10 }}>{cat.desc}</span>
              </button>
            );
          })}
        </div>

        {!done && !wrong && (
          <p className="terminal text-center" style={{ color: 'var(--muted-2)', fontSize: 10 }}>
            {seq.length === 0 ? 'The café is empty except for the cats.' : `${seq.length} of 5 selected…`}
          </p>
        )}
        {wrong && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal text-center" style={{ color: 'var(--glitch)', letterSpacing: '0.2em' }}>
            The cats scatter. The memory refuses the order.
          </motion.p>
        )}
        {done && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            className="space-y-4 text-center">
            <p className="terminal" style={{ color: 'var(--phosphor)', letterSpacing: '0.3em' }}>
              CAT MEMORY RESTORED.
            </p>
            <p className="t-eyebrow" style={{ color: 'var(--muted-2)', fontSize: 10, letterSpacing: '0.25em' }}>
              The animals noticed the loop before you did.
            </p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 14 }}>
              "A cat watched him look at her like he already knew this memory would matter."
            </p>
            {showContinue && (
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                <button className="btn pulse-glow" onClick={onSolve}>Continue</button>
              </motion.div>
            )}
          </motion.div>
        )}

        {!done && (
          <button onClick={onClose} className="t-eyebrow"
            style={{ display: 'block', margin: '18px auto 0', color: 'var(--muted-2)', background: 'none', border: 'none', fontSize: 10, letterSpacing: '0.3em' }}>
            [ CLOSE ]
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ── Lily Petal Puzzle ───────────────────────────────────────── */
const PETALS    = ['ring', 'you', 'stay', 'moon', 'promise', 'cold', 'will', 'me'];
const LILY_ANS  = ['promise', 'me', 'you', 'will', 'stay'];

function LilyPetalPuzzle({ onSolve, onClose }) {
  const [built,       setBuilt]   = useState([]);
  const [wrong,       setWrong]   = useState(false);
  const [solved,      setSolved]  = useState(false);
  const [glitched,    setGlitch]  = useState(false);
  const [showRing,    setShowRing]= useState(false);
  const [removed,     setRemoved] = useState(false);
  const [showContinue,setShowCon] = useState(false);

  const addWord = (w) => {
    if (wrong || solved) return;
    setBuilt(prev => [...prev, w]);
  };
  const clear = () => { if (!solved) setBuilt([]); };

  const check = () => {
    const ok = built.length === LILY_ANS.length && built.every((w, i) => w === LILY_ANS[i]);
    if (ok) {
      setSolved(true);
      setTimeout(() => setGlitch(true),   1200);
      setTimeout(() => setShowRing(true),  2600);
      setTimeout(() => setRemoved(true),   4400);
      setTimeout(() => setShowCon(true),   6000);
    } else {
      setWrong(true);
      setTimeout(() => { setWrong(false); setBuilt([]); }, 1600);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center p-5"
      style={{ background: 'rgba(2,6,15,0.92)', backdropFilter: 'blur(10px)', zIndex: 70 }}
      onClick={solved ? undefined : onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="glass max-w-md w-full p-7"
        style={{ borderColor: 'rgba(195,155,255,0.3)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <p className="t-eyebrow mb-1" style={{ color: 'rgba(215,185,255,0.9)', letterSpacing: '0.4em' }}>LILY STAND</p>
          <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
            "Arrange the petals into the sentence the memory first recorded."
          </p>
        </div>

        {/* Sentence display */}
        <div className="petal-sentence mb-5">
          {built.length === 0
            ? <span className="t-eyebrow" style={{ color: 'var(--muted-2)', fontSize: 9, letterSpacing: '0.25em', margin: 'auto' }}>click petals to build</span>
            : built.map((w, i) => {
                const isStay = w === 'stay' && glitched;
                return (
                  <span key={i} className={'petal-sw' + (isStay ? ' petal-sw--glitch' : '')}>
                    {isStay ? 'remember' : w}
                  </span>
                );
              })
          }
        </div>

        {/* Word tiles */}
        {!solved && (
          <div className="petal-grid mb-5">
            {PETALS.map(w => (
              <button key={w}
                className={'petal-word' + (built.includes(w) ? ' petal-word--used' : '')}
                onClick={() => addWord(w)}
                disabled={built.includes(w)}
              >{w}</button>
            ))}
          </div>
        )}

        {wrong && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="terminal text-center mb-4" style={{ color: 'var(--glitch)', letterSpacing: '0.22em' }}>
            The petals wilt. That was not the original sentence.
          </motion.p>
        )}

        {solved && glitched && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 text-center">
            <p className="terminal" style={{ color: 'rgba(215,185,255,0.9)', letterSpacing: '0.3em' }}>LILY MEMORY RESTORED.</p>
            {showRing && (
              <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} className="ring-silhouette flex justify-center">
                <RingSVG size={62} opacity={0.72} />
              </motion.div>
            )}
            <div className="space-y-2">
              <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 10, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
              <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
                "He could overwrite places. He could overwrite dates.
                But he could not overwrite promises."
              </p>
            </div>
            <div className="space-y-2">
              <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 10, letterSpacing: '0.35em' }}>HIM</p>
              <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>"It was not meant to trap you. It was just something real."</p>
            </div>
            {removed && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.28em', fontSize: 10 }}>PROMISE OBJECT DETECTED.</p>
                <p className="terminal" style={{ color: 'var(--muted-2)', letterSpacing: '0.22em', fontSize: 10 }}>FULL ACCESS DEFERRED.</p>
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
          <div className="flex gap-3 justify-center mt-2">
            <button className="btn" onClick={check} disabled={built.length === 0}>Confirm</button>
            <button className="t-eyebrow" onClick={clear}
              style={{ color: 'var(--muted-2)', background: 'none', border: 'none', fontSize: 10, letterSpacing: '0.3em', cursor: 'pointer' }}>
              CLEAR
            </button>
            <button onClick={onClose} className="t-eyebrow"
              style={{ color: 'var(--muted-2)', background: 'none', border: 'none', fontSize: 10, letterSpacing: '0.3em', cursor: 'pointer' }}>
              CLOSE
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ── Candlelight Shadow Puzzle ───────────────────────────────── */
const CANDLES = [
  { id: 'memory',   label: 'Memory'   },
  { id: 'fear',     label: 'Fear'     },
  { id: 'moon',     label: 'Moon'     },
  { id: 'promise',  label: 'Promise'  },
  { id: 'distance', label: 'Distance' },
  { id: 'truth',    label: 'Truth'    },
];
const CANDLE_CORRECT = new Set(['moon', 'promise', 'truth']);
const WRONG_SHADOWS  = ['HE VANISHED', 'SHE FORGOT', 'THE CITY REMEMBERS', 'THE RING REMAINED', 'THE ROAD CHANGED'];

function CandlelightPuzzle({ onSolve, onClose }) {
  const [lit,         setLit]       = useState(new Set());
  const [shadow,      setShadow]    = useState('');
  const [shadowKey,   setShadowKey] = useState(0);
  const [reveal,      setReveal]    = useState(false);
  const [showScene,   setShowScene] = useState(false);
  const [removed,     setRemoved]   = useState(false);
  const [showContinue,setShowCon]   = useState(false);

  const isCorrect = (s) =>
    s.size === 3 && [...CANDLE_CORRECT].every(id => s.has(id));

  const toggle = (id) => {
    if (reveal) return;
    setLit(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      if (isCorrect(next)) {
        setTimeout(() => setReveal(true),    300);
        setTimeout(() => setShowScene(true), 2000);
        setTimeout(() => setRemoved(true),   4200);
        setTimeout(() => setShowCon(true),   6000);
      } else if (next.size > 0) {
        const msg = WRONG_SHADOWS[Math.floor(Math.random() * WRONG_SHADOWS.length)];
        setShadow(msg);
        setShadowKey(k => k + 1);
      } else {
        setShadow('');
      }
      return next;
    });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center p-5"
      style={{ background: 'rgba(2,6,15,0.92)', backdropFilter: 'blur(10px)', zIndex: 70 }}
      onClick={reveal ? undefined : onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="glass max-w-md w-full p-7"
        style={{ borderColor: 'rgba(240,170,55,0.25)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="text-center mb-5">
          <p className="t-eyebrow mb-1" style={{ color: 'rgba(240,180,80,0.9)', letterSpacing: '0.4em' }}>CANDLELIGHT FESTIVAL</p>
          <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
            "Not every light reveals the truth. Some only make prettier lies."
          </p>
        </div>

        <div className="candle-grid mb-5">
          {CANDLES.map(c => (
            <button key={c.id}
              className={'candle-btn' + (lit.has(c.id) ? ' candle-btn--on' : '')}
              onClick={() => toggle(c.id)}
            >
              <CandleIcon lit={lit.has(c.id)} size={28} />
              <span className="t-eyebrow" style={{ color: lit.has(c.id) ? 'rgba(255,215,100,0.9)' : 'var(--muted)', fontSize: 10, letterSpacing: '0.22em' }}>
                {c.label}
              </span>
            </button>
          ))}
        </div>

        {/* Shadow message display */}
        {!reveal && shadow && (
          <div key={shadowKey} className="shadow-msg mb-4" style={{ color: 'var(--glitch)', letterSpacing: '0.35em' }}>
            {shadow}
          </div>
        )}

        {reveal && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 text-center">
            <div className="glass px-5 py-4" style={{ background: 'rgba(2,5,14,0.9)', borderColor: 'rgba(240,170,55,0.3)' }}>
              <p className="terminal mb-2" style={{ color: 'rgba(240,200,100,0.9)', letterSpacing: '0.3em' }}>
                THE LIGHT WAS NOT THE MEMORY.
              </p>
              <p className="terminal" style={{ color: 'rgba(240,200,100,0.7)', letterSpacing: '0.3em' }}>
                THE SHADOW WAS.
              </p>
            </div>

            {showScene && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
                  "A silhouette of him reaches into his pocket.
                  Something circular glints under the candlelight."
                </p>
                <div className="flex justify-center">
                  <RingSVG size={52} opacity={0.55} />
                </div>
                <div className="space-y-1">
                  <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
                  <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 12 }}>
                    "He tried to bury this one. The candlelight kept it alive."
                  </p>
                </div>
              </motion.div>
            )}
            {removed && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.28em', fontSize: 10 }}>PROMISE OBJECT DETECTED.</p>
                <p className="terminal" style={{ color: 'var(--muted-2)', letterSpacing: '0.22em', fontSize: 10 }}>MEMORY TOO FRAGILE TO OPEN HERE.</p>
              </motion.div>
            )}
            {showContinue && (
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                <button className="btn pulse-glow" onClick={onSolve}>Continue</button>
              </motion.div>
            )}
          </motion.div>
        )}

        {!reveal && (
          <button onClick={onClose} className="t-eyebrow"
            style={{ display: 'block', margin: '14px auto 0', color: 'var(--muted-2)', background: 'none', border: 'none', fontSize: 10, letterSpacing: '0.3em' }}>
            [ CLOSE ]
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ── Stormy-Moon Memory Puzzle ───────────────────────────────── */
const MOON_CHOICES = [
  {
    id: 'early',
    text: 'In the early morning, while it was still dark.',
    feedback: 'The song hadn\'t started yet. The moment was still becoming.',
  },
  {
    id: 'midnight',
    text: 'Under the full moon, when the road went quiet.',
    correct: true,
  },
  {
    id: 'late',
    text: 'Just before they turned back home.',
    feedback: 'The moment had already passed by then.',
  },
];

function StormyMoonPuzzle({ onSolve, onClose }) {
  const [wrongId,      setWrongId]  = useState(null);
  const [feedback,     setFeedback] = useState('');
  const [solved,       setSolved]   = useState(false);
  const [step,         setStep]     = useState(0);
  const [showContinue, setShowCon]  = useState(false);

  const wfHeights = Array.from({ length: 28 }, (_, i) =>
    8 + Math.abs(Math.sin(i * 0.82)) * 20 + (i % 3) * 4
  );

  const handleChoice = (choice) => {
    if (solved || wrongId) return;
    if (choice.correct) {
      setSolved(true);
      setTimeout(() => setStep(1), 1200);
      setTimeout(() => setStep(2), 3200);
      setTimeout(() => setStep(3), 5400);
      setTimeout(() => setShowCon(true), 7200);
    } else {
      setWrongId(choice.id);
      setFeedback(choice.feedback);
      setTimeout(() => { setWrongId(null); setFeedback(''); }, 2400);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center p-5"
      style={{ background: 'rgba(2,6,15,0.92)', backdropFilter: 'blur(10px)', zIndex: 70 }}
      onClick={solved ? undefined : onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="glass max-w-md w-full p-7"
        style={{ borderColor: 'rgba(180,215,255,0.25)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="text-center mb-5">
          <p className="t-eyebrow mb-1" style={{ color: 'rgba(180,215,255,0.9)', letterSpacing: '0.4em' }}>MOONLIT ROAD</p>
          <p className="terminal mb-2" style={{ color: 'var(--glow)', fontSize: 10, letterSpacing: '0.2em' }}>
            STORMY_MOON_DATE_REQUEST.mp3
          </p>
          <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 12 }}>
            "The audio is damaged. Only the feeling remains."
          </p>
        </div>

        {/* Waveform — decorative */}
        <div className="glass px-4 py-3 mb-5" style={{ background: 'rgba(2,6,18,0.85)' }}>
          <p className="terminal mb-2" style={{ color: 'var(--muted-2)', fontSize: 9, letterSpacing: '0.25em' }}>
            ▮ DAMAGED AUDIO — MEMORY ONLY
          </p>
          <div className="waveform justify-center">
            {wfHeights.map((h, i) => (
              <div key={i} className="wf-bar" style={{ height: h, animationDelay: `${(i * 0.08) % 0.8}s`, animationDuration: `${0.6 + (i % 4) * 0.14}s` }} />
            ))}
          </div>
        </div>

        {!solved ? (
          <>
            <p className="t-eyebrow text-center mb-4" style={{ color: 'var(--muted)', fontSize: 10, letterSpacing: '0.28em' }}>
              WHEN DID HE ASK?
            </p>
            <div className="space-y-3 mb-4">
              {MOON_CHOICES.map(choice => {
                const isWrong = wrongId === choice.id;
                return (
                  <button
                    key={choice.id}
                    onClick={() => handleChoice(choice)}
                    className="w-full text-left glass px-4 py-3"
                    style={{
                      borderColor: isWrong ? 'rgba(255,80,80,0.45)' : 'rgba(111,184,240,0.18)',
                      background: isWrong ? 'rgba(255,50,50,0.06)' : 'rgba(3,9,18,0.6)',
                      cursor: 'crosshair',
                      transition: 'border-color 0.2s, background 0.2s',
                    }}
                  >
                    <p className="t-body-it" style={{
                      color: isWrong ? 'var(--glitch)' : 'var(--muted)',
                      fontSize: 13,
                    }}>
                      {choice.text}
                    </p>
                  </button>
                );
              })}
            </div>

            {feedback && (
              <motion.p
                key={feedback}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="terminal text-center mb-3"
                style={{ color: 'var(--glitch)', letterSpacing: '0.2em', fontSize: 11 }}
              >
                {feedback}
              </motion.p>
            )}

            <button onClick={onClose} className="t-eyebrow"
              style={{ display: 'block', margin: '6px auto 0', color: 'var(--muted-2)', background: 'none', border: 'none', fontSize: 10, letterSpacing: '0.3em', cursor: 'pointer' }}>
              [ CLOSE ]
            </button>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 text-center">
            <p className="terminal" style={{ color: 'var(--phosphor)', letterSpacing: '0.3em' }}>
              DATE REQUEST MEMORY RESTORED.
            </p>
            {step >= 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em' }}>HIM</p>
                <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
                  "I was scared. The song made it easier."
                </p>
              </motion.div>
            )}
            {step >= 2 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
                For one second, the road feels real.
                For one second, she remembers saying yes.
              </motion.p>
            )}
            {step >= 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
                <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 12 }}>
                  "He tried to remove this one too. The road remembered anyway."
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

/* ── Gate Chamber (all puzzles solved) ───────────────────────── */
function GateChamber({ onDone }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const ts = [
      [600,  () => setStep(1)],
      [2200, () => setStep(2)],
      [4000, () => setStep(3)],
      [5600, () => setStep(4)],
      [7400, () => setStep(5)],
      [9200, () => setStep(6)],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="fixed inset-0 flex flex-col items-center justify-center px-8 py-12"
      style={{ background: 'rgba(1,3,14,0.97)', zIndex: 80 }}>
      <Particles count={22} intensity={0.55} />

      <div className="max-w-md w-full text-center space-y-5">
        {step >= 1 && (
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="t-body-it" style={{ color: 'var(--muted)', fontSize: 14 }}>
            A promise was made before the road changed.
            Not to stop time.
            Just to leave something real behind.
          </motion.p>
        )}

        {step >= 2 && (
          <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center py-4">
            <RingSVG size={80} opacity={0.8} />
          </motion.div>
        )}

        {step >= 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="glass px-6 py-4" style={{ borderColor: 'rgba(175,210,255,0.25)' }}>
            <p className="terminal mb-1" style={{ color: 'var(--glow)', letterSpacing: '0.3em' }}>
              PROMISE_RING.memory detected.
            </p>
            <p className="terminal" style={{ color: 'var(--glitch)', letterSpacing: '0.22em', fontSize: 10 }}>
              Access denied. This memory belongs to Episode 4.
            </p>
          </motion.div>
        )}

        {step >= 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
            <p className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em' }}>HIM</p>
            <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
              "I gave it to you because I wanted something real to stay with you."
            </p>
          </motion.div>
        )}

        {step >= 5 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
            <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
              "This is the one he could not reach. It was too close to the surface."
            </p>
          </motion.div>
        )}

        {step >= 6 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}>
            <button className="btn btn--lg pulse-glow" onClick={onDone}>
              Continue
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

/* ── EP3 Ending Screen ───────────────────────────────────────── */
function Ep3Ending({ onComplete }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const ts = [
      [800,  () => setStep(1)],
      [2600, () => setStep(2)],
      [4400, () => setStep(3)],
      [6600, () => setStep(4)],
      [9000, () => setStep(5)],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <div className="fes-ending">
      <Particles count={20} intensity={0.45} />
      <div className="max-w-md text-center space-y-5" style={{ zIndex: 10, position: 'relative' }}>
        {step >= 1 && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-28 h-px mx-auto mb-5 divider-line" />
            <p className="t-display"
              style={{ fontSize: 'clamp(22px,3.5vw,40px)', color: 'var(--text)', letterSpacing: '0.38em', fontWeight: 300 }}>
              END  OF  EPISODE  3
            </p>
          </motion.div>
        )}
        {step >= 2 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-body-it" style={{ color: 'var(--muted)', fontSize: 15 }}>
            Next memory: The Ring That Stayed
          </motion.p>
        )}
        {step >= 3 && (
          <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            className="t-body-it" style={{ color: 'var(--glitch)', fontSize: 14, letterSpacing: '0.06em' }}>
            "The ring was small.
            But somehow, it survived every version of the story."
          </motion.p>
        )}
        {step >= 4 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <p className="t-eyebrow mb-4" style={{ color: 'var(--muted-2)', fontSize: 9, letterSpacing: '0.4em' }}>
              EPISODE 4 — THE RING THAT STAYED
            </p>
          </motion.div>
        )}
        {step >= 5 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <button className="btn btn--lg pulse-glow" onClick={onComplete}>▸ Begin Episode 4</button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ── Fes Map Scene (main) ────────────────────────────────────── */
const FES_LOCS = [
  { id: 'arrival', label: 'Arrival Point',      icon: '✦',  pos: { left: '21.5%', top: '26%'  }, free: true  },
  { id: 'cat',     label: 'Cat Coffee Shop',     icon: '☕', pos: { left: '28.2%', top: '43%'  }             },
  { id: 'lily',    label: 'Lily Stand',          icon: '✿',  pos: { left: '46.7%', top: '32%'  }             },
  { id: 'candle',  label: 'Candlelight Festival',icon: '🕯', pos: { left: '43.8%', top: '56%'  }             },
  { id: 'moon',    label: 'Moonlit Road',        icon: '◐',  pos: { left: '63.7%', top: '48%'  }             },
  { id: 'gate',    label: 'Locked Blue Gate',    icon: '▣',  pos: { left: '50%',   top: '71.5%'}, isGate: true },
];

const ARRIVAL_TEXTS = [
  'The city is quiet, but the lights remember.',
  'Every street bends toward something she forgot.',
];

function SceneFesMap({ onComplete }) {
  const [catSolved,    setCat]    = useState(false);
  const [lilySolved,   setLily]   = useState(false);
  const [candleSolved, setCandle] = useState(false);
  const [moonSolved,   setMoon]   = useState(false);

  const [overlay,      setOverlay]  = useState(null);
  const [showMsg,      setShowMsg]  = useState(false);
  const [mapPhase,     setMapPhase] = useState('intro'); // intro|map|gate|collapse|ending
  const [introStep,    setIntro]    = useState(0);
  const [collapsed,    setCollapsed]= useState(false);

  const allSolved = catSolved && lilySolved && candleSolved && moonSolved;

  useEffect(() => {
    const ts = [
      [600,  () => setIntro(1)],
      [2400, () => setIntro(2)],
      [4800, () => setIntro(3)],
      [7000, () => { setMapPhase('map'); setTimeout(() => setShowMsg(true), 1800); }],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  const handleLocClick = (loc) => {
    if (loc.isGate) {
      if (allSolved) setMapPhase('gate');
      return;
    }
    if (loc.free) {
      setOverlay('arrival');
      return;
    }
    setOverlay(loc.id);
  };

  const solvedMap = { cat: catSolved, lily: lilySolved, candle: candleSolved, moon: moonSolved };

  if (mapPhase === 'ending') return <Ep3Ending onComplete={onComplete} />;

  if (mapPhase === 'gate') {
    return <GateChamber onDone={() => { setMapPhase('collapse'); setTimeout(() => setMapPhase('ending'), 2200); setCollapsed(true); }} />;
  }

  return (
    <SceneShell style={{ background: '#01030a' }}>
      <FesMapSVG collapsed={collapsed} />
      <Atmosphere />

      {/* Intro text overlay */}
      {mapPhase === 'intro' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8" style={{ zIndex: 20 }}>
          <div className="max-w-md text-center space-y-5">
            {introStep >= 1 && (
              <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.35em', fontSize: 11 }}>
                FIRST TRIP OUTSIDE CITY DETECTED.  FES MEMORY UNSTABLE.
              </motion.p>
            )}
            {introStep >= 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                {ARRIVAL_TEXTS.map((t, i) => (
                  <motion.p key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.5 }}
                    className="t-body-it" style={{ color: 'var(--muted)', fontSize: 15 }}>
                    {t}
                  </motion.p>
                ))}
              </motion.div>
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
            <p className="t-eyebrow" style={{ color: 'rgba(111,184,240,0.6)', letterSpacing: '0.38em', fontSize: 9 }}>
              MEMORY ARCHIVE · FES
            </p>
            <p className="t-eyebrow" style={{ color: 'rgba(111,184,240,0.35)', letterSpacing: '0.3em', fontSize: 8 }}>
              EPISODE 3 · THE EDITED CITY
            </p>
          </div>

          {/* Puzzle progress pips */}
          <div className="absolute flex gap-2" style={{ top: 16, right: 20 }}>
            {[catSolved, lilySolved, candleSolved, moonSolved].map((s, i) => (
              <span key={i} className={'clue-pip' + (s ? ' clue-pip--on' : '')} />
            ))}
          </div>

          {/* Location buttons */}
          {FES_LOCS.map(loc => {
            const solved = solvedMap[loc.id] || false;
            const isGateLocked = loc.isGate && !allSolved;
            return (
              <div key={loc.id} className="absolute" style={loc.pos}>
                <button
                  className={
                    'fes-loc-btn' +
                    (solved ? ' fes-loc-btn--solved' : '') +
                    (isGateLocked ? ' fes-loc-btn--gating' : '')
                  }
                  onClick={() => handleLocClick(loc)}
                  title={isGateLocked ? 'Restore all four memories first' : loc.label}
                >
                  <span style={{ fontSize: 18 }}>{loc.icon}</span>
                  <span className="t-eyebrow" style={{ color: solved ? 'rgba(80,210,130,0.9)' : 'var(--muted)', fontSize: 9, letterSpacing: '0.22em' }}>
                    {loc.label}
                  </span>
                  {!loc.isGate && <span className="fes-loc-dot" />}
                  {loc.isGate && (
                    <span className="t-eyebrow" style={{ color: allSolved ? 'rgba(80,210,130,0.8)' : 'var(--muted-2)', fontSize: 8, letterSpacing: '0.2em' }}>
                      {allSolved ? 'OPEN' : 'LOCKED'}
                    </span>
                  )}
                </button>
              </div>
            );
          })}

          {/* Archive/Him messages */}
          {showMsg && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute" style={{ bottom: 22, left: '50%', transform: 'translateX(-50%)', width: '92%', maxWidth: 480 }}>
              <div className="glass px-5 py-4 space-y-3">
                <div>
                  <p className="t-eyebrow mb-1" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
                  <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 12 }}>
                    "He replaced pieces of this city. I have been restoring them.
                    The wrong sentences you found — those were his, not yours."
                  </p>
                </div>
                <div className="divider-line h-px" />
                <div>
                  <p className="t-eyebrow mb-1" style={{ color: 'var(--glow)', fontSize: 9, letterSpacing: '0.35em' }}>HIM</p>
                  <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 12 }}>
                    "This is where she first chose me outside the world we knew.
                    I could not let her keep coming back here."
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Arrival modal */}
      {overlay === 'arrival' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center p-6"
          style={{ background: 'rgba(2,6,15,0.88)', backdropFilter: 'blur(8px)', zIndex: 60 }}
          onClick={() => setOverlay(null)}>
          <motion.div initial={{ scale: 0.92, y: 14 }} animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="glass max-w-sm w-full p-7 text-center"
            onClick={e => e.stopPropagation()}>
            <span style={{ fontSize: 32, display: 'block', marginBottom: 12 }}>✦</span>
            <p className="t-eyebrow mb-3" style={{ color: 'var(--glow)', letterSpacing: '0.4em' }}>ARRIVAL POINT</p>
            <p className="t-body-it mb-3" style={{ color: 'var(--muted)', fontSize: 14 }}>
              The bus stopped at the edge of the medina.
              She had never seen a city that looked like it was dreaming.
            </p>
            <p className="t-body-it mb-3" style={{ color: 'var(--text)', fontSize: 13 }}>
              "Even the streetlights leaned toward each other here."
            </p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13, fontStyle: 'italic' }}>
              Something she said at the end of a moonlit road that night
              has never left her.
              Five words. A promise.
            </p>
            <button className="t-eyebrow mt-6"
              style={{ color: 'var(--muted-2)', background: 'none', border: 'none', fontSize: 10, letterSpacing: '0.3em', cursor: 'pointer' }}
              onClick={() => setOverlay(null)}>[ CLOSE ]</button>
          </motion.div>
        </motion.div>
      )}

      {/* Puzzle overlays */}
      {overlay === 'cat' && !catSolved && (
        <CatCoffeePuzzle onSolve={() => { setCat(true); setOverlay(null); }} onClose={() => setOverlay(null)} />
      )}
      {overlay === 'lily' && !lilySolved && (
        <LilyPetalPuzzle onSolve={() => { setLily(true); setOverlay(null); }} onClose={() => setOverlay(null)} />
      )}
      {overlay === 'candle' && !candleSolved && (
        <CandlelightPuzzle onSolve={() => { setCandle(true); setOverlay(null); }} onClose={() => setOverlay(null)} />
      )}
      {overlay === 'moon' && !moonSolved && (
        <StormyMoonPuzzle onSolve={() => { setMoon(true); setOverlay(null); }} onClose={() => setOverlay(null)} />
      )}

      {/* Already-solved location modal */}
      {overlay && overlay !== 'arrival' && solvedMap[overlay] && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center p-6"
          style={{ background: 'rgba(2,6,15,0.85)', backdropFilter: 'blur(8px)', zIndex: 60 }}
          onClick={() => setOverlay(null)}>
          <motion.div initial={{ scale: 0.92, y: 14 }} animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="glass max-w-sm w-full p-7 text-center"
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

/* ── EP3 Unlock Screen ───────────────────────────────────────── */
function SceneEp3Unlock({ onComplete }) {
  const [step,    setStep]    = useState(0);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const ts = [
      [600,  () => setStep(1)],
      [1700, () => setStep(2)],
      [2800, () => setStep(3)],
      [3700, () => setStep(4)],
      [4600, () => setStep(5)],
      [5400, () => setShowBar(true)],
      [7600, () => onComplete()],
    ].map(([d, fn]) => setTimeout(fn, d));
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <SceneShell style={{ background: '#000' }}>
      <Particles count={12} intensity={0.35} />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8" style={{ zIndex: 10 }}>
        <div className="max-w-md w-full space-y-4">
          {step >= 1 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="terminal" style={{ color: 'var(--glow)', letterSpacing: '0.35em', fontSize: 12 }}>
              FES_MEMORY_MAP.locked
            </motion.p>
          )}
          {step >= 2 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="terminal" style={{ color: 'var(--muted-2)' }}>
              Lock degraded.
            </motion.p>
          )}
          {step >= 3 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="terminal" style={{ color: 'var(--muted-2)' }}>
              Opening first trip memory...
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
              This memory was edited before Japan.
            </motion.p>
          )}
          {showBar && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6">
              <p className="t-eyebrow mb-2" style={{ color: 'var(--muted)', letterSpacing: '0.3em', fontSize: 9 }}>
                LOADING FES MEMORY MAP
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

Object.assign(window, { SceneEp3Unlock, SceneFesMap });
