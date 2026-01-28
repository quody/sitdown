import ActionCard from './ActionCard';

function PeopleIllustration() {
  return (
    <div className="flex items-end gap-1">
      <div className="w-10 h-10 rounded-full bg-yellow-200 border-2 border-teal-700" />
      <div className="w-10 h-10 rounded-full bg-pink-200 border-2 border-teal-700 -ml-3" />
      <div className="w-10 h-10 rounded-full bg-orange-200 border-2 border-teal-700 -ml-3 -mb-2" />
    </div>
  );
}

function DocumentIllustration() {
  return (
    <div className="w-16 h-20 bg-white/90 rounded shadow-sm flex flex-col items-start p-2 gap-1">
      <div className="w-8 h-1 bg-gray-300 rounded" />
      <div className="w-10 h-1 bg-gray-300 rounded" />
      <div className="w-6 h-1 bg-gray-300 rounded" />
      <div className="w-9 h-1 bg-gray-300 rounded" />
    </div>
  );
}

function EmailIllustration() {
  return (
    <div className="w-16 h-12 bg-white/90 rounded shadow-sm flex items-center justify-center">
      <svg viewBox="0 0 20 20" className="w-8 h-8 text-gray-400" fill="currentColor">
        <path fillRule="evenodd" d="M3 5.75A1.75 1.75 0 0 1 4.75 4h10.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 15.25 16H4.75A1.75 1.75 0 0 1 3 14.25zM4.75 5.5a.25.25 0 0 0-.25.25v.72l5.5 3.3 5.5-3.3v-.72a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

function TemplateIllustration() {
  return (
    <div className="grid grid-cols-2 gap-1 w-16">
      <div className="w-full h-8 bg-purple-400/60 rounded-sm" />
      <div className="w-full h-8 bg-green-400/60 rounded-sm" />
      <div className="w-full h-8 bg-blue-400/60 rounded-sm" />
      <div className="w-full h-8 bg-yellow-400/60 rounded-sm" />
    </div>
  );
}

export default function ChannelIntro() {
  return (
    <div className="px-5 py-6">
      <h2 className="text-[28px] font-bold text-[var(--slack-text-primary)] mb-2 flex items-center gap-2">
        <span className="text-[var(--slack-text-secondary)] font-normal">#</span> product
      </h2>
      <p className="text-[15px] text-[var(--slack-text-primary)] mb-5">
        You created this channel today. This is the very beginning of the <strong># product</strong> channel.
      </p>

      {/* Action cards */}
      <div className="flex gap-3 flex-wrap">
        <ActionCard
          title="Add people to channel"
          bgColor="bg-teal-700"
          illustration={<PeopleIllustration />}
        />
        <ActionCard
          title="Add channel description"
          bgColor="bg-teal-600"
          illustration={<DocumentIllustration />}
        />
        <ActionCard
          title="Send emails to channel"
          bgColor="bg-amber-700"
          illustration={<EmailIllustration />}
        />
        <ActionCard
          title="Pick a template"
          bgColor="bg-emerald-800"
          illustration={<TemplateIllustration />}
        />
      </div>
    </div>
  );
}
