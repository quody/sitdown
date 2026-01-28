export default function TopNav() {
  return (
    <div className="flex items-center h-10 bg-[var(--slack-sidebar-bg)] px-2 gap-2 rounded-t-xl"
         style={{ gridColumn: '1 / -1' }}>
      {/* Left spacer for macOS traffic lights */}
      <div className="w-16 shrink-0" />

      {/* History navigation buttons */}
      <div className="flex items-center gap-0.5">
        <button className="p-1 rounded hover:bg-[var(--slack-sidebar-hover)] text-white/50 hover:text-white/70"
                aria-label="Back">
          <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
            <path fillRule="evenodd" d="M9.768 5.293a.75.75 0 0 0-1.036-1.086l-5.5 5.25a.75.75 0 0 0 0 1.085l5.5 5.25a.75.75 0 1 0 1.036-1.085L5.622 10.75H16.25a.75.75 0 0 0 0-1.5H5.622z" clipRule="evenodd" />
          </svg>
        </button>
        <button className="p-1 rounded hover:bg-[var(--slack-sidebar-hover)] text-white/20 cursor-not-allowed"
                aria-label="Forward" aria-disabled="true">
          <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
            <path fillRule="evenodd" d="M11.268 15.793a.75.75 0 0 1-1.036-1.085l4.146-3.958H3.75a.75.75 0 0 1 0-1.5h10.628l-4.146-3.957a.75.75 0 0 1 1.036-1.086l5.5 5.25a.75.75 0 0 1 0 1.085z" clipRule="evenodd" />
          </svg>
        </button>
        <button className="p-1 rounded hover:bg-[var(--slack-sidebar-hover)] text-white/50 hover:text-white/70"
                aria-label="History">
          <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
            <path fillRule="evenodd" d="M2.5 2.5v2.524A9 9 0 1 1 10 19a.75.75 0 0 1 0-1.5A7.5 7.5 0 1 0 3.239 6.75H6.75a.75.75 0 0 1 0 1.5h-5A.75.75 0 0 1 1 7.5v-5a.75.75 0 0 1 1.5 0m11.363 3.333a.75.75 0 1 0-1.226-.866l-3.25 4.6a.75.75 0 0 0 .083.963l3 3a.75.75 0 1 0 1.06-1.06l-2.553-2.553z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Search bar */}
      <button className="flex items-center gap-2 bg-white/5 hover:bg-white/8 rounded-md px-3 h-[26px] min-w-[480px] max-w-[720px] text-white/40 text-sm transition-colors">
        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
          <path fillRule="evenodd" d="M9 3a6 6 0 1 0 0 12A6 6 0 0 0 9 3M1.5 9a7.5 7.5 0 1 1 13.307 4.746l3.473 3.474a.75.75 0 1 1-1.06 1.06l-3.473-3.473A7.5 7.5 0 0 1 1.5 9" clipRule="evenodd" />
        </svg>
      </button>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right actions */}
      <div className="flex items-center gap-1">
        <button className="p-1 rounded hover:bg-[var(--slack-sidebar-hover)] text-white/50 hover:text-white/70"
                aria-label="Help">
          <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
            <path fillRule="evenodd" d="M10 2.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15M1 10a9 9 0 1 1 18 0 9 9 0 0 1-18 0m7.883-2.648c-.23.195-.383.484-.383.898a.75.75 0 0 1-1.5 0c0-.836.333-1.547.91-2.04.563-.48 1.31-.71 2.09-.71.776 0 1.577.227 2.2.729.642.517 1.05 1.294 1.05 2.271 0 .827-.264 1.515-.807 2.001-.473.423-1.08.623-1.693.703V12h-1.5v-1c0-.709.566-1.211 1.18-1.269.507-.048.827-.18 1.013-.347.162-.145.307-.39.307-.884 0-.523-.203-.87-.492-1.104C10.951 7.148 10.502 7 10 7c-.497 0-.876.146-1.117.352M10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
