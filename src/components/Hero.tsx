import { ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onExploreSkills: () => void;
  onOpenCalculator: () => void;
}

export function Hero({ onExploreSkills, onOpenCalculator }: HeroProps) {
  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split screen layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Creator Profile Header */}
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 w-fit">
              <div className="relative shrink-0">
                <SafeImage
                  src="/assets/aistudio/39727-removebg-preview_bf8db067.png"
                  alt="JUBAYER Avatar"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-emerald-400 shadow-md shadow-emerald-500/20 object-cover"
                  fallbackType="avatar"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-neutral-950" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-white font-display">JUBAYER</span>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Developer & Promoter
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400 mt-1">
                  <a
                    href="https://youtube.com/@viralMasterbd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 font-medium transition-colors"
                  >
                    YouTube: @viralMasterbd
                  </a>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span>Game Server & Web Dev</span>
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display text-balance leading-[1.12]">
              Crafting High-Performance Game Servers, Custom Websites & Discord Bots
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              I build and run servers from scratch, engineer hand-coded websites, and automate thriving Discord communities — backed by authentic creator promotion to turn ideas into buzzing ecosystems.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreSkills}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors shadow-sm cursor-pointer"
              >
                <span>Explore Skills & Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-emerald-400" />
                <span>Estimate Project Cost</span>
              </button>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Zero Bloat / Pure Hand-Coded
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                24/7 Production Uptime Standard
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Transparent Pricing Guarantee
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/80 p-2 shadow-2xl overflow-hidden group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-xl overflow-hidden bg-neutral-950">
                <SafeImage
                  src="/assets/images/hero-workstation.jpg"
                  alt="JUBAYER Developer Workstation and Server Terminal"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  fallbackType="workstation"
                  aspectClassName="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent pointer-events-none" />
                
                {/* Floating Telemetry Card */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-neutral-900/90 backdrop-blur-md border border-neutral-800/80">
                  <div className="flex items-center justify-between text-xs">
                    <div className="space-y-0.5">
                      <div className="text-neutral-400">Server Architecture Status</div>
                      <div className="font-semibold text-white font-mono">TPS 20.0 · 0% Packet Loss</div>
                    </div>
                    <div className="text-right space-y-0.5">
                      <div className="text-neutral-400">Active Build Queue</div>
                      <div className="font-semibold text-emerald-400 font-mono">Accepting Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI strip below the split */}
        <div className="mt-14 pt-8 border-t border-neutral-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/50">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">50+</div>
              <div className="text-xs sm:text-sm text-neutral-400 mt-1">Game Servers Launched</div>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/50">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">99.9%</div>
              <div className="text-xs sm:text-sm text-neutral-400 mt-1">Average Uptime Rate</div>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/50">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">150K+</div>
              <div className="text-xs sm:text-sm text-neutral-400 mt-1">Players & Members Reached</div>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/50">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">48h</div>
              <div className="text-xs sm:text-sm text-neutral-400 mt-1">Typical Project Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
