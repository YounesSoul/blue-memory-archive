/* ============================================================
   MEMORY KITCHEN — SVG background for Episode 2
   Dark-blue cinematic kitchen with warm stove glow, rainy
   window (left), upper cabinets, stove + fridge (right).
   ============================================================ */
function KitchenRoom({ corrupted = false }) {
  const rain = Array.from({ length: 24 }, (_, i) => {
    const col = i % 12; const row = Math.floor(i / 12);
    const x  = 72 + col * 25 + row * 12;
    const y  = 160 + row * 196 + (i * 23) % 148;
    const len = 16 + (i * 9) % 28;
    return { x, y, len };
  });

  return (
    <div className={'kitchen-stage' + (corrupted ? ' kitchen--corrupted' : '')}>
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="kitchen-svg"
      >
        <defs>
          <linearGradient id="kw" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1a3258" />
            <stop offset="55%"  stopColor="#122546" />
            <stop offset="100%" stopColor="#0c1c36" />
          </linearGradient>
          <linearGradient id="kfl" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0d1e36" />
            <stop offset="100%" stopColor="#050e1e" />
          </linearGradient>
          <linearGradient id="kct" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#3e2e1c" />
            <stop offset="100%" stopColor="#2b1e0f" />
          </linearGradient>
          <linearGradient id="kcf" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#152342" />
            <stop offset="100%" stopColor="#0c1a32" />
          </linearGradient>
          <linearGradient id="kwg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="rgba(50,95,200,0.58)" />
            <stop offset="55%"  stopColor="rgba(32,65,165,0.38)" />
            <stop offset="100%" stopColor="rgba(15,42,125,0.22)" />
          </linearGradient>
          <radialGradient id="kwgl" cx="50%" cy="50%" r="65%">
            <stop offset="0%"   stopColor="rgba(85,155,240,0.17)" />
            <stop offset="100%" stopColor="rgba(85,155,240,0)" />
          </radialGradient>
          <radialGradient id="ksg" cx="50%" cy="30%" r="60%">
            <stop offset="0%"   stopColor="rgba(255,145,45,0.09)" />
            <stop offset="100%" stopColor="rgba(255,145,45,0)" />
          </radialGradient>
          <linearGradient id="kfr" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1e3a62" />
            <stop offset="100%" stopColor="#132c50" />
          </linearGradient>
          <linearGradient id="kcb" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0f2042" />
            <stop offset="100%" stopColor="#0b1a34" />
          </linearGradient>
        </defs>

        {/* ── WALL ── */}
        <rect width="1600" height="900" fill="url(#kw)" />

        {/* ── FLOOR ── */}
        <rect x="0" y="622" width="1600" height="278" fill="url(#kfl)" />
        <rect x="0" y="622" width="1600" height="4"   fill="rgba(0,0,0,.38)" />

        {/* ── CEILING SHADOW ── */}
        <rect x="0" y="0" width="1600" height="22" fill="rgba(0,0,0,.22)" />

        {/* ── WINDOW BLUE GLOW ── */}
        <ellipse cx="216" cy="355" rx="440" ry="310" fill="url(#kwgl)" />

        {/* ── WINDOW ── */}
        <rect x="48"  y="138" width="348" height="408" rx="5" fill="#071628" />
        <rect x="65"  y="155" width="314" height="192" rx="2" fill="url(#kwg)" />
        <rect x="65"  y="353" width="314" height="178" rx="2" fill="url(#kwg)" opacity=".72" />
        {/* dividers */}
        <rect x="219" y="155" width="7" height="376" fill="#07162a" />
        <rect x="65"  y="348" width="314" height="9"  fill="#07162a" />
        {/* sill */}
        <rect x="40"  y="540" width="364" height="24" rx="3" fill="#0f2642" />
        {/* night sky overlay */}
        <rect x="65"  y="155" width="314" height="192" fill="rgba(4,11,28,.32)" />
        <rect x="65"  y="353" width="314" height="178" fill="rgba(4,11,28,.22)" />
        {/* rain streaks */}
        {rain.map((r, i) => (
          <line key={i} x1={r.x} y1={r.y} x2={r.x - 2} y2={r.y + r.len}
            stroke="rgba(95,155,240,.22)" strokeWidth="1" />
        ))}
        {/* curtains */}
        <path d="M48,138 C64,200 53,318 48,426 L48,542 L84,542 L84,150Z"
          fill="#0d2244" opacity=".58" />
        <path d="M396,138 C380,200 391,318 396,426 L396,542 L360,542 L360,150Z"
          fill="#0d2244" opacity=".58" />

        {/* ── UPPER CABINETS (center-left) ── */}
        <rect x="422" y="68" width="208" height="248" fill="url(#kcb)" rx="2" />
        <rect x="634" y="68" width="208" height="248" fill="url(#kcb)" rx="2" />
        <rect x="423" y="69" width="206" height="246" rx="2" fill="none"
          stroke="rgba(111,184,240,.09)" strokeWidth="1" />
        <rect x="635" y="69" width="206" height="246" rx="2" fill="none"
          stroke="rgba(111,184,240,.09)" strokeWidth="1" />
        <rect x="509" y="192" width="32" height="5" rx="2.5" fill="rgba(111,184,240,.28)" />
        <rect x="721" y="192" width="32" height="5" rx="2.5" fill="rgba(111,184,240,.28)" />
        {/* center cabinet */}
        <rect x="860" y="68" width="188" height="248" fill="url(#kcb)" rx="2" />
        <rect x="861" y="69" width="186" height="246" rx="2" fill="none"
          stroke="rgba(111,184,240,.09)" strokeWidth="1" />
        <rect x="940" y="192" width="32" height="5" rx="2.5" fill="rgba(111,184,240,.28)" />

        {/* ── RANGE HOOD ── */}
        <path d="M1065,52 L1298,52 L1258,318 L1105,318 Z"
          fill="#091828" stroke="rgba(111,184,240,.08)" strokeWidth="1.5" />
        <line x1="1085" y1="208" x2="1278" y2="208" stroke="rgba(111,184,240,.05)" strokeWidth="2" />
        <line x1="1095" y1="235" x2="1268" y2="235" stroke="rgba(111,184,240,.05)" strokeWidth="2" />
        <line x1="1105" y1="260" x2="1258" y2="260" stroke="rgba(111,184,240,.05)" strokeWidth="2" />
        <rect x="1106" y="310" width="172" height="6" rx="3" fill="rgba(240,198,98,.13)" />

        {/* ── STOVE ── */}
        <rect x="1088" y="318" width="208" height="308" fill="#0a1928" />
        <ellipse cx="1192" cy="488" rx="200" ry="148" fill="url(#ksg)" />
        {/* burner left */}
        <circle cx="1124" cy="420" r="56" fill="#0e2038" stroke="#182e48" strokeWidth="2" />
        <circle cx="1124" cy="420" r="38" fill="#091626" stroke="#182e48" strokeWidth="1.5" />
        <circle cx="1124" cy="420" r="9"  fill="#172b42" />
        <line x1="1086" y1="420" x2="1162" y2="420" stroke="#182e48" strokeWidth="1.5" />
        <line x1="1124" y1="382" x2="1124" y2="458" stroke="#182e48" strokeWidth="1.5" />
        {/* burner right */}
        <circle cx="1262" cy="420" r="56" fill="#0e2038" stroke="#182e48" strokeWidth="2" />
        <circle cx="1262" cy="420" r="38" fill="#091626" stroke="#182e48" strokeWidth="1.5" />
        <circle cx="1262" cy="420" r="9"  fill="#172b42" />
        <line x1="1224" y1="420" x2="1300" y2="420" stroke="#182e48" strokeWidth="1.5" />
        <line x1="1262" y1="382" x2="1262" y2="458" stroke="#182e48" strokeWidth="1.5" />
        {/* oven door */}
        <rect x="1098" y="510" width="198" height="116" rx="3" fill="#081526" />
        <rect x="1103" y="515" width="188" height="106" rx="2" fill="none"
          stroke="rgba(111,184,240,.07)" strokeWidth="1.5" />
        <rect x="1144" y="512" width="108" height="7" rx="3.5" fill="rgba(111,184,240,.36)" />
        {/* knobs */}
        {[1118, 1156, 1192, 1230, 1268].map((cx, i) => (
          <circle key={i} cx={cx} cy="498" r="11"
            fill="#132032" stroke="rgba(111,184,240,.18)" strokeWidth="1" />
        ))}

        {/* ── FRIDGE ── */}
        <rect x="1334" y="68" width="262" height="726" rx="5" fill="url(#kfr)" />
        <rect x="1334" y="68"  width="262" height="218" rx="5 5 0 0" fill="#1d3860" />
        <rect x="1334" y="284" width="262" height="4"   fill="rgba(0,0,0,.32)" />
        <rect x="1334" y="68"  width="262" height="726" rx="5" fill="none"
          stroke="rgba(111,184,240,.1)" strokeWidth="1.5" />
        {/* handles */}
        <rect x="1562" y="126" width="9" height="58" rx="4.5" fill="rgba(111,184,240,.42)" />
        <rect x="1562" y="364" width="9" height="82" rx="4.5" fill="rgba(111,184,240,.42)" />
        {/* bottom trim */}
        <rect x="1334" y="760" width="262" height="34" rx="0 0 5 5" fill="#0e2042" />

        {/* ── BACKSPLASH LINES ── */}
        {[490, 522, 554].map(y => (
          <line key={y} x1="0" y1={y} x2="1316" y2={y}
            stroke="rgba(111,184,240,.032)" strokeWidth="1" />
        ))}
        {[120,240,360,480,600,720,840,960,1080,1200].map(x => (
          <line key={x} x1={x} y1="475" x2={x} y2="580"
            stroke="rgba(111,184,240,.022)" strokeWidth="1" />
        ))}

        {/* ── COUNTER TOP ── */}
        <rect x="0" y="582" width="1316" height="46" fill="url(#kct)" />
        <line x1="0" y1="582" x2="1316" y2="582" stroke="rgba(240,175,115,.1)" strokeWidth="2" />
        <rect x="0" y="582" width="1316" height="8"  fill="rgba(0,0,0,.18)" />

        {/* ── COUNTER FACE ── */}
        <rect x="0" y="628" width="1316" height="174" fill="url(#kcf)" />
        {[170, 392, 614, 836, 1058].map((x, i) => (
          <React.Fragment key={i}>
            <rect x={x} y="652" width="182" height="88" rx="3" fill="none"
              stroke="rgba(111,184,240,.09)" strokeWidth="1" />
            <rect x={x + 82} y="692" width="24" height="4" rx="2"
              fill="rgba(111,184,240,.22)" />
          </React.Fragment>
        ))}

        {/* Cutting board (decorative) */}
        <rect x="748" y="548" width="204" height="40" rx="3" fill="#2d1f10" opacity=".76" />
        <rect x="758" y="552" width="184" height="32" rx="2" fill="#382512" opacity=".76" />

        {/* Steam wisps near noodle position */}
        <path d="M128,546 Q134,526 125,505 Q116,484 123,468"
          stroke="rgba(255,255,255,.042)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M146,546 Q155,521 146,500 Q137,479 144,463"
          stroke="rgba(255,255,255,.028)" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Floor blue light from window */}
        <ellipse cx="216" cy="818" rx="265" ry="72" fill="rgba(48,88,178,.05)" />

        {/* Right edge shadow */}
        <rect x="1590" y="0" width="10" height="900" fill="rgba(0,0,0,.12)" />
      </svg>
    </div>
  );
}

Object.assign(window, { KitchenRoom });
