export default function Logo({ width = 32, height = 32, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={width}
      height={height}
      className={className}
      aria-hidden
    >
      {/* AA monogram: two geometric A shapes */}
      <path
        d="M6 24L10 8h2l4 16h-2l-.8-3H8.8L8 24H6zm2.2-5h3.6L12 12l-3.8 7zM18 24V8h2l4 12h-2l-.6-2h-3.6L17 24h-2zm2-4h2.4L20 12v8z"
        fill="currentColor"
      />
    </svg>
  );
}
