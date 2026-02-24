import { LiveClock } from "./live-clock";

export function Header() {
  return (
    <header className="border-b border-white/5 px-3 py-3 md:p-4 bg-black/90 backdrop-blur-xl sticky top-0 z-40 flex justify-between items-center">
      <div className="flex items-center gap-3 md:gap-4">
        <div className="w-7 h-7 md:w-8 md:h-8 border border-emerald-500/30 flex items-center justify-center bg-emerald-500/5 shrink-0">
          <span className="text-emerald-500 font-mono font-black text-[10px] md:text-xs tracking-tighter">
            AI
          </span>
        </div>
        <div className="min-w-0">
          <h1 className="text-[10px] md:text-xs font-mono font-black text-white tracking-[0.2em] md:tracking-[0.3em] uppercase truncate">
            APEX INNOVATE LLC
          </h1>
          <p className="text-[8px] md:text-[9px] text-gray-500 font-mono tracking-tighter uppercase">
            <LiveClock /> // AI Innovation
          </p>
        </div>
      </div>
    </header>
  );
}
