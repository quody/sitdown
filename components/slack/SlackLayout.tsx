import TopNav from './TopNav';
import Sidebar from './Sidebar';
import ChannelHeader from './ChannelHeader';
import ChatWindow from './ChatWindow';

export default function SlackLayout() {
  return (
    <div className="slack-window">
      <div className="h-[824px] md:h-[724px] w-full max-w-[1200px] flex flex-col rounded-xl border border-[var(--slack-chat-header-border)] slack-3d-passthrough bg-[var(--slack-chat-bg)]">
        {/* Top navigation — earliest */}
        <div className="slack-layer slack-layer-fade-right slack-layer-first rounded-t-xl">
          <TopNav />
        </div>

        {/* Main content area */}
        <div className="flex flex-1 min-h-0 slack-3d-passthrough">
          {/* Sidebar (channels/DMs) */}
          <div className="slack-layer slack-layer-fade-bottom slack-layer-sidebar flex shrink-0">
            <Sidebar />
          </div>

          {/* Chat column — split into header layers + content layer */}
          <div className="flex flex-col flex-1 min-w-0 slack-3d-passthrough">
            {/* Channel header + tabs — earliest */}
            <div className="slack-layer slack-layer-fade-right slack-layer-first bg-[var(--slack-chat-bg)]">
              <ChannelHeader />
            </div>

            {/* Chat content — later, with fade */}
            <div className="slack-layer slack-layer-fade slack-layer-chat flex-1 min-h-0 flex rounded-br-xl">
              <ChatWindow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
