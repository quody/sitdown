export default function ChannelHeader() {
  return (
    <div className="flex items-center justify-between px-5 py-2.5 border-b border-[var(--slack-chat-header-border)]">
      {/* Left: channel name */}
      <div className="flex items-center gap-2">
        <button className="text-[var(--slack-text-muted)] hover:text-[var(--slack-text-secondary)] p-1" aria-label="Star channel">
          <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9.104 2.9a1 1 0 0 1 1.794 0l1.93 3.91 4.317.628a1 1 0 0 1 .554 1.706l-3.124 3.044.737 4.3a1 1 0 0 1-1.451 1.054L10 15.51l-3.86 2.03a1 1 0 0 1-1.45-1.054l.736-4.3L2.3 9.144a1 1 0 0 1 .554-1.706l4.317-.627z" />
          </svg>
        </button>
        <h1 className="text-[18px] font-bold text-[var(--slack-text-primary)] flex items-center gap-1">
          <span className="text-[var(--slack-text-secondary)] font-normal">#</span> product
        </h1>
      </div>

      {/* Right: actions */}
      <div className="flex items-center gap-1.5">
        <button className="p-1.5 rounded hover:bg-[var(--slack-sidebar-hover)] text-[var(--slack-text-secondary)]" aria-label="Search">
          <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
            <path fillRule="evenodd" d="M9 3a6 6 0 1 0 0 12A6 6 0 0 0 9 3M1.5 9a7.5 7.5 0 1 1 13.307 4.746l3.473 3.474a.75.75 0 1 1-1.06 1.06l-3.473-3.473A7.5 7.5 0 0 1 1.5 9" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
