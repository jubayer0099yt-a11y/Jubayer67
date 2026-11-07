import { useState } from 'react';
import { PRICING_PLANS, ADD_ONS, PricingPlan, AddOnOption } from '../data/portfolioData';
import { Check, Sparkles, Clock, ArrowRight, Plus, Minus, Calculator } from 'lucide-react';

interface PricingSectionProps {
  activeTab: 'mc' | 'website' | 'dc' | 'promote';
  onTabChange: (tab: 'mc' | 'website' | 'dc' | 'promote') => void;
  onOpenOrderModal: (planName?: string, customDetails?: string) => void;
}

export function PricingSection({ activeTab, onTabChange, onOpenOrderModal }: PricingSectionProps) {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [showCalculator, setShowCalculator] = useState(false);

  const tabs: { key: 'mc' | 'website' | 'dc' | 'promote'; label: string; count: string }[] = [
    { key: 'mc', label: 'Minecraft Servers', count: 'tab=mc' },
    { key: 'website', label: 'Custom Websites', count: 'tab=website' },
    { key: 'dc', label: 'Discord Bots & Guilds', count: 'tab=dc' },
    { key: 'promote', label: 'Brand Promotion', count: 'tab=promote' }
  ];

  const currentPlans = PRICING_PLANS.filter((p) => p.category === activeTab);

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  // Calculate add-on cost
  const addOnsTotal = selectedAddOns.reduce((sum, id) => {
    const item = ADD_ONS.find((a) => a.id === id);
    return sum + (item?.price || 0);
  }, 0);

  const handleOrderWithAddons = (plan?: PricingPlan) => {
    const chosenAddonNames = selectedAddOns
      .map((id) => ADD_ONS.find((a) => a.id === id)?.name)
      .filter(Boolean);

    const planText = plan ? `${plan.name} (${plan.price})` : 'Custom Tailored Package';
    const detailText = chosenAddonNames.length > 0
      ? `Selected Base: ${planText}\nAdd-ons: ${chosenAddonNames.join(', ')}\nEstimated Total: $${(plan ? parseInt(plan.price.replace('$', ''), 10) : 0) + addOnsTotal}`
      : `Selected Base: ${planText}`;

    onOpenOrderModal(plan?.name || 'Custom Package', detailText);
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 border-t border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              02 · Dev Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Transparent Plans for Professional Builds
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Fair, upfront flat rates with zero hidden fees. Pick a battle-tested tier or customize your exact stack.
          </p>
        </div>

        {/* Tab Controls (Functional segmented button bar) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-900/90 rounded-xl border border-neutral-800 mb-10 overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => onTabChange(tab.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700/80'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-850'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-emerald-500/20 text-emerald-300' : 'text-neutral-500'}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-14">
          {currentPlans.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all ${
                  isPopular
                    ? 'bg-neutral-900/90 border-2 border-emerald-500/80 shadow-xl shadow-emerald-500/5'
                    : 'bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-emerald-400 text-neutral-950 text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-xl font-bold text-white font-display">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-400 min-h-[36px] mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-neutral-800 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white font-mono tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs text-neutral-400 ml-1">one-time</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium mb-6">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>Estimated Delivery: {plan.delivery}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-neutral-500">
                      What's Included
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800/80">
                  <button
                    onClick={() => handleOrderWithAddons(plan)}
                    className={`w-full py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                      isPopular
                        ? 'bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                    }`}
                  >
                    <span>Select {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Price Calculator Toggle */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white font-display">
                  Interactive Add-on & Custom Quote Builder
                </h4>
                <p className="text-xs text-neutral-400">
                  Select optional add-ons to customize your project scope and calculate immediate cost.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowCalculator(!showCalculator)}
              className="px-4 py-2 text-xs font-semibold text-neutral-200 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors cursor-pointer shrink-0"
            >
              {showCalculator ? 'Hide Add-ons' : 'Customize Add-ons'}
            </button>
          </div>

          {showCalculator && (
            <div className="space-y-6 pt-4 border-t border-neutral-800/80">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {ADD_ONS.map((addon) => {
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isChecked
                          ? 'bg-emerald-950/20 border-emerald-500/60 text-white'
                          : 'bg-neutral-950/50 border-neutral-800/80 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold">{addon.name}</span>
                        <span className="text-xs font-mono font-bold text-emerald-400 shrink-0">
                          +${addon.price}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 mb-3">{addon.description}</p>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-neutral-500 capitalize">{addon.category} addon</span>
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          {isChecked ? (
                            <>
                              <Minus className="w-3 h-3" /> Remove
                            </>
                          ) : (
                            <>
                              <Plus className="w-3 h-3" /> Add
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Calculator Summary Bar */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <div className="text-xs text-neutral-400">
                    Selected Add-ons ({selectedAddOns.length})
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Additional cost: <span className="text-emerald-400 font-mono">+${addOnsTotal}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedAddOns([])}
                    className="px-3 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Reset Add-ons
                  </button>
                  <button
                    onClick={() => handleOrderWithAddons()}
                    className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Order Custom Build</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
