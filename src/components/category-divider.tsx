interface CategoryDividerProps {
  label: string;
}

export function CategoryDivider({ label }: CategoryDividerProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-[1px] flex-grow bg-white/10" />
      <h3 className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-[0.2em] whitespace-nowrap">
        {label}
      </h3>
      <div className="h-[1px] flex-grow bg-white/10" />
    </div>
  );
}
