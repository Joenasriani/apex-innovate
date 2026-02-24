interface ContentPanelProps {
  sectionId: string;
  title: string;
  children: React.ReactNode;
}

export function ContentPanel({ sectionId, title, children }: ContentPanelProps) {
  return (
    <div className="bg-black/60 border border-white/10 rounded-sm overflow-hidden min-h-[400px] md:min-h-[500px]">
      <div className="border-b border-white/5 px-3 md:px-4 py-2 flex justify-between items-center bg-white/5">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500/20" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
        </div>
        <p className="text-[8px] md:text-[9px] font-mono text-gray-500 uppercase tracking-widest truncate ml-2">
          Section://{sectionId}.dat
        </p>
      </div>
      <div className="p-4 md:p-6 lg:p-10">
        <h1 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tighter mb-6 md:mb-8">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}
