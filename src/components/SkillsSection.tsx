import { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/portfolioData';
import { ArrowRight, Server, Globe, Bot, Code2, Check, ExternalLink } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface SkillsSectionProps {
  onSelectPricingTab: (tabKey: 'mc' | 'website' | 'dc' | 'promote') => void;
  onOpenOrderModal: (serviceName?: string) => void;
}

export function SkillsSection({ onSelectPricingTab, onOpenOrderModal }: SkillsSectionProps) {
  const [selectedSkillId, setSelectedSkillId] = useState<string>('server-dev');

  const selectedSkill = SERVICES_DATA.find((s) => s.id === selectedSkillId) || SERVICES_DATA[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'server-dev':
        return <Server className="w-5 h-5" />;
      case 'custom-websites':
        return <Globe className="w-5 h-5" />;
      case 'discord-systems':
        return <Bot className="w-5 h-5" />;
      case 'languages-stack':
        return <Code2 className="w-5 h-5" />;
      default:
        return <Server className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              What's Inside · Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              My Skills & Specializations
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Everything I do — gaming server infrastructure, hand-crafted web development, Discord bot automation, and organic promotion.
          </p>
        </div>

        {/* Skill Selector Tabs (Segmented functional controls) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 p-1.5 bg-neutral-900/90 rounded-xl border border-neutral-800 mb-8">
          {SERVICES_DATA.map((service) => {
            const isSelected = selectedSkillId === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedSkillId(service.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer text-left whitespace-nowrap ${
                  isSelected
                    ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700/80'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-850'
                }`}
              >
                <span className={isSelected ? 'text-emerald-400' : 'text-neutral-500'}>
                  {getIcon(service.id)}
                </span>
                <span className="truncate">{service.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Skill Detailed Showcase Card */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Preview Side */}
            <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto min-h-[300px] lg:min-h-[460px] bg-neutral-950 overflow-hidden group">
              <SafeImage
                src={selectedSkill.image}
                alt={selectedSkill.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                fallbackType={
                  selectedSkill.id === 'server-dev'
                    ? 'server'
                    : selectedSkill.id === 'custom-websites'
                    ? 'website'
                    : selectedSkill.id === 'discord-systems'
                    ? 'discord'
                    : 'workstation'
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-950/90 pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80">
                <div className="grid grid-cols-3 gap-2 text-center">
                  {selectedSkill.highlights.map((h, i) => (
                    <div key={i}>
                      <div className="text-[11px] text-neutral-400">{h.label}</div>
                      <div className="text-sm font-bold text-emerald-400 font-mono mt-0.5">{h.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Breakdown Side */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                  <span>Architecture</span>
                  <span aria-hidden="true">·</span>
                  <span>Production Ready</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400">Strict SLA Quality</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
                  {selectedSkill.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {selectedSkill.description}
                </p>

                {/* Feature Checklist */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Included Capabilities
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedSkill.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 bg-neutral-900/80 p-2.5 rounded-lg border border-neutral-800/60"
                      >
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => onSelectPricingTab(selectedSkill.pricingTab)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer group"
                >
                  <span>See {selectedSkill.title.split('&')[0].trim()} Pricing</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenOrderModal(selectedSkill.title)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors cursor-pointer"
                >
                  <span>Request Custom Build</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards Quick-View Matrix (Directly fulfilling original links) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {SERVICES_DATA.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                selectedSkillId === item.id
                  ? 'bg-neutral-900/90 border-emerald-500/50 shadow-lg shadow-emerald-500/5'
                  : 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60'
              }`}
              onClick={() => setSelectedSkillId(item.id)}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-neutral-800 text-emerald-400">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-xs text-neutral-500 font-mono">
                    {item.tabKey.toUpperCase()}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white font-display mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {item.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/70 flex items-center justify-between text-xs font-medium">
                <span className="text-neutral-400">Explore specs</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  View <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
