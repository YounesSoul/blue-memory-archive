/* ============================================================
   AUDIO MANAGER — background music + ending crossfade
   ============================================================ */
window.AudioManager = (() => {
  const BG  = new Audio('music/' + encodeURIComponent('Detective Background Music  Crime Scene, Spy, Investigation  Royalty Free.mp3'));
  const END = new Audio('music/' + encodeURIComponent('STORMY - MOON (MUSIC VISUALISER).mp3'));
  BG.loop  = true;
  END.loop = true;

  let started      = false;
  let endingActive = false;

  const fade = (audio, to, ms, cb) => {
    const steps = 40;
    const dv    = (to - audio.volume) / steps;
    let   i     = 0;
    const t = setInterval(() => {
      i++;
      audio.volume = Math.max(0, Math.min(1, audio.volume + dv));
      if (i >= steps) {
        clearInterval(t);
        audio.volume = Math.max(0, Math.min(1, to));
        cb && cb();
      }
    }, ms / steps);
  };

  const start = () => {
    if (started) return;
    started = true;
    BG.volume = 0;
    BG.play().catch(() => {});
    fade(BG, 0.38, 2500);
  };

  const switchToEnding = () => {
    if (endingActive) return;
    endingActive = true;
    fade(BG, 0, 2000, () => BG.pause());
    END.volume = 0;
    END.currentTime = 0;
    END.play().catch(() => {});
    fade(END, 0.65, 2500);
  };

  const reset = () => {
    endingActive = false;
    fade(END, 0, 1000, () => { END.pause(); END.currentTime = 0; });
    BG.currentTime = 0;
    BG.volume = 0;
    BG.play().catch(() => {});
    fade(BG, 0.38, 2000);
  };

  // Unlock audio on first user gesture (browser autoplay policy)
  const unlock = () => { start(); document.removeEventListener('pointerdown', unlock); };
  document.addEventListener('pointerdown', unlock);

  return { switchToEnding, reset };
})();

/* ============================================================
   ROOT APP — scene routing with VHS wipe transitions
   ============================================================ */
function App() {
  const [scene, setScene] = useState('opening');
  const [cluesFound, setCluesFound] = useState(0);
  const [wipeActive, setWipeActive] = useState(false);
  const [pendingScene, setPendingScene] = useState(null);

  // Transition: trigger wipe, swap scene mid-wipe, then end wipe
  const go = useCallback((next) => {
    if (next === scene) return;
    if (next === 'opening') window.AudioManager.reset();
    setWipeActive(true);
    setPendingScene(next);
    setTimeout(() => setScene(next), 280);
  }, [scene]);

  const addClue = useCallback(() => {
    setCluesFound(c => Math.min(c + 1, 6));
  }, []);

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: 'var(--bg)', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        {scene === 'opening' && (
          <SceneOpening key="opening" onComplete={() => go('login')} />
        )}
        {scene === 'login' && (
          <SceneLogin key="login" onComplete={() => go('apartment')} />
        )}
        {scene === 'apartment' && (
          <SceneApartment
            key="apartment"
            onComputerOpen={() => go('chat')}
            cluesFound={cluesFound}
            onClueFound={addClue}
          />
        )}
        {scene === 'chat' && (
          <SceneChat
            key="chat"
            onUnlockClick={() => go('puzzle')}
            onBack={() => go('apartment')}
          />
        )}
        {scene === 'puzzle' && (
          <ScenePuzzle key="puzzle" onComplete={() => go('video')} />
        )}
        {scene === 'video' && (
          <SceneVideo key="video" onComplete={() => go('door')} />
        )}
        {scene === 'door' && (
          <SceneDoor key="door" onDoorOpen={() => go('ep2-door')} />
        )}
        {scene === 'ep2-door' && (
          <SceneEp2Door key="ep2-door" onComplete={() => go('ep2-kitchen')} />
        )}
        {scene === 'ep2-kitchen' && (
          <SceneMemoryKitchen key="ep2-kitchen" onComplete={() => go('ep3-unlock')} />
        )}
        {scene === 'ep3-unlock' && (
          <SceneEp3Unlock key="ep3-unlock" onComplete={() => go('ep3-fes')} />
        )}
        {scene === 'ep3-fes' && (
          <SceneFesMap key="ep3-fes" onComplete={() => go('ep4-unlock')} />
        )}
        {scene === 'ep4-unlock' && (
          <SceneEp4Unlock key="ep4-unlock" onComplete={() => go('ep4-building')} />
        )}
        {scene === 'ep4-building' && (
          <SceneUniversityMap key="ep4-building" onComplete={() => go('ep5-unlock')} />
        )}
        {scene === 'ep5-unlock' && (
          <SceneEp5Unlock key="ep5-unlock" onComplete={() => go('ep5-shibuya')} />
        )}
        {scene === 'ep5-shibuya' && (
          <SceneShibuyaMap key="ep5-shibuya" onComplete={() => go('ep6-unlock')} />
        )}
        {scene === 'ep6-unlock' && (
          <SceneEp6Unlock key="ep6-unlock" onComplete={() => go('ep6-trial')} />
        )}
        {scene === 'ep6-trial' && (
          <SceneArchiveTrial key="ep6-trial" onComplete={() => go('opening')} />
        )}
      </AnimatePresence>

      {/* VHS wipe overlay */}
      <VHSWipe active={wipeActive} onDone={() => { setWipeActive(false); setPendingScene(null); }} />

      {/* Dev: jump to scene (hidden in corner, click to reveal) */}
      <DevJump scene={scene} go={go} cluesFound={cluesFound} setCluesFound={setCluesFound} />
    </div>
  );
}

