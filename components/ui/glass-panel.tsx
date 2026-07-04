import { cn } from "@/lib/utils";

export function GlassPanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-glass)] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,.2),transparent_35%,rgba(255,255,255,.05))]",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
