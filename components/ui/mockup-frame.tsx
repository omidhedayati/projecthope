import { cn } from "@/lib/utils";

export function MockupFrame({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-black/40 shadow-2xl shadow-black/30",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[.06] px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
        <span className="h-3 w-3 rounded-full bg-[#f7d794]" />
        <span className="h-3 w-3 rounded-full bg-[#63e6be]" />
        <span className="ml-4 truncate font-mono text-xs uppercase tracking-[0.28em] text-white/50">
          {title}
        </span>
      </div>
      <div className="relative min-h-72 bg-[radial-gradient(circle_at_30%_20%,rgba(136,247,255,.22),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(167,139,250,.2),transparent_34%),linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.015))] p-6">
        {children}
      </div>
    </div>
  );
}
