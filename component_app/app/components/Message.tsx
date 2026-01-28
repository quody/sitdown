interface ThreadReplyProps {
  avatarText: string;
  avatarColor?: string;
  count: number;
  timestamp: string;
}

interface MessageProps {
  avatarText: string;
  avatarColor?: string;
  senderName: string;
  timestamp: string;
  children: React.ReactNode;
  threadReply?: ThreadReplyProps;
  isApp?: boolean;
}

function ThreadReplyIndicator({ avatarText, avatarColor = 'bg-purple-400', count, timestamp }: ThreadReplyProps) {
  return (
    <button className="flex items-center gap-2 mt-1 px-1 py-0.5 -ml-1 rounded hover:bg-gray-50 group/thread">
      <span className={`w-6 h-6 rounded ${avatarColor} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}>
        {avatarText}
      </span>
      <span className="text-[var(--slack-blue)] text-[13px] font-bold hover:underline">
        {count} reply
      </span>
      <span className="text-[var(--slack-text-secondary)] text-xs">
        Today at {timestamp}
      </span>
    </button>
  );
}

export default function Message({ avatarText, avatarColor = 'bg-purple-500', senderName, timestamp, children, threadReply, isApp }: MessageProps) {
  return (
    <div className="flex gap-2 px-5 py-1.5 hover:bg-gray-50 group">
      <div className={`w-9 h-9 rounded-lg ${avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0 mt-0.5`}>
        {avatarText}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-[15px] text-[var(--slack-text-primary)] hover:underline cursor-pointer">
            {senderName}
          </span>
          {isApp && (
            <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-1 py-0.5 rounded uppercase">
              App
            </span>
          )}
          <span className="text-xs text-[var(--slack-text-secondary)]">{timestamp}</span>
        </div>
        <div className="text-[15px] text-[var(--slack-text-primary)]">
          {children}
        </div>
        {threadReply && <ThreadReplyIndicator {...threadReply} />}
      </div>
    </div>
  );
}
