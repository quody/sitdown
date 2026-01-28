export default function PromoBanner() {
  return (
    <div className="mx-3 mb-3 p-3 rounded-lg bg-[var(--slack-aubergine-light)] cursor-pointer hover:brightness-110 transition">
      <div className="flex items-start gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center shrink-0 mt-0.5">
          <svg viewBox="0 0 16 16" className="w-4 h-4 text-white" fill="currentColor">
            <path d="M4.5 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zm6 0a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM6 8l2-3 2 3H6zm2 1l3 4H5l3-4z" />
          </svg>
        </div>
        <div>
          <div className="text-white font-bold text-[13px] leading-tight">Get 25% off Business+</div>
          <div className="text-white/70 text-xs mt-0.5">3 days left on this offer</div>
        </div>
      </div>
    </div>
  );
}
