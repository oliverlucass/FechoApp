export function HeroArt() {
  const blue = "#0A65FC";
  const white = "#FFFFFF";
  return (
    <svg width="220" height="180" viewBox="0 0 220 180" aria-hidden="true" className="hidden shrink-0 xl:block">
      <rect x="28" y="18" width="10" height="150" rx="2" fill={blue} />
      <rect x="78" y="18" width="10" height="150" rx="2" fill={blue} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x="28" y={30 + i * 22} width="60" height="6" rx="2" fill={blue} />
      ))}
      <circle cx="150" cy="48" r="16" fill={blue} />
      <rect x="136" y="66" width="28" height="36" rx="10" fill={blue} />
      <rect x="168" y="70" width="8" height="48" rx="3" fill={white} />
      <circle cx="40" cy="24" r="2" fill={white} />
      <circle cx="190" cy="30" r="2" fill={white} />
      <circle cx="120" cy="16" r="1.5" fill={white} />
    </svg>
  );
}
