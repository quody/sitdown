import WorkspaceHeader from './WorkspaceHeader';
import SidebarSection from './SidebarSection';
import ChannelItem from './ChannelItem';

function SidebarNavItem({ icon, label, skeleton }: { icon: React.ReactNode; label?: string; skeleton?: boolean }) {
  return (
    <div className="flex items-center gap-2 w-full px-4 py-[5px] text-[var(--slack-sidebar-text-secondary)] text-[15px] rounded-md mx-2"
            style={{ width: 'calc(100% - 16px)' }}>
      <span className="w-4 h-4 shrink-0 flex items-center justify-center">{icon}</span>
      {skeleton ? (
        <div className="h-2.5 w-16 rounded bg-[var(--slack-sidebar-text-secondary)] opacity-30" />
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
}

function SkeletonChannelItem({ width = 'w-20' }: { width?: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-[5px] mx-2" style={{ width: 'calc(100% - 16px)' }}>
      <span className="text-[15px] shrink-0 w-4 text-center text-[var(--slack-sidebar-text-secondary)]">#</span>
      <div className={`h-2.5 ${width} rounded bg-[var(--slack-sidebar-text-secondary)] opacity-30`} />
    </div>
  );
}

function SkeletonDmItem({ width = 'w-16' }: { width?: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-[5px] mx-2" style={{ width: 'calc(100% - 16px)' }}>
      <div className="w-5 h-5 rounded bg-[var(--slack-sidebar-text-secondary)] opacity-30 shrink-0" />
      <div className={`h-2.5 ${width} rounded bg-[var(--slack-sidebar-text-secondary)] opacity-30`} />
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full bg-[var(--slack-sidebar-bg)] w-[200px] shrink-0 text-[var(--slack-sidebar-text)]">
      <WorkspaceHeader />

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-2">
        {/* Quick nav items */}
        <div className="mb-2">
          <SidebarNavItem
            skeleton
            icon={
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
                <path d="M5 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m7 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M4.25 11.5a.75.75 0 0 0-.75.75A2.75 2.75 0 0 0 6.25 15h1a.75.75 0 0 0 0-1.5h-1c-.69 0-1.25-.56-1.25-1.25a.75.75 0 0 0-.75-.75m11.5 0a.75.75 0 0 0-.75.75c0 .69-.56 1.25-1.25 1.25h-1a.75.75 0 0 0 0 1.5h1a2.75 2.75 0 0 0 2.75-2.75.75.75 0 0 0-.75-.75" />
              </svg>
            }
          />
          <SidebarNavItem
            skeleton
            icon={
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
                <path fillRule="evenodd" d="M4.75 3A1.75 1.75 0 0 0 3 4.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 17 15.25V4.75A1.75 1.75 0 0 0 15.25 3zM4.5 4.75a.25.25 0 0 1 .25-.25h10.5a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25H4.75a.25.25 0 0 1-.25-.25z" clipRule="evenodd" />
              </svg>
            }
          />
        </div>

        {/* Starred */}
        <div className="mb-2">
          <div className="flex items-center gap-2 px-4 py-[5px] text-[var(--slack-sidebar-text-secondary)] text-[15px]">
            <svg viewBox="0 0 20 20" className="w-4 h-4 shrink-0" fill="currentColor">
              <path d="M9.104 2.9a1 1 0 0 1 1.794 0l1.93 3.91 4.317.628a1 1 0 0 1 .554 1.706l-3.124 3.044.737 4.3a1 1 0 0 1-1.451 1.054L10 15.51l-3.86 2.03a1 1 0 0 1-1.45-1.054l.736-4.3L2.3 9.144a1 1 0 0 1 .554-1.706l4.317-.627z" />
            </svg>
            <div className="h-2.5 w-14 rounded bg-[var(--slack-sidebar-text-secondary)] opacity-30" />
          </div>
          <div className="px-6 flex flex-col gap-1.5 py-1">
            <div className="h-2 w-3/4 rounded bg-[var(--slack-sidebar-text-secondary)] opacity-30" />
            <div className="h-2 w-1/2 rounded bg-[var(--slack-sidebar-text-secondary)] opacity-30" />
          </div>
        </div>

        {/* Channels */}
        <SidebarSection title="Channels">
          <SkeletonChannelItem width="w-20" />
          <SkeletonChannelItem width="w-24" />
          <ChannelItem name="product" active />
          <SkeletonChannelItem width="w-14" />
        </SidebarSection>

        {/* Direct Messages */}
        <SidebarSection title="Direct messages" skeleton>
          <SkeletonDmItem width="w-16" />
        </SidebarSection>

        {/* Apps */}
        <SidebarSection title="Apps">
          <ChannelItem name="Sitdown" type="app" avatar="S" avatarColor="bg-[var(--slack-green)]" />
        </SidebarSection>
      </div>

      {/* Bottom section */}
      <div className="border-t border-white/10 px-4 py-3">
        <button className="w-full py-1.5 px-3 border border-white/15 rounded text-[var(--slack-sidebar-text-secondary)] text-sm font-medium hover:bg-[var(--slack-sidebar-hover)] transition flex items-center justify-center gap-2">
          <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
            <path d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14M1.5 10a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0" />
            <path d="M10 6a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5A.75.75 0 0 1 10 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
