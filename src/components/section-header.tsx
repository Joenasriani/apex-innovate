interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="border-l-2 border-emerald-500 pl-4 py-2 bg-emerald-500/5">
      <p className="text-emerald-400 font-mono text-[10px] mb-1 uppercase tracking-widest">
        {label}
      </p>
      <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">
        {title}
      </h2>
      {description && (
        <p className="text-gray-400 mt-2 leading-relaxed text-sm">
          {description}
        </p>
      )}
    </div>
  );
}
