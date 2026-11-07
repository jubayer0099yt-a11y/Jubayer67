import { useState } from 'react';
import { Server, Terminal, Code2, Globe, Shield, Sparkles } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackType?: 'workstation' | 'server' | 'website' | 'discord' | 'avatar';
  aspectClassName?: string;
}

export function SafeImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackType = 'server',
  aspectClassName = ''
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getFallbackIcon = () => {
    switch (fallbackType) {
      case 'workstation':
        return <Terminal className="w-8 h-8 text-emerald-400" />;
      case 'server':
        return <Server className="w-8 h-8 text-emerald-400" />;
      case 'website':
        return <Globe className="w-8 h-8 text-emerald-400" />;
      case 'discord':
        return <Shield className="w-8 h-8 text-emerald-400" />;
      case 'avatar':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-8 h-8 text-emerald-400" />;
    }
  };

  const getFallbackLabel = () => {
    switch (fallbackType) {
      case 'workstation':
        return 'JUBAYER Workstation & Terminal';
      case 'server':
        return 'Game Server Architecture';
      case 'website':
        return 'Custom Website & Portal';
      case 'discord':
        return 'Discord Bot & Community System';
      case 'avatar':
        return 'JB';
      default:
        return 'Engineering Specs';
    }
  };

  if (hasError) {
    if (fallbackType === 'avatar') {
      return (
        <div className={`flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900 text-emerald-400 font-bold border border-neutral-700 ${className}`}>
          {getFallbackIcon()}
        </div>
      );
    }

    return (
      <div className={`relative w-full h-full flex flex-col items-center justify-center bg-neutral-950 p-6 overflow-hidden ${aspectClassName}`}>
        {/* Ambient Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-3">
          <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-md">
            {getFallbackIcon()}
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase">
              {getFallbackLabel()}
            </div>
            <div className="text-[11px] text-neutral-400 mt-0.5">
              High-Performance Architecture
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${aspectClassName}`}>
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-90'}`}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
