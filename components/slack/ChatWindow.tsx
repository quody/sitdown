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
  return <hr className="border-t border-[var(--slack-border)] my-3" />;
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
        <button className="shrink-0 px-3 py-1 text-sm font-medium border border-[var(--slack-border)] rounded-md bg-[var(--slack-input-bg)] hover:bg-[var(--slack-sidebar-hover)] transition-colors text-[var(--slack-text-secondary)]">
          {button.label}
        </button>
      )}
    </div>
  );
}

function BlockKitContext({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] text-[var(--slack-text-muted)]">
      {children}
    </p>
  );
}

function Mention({ name }: { name: string }) {
  return (
    <span className="text-[var(--slack-blue)] bg-[var(--slack-blue)]/10 rounded px-0.5 cursor-pointer hover:bg-[var(--slack-blue)]/20 hover:underline">
      @{name}
    </span>
  );
}

export default function ChatWindow() {
  return (
    <div className="flex flex-col h-full bg-[var(--slack-chat-bg)] flex-1 min-w-0">
      {/* Scrollable message area */}
      <div className="flex-1 overflow-hidden">
        {/* <DateDivider date="" /> */}
        <div className="h-4" />
        <Message
          avatarText="S"
          avatarColor="bg-[var(--slack-green)]"
          senderName="SitDown"
          timestamp="8:37 AM"
          isApp
          threadReply={{
            avatarText: 'A',
            avatarColor: 'bg-purple-500',
            count: 1,
            timestamp: '8:40 AM',
          }}
        >
          <BlockKitHeader>Today&apos;s Sitdown Digest</BlockKitHeader>

          <BlockKitDivider />

          {/* sarah.chen */}
          <div className="mb-1">
            <Mention name="sarah.chen" />
          </div>

          <div className="space-y-2 mb-2">
            <BlockKitSection button={{ label: 'ENG-358' }}>
              <p>Shipped error boundary for dashboard — because even dashboards need emotional support sometimes. Boundaries are healthy.</p>
            </BlockKitSection>

            <BlockKitSection button={{ label: 'ENG-401' }}>
              <p>Wrestling with flaky CI tests since two weeks ago — CI stands for &quot;Consistently Irritating&quot;</p>
            </BlockKitSection>

            <BlockKitSection button={{ label: 'ENG-421' }}>
              <p>Sarah asked: &quot;User somehow has a negative balance, should that even be possible?&quot;</p>
            </BlockKitSection>
          </div>

          <BlockKitDivider />

          {/* marcus.rivera */}
          <div className="mb-1">
            <Mention name="marcus.rivera" />
          </div>

          <div className="space-y-2 mb-2">
            <BlockKitSection button={{ label: 'ENG-389' }}>
              <p>Finished API rate limiting middleware — slow down there, buckaroo</p>
            </BlockKitSection>
          </div>

          <BlockKitDivider />

          {/* jenna.reed */}
          <div className="mb-1">
            <Mention name="jenna.reed" />
          </div>

          <div className="space-y-2 mb-2">
            <BlockKitSection button={{ label: 'ENG-377' }}>
              <p>Merged user preferences migration — data&apos;s got a new home</p>
            </BlockKitSection>
          </div>

          <BlockKitDivider />

          <BlockKitContext>
            That&apos;s a wrap! Ship safe out there ✌️
          </BlockKitContext>
        </Message>
      </div>

      {/* Message input at bottom */}
      <MessageInput />
    </div>
  );
}
