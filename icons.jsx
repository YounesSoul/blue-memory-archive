/* ============================================================
   EP3 SVG ICONS — cats + candle
   ============================================================ */

const C_FUR    = 'rgba(148,178,220,0.88)';
const C_EAR    = 'rgba(195,148,182,0.52)';
const C_DARK   = 'rgba(22,38,72,0.88)';
const C_SHINE  = 'rgba(255,255,255,0.52)';
const C_STROKE = 'rgba(100,132,185,0.38)';

function CatSleeping({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <ellipse cx="27" cy="33" rx="15" ry="10" fill={C_FUR} />
      <circle  cx="12" cy="28" r="8.5"         fill={C_FUR} />
      <path d="M7,22 L5,14 L13,20 Z"           fill={C_FUR} />
      <path d="M8,22 L6.5,16 L13,20 Z"         fill={C_EAR} />
      <path d="M8.5,28 Q12,25.5 15.5,28"
        stroke={C_DARK} strokeWidth="1.3" strokeLinecap="round" />
      <ellipse cx="12" cy="31" rx="1.5" ry="1" fill={C_DARK} opacity="0.6" />
      <path d="M40,34 Q45,22 36,17 Q29,14 24,19"
        stroke={C_FUR} strokeWidth="4.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function CatSitting({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="35" rx="11" ry="11" fill={C_FUR} />
      <circle  cx="24" cy="18" r="9.5"         fill={C_FUR} />
      <path d="M16.5,13 L13,5 L21.5,11 Z"      fill={C_FUR} />
      <path d="M31.5,13 L35,5 L26.5,11 Z"      fill={C_FUR} />
      <path d="M17.5,13 L15,7 L21.5,11 Z"      fill={C_EAR} />
      <path d="M30.5,13 L33,7 L26.5,11 Z"      fill={C_EAR} />
      <circle cx="20" cy="18" r="2.8"          fill={C_DARK} />
      <circle cx="28" cy="18" r="2.8"          fill={C_DARK} />
      <circle cx="21" cy="17" r="1"            fill={C_SHINE} />
      <circle cx="29" cy="17" r="1"            fill={C_SHINE} />
      <path d="M22.5,22 L24,21 L25.5,22 L24,23.5 Z" fill={C_DARK} opacity="0.55" />
      <line x1="13"  y1="21"   x2="21" y2="22.5" stroke={C_STROKE} strokeWidth="0.9" />
      <line x1="13"  y1="23.5" x2="21" y2="23.5" stroke={C_STROKE} strokeWidth="0.9" />
      <line x1="35"  y1="21"   x2="27" y2="22.5" stroke={C_STROKE} strokeWidth="0.9" />
      <line x1="35"  y1="23.5" x2="27" y2="23.5" stroke={C_STROKE} strokeWidth="0.9" />
      <ellipse cx="18" cy="45" rx="5"   ry="2.5" fill={C_FUR} />
      <ellipse cx="30" cy="45" rx="5"   ry="2.5" fill={C_FUR} />
      <path d="M35,40 Q44,33 40,46"
        stroke={C_FUR} strokeWidth="3.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function CatScratch({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <ellipse cx="26" cy="36" rx="12" ry="9" fill={C_FUR} transform="rotate(-10,26,36)" />
      <circle  cx="15" cy="24" r="9"           fill={C_FUR} />
      <path d="M9,18 L6,10 L15,16 Z"           fill={C_FUR} />
      <path d="M19,17 L21,9 L26,15 Z"          fill={C_FUR} />
      <path d="M10,18 L7.5,12 L15,16 Z"        fill={C_EAR} />
      <path d="M20,17 L22,11 L26,15 Z"         fill={C_EAR} />
      <ellipse cx="12" cy="24" rx="2.2" ry="2.6" fill={C_DARK} />
      <ellipse cx="19" cy="24" rx="2.2" ry="2.6" fill={C_DARK} />
      <circle  cx="13" cy="23" r="0.9"           fill={C_SHINE} />
      <path d="M26,28 Q30,20 33,11"
        stroke={C_FUR} strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M31.5,9  Q34,5   36.5,5"  stroke={C_FUR} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M33,11.5 Q36,8.5 38.5,9"  stroke={C_FUR} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M33.5,14 Q37,12  39,13.5" stroke={C_FUR} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M37,39 Q43,45 38,48"
        stroke={C_FUR} strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function CatReaching({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <ellipse cx="29" cy="36" rx="14" ry="8.5" fill={C_FUR} />
      <circle  cx="10" cy="31" r="8.5"           fill={C_FUR} />
      <path d="M5,26 L2,18 L10,24 Z"             fill={C_FUR} />
      <path d="M13,24 L14,16 L19,23 Z"           fill={C_FUR} />
      <path d="M6,26 L3.5,20 L10,24 Z"           fill={C_EAR} />
      <path d="M14,24 L15,18 L19,23 Z"           fill={C_EAR} />
      <circle cx="7.5"  cy="31" r="2.3"          fill={C_DARK} />
      <circle cx="13.5" cy="31" r="2.3"          fill={C_DARK} />
      <circle cx="8.3"  cy="30" r="0.9"          fill={C_SHINE} />
      <path d="M19,30 Q27,25 34,21 Q39,18 42,17"
        stroke={C_FUR} strokeWidth="3.8" strokeLinecap="round" fill="none" />
      <circle cx="43"   cy="16.5" r="3.2"        fill={C_FUR} />
      <circle cx="41"   cy="13.5" r="1.4"        fill={C_FUR} />
      <circle cx="43.5" cy="12.5" r="1.4"        fill={C_FUR} />
      <circle cx="46"   cy="14"   r="1.4"        fill={C_FUR} />
      <path d="M41,38 Q47,30 44,20"
        stroke={C_FUR} strokeWidth="3.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function CatAlert({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="36" rx="10" ry="10"  fill={C_FUR} />
      <circle  cx="24" cy="18" r="9.5"           fill={C_FUR} />
      <path d="M16,13 L12,3  L21.5,11 Z"         fill={C_FUR} />
      <path d="M32,13 L36,3  L26.5,11 Z"         fill={C_FUR} />
      <path d="M17,13 L13.5,5 L21.5,11 Z"        fill={C_EAR} />
      <path d="M31,13 L34.5,5 L26.5,11 Z"        fill={C_EAR} />
      <circle cx="19.5" cy="18" r="4.2"          fill={C_DARK} />
      <circle cx="28.5" cy="18" r="4.2"          fill={C_DARK} />
      <circle cx="21"   cy="16.5" r="1.4"        fill={C_SHINE} />
      <circle cx="30"   cy="16.5" r="1.4"        fill={C_SHINE} />
      <line x1="12" y1="22"   x2="20" y2="23"   stroke={C_STROKE} strokeWidth="1" />
      <line x1="12" y1="24.5" x2="20" y2="24"   stroke={C_STROKE} strokeWidth="1" />
      <line x1="36" y1="22"   x2="28" y2="23"   stroke={C_STROKE} strokeWidth="1" />
      <line x1="36" y1="24.5" x2="28" y2="24"   stroke={C_STROKE} strokeWidth="1" />
      <path d="M34,42 Q42,32 37,18 Q35,11 40,6"
        stroke={C_FUR} strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <path d="M39,14 Q43,11 44,8"   stroke={C_FUR} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M40,18 Q44,16 45,13"  stroke={C_FUR} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CandleIcon({ size = 32, lit = false }) {
  const h = Math.round(size * 1.8);
  return (
    <svg width={size} height={h} viewBox="0 0 20 36" fill="none">
      {lit ? (
        <g className="c-flame">
          <ellipse cx="10" cy="7" rx="5.5" ry="5.5" fill="rgba(255,150,20,0.16)" />
          <path d="M10,1 Q13.5,5 13,9.5 Q12.5,12.5 10,12.5 Q7.5,12.5 7,9.5 Q6.5,5 10,1 Z"
            fill="rgba(255,210,60,0.92)" />
          <path d="M10,4 Q12,7 11.5,9.5 Q11,12 10,12 Q9,12 9.5,9.5 Q9.5,7 10,4 Z"
            fill="rgba(255,248,190,0.8)" />
        </g>
      ) : (
        <path d="M10,2 Q13,5.5 12.5,9.5 Q12,12.5 10,12.5 Q8,12.5 7.5,9.5 Q7,5.5 10,2 Z"
          fill="rgba(55,65,88,0.45)" />
      )}
      <line x1="10" y1="12.5" x2="10" y2="15.5"
        stroke={lit ? 'rgba(50,35,10,0.8)' : 'rgba(55,65,88,0.5)'}
        strokeWidth="1.1" strokeLinecap="round" />
      <rect x="7" y="15.5" width="6" height="16" rx="0.6"
        fill={lit ? 'rgba(244,232,200,0.88)' : 'rgba(78,92,118,0.52)'} />
      <path d="M13,18.5 Q14.5,22 13.5,25"
        stroke={lit ? 'rgba(244,232,200,0.5)' : 'rgba(78,92,118,0.3)'}
        strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <rect x="5.5" y="31" width="9" height="4" rx="1.2"
        fill={lit ? 'rgba(224,212,180,0.75)' : 'rgba(62,78,105,0.5)'} />
    </svg>
  );
}

Object.assign(window, {
  CatSleeping, CatSitting, CatScratch, CatReaching, CatAlert, CandleIcon,
});
