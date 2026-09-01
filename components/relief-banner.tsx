const ReliefBanner = () => (
  <a
    href="https://pmdrf.nchl.com.np/"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex h-10 w-full items-center justify-center gap-x-3 overflow-hidden bg-primary px-4 text-white"
  >
    {/* pit-lane style diagonal stripes */}
    <span
      className="pointer-events-none absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          'repeating-linear-gradient(115deg, transparent 0 14px, rgba(0,0,0,0.9) 14px 28px)',
      }}
      aria-hidden="true"
    />
    <span className="relative hidden text-lg uppercase leading-none tracking-wide sm:inline">
      {`Nepal is recovering from severe floods. Donate to the Government of Nepal Prime Minister's Disaster Relief Fund`}
    </span>
    <span className="relative text-base uppercase leading-none tracking-wide sm:hidden">
      Donate to Nepal flood relief
    </span>
    <svg
      className="relative h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.4 10.8 12.12 3.52 13.82 1.82 24 12l-.85.85L13.82 22.18l-1.7-1.7 7.29-7.28H0v-2.4h19.4Z" />
    </svg>
  </a>
);

export default ReliefBanner;
