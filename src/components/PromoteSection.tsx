import { TrendingUp, Megaphone, Video, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

interface PromoteSectionProps {
  onOpenOrderModal: (serviceName?: string) => void;
  onExplorePricing: () => void;
}

export function PromoteSection({ onOpenOrderModal, onExplorePricing }: PromoteSectionProps) {
  const promotionPillars = [
    {
      icon: <Megaphone className="w-5 h-5 text-emerald-400" />,
      title: 'Targeted Gaming Shoutouts',
      description: 'Direct placement across engaged gaming and Discord networks, reaching verified Minecraft, esports, and developer audiences ready to join.'
    },
    {
      icon: <Video className="w-5 h-5 text-emerald-400" />,
      title: 'High-Retention Video Creatives',
      description: 'Short-form trailers, TikTok/Reels edits, and motion graphic teasers built to capture clicks in the first 2 seconds.'
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      title: 'Discord Member Acquisition',
      description: 'Strategic partnership announcements, giveaway co-hosting, and organic cross-promotions that bring active chatters, not ghost accounts.'
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      title: 'Launch Event Orchestration',
      description: 'Opening day countdowns, server release events, and creator stream sponsorships to ensure day-one peak concurrency.'
    }
  ];

  return (
    <section id="promote" className="py-16 sm:py-24 border-t border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              03 · Brand Growth & Promotion
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Turn Server Builds into Thriving Communities
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Building the best server or website is only half the battle. I help you get eyes on it through high-converting gaming promotion campaigns.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {promotionPillars.map((pillar, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="p-3 w-fit rounded-xl bg-neutral-800/80 mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-white font-display mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-neutral-800/60 flex items-center text-xs text-neutral-500">
                <span>Verified ROI focus</span>
              </div>
            </div>
          ))}
        </div>

        {/* Campaign Workflow & Claim-to-Proof Section */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                The 4-Step Promotion Pipeline
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                How We Scale Your Playerbase & Traffic
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                No bot spam, no artificial inflated numbers. Every campaign is laser-targeted at your niche: whether custom Minecraft survivalists, Discord bot users, or SaaS customers.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Audience Profiling:</strong> We analyze your game mode or product to define your exact player demographic.
                  </div>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Creative Asset Crafting:</strong> Custom branded embeds, high-retention video hooks, and sharp copy.
                  </div>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Multi-Channel Broadcast:</strong> Simultaneous launch across partner Discord servers, YouTube, and X.
                  </div>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Retention Optimization:</strong> We advise on onboarding channels and welcome systems so visitors stick around.
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenOrderModal('Promotion Campaign')}
                  className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors cursor-pointer"
                >
                  Book a Promotion Campaign
                </button>
                <button
                  onClick={onExplorePricing}
                  className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>View Promotion Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Testimonials / Proof Strip */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                Client Results & Proof
              </div>
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 space-y-2"
                >
                  <p className="text-xs text-neutral-300 italic leading-relaxed">
                    "{t.content}"
                  </p>
                  <div className="flex items-center justify-between text-xs pt-2 border-t border-neutral-850">
                    <div>
                      <div className="font-semibold text-white">{t.name}</div>
                      <div className="text-neutral-500 text-[11px]">{t.role}</div>
                    </div>
                    <div className="text-xs font-bold text-emerald-400 font-mono">
                      {t.metric}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
