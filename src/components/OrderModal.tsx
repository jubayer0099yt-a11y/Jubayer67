import { useState } from 'react';
import { X, Check, Copy, Send, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
  defaultDetails?: string;
}

export function OrderModal({ isOpen, onClose, defaultPlan, defaultDetails }: OrderModalProps) {
  const [serviceCategory, setServiceCategory] = useState(defaultPlan || 'Minecraft Server Setup');
  const [contactHandle, setContactHandle] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [budget, setBudget] = useState('$50 - $100');
  const [deadline, setDeadline] = useState('Standard (3–5 Days)');
  const [requirements, setRequirements] = useState(defaultDetails || '');
  const [submitted, setSubmitted] = useState(false);
  const [copiedSlip, setCopiedSlip] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `JB-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedId);
    setSubmitted(true);
  };

  const getInquiryText = () => {
    return `[JUBAYER Project Commission Inquiry]
Ticket: ${ticketId || 'NEW'}
Service: ${serviceCategory}
Contact / Discord: ${contactHandle || 'Not provided'}
Email: ${contactEmail || 'Not provided'}
Budget Range: ${budget}
Deadline: ${deadline}
Project Scope:
${requirements || 'Ready to discuss on call/chat'}`;
  };

  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(getInquiryText());
    setCopiedSlip(true);
    setTimeout(() => setCopiedSlip(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-2xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SafeImage
                src="/assets/aistudio/39727-removebg-preview_bf8db067.png"
                alt="JUBAYER"
                className="w-12 h-12 rounded-full border-2 border-emerald-400 object-cover shadow-sm"
                fallbackType="avatar"
              />
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Direct Commission with JUBAYER</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Start Your Project
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              Fill in your specifications below. You will receive an immediate formatted commission slip and quick response via Discord or Email.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Service Category
                </label>
                <select
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white text-xs sm:text-sm focus:border-emerald-500 focus:outline-none"
                >
                  <option value="Minecraft Server Setup">Minecraft Server Dev & Setup</option>
                  <option value="Custom Website Build">Custom Website / Landing Page</option>
                  <option value="Discord Bot & Server">Discord Bot & Community Server</option>
                  <option value="Brand Growth & Promotion">Brand Growth & Promotion Campaign</option>
                  <option value="Custom Multi-Service Bundle">Custom Multi-Service Bundle</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Discord Username / Tag <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={contactHandle}
                    onChange={(e) => setContactHandle(e.target.value)}
                    placeholder="e.g. gamer_tag#0001"
                    className="w-full px-3.5 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white text-xs sm:text-sm focus:border-emerald-500 focus:outline-none placeholder-neutral-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full px-3.5 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white text-xs sm:text-sm focus:border-emerald-500 focus:outline-none placeholder-neutral-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Estimated Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white text-xs sm:text-sm focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="$25 - $50">$25 – $50 (Starter Tier)</option>
                    <option value="$50 - $100">$50 – $100 (Custom Build)</option>
                    <option value="$100 - $200">$100 – $200 (Pro Network / Full-Stack)</option>
                    <option value="$200+">$200+ (Enterprise / Mega Ecosystem)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Target Turnaround
                  </label>
                  <select
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white text-xs sm:text-sm focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="Express (24–48 Hours)">Express (24–48 Hours)</option>
                    <option value="Standard (3–5 Days)">Standard (3–5 Days)</option>
                    <option value="Flexible (1–2 Weeks)">Flexible (1–2 Weeks)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Project Scope & Details
                </label>
                <textarea
                  rows={3}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Describe your vision, game version, desired plugins, website pages, or promotion targets..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white text-xs sm:text-sm focus:border-emerald-500 focus:outline-none placeholder-neutral-600 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Inquiry Generated!
              </h3>
              <p className="text-xs text-neutral-400">
                Your commission slip has been created with Ticket ID: <span className="font-mono text-emerald-400 font-bold">{ticketId}</span>
              </p>
            </div>

            {/* Formatted Code Block */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300 space-y-1">
              <div className="text-emerald-400 font-semibold mb-2">--- COMMISSION SLIP ---</div>
              <div>Ticket: {ticketId}</div>
              <div>Service: {serviceCategory}</div>
              <div>Client: {contactHandle}</div>
              <div>Budget: {budget} · {deadline}</div>
              <div className="text-neutral-400 text-[11px] mt-2 whitespace-pre-wrap">
                {requirements || 'Ready to discuss on chat'}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleCopyInquiry}
                className="w-full sm:w-1/2 py-2.5 px-4 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copiedSlip ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy for Discord DM</span>
                  </>
                )}
              </button>

              <a
                href="https://discord.gg/prorabbi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>DM JUBAYER on Discord</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
