interface ActivityBarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
}

function ActivityBarItem({ icon, label, active, badge }: ActivityBarItemProps) {
  return (
    <button
      className={`flex flex-col items-center justify-center w-full py-1.5 px-1 gap-0.5 rounded-lg text-[10px] relative
        ${active ? 'text-white bg-[var(--slack-aubergine-light)]' : 'text-[var(--slack-sidebar-text-secondary)] hover:bg-[var(--slack-aubergine-hover)]'}`}
      aria-label={label}
    >
      <span className="w-5 h-5 flex items-center justify-center relative">
        {icon}
        {badge !== undefined && (
          <span className="absolute -top-1 -right-2 bg-[var(--slack-badge-red)] text-white text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">
            {badge}
          </span>
        )}
      </span>
      <span className="leading-tight">{label}</span>
    </button>
  );
}

export default function ActivityBar() {
  return (
    <div className="flex flex-col items-center w-[70px] bg-[var(--slack-aubergine-dark)] py-2 px-1.5 gap-0.5 shrink-0">
      {/* Workspace icon */}
      <div className="w-9 h-9 rounded-lg bg-[var(--slack-aubergine-light)] flex items-center justify-center text-white font-bold text-lg mb-2 cursor-pointer hover:opacity-90">
        S
      </div>

      {/* Navigation items */}
      <ActivityBarItem
        label="Home"
        icon={
          <svg viewBox="0 0 20 20" className="w-5 h-5" fill="currentColor">
            <path fillRule="evenodd" d="M9.649 2.603a.75.75 0 0 1 .702 0l7 3.75a.75.75 0 0 1 .399.663v5.484a3.75 3.75 0 0 1-3.75 3.75H6a3.75 3.75 0 0 1-3.75-3.75V7.016a.75.75 0 0 1 .399-.663zM3.75 7.46v5.04A2.25 2.25 0 0 0 6 14.75h8a2.25 2.25 0 0 0 2.25-2.25V7.46L10 4.128z" clipRule="evenodd" />
          </svg>
        }
      />
      <ActivityBarItem
        label="DMs"
        icon={
          <svg viewBox="0 0 20 20" className="w-5 h-5" fill="currentColor">
            <path fillRule="evenodd" d="M10 2.5a4 4 0 0 0-4 4v.5h8v-.5a4 4 0 0 0-4-4M4.5 7v-.5a5.5 5.5 0 1 1 11 0V7h.75A1.75 1.75 0 0 1 18 8.75v5.5A3.75 3.75 0 0 1 14.25 18h-8.5A3.75 3.75 0 0 1 2 14.25v-5.5C2 7.784 2.784 7 3.75 7zm-1 1.75a.25.25 0 0 1 .25-.25h12.5a.25.25 0 0 1 .25.25v5.5a2.25 2.25 0 0 1-2.25 2.25h-8.5a2.25 2.25 0 0 1-2.25-2.25z" clipRule="evenodd" />
          </svg>
        }
      />
      <ActivityBarItem
        label="Activity"
        icon={
          <svg viewBox="0 0 20 20" className="w-5 h-5" fill="currentColor">
            <path fillRule="evenodd" d="M4.75 3A1.75 1.75 0 0 0 3 4.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 17 15.25V4.75A1.75 1.75 0 0 0 15.25 3zM4.5 4.75a.25.25 0 0 1 .25-.25h10.5a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25H4.75a.25.25 0 0 1-.25-.25zM10 6.5a.75.75 0 0 1 .75.75v2h2a.75.75 0 0 1 0 1.5h-2v2a.75.75 0 0 1-1.5 0v-2h-2a.75.75 0 0 1 0-1.5h2v-2A.75.75 0 0 1 10 6.5" clipRule="evenodd" />
          </svg>
        }
      />
      <ActivityBarItem
        label="Files"
        icon={
          <svg viewBox="0 0 20 20" className="w-5 h-5" fill="currentColor">
            <path fillRule="evenodd" d="M3.5 6.75A2.25 2.25 0 0 1 5.75 4.5h2.382a2.25 2.25 0 0 1 1.518.585l1.07.978c.102.094.236.145.374.145h3.156A2.25 2.25 0 0 1 16.5 8.458v4.792a2.25 2.25 0 0 1-2.25 2.25H5.75a2.25 2.25 0 0 1-2.25-2.25zm2.25-.75a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75V8.458a.75.75 0 0 0-.75-.75h-3.156a2.25 2.25 0 0 1-1.518-.586l-1.07-.977a.75.75 0 0 0-.506-.145z" clipRule="evenodd" />
          </svg>
        }
      />
      <ActivityBarItem
        label="More"
        icon={
          <svg viewBox="0 0 20 20" className="w-5 h-5" fill="currentColor">
            <path d="M6 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
          </svg>
        }
      />

      {/* Spacer to push bottom items down */}
      <div className="flex-1" />

      {/* Bottom items */}
      <ActivityBarItem
        label=""
        icon={
          <svg viewBox="0 0 20 20" className="w-5 h-5" fill="currentColor">
            <path fillRule="evenodd" d="M10 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M9 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0" clipRule="evenodd" />
            <path fillRule="evenodd" d="M10 1.5a.75.75 0 0 1 .75.75v.553a6.75 6.75 0 0 1 5.947 5.947h.553a.75.75 0 0 1 0 1.5h-.553a6.75 6.75 0 0 1-5.947 5.947v.553a.75.75 0 0 1-1.5 0v-.553A6.75 6.75 0 0 1 3.303 10.25H2.75a.75.75 0 0 1 0-1.5h.553A6.75 6.75 0 0 1 9.25 2.803V2.25A.75.75 0 0 1 10 1.5m0 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5" clipRule="evenodd" />
          </svg>
        }
      />

      {/* User avatar */}
      <div className="w-9 h-9 rounded-lg bg-[var(--slack-green)] flex items-center justify-center text-white font-bold text-sm mt-1 cursor-pointer hover:opacity-90">
        A
      </div>
    </div>
  );
}
