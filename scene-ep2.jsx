/* ============================================================
   EPISODE 2 — THE CORRUPTED MEMORY
   Kitchen scenes, puzzles, Japan folder, confrontation,
   cliffhanger ending.
   ============================================================ */

/* ── Pomegranate icon (no emoji standard exists) ─────────── */
function PomIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <circle cx="16" cy="19" r="11" fill="#8b0000" />
      <path d="M11,9 Q16,5 21,9 L19,11 Q16,8.5 13,11Z" fill="#2d6a0a" />
      <path d="M10,16 Q13,11 16,16 Q19,11 22,16 Q20,21 16,23 Q12,21 10,16Z"
        fill="#c41e3a" opacity=".68" />
      <circle cx="13" cy="17" r="1.8" fill="#ff5555" opacity=".9" />
      <circle cx="17" cy="16" r="1.8" fill="#ff5555" opacity=".9" />
      <circle cx="15" cy="20" r="1.8" fill="#ff5555" opacity=".9" />
      <circle cx="11" cy="19" r="1.4" fill="#ff5555" opacity=".8" />
      <circle cx="19" cy="19" r="1.4" fill="#ff5555" opacity=".8" />
    </svg>
  );
}

/* ── EP2 object definitions ──────────────────────────────── */
const EP2_OBJECTS = [
  {
    id: 'noodles', label: 'Chicken Noodles', icon: '🍜',
    pos: { top: '62%', left: '7%' },
    clicks: [
      {
        lines: [
          { content: 'The first meal she ever made for him.', italic: true, highlight: true },
          { content: 'Simple. Warm. Almost perfect.' },
          { content: 'A memory plays for half a second: laughter, steam, a blue light from the window. Then the sound cuts.', italic: true },
        ],
      },
      {
        lines: [
          { content: 'Look closer.' },
          { content: 'The bowl has three letters carved underneath:', italic: true },
          { content: 'L  I  E', glow: true, highlight: true },
          { content: 'This is not a code. This is a doubt.', italic: true, warning: true },
        ],
      },
    ],
  },
  {
    id: 'pomegranate', label: 'Pomegranate', isCustomIcon: true,
    pos: { top: '61%', left: '29%' },
    clicks: [
      {
        lines: [
          { content: 'A pomegranate rests on the counter.', highlight: true },
          { content: 'Its skin is split open.' },
          { content: 'The seeds look too red under the blue light.', italic: true },
          { content: 'Each seed feels like a tiny memory. Some are real. Some were edited.', italic: true },
        ],
        action: 'pomegranate',
        actionLabel: '▸  Purify Memories',
      },
    ],
  },
  {
    id: 'phone', label: 'Corrupted Phone', icon: '📱',
    pos: { top: '61%', left: '43%' },
    clicks: [
      {
        lines: [
          { content: 'A phone keeps playing the same damaged audio loop.' },
          { content: 'The file name says:', italic: true },
          { content: 'DON_T_MEMORY.mp3', glow: true, highlight: true },
          { content: '"After the party..."', italic: true, highlight: true },
        ],
      },
      {
        lines: [
          { content: 'System note:', italic: true },
          { content: 'Favorite artist recognized: Don Toliver.', glow: true },
          { content: 'Audio memory partially restored.', italic: true },
          { content: 'This memory belongs to her.', warning: true },
        ],
      },
    ],
  },
  {
    id: 'almonds', label: 'Almond Jar', icon: '🫙',
    pos: { top: '61%', left: '65%' },
    clicks: [
      {
        lines: [
          { content: 'A small jar of almonds sits beside the stove.' },
          { content: 'It does not belong to the recipe.', italic: true },
          { content: 'The archive marks it as a foreign ingredient.', glow: true },
        ],
      },
      {
        lines: [
          { content: 'HIS MEMORY DETECTED.', highlight: true, warning: true },
          { content: 'His presence is hidden inside the kitchen memory.', italic: true },
          { content: 'He was here. This was erased.', italic: true, warning: true },
        ],
      },
    ],
  },
  {
    id: 'hellokitty', label: 'Hello Kitty Magnet', icon: '🎀',
    pos: { top: '44%', left: '91%' },
    clicks: [
      {
        lines: [
          { content: 'A Hello Kitty magnet smiles from the fridge.', highlight: true },
          { content: 'For once, it looks normal.' },
        ],
      },
      {
        lines: [
          { content: 'The smile flickers.' },
          { content: 'A message appears behind it:', italic: true },
          { content: '"She made this room to keep you calm."', glow: true, highlight: true },
          { content: 'The magnet knows something.', italic: true, warning: true },
        ],
      },
    ],
  },
  {
    id: 'recipecard', label: 'Recipe Card', icon: '📋',
    pos: { top: '49%', left: '26%' },
    clicks: [
      {
        lines: [
          { content: 'A dark blue recipe card is stained with sauce.', highlight: true },
          { content: 'Title: CHICKEN NOODLES', glow: true },
          { content: 'Ingredients: warmth · laughter · denial · tears · something missing', italic: true },
        ],
        action: 'recipe',
        actionLabel: '▸  Recover Missing Ingredient',
      },
    ],
  },
  {
    id: 'postcard', label: 'Japan Postcard', icon: '🗺️',
    pos: { top: '24%', left: '63%' },
    clicks: [
      {
        lines: [
          { content: 'A postcard from Japan is pinned to the wall.', highlight: true },
          { content: 'But neither of you ever went.', italic: true },
          { content: '"Tokyo was not the dream. It was the warning."', glow: true, warning: true },
        ],
      },
      {
        lines: [
          { content: 'A corrupted file tries to open:', italic: true },
          { content: 'JAPAN_TRIP_FRAGMENT.zip', glow: true, highlight: true },
          { content: 'Access denied until the kitchen memory is restored.', italic: true, warning: true },
        ],
      },
    ],
  },
  {
    id: 'drawer', label: 'Locked Drawer', icon: '🔒',
    pos: { top: '77%', left: '28%' },
    isDrawer: true,
  },
];

