export default function WorkspaceHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <button className="flex items-center gap-1 text-[var(--slack-sidebar-text)] font-bold text-[17px] hover:bg-[var(--slack-aubergine-hover)] rounded px-1 -ml-1">
        <span>SitDown</span>
        <svg viewBox="0 0 20 20" className="w-4 h-4 text-black/40" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414" clipRule="evenodd" />
        </svg>
      </button>
      <div className="flex items-center gap-1">
        <button className="p-1.5 rounded hover:bg-[var(--slack-aubergine-hover)] text-black/40 hover:text-black/60" aria-label="Settings">
          <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
            <path fillRule="evenodd" d="M15.95 6H17a.75.75 0 0 1 0 1.5h-1.05a2.751 2.751 0 0 1-5.4 0H3a.75.75 0 0 1 0-1.5h7.55a2.751 2.751 0 0 1 5.4 0M13.25 5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-9.2 7.5H3a.75.75 0 0 0 0 1.5h1.05a2.751 2.751 0 0 0 5.4 0H17a.75.75 0 0 0 0-1.5H9.45a2.751 2.751 0 0 0-5.4 0M6.75 12a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
          </svg>
        </button>
        <button className="p-1.5 rounded hover:bg-[var(--slack-aubergine-hover)] text-black/40 hover:text-black/60" aria-label="Compose">
          <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
            <path fillRule="evenodd" d="M14.85 2.65a2.252 2.252 0 0 1 3.187 3.182l-1.126 1.131-3.186-3.186zM12.61 4.892l3.186 3.186-6.548 6.578a3.8 3.8 0 0 1-1.624.978l-2.853.895a.75.75 0 0 1-.948-.948l.896-2.852a3.8 3.8 0 0 1 .978-1.625z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
