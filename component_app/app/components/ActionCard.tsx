interface ActionCardProps {
  title: string;
  bgColor: string;
  illustration: React.ReactNode;
}

export default function ActionCard({ title, bgColor, illustration }: ActionCardProps) {
  return (
    <button className={`${bgColor} rounded-xl p-4 text-left hover:brightness-95 transition flex-1 min-w-[140px] max-w-[180px]`}>
      <p className="text-white font-bold text-[13px] leading-tight mb-3">{title}</p>
      <div className="h-[100px] flex items-end justify-center">
        {illustration}
      </div>
    </button>
  );
}
