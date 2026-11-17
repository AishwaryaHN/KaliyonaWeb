import type { IllustrationId } from '../../lib/backbencher/assignIllustrations'

const cls = 'h-[4.5rem] w-[5.5rem]'

export function IllustrationSvg({ id }: { id: IllustrationId }) {
  switch (id) {
    case 'lightbulb-student':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <circle cx="42" cy="38" r="16" fill="#FCD34D" />
          <rect x="32" y="54" width="20" height="14" rx="4" fill="#38BDF8" />
          <path d="M72 18h12v24H72z" fill="#FBBF24" />
          <circle cx="78" cy="28" r="8" fill="#FEF9C3" stroke="#CA8A04" />
        </svg>
      )
    case 'chalkboard':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <rect x="22" y="16" width="76" height="48" rx="6" fill="#166534" />
          <path d="M32 32h48M32 42h36" stroke="#86EFAC" strokeWidth="3" />
          <rect x="88" y="58" width="8" height="14" fill="#FDE047" transform="rotate(25 92 65)" />
        </svg>
      )
    case 'megaphone':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <path d="M35 45 L55 35 L75 25 V55 L55 45 Z" fill="#FB7185" />
          <ellipse cx="78" cy="40" rx="14" ry="18" fill="#F97316" />
          <path d="M28 40 Q18 30 22 22" stroke="#FDA4AF" strokeWidth="2" fill="none" />
        </svg>
      )
    case 'question-bubble':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <ellipse cx="58" cy="36" rx="36" ry="24" fill="#60A5FA" />
          <text x="58" y="44" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="bold">
            ?
          </text>
          <polygon points="50,56 58,68 66,56" fill="#60A5FA" />
        </svg>
      )
    case 'classroom-rows':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <rect x="20" y="20" width="80" height="44" rx="4" fill="#E0E7FF" />
          {[34, 52, 70].map((x) => (
            <g key={x}>
              <circle cx={x} cy="44" r="7" fill="#6366F1" />
              <rect x={x - 8} y="52" width="16" height="8" rx="2" fill="#818CF8" />
            </g>
          ))}
        </svg>
      )
    case 'trophy-star':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <path d="M60 12 L66 30 H84 L70 40 L76 58 L60 48 L44 58 L50 40 L36 30 H54 Z" fill="#FBBF24" />
          <rect x="48" y="58" width="24" height="10" rx="2" fill="#B45309" />
        </svg>
      )
    case 'toolbox':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <rect x="30" y="28" width="60" height="36" rx="6" fill="#DC2626" />
          <rect x="48" y="22" width="24" height="10" rx="3" fill="#991B1B" />
          <rect x="38" y="38" width="18" height="14" fill="#FCA5A5" />
          <rect x="64" y="38" width="18" height="14" fill="#FCA5A5" />
        </svg>
      )
    case 'coffee-break':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <rect x="42" y="30" width="36" height="28" rx="4" fill="#D97706" />
          <path d="M78 36 h12 a8 8 0 0 1 0 16 H78" fill="none" stroke="#92400E" strokeWidth="3" />
          <path d="M48 26 Q54 18 60 26" stroke="#FDE68A" strokeWidth="3" fill="none" />
        </svg>
      )
    case 'lamp':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <path d="M50 20 H70 L65 42 Q60 50 55 42 Z" fill="#FDE047" />
          <rect x="54" y="48" width="12" height="16" fill="#9CA3AF" />
          <path d="M60 12 v6 M42 36 h6 M78 36 h6" stroke="#EAB308" strokeWidth="2" />
        </svg>
      )
    case 'window-breeze':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <rect x="35" y="18" width="50" height="44" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2" />
          <line x1="60" y1="18" x2="60" y2="62" stroke="#0284C7" />
          <path d="M88 28 Q100 34 88 40 Q100 46 88 52" stroke="#22D3EE" strokeWidth="2" fill="none" />
        </svg>
      )
    case 'chair-desk':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <rect x="32" y="36" width="56" height="8" rx="2" fill="#A78BFA" />
          <rect x="38" y="44" width="8" height="20" fill="#7C3AED" />
          <rect x="74" y="44" width="8" height="20" fill="#7C3AED" />
          <rect x="68" y="28" width="20" height="12" rx="3" fill="#C4B5FD" />
        </svg>
      )
    case 'broom-sparkle':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <line x1="70" y1="20" x2="50" y2="60" stroke="#854D0E" strokeWidth="4" />
          <path d="M38 58 Q30 50 35 65 Q45 72 55 65 Q50 55 38 58" fill="#FDE047" />
          <text x="78" y="32" fill="#FBBF24" fontSize="14">
            ✦
          </text>
        </svg>
      )
    case 'shush':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <circle cx="50" cy="40" r="22" fill="#A5F3FC" />
          <text x="50" y="48" textAnchor="middle" fontSize="20">
            🤫
          </text>
          <path d="M78 50 Q90 40 100 50" stroke="#64748B" strokeWidth="2" fill="none" />
        </svg>
      )
    case 'books-stack':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <rect x="36" y="48" width="48" height="10" fill="#F472B6" />
          <rect x="40" y="36" width="44" height="10" fill="#60A5FA" />
          <rect x="44" y="24" width="40" height="10" fill="#4ADE80" />
        </svg>
      )
    case 'rocket':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <path d="M60 16 L68 44 L60 52 L52 44 Z" fill="#E2E8F0" />
          <circle cx="60" cy="32" r="6" fill="#38BDF8" />
          <path d="M48 48 L40 62 M72 48 L80 62" stroke="#F97316" strokeWidth="3" />
        </svg>
      )
    case 'handshake':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <path d="M35 45 L55 35 L75 45 L95 35" stroke="#F59E0B" strokeWidth="6" fill="none" strokeLinecap="round" />
          <circle cx="45" cy="48" r="10" fill="#FCD34D" />
          <circle cx="75" cy="48" r="10" fill="#FCD34D" />
        </svg>
      )
    case 'shield-heart':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <path d="M60 18 L85 28 V42 Q85 58 60 68 Q35 58 35 42 V28 Z" fill="#818CF8" />
          <path d="M60 34 Q52 42 60 54 Q68 42 60 34" fill="#F472B6" />
        </svg>
      )
    case 'team-circle':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <circle cx="40" cy="36" r="12" fill="#38BDF8" />
          <circle cx="60" cy="28" r="12" fill="#A78BFA" />
          <circle cx="80" cy="36" r="12" fill="#4ADE80" />
          <ellipse cx="60" cy="56" rx="38" ry="10" fill="none" stroke="#94A3B8" strokeWidth="2" />
        </svg>
      )
    case 'speech-bubble':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <ellipse cx="58" cy="38" rx="40" ry="26" fill="#F0ABFC" />
          <text x="58" y="44" textAnchor="middle" fontSize="14" fill="#701A75">
            ideas
          </text>
        </svg>
      )
    case 'medal':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <circle cx="60" cy="44" r="20" fill="#FBBF24" stroke="#B45309" strokeWidth="3" />
          <rect x="52" y="18" width="6" height="16" fill="#DC2626" />
          <rect x="62" y="18" width="6" height="16" fill="#2563EB" />
        </svg>
      )
    case 'home-school':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <path d="M30 48 L60 24 L90 48 V62 H30 Z" fill="#FCA5A5" />
          <rect x="72" y="50" width="28" height="28" rx="2" fill="#93C5FD" />
        </svg>
      )
    case 'target-eye':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <circle cx="60" cy="40" r="26" fill="none" stroke="#EF4444" strokeWidth="4" />
          <circle cx="60" cy="40" r="10" fill="#3B82F6" />
          <circle cx="62" cy="38" r="3" fill="#fff" />
        </svg>
      )
    case 'brain-book':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <path
            d="M48 28 C38 28 36 42 44 46 C40 52 44 62 56 62 C60 68 70 68 74 62 C86 62 90 52 86 46 C94 42 92 28 82 28 C78 22 52 22 48 28"
            fill="#F9A8D4"
          />
          <rect x="78" y="48" width="22" height="16" rx="2" fill="#60A5FA" />
        </svg>
      )
    case 'paint-palette':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <ellipse cx="55" cy="44" rx="32" ry="24" fill="#FDE68A" />
          <circle cx="42" cy="38" r="5" fill="#EF4444" />
          <circle cx="58" cy="34" r="5" fill="#3B82F6" />
          <circle cx="68" cy="48" r="5" fill="#22C55E" />
        </svg>
      )
    case 'lab-flask':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <path d="M52 18 H68 V32 L82 62 H38 L52 32 Z" fill="#A7F3D0" stroke="#059669" />
          <circle cx="60" cy="52" r="6" fill="#34D399" />
        </svg>
      )
    case 'pyramid':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <polygon points="60,18 95,62 25,62" fill="#FCD34D" stroke="#CA8A04" />
          <line x1="42" y1="50" x2="78" y2="50" stroke="#CA8A04" />
          <line x1="50" y1="62" x2="68" y2="38" stroke="#CA8A04" />
        </svg>
      )
    case 'clipboard':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <rect x="38" y="22" width="44" height="52" rx="4" fill="#E2E8F0" />
          <rect x="52" y="16" width="16" height="10" rx="3" fill="#94A3B8" />
          <line x1="46" y1="40" x2="74" y2="40" stroke="#64748B" />
          <line x1="46" y1="52" x2="68" y2="52" stroke="#64748B" />
        </svg>
      )
    case 'stairs':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <rect x="28" y="52" width="20" height="12" fill="#818CF8" />
          <rect x="48" y="40" width="20" height="24" fill="#A78BFA" />
          <rect x="68" y="28" width="20" height="36" fill="#C4B5FD" />
        </svg>
      )
    case 'arrow-path':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <path d="M25 50 Q45 20 60 40 Q75 60 95 30" stroke="#0D9488" strokeWidth="4" fill="none" />
          <polygon points="92,28 98,38 86,36" fill="#0D9488" />
        </svg>
      )
    case 'flag-school':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <rect x="48" y="16" width="40" height="28" fill="#EF4444" />
          <line x1="48" y1="16" x2="48" y2="64" stroke="#374151" strokeWidth="3" />
          <rect x="58" y="48" width="44" height="20" rx="2" fill="#93C5FD" />
        </svg>
      )
    case 'puzzle':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <path d="M40 32 H52 V28 A8 8 0 0 1 60 20 H68 V32 H80 V44 H68 A8 8 0 0 1 60 52 H52 V44 H40 Z" fill="#F472B6" />
        </svg>
      )
    case 'microscope':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <circle cx="72" cy="32" r="14" fill="#94A3B8" />
          <line x1="72" y1="46" x2="72" y2="62" stroke="#475569" strokeWidth="4" />
          <rect x="48" y="60" width="48" height="6" rx="2" fill="#334155" />
        </svg>
      )
    case 'globe':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <circle cx="60" cy="40" r="24" fill="#38BDF8" />
          <ellipse cx="60" cy="40" rx="24" ry="10" fill="none" stroke="#0284C7" strokeWidth="2" />
          <line x1="36" y1="40" x2="84" y2="40" stroke="#0284C7" strokeWidth="2" />
        </svg>
      )
    case 'pencil-rocket':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <polygon points="58,20 70,50 58,58 46,50" fill="#FBBF24" />
          <rect x="54" y="56" width="8" height="12" fill="#F59E0B" />
          <line x1="75" y1="28" x2="88" y2="22" stroke="#64748B" strokeWidth="3" />
        </svg>
      )
    case 'music-note':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <ellipse cx="48" cy="56" rx="12" ry="10" fill="#1E293B" />
          <line x1="60" y1="20" x2="60" y2="56" stroke="#1E293B" strokeWidth="4" />
          <path d="M60 22 Q78 18 78 30 L60 32" fill="#1E293B" />
        </svg>
      )
    case 'camera-flash':
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <rect x="36" y="32" width="48" height="32" rx="6" fill="#334155" />
          <circle cx="60" cy="48" r="12" fill="#64748B" />
          <polygon points="88,24 100,12 95,28" fill="#FDE047" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 120 80" className={cls}>
          <circle cx="60" cy="40" r="22" fill="#C4B5FD" />
        </svg>
      )
  }
}