import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="p-4 border border-white/10 bg-white/5 hover:bg-emerald-500/5 transition-all group">
      <h4 className="text-[10px] font-mono text-emerald-500 uppercase mb-1 tracking-widest">
        {service.type}
      </h4>
      <p className="text-xs text-white font-bold mb-2 uppercase leading-tight">
        {service.subtitle}
      </p>
      <p className="text-[10px] text-gray-400 leading-relaxed mb-3">
        {service.desc}
      </p>
      <div className="text-[9px] font-mono text-gray-500 uppercase flex items-center justify-between pt-2 border-t border-white/5">
        <span>Investment:</span>
        <span className="text-white">{service.rate}</span>
      </div>
    </div>
  );
}
