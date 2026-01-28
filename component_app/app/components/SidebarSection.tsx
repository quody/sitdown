interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
  collapsible?: boolean;
  defaultOpen?: boolean;
  skeleton?: boolean;
}

export default function SidebarSection({ title, children, collapsible = true, defaultOpen = true, skeleton }: SidebarSectionProps) {
  return (
    <div className="mb-1">
      <div className="flex items-center gap-1 px-4 py-1 w-full text-left text-[var(--slack-sidebar-text-secondary)] text-[15px]">
        {collapsible && (
          <svg viewBox="0 0 20 20" className={`w-3 h-3 shrink-0 transition-transform ${defaultOpen ? '' : '-rotate-90'}`} fill="currentColor">
            <path d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414" />
          </svg>
        )}
        {skeleton ? (
          <div className="h-2.5 w-24 rounded bg-[var(--slack-sidebar-text-secondary)] opacity-30" />
        ) : (
          <span className="text-[13px] font-medium">{title}</span>
        )}
      </div>
      {defaultOpen && (
        <div className="mt-0.5">
          {children}
        </div>
      )}
    </div>
  );
}
