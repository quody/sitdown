import DateDivider from './DateDivider';
import Message from './Message';
import MessageInput from './MessageInput';

function BlockKitHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[18px] font-bold text-[var(--slack-text-primary)]">
      {children}
    </h2>
  );
}

function BlockKitDivider() {
  return <hr className="border-t border-gray-200 my-3" />;
}

function BlockKitSection({
  children,
  button
}: {
  children: React.ReactNode;
  button?: { label: string; url?: string };
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="flex-1 min-w-0">{children}</div>
      {button && (
        <button className="shrink-0 px-3 py-1 text-sm font-medium border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors">
          {button.label}
        </button>
      )}
    </div>
  );
}

function BlockKitContext({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] text-gray-500">
      {children}
    </p>
  );
}

function Mention({ name }: { name: string }) {
  return (
    <span className="text-[var(--slack-blue)] bg-orange-50 rounded px-0.5 cursor-pointer hover:bg-orange-100 hover:underline">
      @{name}
    </span>
  );
}

export default function ChatWindow() {
  return (
    <div className="flex flex-col h-full bg-[var(--slack-chat-bg)] flex-1 min-w-0">
      {/* Scrollable message area */}
      <div className="flex-1 overflow-y-auto">
        <DateDivider date="" />
        <Message
          avatarText="S"
          avatarColor="bg-blue-600"
          senderName="SitDown"
          timestamp="8:37 PM"
          isApp
          threadReply={{
            avatarText: 'A',
            avatarColor: 'bg-purple-400',
            count: 1,
            timestamp: '8:40 AM',
          }}
        >
          <BlockKitHeader>Today&apos;s Sitdown Digest ☕</BlockKitHeader>

          <BlockKitDivider />

          {/* sarah.chen */}
          <div className="mb-1">
            <Mention name="sarah.chen" />
          </div>

          <div className="space-y-2 mb-2">
            {/* <BlockKitSection button={{ label: 'ENG-342' }}>
              <p>✅ Completed auth token refresh logic — tokens now tokenin&apos;</p>
            </BlockKitSection> */}

            <BlockKitSection button={{ label: 'ENG-358' }}>
              <p>✅ Shipped error boundary for dashboard — because even dashboards need emotional support sometimes. Boundaries are healthy.</p>
            </BlockKitSection>

            <BlockKitSection button={{ label: 'ENG-401' }}>
              <p>🚧 Wrestling with flaky CI tests since two weeks ago — CI stands for &quot;Consistently Irritating&quot;</p>
            </BlockKitSection>

            <BlockKitSection button={{ label: 'ENG-421' }}>
              <p>🧐 Sarah asked: &quot;User somehow has a negative balance, should that even be possible?&quot;</p>
            </BlockKitSection>
          </div>

          <BlockKitDivider />

          {/* marcus.rivera */}
          <div className="mb-1">
            <Mention name="marcus.rivera" />
          </div>

          <div className="space-y-2 mb-2">
            <BlockKitSection button={{ label: 'ENG-389' }}>
              <p>✅ Finished API rate limiting middleware — slow down there, buckaroo</p>
            </BlockKitSection>
          </div>

          <BlockKitDivider />

          {/* jenna.reed */}
          <div className="mb-1">
            <Mention name="jenna.reed" />
          </div>

          <div className="space-y-2 mb-2">
            <BlockKitSection button={{ label: 'ENG-377' }}>
              <p>✅ Merged user preferences migration — data&apos;s got a new home</p>
            </BlockKitSection>
          </div>

          <BlockKitDivider />

          <BlockKitContext>
            That&apos;s a wrap! Ship safe out there 📯
          </BlockKitContext>
        </Message>
      </div>

      {/* Message input at bottom */}
      <MessageInput />
    </div>
  );
}
