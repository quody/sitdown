export default function ChannelTabs() {
  return (
    <div className="flex items-center gap-1 px-5 py-1.5 border-b border-[var(--slack-chat-header-border)]">
      <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white text-sm text-[var(--slack-text-primary)] font-medium hover:bg-gray-100 transition">
        <span className="w-2 h-2 rounded-full bg-[var(--slack-aubergine)]" />
        Messages
      </button>
      <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm text-[var(--slack-text-secondary)] hover:bg-gray-100 transition">
        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
          <path fillRule="evenodd" d="M14.85 2.65a2.252 2.252 0 0 1 3.187 3.182l-1.126 1.131-3.186-3.186zM12.61 4.892l3.186 3.186-6.548 6.578a3.8 3.8 0 0 1-1.624.978l-2.853.895a.75.75 0 0 1-.948-.948l.896-2.852a3.8 3.8 0 0 1 .978-1.625z" clipRule="evenodd" />
        </svg>
        Add canvas
      </button>
      <button className="w-7 h-7 rounded-md flex items-center justify-center text-[var(--slack-text-secondary)] hover:bg-gray-100 transition">
        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
          <path d="M10 5.75a.75.75 0 0 1 .75.75v2.75h2.75a.75.75 0 0 1 0 1.5h-2.75v2.75a.75.75 0 0 1-1.5 0v-2.75H6.5a.75.75 0 0 1 0-1.5h2.75V6.5a.75.75 0 0 1 .75-.75" />
        </svg>
      </button>
    </div>
  );
}
