import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { PricingSection } from './components/PricingSection';
import { PromoteSection } from './components/PromoteSection';
import { BioSection } from './components/BioSection';
import { SocialsSection } from './components/SocialsSection';
import { OrderModal } from './components/OrderModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [pricingTab, setPricingTab] = useState<'mc' | 'website' | 'dc' | 'promote'>('mc');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderModalPlan, setOrderModalPlan] = useState<string | undefined>(undefined);
  const [orderModalDetails, setOrderModalDetails] = useState<string | undefined>(undefined);

  // Check URL params on load (e.g. ?tab=mc, ?tab=website, ?tab=dc, ?tab=promote)
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const tabParam = urlParams.get('tab');
      if (tabParam && ['mc', 'website', 'dc', 'promote'].includes(tabParam)) {
        setPricingTab(tabParam as 'mc' | 'website' | 'dc' | 'promote');
        const pricingElem = document.getElementById('pricing');
        if (pricingElem) {
          pricingElem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectPricingTab = (tabKey: 'mc' | 'website' | 'dc' | 'promote') => {
    setPricingTab(tabKey);
    handleNavigate('pricing');
  };

  const handleOpenOrderModal = (planName?: string, customDetails?: string) => {
    setOrderModalPlan(planName);
    setOrderModalDetails(customDetails);
    setIsOrderModalOpen(true);
  };

  const marqueeKeywords = [
    'Minecraft Server Architecture',
    'Custom Websites & Web Apps',
    'Discord Bot Engineering',
    'Gaming Audience Growth',
    '20.0 TPS Optimization',
    'Hand-Coded Precision',
    '24/7 Production Uptime',
    'Zero Lag Assurance'
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenOrderModal={() => handleOpenOrderModal()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreSkills={() => handleNavigate('skills')}
          onOpenCalculator={() => {
            handleNavigate('pricing');
          }}
        />

        {/* Subtle Marquee Ribbon Divider */}
        <div className="py-3 border-y border-neutral-800/80 bg-neutral-900/40 overflow-hidden select-none">
          <div className="flex items-center gap-8 whitespace-nowrap text-xs font-mono text-neutral-400">
            {marqueeKeywords.concat(marqueeKeywords).map((word, index) => (
              <span key={index} className="inline-flex items-center gap-8">
                <span>{word}</span>
                <span aria-hidden="true" className="text-emerald-500/60">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Skills Section (Server Dev, Custom Websites, Discord, Languages) */}
        <SkillsSection
          onSelectPricingTab={handleSelectPricingTab}
          onOpenOrderModal={(serviceName) => handleOpenOrderModal(serviceName)}
        />

        {/* Live Interactive Developer Console */}
        <section className="py-12 bg-neutral-950 border-t border-neutral-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                Developer Sandbox
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Test JUBAYER's Live System Terminal
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Run commands to inspect real server benchmarks, tech specifications, or commission protocols.
              </p>
            </div>
            <InteractiveTerminal onOpenOrderModal={() => handleOpenOrderModal('Terminal Commission')} />
          </div>
        </section>

        {/* Dev Pricing Section (Tabs: mc, website, dc, promote + Custom Calculator) */}
        <PricingSection
          activeTab={pricingTab}
          onTabChange={setPricingTab}
          onOpenOrderModal={handleOpenOrderModal}
        />

        {/* Brand Growth & Promotion Section */}
        <PromoteSection
          onOpenOrderModal={(service) => handleOpenOrderModal(service)}
          onExplorePricing={() => handleSelectPricingTab('promote')}
        />

        {/* Bio & Story Section */}
        <BioSection
          onOpenOrderModal={() => handleOpenOrderModal('Custom Project')}
        />

        {/* Socials & Community Section */}
        <SocialsSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Order & Commission Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        defaultPlan={orderModalPlan}
        defaultDetails={orderModalDetails}
      />
    </div>
  );
}
