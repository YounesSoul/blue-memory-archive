/* ============================================================
   OBJECT MODAL
   ============================================================ */
function ObjectModal({ object, onClose }) {
  if (!object) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center p-6"
        style={{ background: 'rgba(2,6,15,0.82)', backdropFilter: 'blur(8px)', zIndex: 60 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, y: 16, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 290, damping: 24 }}
          className={`glass ${object.warn ? 'glass--warn' : ''} max-w-md w-full p-7`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <span style={{ fontSize: 24 }}>{object.icon}</span>
              <span className="t-eyebrow" style={{ color: 'var(--glow)', fontSize: 11 }}>
                {object.label}
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

          <div className="space-y-3.5">
            {object.text.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.16 }}
                className={line.italic ? 't-body-it' : 't-body'}
                style={{
                  color: line.warning ? 'var(--glitch)'
                       : line.glow ? 'var(--glow)'
                       : line.highlight ? 'var(--text)'
                       : 'var(--muted)',
                  fontWeight: line.highlight ? 500 : 400,
                }}
              >
                {line.content}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ============================================================
   SCENE 3 — APARTMENT
   ============================================================ */
function SceneApartment({ onComputerOpen, cluesFound, onClueFound }) {
  const [activeObject, setActiveObject] = useState(null);
  const [clickedObjects, setClickedObjects] = useState(new Set());
  const [showIntro, setShowIntro] = useState(true);

  const introLines = [
    'Three months ago, you deleted everything.',
    'His number. The photos. This account.',
    'Tonight, something sent itself back.',
    'The apartment is too quiet.',
    'A computer blinks in the corner, waiting.',
  ];
  const { displayed: introDisplayed, done: introDone } = useTypewriter(introLines, 38, 500);

  useEffect(() => {
    if (introDone) {
      const t = setTimeout(() => setShowIntro(false), 1600);
      return () => clearTimeout(t);
    }
  }, [introDone]);

  const objects = [
    {
      id: 'jacket', label: 'His Jacket', icon: '🧥',
      pos: { top: '72%', left: '22%' }, clue: true,
      text: [
        { content: 'Still smells like him.', italic: true, highlight: true },
        { content: 'There is something inside the pocket.' },
        { content: 'A torn receipt from Maison Fresh et Bio. The ink is faded, but one sentence is still readable:', italic: true },
        { content: '"Where everything started."', glow: true, highlight: true },
      ],
    },
    {
      id: 'frame', label: 'Broken Frame', icon: '🖼️',
      pos: { top: '32%', left: '49%' }, clue: true, warn: true,
      text: [
        { content: 'The photo is missing. Only shattered glass remains.' },
        { content: 'Under the frame, someone scratched a message into the wood:', italic: true },
        { content: '"Stop looking for him."', warning: true, highlight: true },
      ],
    },
    {
      id: 'computer', label: 'Computer', icon: '💻',
      pos: { top: '47%', right: '17%' }, isComputer: true,
      text: [],
    },
    {
      id: 'keychain', label: 'Hello Kitty Keychain', icon: '🎀',
      pos: { top: '85%', left: '7%' }, clue: true,
      text: [
        { content: 'A small Hello Kitty keychain hangs from the drawer. It feels strangely out of place here.', italic: true },
        { content: 'There is a number hidden behind the bow:' },
        { content: '0   2', glow: true, highlight: true },
      ],
    },
    {
      id: 'ticket', label: 'Old Movie Ticket', icon: '🎟️',
      pos: { top: '82%', left: '52%' }, clue: true,
      text: [
        { content: 'An old ticket is folded under the keyboard. The title is damaged, but you can still read:' },
        { content: 'THE DICTATOR', highlight: true, glow: true },
        { content: 'Someone circled the month number: 10', italic: true },
      ],
    },
    {
      id: 'mug', label: 'Coffee Mug', icon: '☕',
      pos: { top: '78%', left: '44%' }, clue: true, warn: true,
      text: [
        { content: 'The coffee is still warm. That should be impossible.', warning: true },
        { content: 'There are two words written at the bottom of the mug:' },
        { content: '"Remember her."', highlight: true, italic: true },
      ],
    },
    {
      id: 'note', label: 'Dark Blue Note', icon: '📝',
      pos: { top: '40%', left: '62%' }, clue: true,
      text: [
        { content: 'A dark blue note is stuck to the wall.' },
        { content: '"Her day comes before yours."', italic: true, highlight: true },
        { content: 'Two dates. Two keys. One memory.', glow: true },
      ],
    },
  ];

  // computer modal content depends on clues
  const computerObj = {
    id: 'computer', label: 'Computer', icon: '💻',
    text: cluesFound < 3
      ? [
          { content: 'The screen is locked.', highlight: true },
          { content: 'A file named FINAL_ROOM.mp4 keeps flickering.', glow: true },
          { content: `Two memory keys required.  [${cluesFound}/3 clues found]`, italic: true },
        ]
      : [
          { content: 'The screen flickers to life.', glow: true, highlight: true },
          { content: 'FINAL_ROOM.mp4 — Access granted.' },
          { content: 'Click to open...', italic: true, glow: true },
        ],
  };

  const computerAccessible = cluesFound >= 3;

  const handleObjectClick = (obj) => {
    if (obj.isComputer) {
      if (computerAccessible) onComputerOpen();
      else setActiveObject(computerObj);
      return;
    }
    setActiveObject(obj);
    if (obj.clue && !clickedObjects.has(obj.id)) {
      setClickedObjects(prev => new Set([...prev, obj.id]));
      onClueFound();
    }
  };

  return (
    <SceneShell style={{ background: '#02060f' }}>
      <Atmosphere />

      {/* Salon room background */}
      <SalonRoom />

      {/* Rain — visible drops falling across viewport, denser near window */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 3 }}>
        {Array.from({ length: 70 }, (_, i) => {
          const isThick = i % 7 === 0;
          // Cluster more around the window (left 12-30%)
          const inWindow = i < 30;
          const left = inWindow
            ? 12 + ((i * 0.93) % 24)
            : 30 + ((i * 2.7 + i * 1.3) % 68);
          const top = ((i * 7 + 11) % 110) - 30;
          const dur = 0.55 + ((i % 6) * 0.13);
          const delay = -(((i * 0.17) + (i * 0.09)) % 2.5);
          const op = inWindow ? 0.9 : 0.6;
          return (
            <div key={i}
              className={'raindrop' + (isThick ? ' raindrop--thick' : '')}
              style={{
                left: left + '%',
                top: top + '%',
                height: 26 + ((i % 5) * 10),
                '--r-dur': dur + 's',
                '--r-delay': delay + 's',
                '--r-op': op,
              }}
            />
          );
        })}
      </div>

      {/* Intro typewriter overlay */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center px-8"
            style={{ background: 'rgba(2,6,15,0.92)', zIndex: 40 }}
          >
            <div className="max-w-xl text-center space-y-3">
              {introDisplayed.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="t-credits"
                  style={{
                    fontSize: 'clamp(20px, 2.4vw, 30px)',
                    color: i < 3 ? 'rgba(143,164,189,0.85)' : 'rgba(244,247,251,0.95)',
                    fontStyle: i >= 3 ? 'italic' : 'normal',
                  }}
                >
                  {line}
                  {i === introDisplayed.length - 1 && !introDone && <span className="cursor-blink" />}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header HUD */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-5" style={{ zIndex: 12 }}>
        <div>
          <p className="t-eyebrow" style={{ color: 'var(--glow)' }}>MEMORY ARCHIVE  ·  APARTMENT</p>
          <p className="t-eyebrow mt-1" style={{ color: 'var(--muted-2)' }}>
            CLUES RECOVERED  ·  {cluesFound} / 6
          </p>
        </div>
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-full"
          style={{ background: 'rgba(111,184,240,0.06)', border: '1px solid rgba(111,184,240,0.18)' }}>
          <span className="w-1.5 h-1.5 rounded-full pulse-glow" style={{ background: 'var(--glow)' }} />
          <span className="t-eyebrow" style={{ color: 'var(--muted)' }}>LIVE</span>
        </div>
      </div>

      {/* Memory fragments */}
      <div className="absolute inset-0" style={{ zIndex: 11 }}>
        {objects.map(obj => {
          const isClicked = clickedObjects.has(obj.id);
          const isComp = obj.isComputer;
          return (
            <motion.div
              key={obj.id}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + Math.random() * 0.5 }}
              className="absolute"
              style={{ ...obj.pos, transform: 'translate(-50%, -50%)' }}
            >
              <button
                onClick={() => handleObjectClick(obj)}
                className={
                  'fragment' +
                  (isClicked && !isComp ? ' fragment--found' : '') +
                  (isComp && !computerAccessible ? ' fragment--computer' : '') +
                  (isComp && computerAccessible ? ' fragment--ready' : '')
                }
                style={{ background: 'none', padding: 0 }}
              >
                <span style={{ fontSize: 28, filter: 'drop-shadow(0 0 8px rgba(111,184,240,0.35))' }}>{obj.icon}</span>
                {!isClicked && !isComp && <span className="fragment-dot" />}
                {isComp && computerAccessible && (
                  <span className="fragment-dot" style={{ background: 'var(--glow)' }} />
                )}
                <span className="fragment-label">{obj.label}</span>
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Clue tracker */}
      <div className="absolute bottom-8 left-1/2" style={{ transform: 'translateX(-50%)', zIndex: 12 }}>
        <div className="clue-tracker">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className={'clue-pip' + (i < cluesFound ? ' clue-pip--on' : '')} />
          ))}
        </div>
        {computerAccessible && (
          <motion.p
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            className="t-eyebrow text-center mt-4 flicker-fast"
            style={{ color: 'var(--glow)' }}
          >
            ▲  COMPUTER UNLOCKED — ACCESS GRANTED
          </motion.p>
        )}
      </div>

      {/* Object modal */}
      {activeObject && <ObjectModal object={activeObject} onClose={() => setActiveObject(null)} />}
    </SceneShell>
  );
}

Object.assign(window, { ObjectModal, SceneApartment });
