/* ============================================================
   SALON / LIVING ROOM SCENE — SVG background with furniture
   Objects are positioned at percent coords matching the SVG so
   the .fragment hotspots sit on top of the real items.
   ============================================================ */
function SalonRoom() {
  return (
    <div className="salon-stage">
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="salon-svg"
      >
        <defs>
          {/* Wall gradient */}
          <linearGradient id="wall-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#15304f" />
            <stop offset="55%"  stopColor="#12253f" />
            <stop offset="100%" stopColor="#0e1c34" />
          </linearGradient>
          {/* Floor */}
          <linearGradient id="floor-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#142848" />
            <stop offset="100%" stopColor="#06111e" />
          </linearGradient>
          {/* Window glass */}
          <linearGradient id="window-glass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="rgba(90, 150, 220, 0.65)" />
            <stop offset="55%"  stopColor="rgba(60, 110, 180, 0.45)" />
            <stop offset="100%" stopColor="rgba(30, 70, 130, 0.3)"  />
          </linearGradient>
          {/* Couch */}
          <linearGradient id="couch" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#2a4b7a" />
            <stop offset="100%" stopColor="#142a48" />
          </linearGradient>
          {/* Wood / table */}
          <linearGradient id="wood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#5a3b1f" />
            <stop offset="100%" stopColor="#2a1a0c" />
          </linearGradient>
          {/* Computer screen glow */}
          <radialGradient id="screen-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(111,184,240,0.85)" />
            <stop offset="60%"  stopColor="rgba(111,184,240,0.25)" />
            <stop offset="100%" stopColor="rgba(111,184,240,0)" />
          </radialGradient>
          {/* Lamp glow */}
          <radialGradient id="lamp-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(255, 200, 120, 0.6)" />
            <stop offset="100%" stopColor="rgba(255, 200, 120, 0)" />
          </radialGradient>
          {/* Filter: subtle blur */}
          <filter id="soft-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" />
          </filter>
        </defs>

        {/* Back wall */}
        <rect x="0" y="0" width="1600" height="640" fill="url(#wall-bg)" />

        {/* Faint wallpaper pattern */}
        <g opacity="0.06">
          {Array.from({ length: 16 }, (_, i) => (
            <line key={i}
              x1={i * 100} y1="0" x2={i * 100} y2="640"
              stroke="#6FB8F0" strokeWidth="0.5"
            />
          ))}
        </g>

        {/* Floor */}
        <polygon points="0,640 1600,640 1600,900 0,900" fill="url(#floor-bg)" />
        {/* Floor planks */}
        <g opacity="0.18" stroke="#6FB8F0" strokeWidth="0.6">
          {Array.from({ length: 10 }, (_, i) => {
            const y = 640 + i * 26;
            return <line key={i} x1="0" y1={y} x2="1600" y2={y} />;
          })}
        </g>
        {/* Floor wall shadow */}
        <rect x="0" y="630" width="1600" height="14" fill="rgba(0,0,0,0.5)" />

        {/* Side wall perspective lines */}
        <line x1="0"    y1="640" x2="-200" y2="900" stroke="rgba(111,184,240,0.08)" strokeWidth="1" />
        <line x1="1600" y1="640" x2="1800" y2="900" stroke="rgba(111,184,240,0.08)" strokeWidth="1" />

        {/* ─────────── WINDOW (back wall, left-center) ─────────── */}
        <g transform="translate(180, 80)">
          {/* Frame outer */}
          <rect x="-12" y="-12" width="384" height="384" fill="#0a1525" stroke="rgba(111,184,240,0.4)" strokeWidth="2" />
          {/* Glass */}
          <rect x="0" y="0" width="360" height="360" fill="url(#window-glass)" />
          {/* Faint city/sky glow */}
          <rect x="0" y="0" width="360" height="200" fill="rgba(80, 130, 200, 0.12)" />
          {/* Window crossbars */}
          <line x1="180" y1="0" x2="180" y2="360" stroke="rgba(111,184,240,0.45)" strokeWidth="3" />
          <line x1="0" y1="180" x2="360" y2="180" stroke="rgba(111,184,240,0.45)" strokeWidth="3" />
          {/* Sill */}
          <rect x="-20" y="360" width="400" height="16" fill="#0a1a30" stroke="rgba(111,184,240,0.25)" strokeWidth="1" />
          {/* Window flash overlay (lightning) */}
          <rect x="0" y="0" width="360" height="360" className="window-flash" />
        </g>

        {/* ─────────── PHOTO FRAME (back wall, right of window) ─────────── */}
        <g transform="translate(720, 180)">
          {/* Outer frame */}
          <rect x="0" y="0" width="120" height="150" fill="#1a1108" stroke="rgba(255,180,140,0.18)" strokeWidth="2" />
          {/* Shattered glass effect */}
          <rect x="6" y="6" width="108" height="138" fill="rgba(0,0,0,0.7)" />
          {/* Cracks */}
          <g stroke="rgba(220,230,255,0.45)" strokeWidth="0.8" fill="none" opacity="0.7">
            <polyline points="20,18 38,52 58,38 76,80 96,60 110,98" />
            <polyline points="14,90 44,72 64,110 90,100 108,130" />
            <line x1="48" y1="20" x2="58" y2="38" />
            <line x1="80" y1="40" x2="100" y2="20" />
          </g>
          {/* Bottom-right glint */}
          <line x1="0" y1="150" x2="120" y2="150" stroke="rgba(0,0,0,0.7)" strokeWidth="2" />
        </g>

        {/* ─────────── WALL NOTE ─────────── */}
        <g transform="translate(950, 300) rotate(-3)">
          <rect x="0" y="0" width="86" height="100" fill="#0d2440" stroke="rgba(111,184,240,0.4)" strokeWidth="1" />
          {/* tape */}
          <rect x="28" y="-6" width="30" height="10" fill="rgba(244,247,251,0.18)" />
          {/* lines of text */}
          <g stroke="rgba(111,184,240,0.4)" strokeWidth="1">
            <line x1="10" y1="20" x2="76" y2="20" />
            <line x1="10" y1="32" x2="64" y2="32" />
            <line x1="10" y1="44" x2="72" y2="44" />
            <line x1="10" y1="58" x2="50" y2="58" />
          </g>
        </g>

        {/* ─────────── DOOR (back wall, right side) ─────────── */}
        <g transform="translate(1220, 220)">
          <rect x="0" y="0" width="170" height="380" fill="#0a1525" stroke="rgba(111,184,240,0.35)" strokeWidth="2" />
          <rect x="14" y="14" width="142" height="352" fill="#142a4a" />
          {/* Door panels */}
          <rect x="28" y="38" width="114" height="130" fill="none" stroke="rgba(111,184,240,0.18)" strokeWidth="1" />
          <rect x="28" y="184" width="114" height="160" fill="none" stroke="rgba(111,184,240,0.18)" strokeWidth="1" />
          {/* Handle */}
          <circle cx="142" cy="200" r="5" fill="#c8a96b" />
          {/* Faint warning glow under door */}
          <rect x="14" y="354" width="142" height="12" fill="rgba(255,77,109,0.18)" filter="url(#soft-blur)" />
        </g>

        {/* ─────────── BOOKSHELF (back wall, far left) ─────────── */}
        <g transform="translate(40, 280)">
          <rect x="0" y="0" width="100" height="360" fill="#0a1525" stroke="rgba(111,184,240,0.18)" strokeWidth="1" />
          {/* Shelves */}
          {[0, 1, 2, 3].map(i => (
            <g key={i} transform={`translate(0, ${i * 90 + 10})`}>
              <line x1="0" y1="80" x2="100" y2="80" stroke="rgba(111,184,240,0.18)" strokeWidth="1" />
              {/* Books */}
              <rect x="6"  y="20" width="10" height="58" fill="#1f3a5e" />
              <rect x="18" y="14" width="9"  height="64" fill="#2a1a30" />
              <rect x="29" y="22" width="11" height="56" fill="#1a2a48" />
              <rect x="42" y="18" width="8"  height="60" fill="#3a2614" />
              <rect x="52" y="26" width="9"  height="52" fill="#1a3052" />
              <rect x="63" y="14" width="12" height="64" fill="#2a1f1a" />
              <rect x="77" y="20" width="9"  height="58" fill="#1f2a44" />
              <rect x="88" y="24" width="8"  height="54" fill="#2a1a2e" />
            </g>
          ))}
        </g>

        {/* ─────────── DESK + COMPUTER (right side, behind couch) ─────────── */}
        <g transform="translate(1060, 540)">
          {/* Desk top */}
          <rect x="0" y="0" width="280" height="14" fill="url(#wood)" />
          {/* Desk legs */}
          <rect x="10" y="14" width="10" height="120" fill="#1a1108" />
          <rect x="260" y="14" width="10" height="120" fill="#1a1108" />
          {/* Drawer */}
          <rect x="30" y="14" width="220" height="60" fill="#2a1a0c" stroke="rgba(111,184,240,0.1)" strokeWidth="1" />
          <line x1="30" y1="44" x2="250" y2="44" stroke="rgba(111,184,240,0.18)" strokeWidth="1" />
          <circle cx="140" cy="58" r="2.5" fill="#6a4f2c" />
          {/* Monitor stand */}
          <rect x="125" y="-46" width="30" height="46" fill="#0a1525" />
          {/* Monitor */}
          <rect x="70" y="-180" width="140" height="135" fill="#0a1525" stroke="rgba(111,184,240,0.4)" strokeWidth="2" />
          {/* Screen */}
          <rect x="78" y="-172" width="124" height="115" fill="#040a14" />
          {/* Screen glow */}
          <rect x="78" y="-172" width="124" height="115" fill="url(#screen-glow)" />
          {/* Text on screen */}
          <g fill="rgba(111,184,240,0.85)" fontFamily="JetBrains Mono, monospace" fontSize="6">
            <text x="86" y="-160">{">"} FINAL_ROOM.mp4</text>
            <text x="86" y="-150" fill="rgba(255,77,109,0.7)">⚠ LOCKED</text>
            <text x="86" y="-138">{">"} awaiting input</text>
          </g>
          {/* Keyboard */}
          <rect x="55" y="-44" width="170" height="14" fill="#0a1525" stroke="rgba(111,184,240,0.15)" strokeWidth="0.5" />
        </g>

        {/* ─────────── COUCH (left, foreground) ─────────── */}
        <g transform="translate(220, 600)">
          {/* Backrest */}
          <rect x="0" y="0" width="360" height="80" rx="14" fill="url(#couch)" stroke="rgba(111,184,240,0.18)" strokeWidth="1" />
          {/* Seat cushions */}
          <rect x="6" y="64" width="170" height="56" rx="8" fill="#162b4a" stroke="rgba(111,184,240,0.15)" strokeWidth="1" />
          <rect x="184" y="64" width="170" height="56" rx="8" fill="#162b4a" stroke="rgba(111,184,240,0.15)" strokeWidth="1" />
          {/* Armrests */}
          <rect x="-22" y="20" width="32" height="100" rx="10" fill="#0d1f3a" stroke="rgba(111,184,240,0.2)" strokeWidth="1" />
          <rect x="350" y="20" width="32" height="100" rx="10" fill="#0d1f3a" stroke="rgba(111,184,240,0.2)" strokeWidth="1" />
          {/* Throw / jacket draped */}
          <path d="M 60 -6 Q 80 -14 110 -10 L 130 30 Q 140 60 120 80 L 90 70 Q 65 50 60 30 Z"
                fill="#3a1a22" stroke="rgba(255,180,140,0.18)" strokeWidth="0.8" />
          <path d="M 110 -10 Q 125 -2 130 30" stroke="rgba(244,247,251,0.1)" strokeWidth="0.5" fill="none" />
          {/* Legs */}
          <rect x="-16" y="118" width="6" height="14" fill="#0a1525" />
          <rect x="370" y="118" width="6" height="14" fill="#0a1525" />
        </g>

        {/* ─────────── COFFEE TABLE (center, lower) ─────────── */}
        <g transform="translate(640, 740)">
          {/* Top */}
          <rect x="0" y="0" width="280" height="14" rx="2" fill="url(#wood)" stroke="rgba(111,184,240,0.15)" strokeWidth="0.5" />
          {/* Legs */}
          <rect x="6" y="12" width="6" height="60" fill="#1a1108" />
          <rect x="268" y="12" width="6" height="60" fill="#1a1108" />
          {/* Coffee mug */}
          <g transform="translate(40, -24)">
            <rect x="0" y="0" width="22" height="26" rx="2" fill="#1a3052" stroke="rgba(244,247,251,0.4)" strokeWidth="0.8" />
            <ellipse cx="11" cy="2" rx="11" ry="3" fill="#2a1810" />
            <path d="M 22 6 Q 30 8 30 14 Q 30 20 22 22" fill="none" stroke="rgba(244,247,251,0.4)" strokeWidth="0.8" />
            {/* steam */}
            <path d="M 6 -4 Q 4 -10 8 -14 Q 10 -18 6 -22" stroke="rgba(244,247,251,0.3)" strokeWidth="0.8" fill="none" opacity="0.7" />
            <path d="M 14 -4 Q 16 -10 12 -14 Q 14 -18 18 -22" stroke="rgba(244,247,251,0.3)" strokeWidth="0.8" fill="none" opacity="0.5" />
          </g>
          {/* Movie ticket */}
          <g transform="translate(120, -8) rotate(-10)">
            <rect x="0" y="0" width="80" height="22" fill="#d4a464" stroke="#3a2614" strokeWidth="0.6" />
            <line x1="20" y1="0" x2="20" y2="22" stroke="#3a2614" strokeDasharray="2,2" strokeWidth="0.4" />
            <text x="26" y="8"  fontFamily="JetBrains Mono, monospace" fontSize="4" fill="#3a2614">THE DICTATOR</text>
            <text x="26" y="15" fontFamily="JetBrains Mono, monospace" fontSize="3.5" fill="#3a2614">10 · 02 · 21</text>
          </g>
          {/* Small dark blue post-it / note */}
          <g transform="translate(220, -10) rotate(6)">
            <rect x="0" y="0" width="42" height="36" fill="#0d2440" stroke="rgba(111,184,240,0.5)" strokeWidth="0.5" />
            <line x1="6" y1="8"  x2="36" y2="8"  stroke="rgba(111,184,240,0.5)" strokeWidth="0.4" />
            <line x1="6" y1="14" x2="32" y2="14" stroke="rgba(111,184,240,0.5)" strokeWidth="0.4" />
            <line x1="6" y1="20" x2="36" y2="20" stroke="rgba(111,184,240,0.5)" strokeWidth="0.4" />
          </g>
        </g>

        {/* ─────────── FLOOR LAMP (right corner) ─────────── */}
        <g transform="translate(1470, 380)">
          {/* Lamp shade */}
          <path d="M -28 0 L 28 0 L 22 60 L -22 60 Z" fill="#2a1f1a" stroke="rgba(255,200,120,0.4)" strokeWidth="1" />
          {/* Glow */}
          <ellipse cx="0" cy="80" rx="80" ry="60" fill="url(#lamp-glow)" />
          {/* Stand */}
          <line x1="0" y1="60" x2="0" y2="280" stroke="#1a1108" strokeWidth="3" />
          {/* Base */}
          <ellipse cx="0" cy="280" rx="20" ry="4" fill="#1a1108" />
        </g>

        {/* ─────────── DRAWER UNIT (under couch left edge) ─────────── */}
        <g transform="translate(60, 700)">
          <rect x="0" y="0" width="100" height="140" fill="#0a1525" stroke="rgba(111,184,240,0.2)" strokeWidth="1" />
          <line x1="0" y1="46"  x2="100" y2="46"  stroke="rgba(111,184,240,0.2)" />
          <line x1="0" y1="94"  x2="100" y2="94"  stroke="rgba(111,184,240,0.2)" />
          <circle cx="50" cy="22" r="2" fill="#6a4f2c" />
          <circle cx="50" cy="70" r="2" fill="#6a4f2c" />
          <circle cx="50" cy="118" r="2" fill="#6a4f2c" />
          {/* Keychain hanging */}
          <line x1="38" y1="24" x2="38" y2="44" stroke="rgba(244,247,251,0.4)" strokeWidth="0.6" />
          <circle cx="38" cy="48" r="6" fill="#ff7a92" stroke="#fff" strokeWidth="0.6" />
          <circle cx="36" cy="46" r="0.6" fill="#000" />
          <circle cx="40" cy="46" r="0.6" fill="#000" />
        </g>

        {/* Ceiling shadow */}
        <rect x="0" y="0" width="1600" height="60" fill="rgba(0,0,0,0.5)" />
      </svg>
    </div>
  );
}

Object.assign(window, { SalonRoom });
