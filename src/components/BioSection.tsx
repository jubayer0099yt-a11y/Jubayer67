import { BIO_DATA } from '../data/portfolioData';
import { Terminal, Shield, Cpu, Flame, ArrowUpRight } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface BioSectionProps {
  onOpenOrderModal: () => void;
}

export function BioSection({ onOpenOrderModal }: BioSectionProps) {
  return (
    <section id="bio" className="py-16 sm:py-24 border-t border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              01 · Bio & Story
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Developer, Promoter & System Architect
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Bridging technical code precision with real community growth. Here is what drives JUBAYER.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Main Story (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Creator Author Bar */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              <SafeImage
                src="/assets/aistudio/39727-removebg-preview_bf8db067.png"
                alt="JUBAYER"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-emerald-400 object-cover shrink-0 shadow-lg"
                fallbackType="avatar"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white font-display">JUBAYER</h3>
                  <a
                    href="https://youtube.com/@viralMasterbd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-colors"
                  >
                    YouTube @viralMasterbd
                  </a>
                </div>
                <div className="text-xs text-neutral-400">
                  {BIO_DATA.role} · Global / Remote
                </div>
                <div className="text-xs text-emerald-400 font-mono">
                  4+ Years Experience · 120+ Completed Builds
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none text-neutral-300 space-y-4 text-sm sm:text-base leading-relaxed">
              <p className="text-lg font-medium text-white">
                "{BIO_DATA.tagline}"
              </p>
              <p>
                {BIO_DATA.bioParagraph1}
              </p>
              <p>
                {BIO_DATA.bioParagraph2}
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <Shield className="w-5 h-5 text-emerald-400 mb-2" />
                <div className="text-sm font-bold text-white mb-1">Stability First</div>
                <div className="text-xs text-neutral-400">Production setups built to stay online without babysitting.</div>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <Cpu className="w-5 h-5 text-emerald-400 mb-2" />
                <div className="text-sm font-bold text-white mb-1">Hand-Coded Core</div>
                <div className="text-xs text-neutral-400">Zero unnecessary wrappers or sluggish templates. Clean syntax.</div>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <Flame className="w-5 h-5 text-emerald-400 mb-2" />
                <div className="text-sm font-bold text-white mb-1">Audience Reach</div>
                <div className="text-xs text-neutral-400">Direct promotional muscle to get players into your world.</div>
              </div>
            </div>
          </div>

          {/* Languages & Tech Skills Matrix (Right 5 Cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>Full Languages & Toolchain Matrix</span>
            </div>

            <div className="space-y-4">
              {BIO_DATA.skillsList.map((group, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-xs font-semibold text-neutral-300">
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-md bg-neutral-950/80 text-neutral-300 border border-neutral-800/80 font-mono"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-xs">
              <span className="text-neutral-400">Ready to build together?</span>
              <button
                onClick={onOpenOrderModal}
                className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="pt-8 border-t border-neutral-800/80">
          <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-8">
            Growth & Engineering Milestones
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BIO_DATA.milestones.map((milestone, idx) => (
              <div
                key={idx}
                className="relative p-5 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3"
              >
                <div className="text-xs font-bold text-emerald-400 font-mono">
                  {milestone.year}
                </div>
                <h4 className="text-base font-bold text-white font-display">
                  {milestone.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
