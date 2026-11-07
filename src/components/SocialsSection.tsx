import { useState } from 'react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { Copy, Check, ExternalLink, MessageSquare, Youtube, Github, Twitter, Mail, Users } from 'lucide-react';
import { SafeImage } from './SafeImage';

export function SocialsSection() {
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  const getPlatformIcon = (iconName: string) => {
    switch (iconName) {
      case 'discord':
        return <MessageSquare className="w-5 h-5" />;
      case 'youtube':
        return <Youtube className="w-5 h-5" />;
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'mail':
        return <Mail className="w-5 h-5" />;
      default:
        return <MessageSquare className="w-5 h-5" />;
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHandle(id);
    setTimeout(() => setCopiedHandle(null), 2000);
  };

  return (
    <section id="socials" className="py-16 sm:py-24 border-t border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              04 · Socials & Community
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Join the Squad on Every Platform
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Connect with JUBAYER across YouTube (@viralMasterbd), Discord, GitHub, and Twitter. Get instant updates, join the community, or commission a project.
          </p>
        </div>

        {/* Discord Featured Community Banner */}
        <div className="mb-10 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/90 via-neutral-900/60 to-neutral-950 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
              <MessageSquare className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-white font-display">
                  Official JUBAYER Discord Community
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  Verified Hub
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400">
                Direct tickets for commissions, free configuration help, server showcases, and gaming events.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => handleCopy('Jubayer#0001', 'discord-tag')}
              className="px-4 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-medium transition-colors flex items-center gap-2 cursor-pointer"
            >
              {copiedHandle === 'discord-tag' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Tag Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Discord Tag</span>
                </>
              )}
            </button>

            <a
              href="https://discord.gg/prorabbi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors flex items-center gap-2 shadow-sm"
            >
              <Users className="w-4 h-4" />
              <span>Join Discord Server</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Social Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOCIAL_LINKS.map((link, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                link.platform === 'YouTube'
                  ? 'bg-neutral-900/90 border-red-500/40 shadow-lg shadow-red-500/5'
                  : 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {link.avatar ? (
                    <SafeImage
                      src={link.avatar}
                      alt={link.label}
                      className="w-10 h-10 rounded-full border border-red-500/60 object-cover shadow-sm"
                      fallbackType="avatar"
                    />
                  ) : (
                    <div className="p-2.5 rounded-xl bg-neutral-800 text-neutral-200">
                      {getPlatformIcon(link.icon)}
                    </div>
                  )}
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                    link.platform === 'YouTube'
                      ? 'bg-red-500/10 text-red-400 border-red-500/20'
                      : 'bg-neutral-950 text-neutral-400 border-neutral-800'
                  }`}>
                    {link.badge}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white font-display mb-1 flex items-center gap-2">
                  <span>{link.platform}</span>
                  {link.platform === 'YouTube' && (
                    <span className="text-xs font-normal text-red-400 font-mono">@viralMasterbd</span>
                  )}
                </h4>

                <div className="text-xs font-mono text-emerald-400 mb-2 truncate">
                  {link.handle}
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {link.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <button
                  onClick={() => handleCopy(link.handle, `link-${idx}`)}
                  className="text-xs text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedHandle === `link-${idx}` ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Handle</span>
                    </>
                  )}
                </button>

                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  <span>Open</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