/* ── Shared text renderer ────────────────────────────────── */
function Ep2TextLines({ lines }) {
  return (
    <div className="space-y-2.5">
      {lines.map((l, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.14 }}
          className={l.italic ? 't-body-it' : 't-body'}
          style={{
            color: l.warning ? 'var(--glitch)'
                 : l.glow    ? 'var(--glow)'
                 : l.highlight ? 'var(--text)'
                 : 'var(--muted)',
            fontWeight: l.highlight ? 500 : 400,
            fontSize: 14,
          }}
        >
          {l.content}
        </motion.p>
      ))}
    </div>
  );
}

/* ── Object modal ────────────────────────────────────────── */
const HINT_IDS = ['noodles', 'phone', 'almonds', 'hellokitty', 'postcard'];

function Ep2ObjectModal({ obj, clickCount, onClose, onAction, allHintsSeen }) {
  if (!obj) return null;
  const idx  = Math.min(clickCount - 1, obj.clicks.length - 1);
  const data = obj.clicks[idx];
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center p-6"
        style={{ background: 'rgba(2,6,15,0.84)', backdropFilter: 'blur(8px)', zIndex: 60 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, y: 14, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 280, damping: 24 }}
          className="glass max-w-md w-full p-7"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              {obj.isCustomIcon
                ? <PomIcon size={26} />
                : <span style={{ fontSize: 24 }}>{obj.icon}</span>}
              <span className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 11 }}>
                {obj.label.toUpperCase()}
              </span>
            </div>
            <button
              onClick={onClose}
              className="t-eyebrow"
              style={{ color: 'var(--muted-2)', background: 'none', border: 'none' }}
            >
              [ CLOSE ]
            </button>
          </div>

          <Ep2TextLines lines={data.lines} />

          {data.action && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="mt-6"
            >
              {allHintsSeen ? (
                <button
                  className="btn w-full"
                  onClick={() => { onClose(); onAction(data.action); }}
                >
                  {data.actionLabel}
                </button>
              ) : (
                <p className="t-eyebrow text-center" style={{ color: 'var(--glitch)', letterSpacing: '0.28em', fontSize: 10 }}>
                  ⚠  INSPECT ALL OBJECTS FIRST
                </p>
              )}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Recipe Puzzle ───────────────────────────────────────── */
const RECIPE_OPTIONS = ['soy sauce', 'almonds', 'popcorn', 'salt'];

function RecipePuzzle({ onSolve, onClose }) {
  const [selected, setSelected] = useState(null);
  const [result, setResult]     = useState(null); // 'correct' | 'wrong'

  const handleSelect = (opt) => {
    if (result === 'correct') return;
    setSelected(opt);
    if (opt === 'almonds') {
      setResult('correct');
      setTimeout(() => onSolve(), 2200);
    } else {
      setResult('wrong');
      setTimeout(() => { setResult(null); setSelected(null); }, 1400);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center p-6"
      style={{ background: 'rgba(2,6,15,0.9)', backdropFilter: 'blur(10px)', zIndex: 70 }}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="glass max-w-sm w-full p-8"
        style={{ borderColor: 'rgba(111,184,240,0.3)' }}
      >
        <div className="text-center mb-7">
          <p className="t-eyebrow mb-2" style={{ color: 'var(--glow)', letterSpacing: '0.4em' }}>
            MEMORY RECIPE PUZZLE
          </p>
          <p className="t-display" style={{ fontSize: 'clamp(16px,2vw,22px)', color: 'var(--text)', letterSpacing: '0.2em' }}>
            CHICKEN NOODLES
          </p>
          <div className="w-24 h-px mx-auto mt-3 divider-line" />
        </div>

        <div className="glass px-5 py-4 mb-6 space-y-1.5" style={{ background: 'rgba(3,9,18,0.7)' }}>
          <p className="terminal" style={{ color: 'var(--muted-2)' }}>› warmth</p>
          <p className="terminal" style={{ color: 'var(--muted-2)' }}>› laughter</p>
          <p className="terminal" style={{ color: 'var(--muted-2)' }}>› denial</p>
          <p className="terminal" style={{ color: 'var(--muted-2)' }}>› tears</p>
          <p className="terminal" style={{ color: 'var(--glitch)', letterSpacing: '0.3em' }}>
            › ██████ MISSING ██████
          </p>
        </div>

        <p className="t-eyebrow text-center mb-5" style={{ color: 'var(--muted)', fontSize: 10 }}>
          RECOVER THE MISSING INGREDIENT
        </p>

        {result !== 'correct' ? (
          <div className="recipe-grid">
            {RECIPE_OPTIONS.map(opt => (
              <button
                key={opt}
                className={'recipe-opt' + (selected === opt && result === 'wrong' ? ' recipe-opt--wrong' : '')}
                onClick={() => handleSelect(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2"
          >
            <p className="t-eyebrow" style={{ color: 'var(--glow)', letterSpacing: '0.3em' }}>
              HIS MEMORY DETECTED
            </p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
              Foreign ingredient accepted.
            </p>
            <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 13 }}>
              The kitchen was never only yours.
            </p>
          </motion.div>
        )}

        {result !== 'correct' && (
          <button
            onClick={onClose}
            className="t-eyebrow text-center w-full mt-5"
            style={{ color: 'var(--muted-2)', background: 'none', border: 'none', cursor: 'crosshair' }}
          >
            [ CLOSE ]
          </button>
        )}

        {result === 'wrong' && (
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="t-eyebrow text-center mt-3"
            style={{ color: 'var(--glitch)', letterSpacing: '0.3em' }}
          >
            ⚠  The recipe accepts it, but the memory rejects it.
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ── Pomegranate Puzzle ──────────────────────────────────── */
const SEEDS = [
  { id: 'noodles',  text: 'She made him chicken noodles.',      real: true  },
  { id: 'almonds',  text: 'He hated almonds.',                  real: false },
  { id: 'japan',    text: 'They never talked about Japan.',      real: false },
  { id: 'toliver',  text: 'The phone played Don Toliver.',       real: true  },
  { id: 'light',    text: 'The kitchen had dark blue light.',    real: true  },
  { id: 'goodbye',  text: 'The fridge did not have a magnet.',    real: false },
];

function PomegranatePuzzle({ onSolve, onClose }) {
  const [selected, setSelected] = useState(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect]     = useState(false);

  const toggle = (id) => {
    if (submitted) return;
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const submit = () => {
    const realIds = SEEDS.filter(s => s.real).map(s => s.id);
    const ok = realIds.every(id => selected.has(id)) &&
               [...selected].every(id => realIds.includes(id));
    setSubmitted(true);
    setCorrect(ok);
    if (ok) setTimeout(() => onSolve(), 2400);
  };

  const seedClass = (s) => {
    let c = 'memory-seed';
    if (!submitted) {
      if (selected.has(s.id)) c += ' memory-seed--selected';
    } else {
      if (s.real)  c += selected.has(s.id) ? ' memory-seed--correct' : ' memory-seed--wrong';
      else         c += selected.has(s.id) ? ' memory-seed--wrong'   : '';
    }
    return c;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center p-6"
      style={{ background: 'rgba(2,6,15,0.9)', backdropFilter: 'blur(10px)', zIndex: 70 }}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="glass max-w-md w-full p-8"
      >
        {/* Header — pomegranate split visual */}
        <div className="text-center mb-6">
          <div style={{ marginBottom: 12 }}>
            <PomIcon size={52} />
          </div>
          <p className="t-eyebrow mb-1" style={{ color: '#c41e3a', letterSpacing: '0.4em' }}>
            POMEGRANATE MEMORY PURIFICATION
          </p>
          <div className="w-24 h-px mx-auto mt-2 divider-line" />
        </div>

        <p className="t-body-it text-center mb-6" style={{ color: 'var(--muted)', fontSize: 13 }}>
          Some seeds have been replaced. Find the ones that are still real.
        </p>

        <div className="seed-grid mb-6">
          {SEEDS.map(s => (
            <button key={s.id} className={seedClass(s)} onClick={() => toggle(s.id)}>
              <span style={{ marginRight: 8, opacity: 0.6 }}>
                {submitted ? (s.real ? '✓' : '✗') : (selected.has(s.id) ? '●' : '○')}
              </span>
              {s.text}
            </button>
          ))}
        </div>

        {!submitted ? (
          <button className="btn w-full" onClick={submit} disabled={selected.size === 0}>
            Submit Selection
          </button>
        ) : correct ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2"
          >
            <p className="t-eyebrow" style={{ color: 'var(--glow)', letterSpacing: '0.3em' }}>
              MEMORY PURIFIED
            </p>
            <p className="t-body-it" style={{ color: 'var(--muted)', fontSize: 13 }}>
              His edits cleared. The real memory holds.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-3"
          >
            <p className="t-eyebrow" style={{ color: 'var(--glitch)', letterSpacing: '0.3em' }}>
              ⚠  His edits are still in place.
            </p>
            <button
              className="btn w-full"
              onClick={() => { setSubmitted(false); setSelected(new Set()); }}
            >
              Try Again
            </button>
          </motion.div>
        )}

        {!submitted && (
          <button
            onClick={onClose}
            className="t-eyebrow text-center w-full mt-4"
            style={{ color: 'var(--muted-2)', background: 'none', border: 'none', cursor: 'crosshair' }}
          >
            [ CLOSE ]
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ── Japan Folder Modal ──────────────────────────────────── */
const JAPAN_FILES = [
  { name: 'tokyo_day_1.txt',          locked: false,     ext: 'TXT' },
  { name: 'kyoto_photo_missing.png',  corrupted: true,   ext: 'PNG' },
  { name: 'shibuya_warning.mp3',      corrupted: true,   ext: 'MP3' },
  { name: 'flight_never_booked.pdf',  locked: false,     ext: 'PDF' },
];

const JAPAN_CONTENT = {
  'tokyo_day_1.txt': [
    { content: 'Day 1 — Tokyo.', highlight: true },
    { content: 'They arrived together. First time in Japan for both of them.' },
    { content: 'He went to Shibuya crossing early. She was with him.', italic: true },
    { content: '"He wanted to find the blue door before the rain came back."', glow: true, italic: true },
    { content: 'The rest of the file is missing.', warning: true, italic: true },
  ],
  'flight_never_booked.pdf': [
    { content: 'Outbound ticket: HIM — confirmed.', highlight: true },
    { content: 'Outbound ticket: HER — confirmed.', highlight: true },
    { content: 'Return ticket: HIM — never used.', warning: true },
    { content: 'Her return ticket was used alone.', warning: true, italic: true },
  ],
};

function JapanFolderModal({ onClose }) {
  const [openFile, setOpenFile] = useState(null);

  const openContent = openFile ? JAPAN_CONTENT[openFile] : null;

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center p-6"
      style={{ background: 'rgba(2,6,15,0.9)', backdropFilter: 'blur(10px)', zIndex: 70 }}
      onClick={openFile ? () => setOpenFile(null) : onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 18 }} animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="glass max-w-md w-full p-7"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-5">
          <div>
            <p className="t-eyebrow" style={{ color: 'var(--glow)', letterSpacing: '0.3em', fontSize: 10 }}>
              RECOVERED FILE
            </p>
            <p className="t-title mt-1" style={{ fontSize: 16, letterSpacing: '0.12em' }}>
              JAPAN_TRIP_FRAGMENT.zip
            </p>
          </div>
          <button
            onClick={onClose}
            className="t-eyebrow"
            style={{ color: 'var(--muted-2)', background: 'none', border: 'none' }}
          >
            [ CLOSE ]
          </button>
        </div>

        {!openFile ? (
          <>
            <p className="t-eyebrow mb-4" style={{ color: 'var(--muted-2)', fontSize: 10 }}>
              4 FILES DETECTED
            </p>
            <div className="space-y-2.5">
              {JAPAN_FILES.map((f, i) => (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <button
                    className={'file-row w-full' + (f.locked || f.corrupted ? ' file-row--locked' : '')}
                    onClick={() => !f.locked && !f.corrupted && setOpenFile(f.name)}
                    style={{ width: '100%', textAlign: 'left' }}
                  >
                    <span className="t-eyebrow" style={{
                      color: f.corrupted ? 'var(--glitch)' : f.locked ? 'var(--muted-2)' : 'var(--glow)',
                      fontSize: 9, letterSpacing: '0.2em',
                      minWidth: 32,
                    }}>
                      {f.ext}
                    </span>
                    <span className="terminal" style={{
                      color: f.corrupted ? 'rgba(255,80,80,0.45)' : f.locked ? 'var(--muted-2)' : 'var(--text)',
                      flex: 1,
                      textDecoration: f.corrupted ? 'line-through' : 'none',
                    }}>
                      {f.name}
                    </span>
                    <span className="t-eyebrow" style={{
                      color: f.corrupted ? 'var(--glitch)' : 'var(--muted-2)',
                      fontSize: 9,
                    }}>
                      {f.corrupted ? '⚠ CORRUPTED' : f.locked ? '🔒 LOCKED' : '▸ OPEN'}
                    </span>
                  </button>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <p className="t-eyebrow mb-4" style={{ color: 'var(--glow)', fontSize: 10, letterSpacing: '0.2em' }}>
              {openFile.toUpperCase()}
            </p>
            <div className="glass px-5 py-4 mb-5" style={{ background: 'rgba(3,9,18,0.8)' }}>
              <Ep2TextLines lines={openContent} />
            </div>
            <button
              className="btn w-full"
              onClick={() => setOpenFile(null)}
            >
              ← Back to files
            </button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ── Confrontation Overlay ───────────────────────────────── */
const CONFRONT_MSGS = [
  { sender: 'archive', text: 'You found the Japan files.' },
  { sender: 'him',     text: 'Close them. You do not need to see this.' },
  { sender: 'archive', text: 'You were both at Shibuya crossing.' },
  { sender: 'him',     text: 'Stop. Please.' },
  { sender: 'archive', text: 'You were there. You were right beside him.' },
  { sender: 'archive', text: 'His return ticket was never used. Yours was.' },
  { sender: 'him',     text: 'You were not supposed to find this. I made sure of that.' },
];

function ConfrontationOverlay({ onComplete }) {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const timers = CONFRONT_MSGS.map((_, i) =>
      setTimeout(() => setVisible(v => [...v, i]), 1200 + i * 2600)
    );
    const done = setTimeout(onComplete, 1200 + CONFRONT_MSGS.length * 2600 + 1800);
    return () => { timers.forEach(clearTimeout); clearTimeout(done); };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="fixed inset-0 flex items-end justify-center pb-10 px-6"
      style={{ background: 'rgba(2,6,15,0.78)', backdropFilter: 'blur(6px)', zIndex: 65 }}
    >
      <div className="w-full max-w-md space-y-3">
        {visible.map(i => {
          const m = CONFRONT_MSGS[i];
          const isHim = m.sender === 'him';
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={isHim ? 'bubble-him text-left' : 'bubble-archive text-left'}
            >
              <p className={isHim ? 'sender-him mb-2' : 'sender-archive mb-2'}>
                {isHim ? 'HIM' : 'UNKNOWN_ARCHIVE'}
              </p>
              <p className="t-body-it" style={{ color: 'var(--text)', fontSize: 15 }}>
                "{m.text}"
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ── Memory Kitchen (main EP2 scene) ─────────────────────── */
function SceneMemoryKitchen({ onComplete }) {
  /* phase: intro → explore → confrontation → ending */
  const [phase, setPhase]         = useState('intro');
  const [clickCounts, setCounts]  = useState({});
  const [activeModal, setModal]   = useState(null);   // object id
  const [activeOverlay, setOvly]  = useState(null);   // 'recipe'|'pomegranate'|'japan'
  const [puzzle1, setPuzzle1]     = useState(false);
  const [puzzle2, setPuzzle2]     = useState(false);
  const [japanViewed, setJapanV]  = useState(false);
  const allHintsSeen = HINT_IDS.every(id => (clickCounts[id] || 0) > 0);
  const [endPhase, setEndPhase]   = useState(0);      // 0‒4 for ending text steps
  const [corrupted, setCorrupted] = useState(false);

  const drawerOpen = puzzle1 && puzzle2;

  /* Intro typewriter */
  const introLines = [
    'The room smells like rain, warm noodles, and something sweet.',
    'It feels familiar.',
    'Too familiar.',
  ];
  const { displayed: introDisp, done: introDone } = useTypewriter(introLines, 36, 600);

  useEffect(() => {
    if (introDone && phase === 'intro') {
      const t = setTimeout(() => setPhase('explore'), 1800);
      return () => clearTimeout(t);
    }
  }, [introDone, phase]);

  /* Start confrontation after japan folder viewed */
  useEffect(() => {
    if (japanViewed && phase === 'explore') {
      const t = setTimeout(() => setPhase('confrontation'), 600);
      return () => clearTimeout(t);
    }
  }, [japanViewed, phase]);

  /* Corrupted room after confrontation */
  const handleConfrontDone = () => {
    setCorrupted(true);
    setPhase('ending');
    const seq = [
      [1800,  () => setEndPhase(1)],
      [4000,  () => setEndPhase(2)],
      [6500,  () => setEndPhase(3)],
      [9000,  () => setEndPhase(4)],
      [12000, () => onComplete && onComplete()],
    ];
    seq.forEach(([d, fn]) => setTimeout(fn, d));
  };

  const handleObjectClick = (obj) => {
    if (obj.isDrawer) {
      if (!drawerOpen) return; // show nothing if locked — fragment label says "🔒"
      setOvly('japan');
      return;
    }
    setCounts(prev => ({ ...prev, [obj.id]: (prev[obj.id] || 0) + 1 }));
    setModal(obj.id);
  };

  const activeObj = EP2_OBJECTS.find(o => o.id === activeModal);

  return (
    <SceneShell style={{ background: '#02060f' }}>
      <KitchenRoom corrupted={corrupted} />
      <Atmosphere />

      {/* Intro typewriter overlay */}
      {phase === 'intro' && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center px-8"
          style={{ background: 'rgba(2,6,15,0.9)', zIndex: 40 }}
        >
          <div className="max-w-xl text-center space-y-4">
            {introDisp.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="t-credits"
                style={{
                  fontSize: 'clamp(18px,2.2vw,28px)',
                  color: i < 1 ? 'rgba(143,164,189,0.88)' : 'rgba(244,247,251,0.96)',
                  fontStyle: i > 0 ? 'italic' : 'normal',
                }}
              >
                {line}
                {i === introDisp.length - 1 && !introDone && <span className="cursor-blink" />}
              </motion.p>
            ))}
          </div>
        </motion.div>
      )}

      {/* HUD */}
      {phase !== 'intro' && (
        <div
          className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-5"
          style={{ zIndex: 12 }}
        >
          <div>
            <p className="t-eyebrow" style={{ color: 'var(--glow)' }}>
              MEMORY ARCHIVE  ·  KITCHEN
            </p>
            <p className="t-eyebrow mt-1" style={{ color: 'var(--muted-2)' }}>
              EPISODE 2  ·  THE CORRUPTED MEMORY
            </p>
          </div>
          <div
            className="flex items-center gap-3 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(111,184,240,0.06)', border: '1px solid rgba(111,184,240,0.18)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full pulse-glow" style={{ background: 'var(--glow)' }} />
            <span className="t-eyebrow" style={{ color: 'var(--muted)' }}>LIVE</span>
          </div>
        </div>
      )}

      {/* Puzzle progress tracker */}
      {phase === 'explore' && (
        <div className="absolute bottom-8 left-1/2" style={{ transform: 'translateX(-50%)', zIndex: 12 }}>
          <div className="clue-tracker">
            <span className={'clue-pip' + (puzzle1 ? ' clue-pip--on' : '')} title="Recipe restored" />
            <span className={'clue-pip' + (puzzle2 ? ' clue-pip--on' : '')} title="Memories purified" />
          </div>
          {drawerOpen && !japanViewed && (
            <motion.p
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              className="t-eyebrow text-center mt-4 flicker-fast"
              style={{ color: 'var(--glow)' }}
            >
              ▲  DRAWER UNLOCKED
            </motion.p>
          )}
        </div>
      )}

      {/* Clickable objects */}
      {phase === 'explore' && (
        <div className="absolute inset-0" style={{ zIndex: 11 }}>
          {EP2_OBJECTS.map(obj => {
            const clicked = (clickCounts[obj.id] || 0) > 0;
            const isCorr  = false;
            const isDrawer = obj.isDrawer;
            const drawerReady = isDrawer && drawerOpen;

            return (
              <motion.div
                key={obj.id}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + (EP2_OBJECTS.indexOf(obj)) * 0.1 }}
                className="absolute"
                style={{ ...obj.pos, transform: 'translate(-50%, -50%)' }}
              >
                <button
                  onClick={() => handleObjectClick(obj)}
                  className={
                    'fragment' +
                    (clicked && !isDrawer ? ' fragment--found' : '') +
                    (isDrawer && !drawerOpen ? ' fragment--computer' : '') +
                    (drawerReady ? ' fragment--ready' : '')
                  }
                  style={{ background: 'none', padding: 0 }}
                >
                  {obj.isCustomIcon
                    ? <span style={{ filter: 'drop-shadow(0 0 8px rgba(200,30,30,0.5))' }}><PomIcon size={28} /></span>
                    : <span style={{ fontSize: 28, filter: 'drop-shadow(0 0 8px rgba(111,184,240,0.35))' }}>{obj.icon}</span>
                  }
                  {!clicked && !isDrawer && <span className="fragment-dot" />}
                  {drawerReady && <span className="fragment-dot" style={{ background: 'var(--glow)' }} />}
                  <span className="fragment-label">{obj.label}</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Object modal */}
      {activeModal && activeObj && (
        <Ep2ObjectModal
          obj={activeObj}
          clickCount={clickCounts[activeModal] || 1}
          onClose={() => setModal(null)}
          onAction={(action) => setOvly(action)}
          allHintsSeen={allHintsSeen}
        />
      )}

      {/* Puzzle overlays */}
      {activeOverlay === 'recipe' && !puzzle1 && (
        <RecipePuzzle
          onSolve={() => { setPuzzle1(true); setOvly(null); }}
          onClose={() => setOvly(null)}
        />
      )}
      {activeOverlay === 'pomegranate' && !puzzle2 && (
        <PomegranatePuzzle
          onSolve={() => { setPuzzle2(true); setOvly(null); }}
          onClose={() => setOvly(null)}
        />
      )}
      {activeOverlay === 'japan' && (
        <JapanFolderModal
          onClose={() => { setOvly(null); if (!japanViewed) setJapanV(true); }}
        />
      )}

      {/* Confrontation */}
      {phase === 'confrontation' && (
        <ConfrontationOverlay onComplete={handleConfrontDone} />
      )}

      {/* Ending overlay */}
      {phase === 'ending' && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}
          className="fixed inset-0 flex flex-col items-center justify-center px-8"
          style={{ background: 'rgba(2,6,15,0.88)', zIndex: 75 }}
        >
          <div className="max-w-md text-center space-y-6">
            {endPhase >= 1 && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="glass glass--warn px-6 py-4">
                <p className="terminal" style={{ color: 'var(--glitch)', letterSpacing: '0.25em' }}>
                  LOCKED FILE DETECTED
                </p>
                <p className="t-title mt-2" style={{ fontSize: 18, letterSpacing: '0.18em' }}>
                  FES_MEMORY_MAP.locked
                </p>
                <p className="t-eyebrow mt-2" style={{ color: 'var(--muted-2)' }}>
                  LOCKED UNTIL EPISODE 3
                </p>
                <p className="terminal mt-3" style={{ color: 'rgba(255,100,80,0.65)', letterSpacing: '0.2em', fontSize: 9 }}>
                  ⚠ ARCHIVE TAMPERING DETECTED · 14 NODES CORRUPTED
                </p>
              </motion.div>
            )}

            {endPhase >= 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <div className="w-32 h-px mx-auto mb-5 divider-line" />
                <p
                  className="t-display"
                  style={{ fontSize: 'clamp(22px,3.5vw,40px)', color: 'var(--text)', letterSpacing: '0.38em', fontWeight: 300 }}
                >
                  END  OF  EPISODE  2
                </p>
              </motion.div>
            )}

            {endPhase >= 3 && (
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="t-body-it"
                style={{ color: 'var(--muted)', fontSize: 15 }}
              >
                Next memory: The City of Cats and Candles
              </motion.p>
            )}

            {endPhase >= 4 && (
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="space-y-1">
                <p className="t-eyebrow" style={{ color: 'var(--glitch)', fontSize: 9, letterSpacing: '0.35em' }}>UNKNOWN_ARCHIVE</p>
                <p className="t-body-it" style={{ color: 'var(--glitch)', fontSize: 14, letterSpacing: '0.06em' }}>
                  "He deleted the Japan file. I found it before he could finish."
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </SceneShell>
  );
}

/* ── EP2 Door Transition ─────────────────────────────────── */
function SceneEp2Door({ onComplete }) {
  const [phase, setPhase]     = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const seq = [
      [900,  () => setPhase(1)],
      [3200, () => setPhase(2)],
      [5800, () => { setPhase(3); setLoading(true); }],
      [8800, () => onComplete()],
    ];
    const timers = seq.map(([d, fn]) => setTimeout(fn, d));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <SceneShell style={{ background: '#000' }}>
      <Particles count={12} intensity={0.4} />
      <div
        className="fixed inset-0 flex flex-col items-center justify-center px-8 text-center"
        style={{ zIndex: 10, gap: 28 }}
      >
        {phase >= 1 && (
          <motion.p
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="t-credits"
            style={{ fontSize: 'clamp(22px,3vw,36px)', color: 'rgba(244,247,251,0.9)' }}
          >
            You opened it.
          </motion.p>
        )}
        {phase >= 2 && (
          <motion.p
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="t-credits"
            style={{
              fontSize: 'clamp(18px,2.4vw,28px)',
              color: 'var(--glitch)',
              letterSpacing: '0.06em',
              fontStyle: 'italic',
            }}
          >
            That was your first mistake.
          </motion.p>
        )}
        {phase >= 3 && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p
              className="t-eyebrow"
              style={{ color: 'var(--glow)', letterSpacing: '0.48em', fontSize: 11 }}
            >
              MEMORY ROOM LOADING...
            </p>
            {loading && (
              <div className="ep2-loading">
                <div className="ep2-loading-fill" />
              </div>
            )}
          </motion.div>
        )}
      </div>
    </SceneShell>
  );
}

Object.assign(window, {
  SceneEp2Door,
  SceneMemoryKitchen,
  PomIcon,
});