/* Dev jump helper — handy for review. */
function DevJump({ scene, go, cluesFound, setCluesFound }) {
  const [open, setOpen] = useState(false);
  const scenes = ['opening', 'login', 'apartment', 'chat', 'puzzle', 'video', 'door', 'ep2-door', 'ep2-kitchen', 'ep3-unlock', 'ep3-fes', 'ep4-unlock', 'ep4-building', 'ep5-unlock', 'ep5-shibuya', 'ep6-unlock', 'ep6-trial'];
  return (
    <div style={{ position: 'fixed', bottom: 14, right: 14, zIndex: 80 }}>
      {open && (
        <div className="glass" style={{ padding: 12, marginBottom: 8, fontSize: 11 }}>
          <p className="t-eyebrow mb-2" style={{ color: 'var(--muted)' }}>JUMP TO SCENE</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {scenes.map(s => (
              <button
                key={s}
                className="t-eyebrow"
                onClick={() => go(s)}
                style={{
                  background: scene === s ? 'rgba(111,184,240,0.15)' : 'transparent',
                  border: '1px solid rgba(111,184,240,0.18)',
                  color: scene === s ? 'var(--glow)' : 'var(--muted)',
                  padding: '4px 10px',
                  borderRadius: 4,
                  textAlign: 'left',
                  letterSpacing: '0.22em',
                }}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
          <p className="t-eyebrow mt-3 mb-1" style={{ color: 'var(--muted)' }}>CLUES</p>
          <div style={{ display: 'flex', gap: 4 }}>
            {[0,1,2,3,4,5,6].map(n => (
              <button key={n} onClick={() => setCluesFound(n)}
                style={{
                  background: cluesFound === n ? 'rgba(111,184,240,0.2)' : 'transparent',
                  border: '1px solid rgba(111,184,240,0.18)',
                  color: cluesFound === n ? 'var(--glow)' : 'var(--muted)',
                  width: 22, height: 22, borderRadius: 4, fontSize: 10,
                }}
              >{n}</button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(o => !o)}
        className="t-eyebrow"
        style={{
          background: 'rgba(8,18,34,0.85)',
          border: '1px solid rgba(111,184,240,0.25)',
          color: 'var(--muted)',
          padding: '6px 12px',
          borderRadius: 6,
          backdropFilter: 'blur(8px)',
        }}
      >
        ▴ DEV
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
