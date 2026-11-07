import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Send, RotateCcw, Copy, Check } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output' | 'system';
  text: string;
}

export function InteractiveTerminal({ onOpenOrderModal }: { onOpenOrderModal: () => void }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'system', text: 'JUBAYER v2.6.0 [Interactive Command Console · @viralMasterbd]' },
    { type: 'system', text: 'Type /help, /youtube or click any preset below to inspect live server metrics and build specs.' }
  ]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const newHistory: TerminalLine[] = [...history, { type: 'input', text: trimmed }];

    if (lower === '/clear') {
      setHistory([
        { type: 'system', text: 'Terminal cleared. Type /help for available commands.' }
      ]);
      setInputVal('');
      return;
    }

    if (lower === '/help') {
      newHistory.push({
        type: 'output',
        text: `AVAILABLE COMMANDS:\n  /youtube     - Open YouTube channel @viralMasterbd info\n  /status      - Inspect active server uptime, TPS & memory usage\n  /minecraft   - View Minecraft setup specifications & supported versions\n  /web         - Inspect frontend speed benchmarks & tech stack\n  /discord     - Bot latency & Discord API v14 architecture specs\n  /pricing     - View baseline pricing tiers\n  /order       - Open commission and quote booking form\n  /clear       - Clear console screen`
      });
    } else if (lower === '/youtube') {
      newHistory.push({
        type: 'output',
        text: `[YOUTUBE CHANNEL]\nCreator: JUBAYER\nHandle: @viralMasterbd\nURL: https://youtube.com/@viralMasterbd\nContent: Minecraft server setups, plugins, custom web showcases & tech tutorials`
      });
    } else if (lower === '/status') {
      newHistory.push({
        type: 'output',
        text: `[SYSTEM STATUS] · NODE: primary-eu-01\nUptime: 99.98% (42 days continuous)\nMinecraft TPS: 20.00 / 20.00 (0 tick lag)\nWeb Vitals: 99/100 Lighthouse Performance\nDiscord Gateway: 18ms latency · 0 reconnection events\nWork Queue: Active · Delivery slots available`
      });
    } else if (lower === '/minecraft') {
      newHistory.push({
        type: 'output',
        text: `[MINECRAFT CORE SPECS]\nEngines: Purpur, Paper, Velocity Proxy, Fabric 1.20+\nJVM Flags: Aikar GC tuned, ZGC / G1GC low-pause profiles\nFeatures: DeluxeMenus, LuckPerms, Vault, Economy, Custom Plugins\nSecurity: Exploit-patched, Anti-Xray Engine Mode 2, DDoS Shield`
      });
    } else if (lower === '/web') {
      newHistory.push({
        type: 'output',
        text: `[WEB ARCHITECTURE]\nFramework: React 19 + TypeScript + Tailwind CSS\nBundle: Vite ESNext tree-shaken (< 50kb initial chunk)\nFidelity: Responsive Mobile-First · Dark/Light tokens\nSEO: Schema.org, OpenGraph rich cards, XML sitemaps`
      });
    } else if (lower === '/discord') {
      newHistory.push({
        type: 'output',
        text: `[DISCORD BOT SPECS]\nRuntime: Node.js 22 LTS / Python 3.12 · discord.js v14\nInteraction: Slash Commands, Select Menus, Modals, Embeds\nDatabase: SQLite / PostgreSQL / Redis caching layer\nHosting: Dockerized container with systemd 24/7 supervision`
      });
    } else if (lower === '/pricing') {
      newHistory.push({
        type: 'output',
        text: `[PRICING OVERVIEW]\n• Minecraft Servers: from $29 (SMP) to $149 (Mega Network)\n• Custom Websites: from $49 (One-page) to $189 (Full-stack)\n• Discord Bots/Servers: from $25 (Setup) to $119 (Empire)\n• Growth Promotion: from $35 to $169\n-> Scroll down to Dev Pricing section for the live calculator!`
      });
    } else if (lower === '/order') {
      newHistory.push({
        type: 'output',
        text: `Opening commission booking modal...`
      });
      setTimeout(() => onOpenOrderModal(), 300);
    } else {
      newHistory.push({
        type: 'output',
        text: `Unknown command: '${trimmed}'. Type /help to see available commands.`
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleCopyConsole = () => {
    const text = history.map((h) => `${h.type === 'input' ? '> ' : ''}${h.text}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const presetCommands = ['/status', '/minecraft', '/web', '/discord', '/pricing'];

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 overflow-hidden shadow-xl">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-neutral-950 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-neutral-400 ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
            jubayer@dev-console: ~
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyConsole}
            className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors cursor-pointer text-xs flex items-center gap-1"
            title="Copy terminal text"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
          </button>
          <button
            onClick={() => runCommand('/clear')}
            className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors cursor-pointer text-xs flex items-center gap-1"
            title="Reset console"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Preset Chips */}
      <div className="px-4 py-2 bg-neutral-950/60 border-b border-neutral-800/80 flex items-center gap-2 overflow-x-auto text-xs">
        <span className="text-neutral-500 shrink-0 font-mono">Quick Run:</span>
        {['/youtube', '/status', '/minecraft', '/web', '/discord', '/pricing'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => runCommand(cmd)}
            className="px-2.5 py-1 rounded bg-neutral-800/70 hover:bg-emerald-500/20 hover:text-emerald-300 text-neutral-300 font-mono transition-colors shrink-0 cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-neutral-300 min-h-[220px] max-h-[300px] overflow-y-auto space-y-2">
        {history.map((line, i) => (
          <div key={i} className="leading-relaxed">
            {line.type === 'input' && (
              <div className="text-emerald-400 flex items-start gap-2">
                <span className="text-neutral-500 select-none">&gt;</span>
                <span className="font-semibold">{line.text}</span>
              </div>
            )}
            {line.type === 'system' && (
              <div className="text-neutral-500 italic">{line.text}</div>
            )}
            {line.type === 'output' && (
              <pre className="text-neutral-300 whitespace-pre-wrap font-mono pl-4 border-l border-neutral-800 my-1">
                {line.text}
              </pre>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Command Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          runCommand(inputVal);
        }}
        className="flex items-center px-4 py-2.5 bg-neutral-950 border-t border-neutral-800 gap-2"
      >
        <span className="text-emerald-400 font-mono text-xs select-none">&gt;</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type /help, /status, /pricing or /order..."
          className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder-neutral-600"
        />
        <button
          type="submit"
          className="p-1.5 text-neutral-400 hover:text-emerald-400 transition-colors cursor-pointer"
          title="Send command"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
