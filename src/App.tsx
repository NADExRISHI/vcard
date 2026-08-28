import { useEffect } from "react";
import Lenis from "lenis";
import { VisitingCardSection } from "./sections/VisitingCardSection";

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 10%, hsla(270,60%,92%,0.7) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 80%, hsla(280,50%,88%,0.5) 0%, transparent 55%),
            linear-gradient(160deg, #f5f0ff 0%, #ffffff 50%, #ede8f7 100%)
          `
        }}
      />
      <div className="absolute inset-0 overflow-hidden topo-bg opacity-[0.4]" />
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-brand-blue/5 blur-[100px]" />
    </div>
  );
};

export default function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    const lenis = new Lenis({ duration: 1.2 });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative min-h-svh overflow-hidden text-[color:var(--text-secondary)] bg-[color:var(--bg)] flex flex-col justify-between">
      <div className="grain-overlay" />
      
      <Background />
      
      <main className="relative z-10 flex-1 flex items-center justify-center py-12 px-4 sm:px-6">
        <VisitingCardSection />
      </main>

      <footer className="relative z-10 py-6 text-center text-xs text-text-muted/60 border-t border-border/10 bg-white/5 backdrop-blur-md">
        <p className="font-serif italic">© 2026 Rishikesh Patil</p>
      </footer>
    </div>
  );
}
