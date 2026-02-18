export function QuoteMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M0 60C0 30 20 10 45 10V30C30 30 20 40 20 55H45V90H0V60Z" />
      <path d="M55 60C55 30 75 10 100 10V30C85 30 75 40 75 55H100V90H55V60Z" />
    </svg>
  );
}
