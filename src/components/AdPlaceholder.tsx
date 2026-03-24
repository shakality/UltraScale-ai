export default function AdPlaceholder({ label = "Advertisement", className = "" }: { label?: string; className?: string }) {
  return (
    <div className={`w-full bg-white/5 border border-dashed border-white/10 rounded-xl flex items-center justify-center min-h-[120px] group transition-all hover:bg-white/10 ${className}`}>
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 group-hover:text-primary transition-colors">{label}</span>
        <div className="w-12 h-0.5 bg-neutral-800 group-hover:bg-primary transition-all"></div>
      </div>
    </div>
  );
}
