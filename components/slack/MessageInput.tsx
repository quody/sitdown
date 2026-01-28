function ToolbarButton({ children, ariaLabel }: { children: React.ReactNode; ariaLabel: string }) {
  return (
    <button
      className="w-7 h-7 flex items-center justify-center rounded hover:bg-[var(--slack-sidebar-hover)] text-[var(--slack-text-secondary)] text-sm"
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

function ToolbarDivider() {
  return <div className="w-px h-5 bg-[var(--slack-border)] mx-0.5" />;
}

export default function MessageInput() {
  return (
    <div className="px-5 pb-4 pt-1">
      <div className="border border-[var(--slack-border)] rounded-lg overflow-hidden focus-within:border-[var(--slack-text-muted)] focus-within:shadow-sm">
        {/* Formatting toolbar */}
        <div className="flex items-center gap-0.5 px-2 py-1 border-b border-[var(--slack-border)] bg-[var(--slack-input-bg)]">
          <ToolbarButton ariaLabel="Bold">
            <span className="font-bold">B</span>
          </ToolbarButton>
          <ToolbarButton ariaLabel="Italic">
            <span className="italic">I</span>
          </ToolbarButton>
          <ToolbarButton ariaLabel="Underline">
            <span className="underline">U</span>
          </ToolbarButton>
          <ToolbarButton ariaLabel="Strikethrough">
            <span className="line-through">S</span>
          </ToolbarButton>
          <ToolbarDivider />
          <ToolbarButton ariaLabel="Link">
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
              <path d="M7.859 14.691a1 1 0 0 0 .707-.293l5.903-5.903a1 1 0 0 0 0-1.414l-1.55-1.55a1 1 0 0 0-1.414 0L5.602 11.434a1 1 0 0 0 0 1.414l1.55 1.55a1 1 0 0 0 .707.293m3.276-6.494l1.483 1.483L8.566 13.73l-1.483-1.483z" />
              <path d="M14.548 2.34a3.25 3.25 0 0 0-4.596 0L7.94 4.352a.75.75 0 1 0 1.06 1.06l2.013-2.012a1.75 1.75 0 1 1 2.475 2.475l-2.012 2.013a.75.75 0 1 0 1.06 1.06l2.013-2.012a3.25 3.25 0 0 0 0-4.596M5.452 17.66a3.25 3.25 0 0 0 4.596 0l2.012-2.012a.75.75 0 1 0-1.06-1.06l-2.013 2.012a1.75 1.75 0 0 1-2.475-2.475l2.012-2.013a.75.75 0 0 0-1.06-1.06L5.452 13.064a3.25 3.25 0 0 0 0 4.596" />
            </svg>
          </ToolbarButton>
          <ToolbarDivider />
          <ToolbarButton ariaLabel="Ordered list">
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
              <path d="M4 4.5a.5.5 0 0 1 .5-.5H5v3h-.5a.5.5 0 0 1 0-1H5V4.5h-.5a.5.5 0 0 1-.5-.5M8 5.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 8 5.25m0 5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75m.75 4.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z" />
            </svg>
          </ToolbarButton>
          <ToolbarButton ariaLabel="Bullet list">
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
              <path d="M4.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8 5.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 8 5.25m0 5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75m.75 4.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z" />
            </svg>
          </ToolbarButton>
          <ToolbarDivider />
          <ToolbarButton ariaLabel="Block quote">
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
              <path d="M3 4.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75zm0 7a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75" />
            </svg>
          </ToolbarButton>
          <ToolbarDivider />
          <ToolbarButton ariaLabel="Code">
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
              <path fillRule="evenodd" d="M7.177 5.697a.75.75 0 0 1 .126 1.054L4.72 10l2.583 3.249a.75.75 0 0 1-1.18.928L3.21 10.464a.75.75 0 0 1 0-.928l2.913-3.713a.75.75 0 0 1 1.054-.126m5.646 0a.75.75 0 0 1 1.054.126l2.913 3.713a.75.75 0 0 1 0 .928l-2.913 3.713a.75.75 0 1 1-1.18-.928L15.28 10l-2.583-3.249a.75.75 0 0 1 .126-1.054" clipRule="evenodd" />
            </svg>
          </ToolbarButton>
          <ToolbarButton ariaLabel="Code block">
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
              <path fillRule="evenodd" d="M4.75 3A1.75 1.75 0 0 0 3 4.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 17 15.25V4.75A1.75 1.75 0 0 0 15.25 3zM4.5 4.75a.25.25 0 0 1 .25-.25h10.5a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25H4.75a.25.25 0 0 1-.25-.25zM8.47 7.22a.75.75 0 0 1 1.06 0l.22.22.22-.22a.75.75 0 1 1 1.06 1.06l-.22.22.22.22a.75.75 0 1 1-1.06 1.06l-.22-.22-.22.22a.75.75 0 0 1-1.06-1.06l.22-.22-.22-.22a.75.75 0 0 1 0-1.06M7.75 12a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z" clipRule="evenodd" />
            </svg>
          </ToolbarButton>
        </div>

        {/* Input area */}
        <div
          className="min-h-[44px] px-3 py-2.5 text-[15px] text-[var(--slack-text-muted)] outline-none bg-[var(--slack-chat-bg)]"
          contentEditable
          suppressContentEditableWarning
          role="textbox"
          aria-label="Message #product"
        >
          Message #product
        </div>

        {/* Bottom toolbar */}
        <div className="flex items-center justify-between px-2 py-1 border-t border-[var(--slack-border)] bg-[var(--slack-chat-bg)]">
          <div className="flex items-center gap-0.5">
            <ToolbarButton ariaLabel="Attach">
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
                <path d="M10 5.75a.75.75 0 0 1 .75.75v2.75h2.75a.75.75 0 0 1 0 1.5h-2.75v2.75a.75.75 0 0 1-1.5 0v-2.75H6.5a.75.75 0 0 1 0-1.5h2.75V6.5a.75.75 0 0 1 .75-.75" />
              </svg>
            </ToolbarButton>
            <ToolbarButton ariaLabel="Formatting">
              <span className="text-xs font-bold">Aa</span>
            </ToolbarButton>
            <ToolbarButton ariaLabel="Emoji">
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14M1.5 10a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0M7 9a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m-4.25 3a.75.75 0 0 0-.5 1.3A4.49 4.49 0 0 0 10 14.5c1.4 0 2.67-.64 3.5-1.65 0 0 .25-.55-.25-.55z" clipRule="evenodd" />
              </svg>
            </ToolbarButton>
            <ToolbarButton ariaLabel="Mention">
              <span className="text-sm font-medium">@</span>
            </ToolbarButton>
            <ToolbarButton ariaLabel="Record video">
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
                <path fillRule="evenodd" d="M3.5 6.75A1.25 1.25 0 0 1 4.75 5.5h6.5a1.25 1.25 0 0 1 1.25 1.25v6.5a1.25 1.25 0 0 1-1.25 1.25h-6.5A1.25 1.25 0 0 1 3.5 13.25zm11.5 0v6.5l2.65-2.12a.75.75 0 0 0 .35-.64V9.5a.75.75 0 0 0-.35-.64z" clipRule="evenodd" />
              </svg>
            </ToolbarButton>
            <ToolbarButton ariaLabel="Record audio">
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
                <path d="M10 2a2.5 2.5 0 0 0-2.5 2.5V10a2.5 2.5 0 0 0 5 0V4.5A2.5 2.5 0 0 0 10 2" />
                <path d="M5 8.75a.75.75 0 0 1 .75.75v.5a4.25 4.25 0 0 0 8.5 0v-.5a.75.75 0 0 1 1.5 0v.5a5.75 5.75 0 0 1-5 5.701V17.5a.75.75 0 0 1-1.5 0v-1.799A5.75 5.75 0 0 1 4.25 10v-.5a.75.75 0 0 1 .75-.75" />
              </svg>
            </ToolbarButton>
            <ToolbarButton ariaLabel="Shortcuts">
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
                <path fillRule="evenodd" d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm1.5 5.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z" clipRule="evenodd" />
              </svg>
            </ToolbarButton>
          </div>

          <div className="flex items-center gap-1">
            {/* Send button */}
            <button className="w-7 h-7 flex items-center justify-center rounded text-[var(--slack-text-muted)]" aria-label="Send">
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
                <path d="M1.724 1.053a.5.5 0 0 0-.714.545l1.403 4.85a.5.5 0 0 0 .397.354l5.69.953c.268.053.268.437 0 .49l-5.69.953a.5.5 0 0 0-.397.354l-1.403 4.85a.5.5 0 0 0 .714.545l17-8.5a.5.5 0 0 0 0-.894z" />
              </svg>
            </button>
            <button className="w-4 h-7 flex items-center justify-center rounded text-[var(--slack-text-muted)] hover:bg-[var(--slack-sidebar-hover)]">
              <svg viewBox="0 0 20 20" className="w-3 h-3" fill="currentColor">
                <path d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
