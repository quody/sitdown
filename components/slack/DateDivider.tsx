export default function DateDivider({ date }: { date: string }) {
  return (
    <div className="flex items-center px-5 py-2">
      <div className="flex-1 h-px bg-[var(--slack-chat-header-border)]" />
      <button className="mx-4 px-3 py-0.5 text-[13px] font-bold text-[var(--slack-text-primary)] border border-[var(--slack-chat-header-border)] rounded-full hover:bg-gray-50 transition flex items-center gap-1">
        {date}
        <svg viewBox="0 0 20 20" className="w-3 h-3" fill="currentColor">
          <path d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414" />
        </svg>
      </button>
      <div className="flex-1 h-px bg-[var(--slack-chat-header-border)]" />
    </div>
  );
}
