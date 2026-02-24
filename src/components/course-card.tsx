import type { Course } from "@/types";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="p-4 border border-white/10 bg-white/5 hover:border-emerald-500/50 transition-all group relative overflow-hidden">
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-[11px] font-bold text-white uppercase group-hover:text-emerald-400 leading-tight w-2/3">
          {course.title}
        </h4>
        <span className="text-[10px] font-mono font-bold text-emerald-500 whitespace-nowrap">
          {course.price}
        </span>
      </div>
      <div className="space-y-1 border-t border-white/5 pt-3">
        <p className="text-[8px] font-mono text-emerald-500/60 uppercase mb-1 tracking-tighter">
          Focus Areas:
        </p>
        {course.syllabus.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <div className="w-1 h-1 bg-emerald-500/40 rounded-full" />
            <span className="text-[9px] text-gray-400 font-mono tracking-tighter uppercase">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
