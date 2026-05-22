/* ============================================================
   SCENE 6 — VIDEO (heavy VHS: RGB silhouette, phosphor wave,
                    drifting distortion, REC timestamp)
   ============================================================ */
function SceneVideo({ onComplete }) {
  const [subtitleIndex, setSubtitleIndex] = useState(-1);
  const [glitchActive, setGlitchActive] = useState(false);
  const [done, setDone] = useState(false);
  const [time, setTime] = useState(0);
  const [phosphor, setPhosphor] = useState(false); // alt waveform color
  const aliveRef = useRef(true);

  const subtitles = [
    "If she finds this before you do...",
    "then it already happened again.",
    "",
    "I need you to listen carefully.",
    "",
    "You are going to find messages from someone who sounds like you.",
    "",
    "She knows everything.",
    "Our memories.",
    "Our first movie.",
    "The place we met.",
    "The trip we wanted.",
    "Even the things we never said out loud.",
    "",
    "But knowing the truth doesn't make her right.",
    "",
    "You need to decide if I'm worth saving.",
    "",
    "And if the door unlocks...",
    "do not open it.",
  ];

  // Subtitle pacing
  useEffect(() => {
    aliveRef.current = true;
    let idx = 0;
    const advance = () => {
      if (!aliveRef.current) return;
      if (idx >= subtitles.length) {
        setTimeout(() => {
          if (!aliveRef.current) return;
          setGlitchActive(true);
          setTimeout(() => {
            if (!aliveRef.current) return;
            setDone(true);
            setTimeout(onComplete, 1100);
          }, 1500);
        }, 1000);
        return;
      }
      setSubtitleIndex(idx);
      idx++;
      setTimeout(advance, subtitles[idx - 1] === '' ? 400 : 2100);
    };
    const t = setTimeout(advance, 1200);
    return () => { aliveRef.current = false; clearTimeout(t); };
  }, []);

  // REC timer
  useEffect(() => {
    const i = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(i);
  }, []);

  // toggle phosphor occasionally
  useEffect(() => {
    const i = setInterval(() => setPhosphor(p => Math.random() > 0.65 ? !p : p), 1800);
    return () => clearInterval(i);
  }, []);

  const fmtTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `00:${m}:${s}`;
  };

  return (
    <SceneShell style={{ background: '#000' }}>
      <Atmosphere particles={false} />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4" style={{ zIndex: 10 }}>
        <div className="w-full max-w-3xl">

          {/* Top bar */}
          <div
            className="flex items-center justify-between px-5 py-2.5"
            style={{ background: 'rgba(5,13,28,0.9)', borderBottom: '1px solid rgba(111,184,240,0.12)', borderRadius: '6px 6px 0 0' }}
          >
            <span className="t-eyebrow" style={{ color: 'var(--muted)' }}>
              FINAL_ROOM.mp4  ·  DECRYPTED
            </span>
            <button
              className="t-eyebrow"
              onClick={() => setPhosphor(p => !p)}
              style={{
                color: phosphor ? 'var(--phosphor)' : 'var(--muted)',
                background: 'none', border: '1px solid rgba(111,184,240,0.15)', padding: '4px 10px', borderRadius: 4,
              }}
              title="Toggle phosphor"
            >
              {phosphor ? 'PHOSPHOR' : 'AZURE'}
            </button>
            <span className="t-eyebrow flicker" style={{ color: 'var(--glitch)' }}>
              {glitchActive ? '█  SIGNAL LOST' : '●  PLAYING'}
            </span>
          </div>

          {/* Screen */}
          <div
            className="vhs-screen video-scan relative overflow-hidden"
            style={{
              aspectRatio: '16 / 9',
              filter: glitchActive ? 'hue-rotate(180deg) saturate(2.5) blur(2.5px)' : 'none',
              transition: 'filter 0.3s',
            }}
          >
            {/* REC indicator */}
            <div className="rec-indicator">
              <span className="rec-dot" />
              REC
            </div>
            <div className="rec-meta">
              CH:01  ·  {fmtTime(time)}
            </div>

            {/* CRT static */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                animation: 'noise-jitter 0.25s steps(2) infinite',
              }}
            />

            {/* Drifting distortion lines */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={'d' + i}
                className={'distortion-line' + (i === 2 ? ' distortion-line--thick' : '')}
                style={{ '--d-dur': (6 + i * 1.8) + 's', '--d-delay': (-i * 1.6) + 's' }}
              />
            ))}

            {/* Waveform */}
            <div className="absolute bottom-10 left-0 right-0 flex items-end justify-center gap-px h-14 px-8 opacity-70">
              {Array.from({ length: 80 }).map((_, i) => (
                <Wavebar key={i} i={i} color={phosphor ? 'var(--phosphor)' : 'var(--glow)'} />
              ))}
            </div>

            {/* Silhouette with RGB channel separation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="silhouette-rgb flicker-fast">
                <div className="silhouette-rgb__layer silhouette-rgb__layer--r">
                  <div className="silhouette-head" />
                  <div className="silhouette-body" />
                </div>
                <div className="silhouette-rgb__layer silhouette-rgb__layer--g">
                  <div className="silhouette-head" />
                  <div className="silhouette-body" />
                </div>
                <div className="silhouette-rgb__layer silhouette-rgb__layer--b">
                  <div className="silhouette-head" />
                  <div className="silhouette-body" />
                </div>
              </div>
            </div>

            {/* Subtitles */}
            <div className="absolute bottom-0 left-0 right-0 text-center pb-5 px-8" style={{ minHeight: 60 }}>
              <AnimatePresence mode="wait">
                {subtitleIndex >= 0 && subtitles[subtitleIndex] && (
                  <motion.p
                    key={subtitleIndex}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className="t-body-it inline-block"
                    style={{
                      color: 'var(--text)',
                      textShadow: '0 1px 10px rgba(0,0,0,0.95), 0 0 14px rgba(111,184,240,0.25)',
                      background: 'rgba(0,0,0,0.55)',
                      padding: '6px 14px',
                      borderRadius: 3,
                      fontSize: 17,
                    }}
                  >
                    {subtitles[subtitleIndex]}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Glitch tear strips */}
            {glitchActive && Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={'g' + i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.85, 0], x: [0, -10, 8, 0] }}
                transition={{ duration: 0.18, delay: i * 0.07, repeat: 5 }}
                className="absolute left-0 right-0"
                style={{
                  top: (12 + i * 14) + '%',
                  height: 3 + (i % 2) * 4,
                  background: i % 2 === 0 ? 'var(--glitch)' : 'var(--glow)',
                  filter: 'blur(0.8px)',
                  opacity: 0.7,
                }}
              />
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="flex items-center gap-4 px-5 py-3"
            style={{ background: 'rgba(5,13,28,0.9)', borderTop: '1px solid rgba(111,184,240,0.1)', borderRadius: '0 0 6px 6px' }}
          >
            <div className="h-1 flex-1 rounded-full overflow-hidden" style={{ background: 'rgba(111,184,240,0.1)' }}>
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: done ? '100%' : `${Math.min((subtitleIndex / subtitles.length) * 100, 95)}%` }}
                transition={{ duration: 0.5 }}
                className="h-full"
                style={{ background: 'linear-gradient(90deg, var(--glow), #b4ddff)', boxShadow: '0 0 8px var(--glow)' }}
              />
            </div>
            <span className="t-eyebrow shrink-0" style={{ color: 'var(--muted)' }}>
              {glitchActive ? '--:--' : fmtTime(Math.max(0, subtitleIndex * 2))}
            </span>
          </div>
        </div>
      </div>
    </SceneShell>
  );
}

function Wavebar({ i, color }) {
  const [h, setH] = useState(40);
  useEffect(() => {
    const tick = () => setH(20 + Math.abs(Math.sin(i * 0.4 + Date.now() / 200)) * 70);
    const id = setInterval(tick, 90);
    return () => clearInterval(id);
  }, [i]);
  return (
    <div
      className="flex-1"
      style={{
        height: h + '%',
        background: color,
        boxShadow: `0 0 6px ${color}`,
        minWidth: 1,
        opacity: 0.85,
        transition: 'height 80ms linear, background 0.3s',
      }}
    />
  );
}

Object.assign(window, { SceneVideo });
