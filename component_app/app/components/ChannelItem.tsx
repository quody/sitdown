interface ChannelItemProps {
  name: string;
  type?: 'channel' | 'dm' | 'app';
  active?: boolean;
  avatar?: string;
  avatarColor?: string;
  suffix?: string;
  badge?: number;
  unread?: boolean;
}

export default function ChannelItem({
  name,
  type = 'channel',
  active,
  avatar,
  avatarColor = 'bg-green-600',
  suffix,
  badge,
  unread,
}: ChannelItemProps) {
  return (
    <button
      className={`flex items-center gap-2 w-full px-4 py-[5px] text-sm text-left rounded-md mx-2
        ${active
          ? 'bg-[var(--slack-highlight-purple)] text-[var(--slack-sidebar-text)] font-medium'
          : unread
            ? 'text-[var(--slack-sidebar-text)] font-bold hover:bg-[var(--slack-aubergine-hover)]'
            : 'text-[var(--slack-sidebar-text-secondary)] hover:bg-[var(--slack-aubergine-hover)]'}`}
      style={{ width: 'calc(100% - 16px)' }}
    >
      {type === 'channel' && (
        <span className="text-[15px] shrink-0 w-4 text-center">#</span>
      )}
      {type === 'dm' && avatar && (
        <span className={`w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center text-white shrink-0 ${avatarColor}`}>
          {avatar}
        </span>
      )}
      {type === 'app' && avatar && (
        <span className={`w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center text-white shrink-0 ${avatarColor}`}>
          {avatar}
        </span>
      )}
      <span className="truncate">{name}</span>
      {suffix && <span className="text-[var(--slack-sidebar-text-secondary)] text-xs ml-0.5">{suffix}</span>}
      {badge !== undefined && (
        <span className="ml-auto bg-[var(--slack-badge-red)] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0">
          {badge}
        </span>
      )}
    </button>
  );
}
