export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--color-void)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      <div className="aurora absolute -left-32 top-0 h-[34rem] w-[34rem] rounded-full bg-[var(--accent-cyan)] opacity-20 blur-3xl" />
      <div className="aurora-delayed absolute right-0 top-40 h-[38rem] w-[38rem] rounded-full bg-[var(--accent-violet)] opacity-20 blur-3xl" />
      <div className="aurora-slow absolute bottom-[-10rem] left-1/3 h-[32rem] w-[32rem] rounded-full bg-[var(--accent-champagne)] opacity-15 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent,rgba(0,0,0,.55)_72%)]" />
      <div className="noise absolute inset-0 opacity-[.055]" />
    </div>
  );
}
