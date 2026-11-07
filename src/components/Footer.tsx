import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800/80 bg-neutral-950 py-12 text-xs text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/assets/aistudio/39727-removebg-preview_bf8db067.png"
              alt="JUBAYER"
              className="w-7 h-7 rounded-full border border-neutral-700 object-cover shrink-0"
            />
            <span className="text-base font-bold text-white font-display">
              JUBAYER
            </span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <a
              href="https://youtube.com/@viralMasterbd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              @viralMasterbd
            </a>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span>Developer & Promoter</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => onNavigate('skills')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Dev Pricing
            </button>
            <button
              onClick={() => onNavigate('promote')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Promote
            </button>
            <button
              onClick={() => onNavigate('bio')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Bio
            </button>
            <button
              onClick={() => onNavigate('socials')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Socials
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span>&copy; {new Date().getFullYear()} JUBAYER. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
