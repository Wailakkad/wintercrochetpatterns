import React from 'react';

/**
 * AdSlot Component
 * 
 * Future Monetization Integration:
 * To activate real programmatic advertising (e.g. Google AdSense, Mediavine, Raptive, Ezoic):
 * 1. Replace the inner placeholder with your ad script tag or window.adsbygoogle push call.
 * 2. Ensure your ad network client ID and ad slot units match the `id` prop passed here.
 * 3. The container maintains stable CLS (Cumulative Layout Shift) dimensions matching standard IAB sizes:
 *    - 'banner' / 'leaderboard': 728x90 (desktop) / 320x50 (mobile)
 *    - 'rectangle': 300x250 (medium rectangle)
 *    - 'in-content': fluid responsive width, min-height 120px to 250px
 */

interface AdSlotProps {
  id: string;
  format?: 'horizontal' | 'rectangle' | 'in-content';
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({
  id,
  format = 'horizontal',
  className = ''
}) => {
  const formatStyles = {
    horizontal: 'min-h-[90px] w-full max-w-4xl py-3 px-4',
    rectangle: 'min-h-[250px] w-full max-w-[300px] p-4',
    'in-content': 'min-h-[140px] w-full py-4 px-6'
  };

  return (
    <aside
      aria-label={`Advertisement Slot ${id}`}
      className={`my-8 mx-auto flex flex-col items-center justify-center rounded-xl border border-dashed border-rose-200/80 bg-[#FFF7EF]/60 text-center transition-colors hover:border-rose-300 ${formatStyles[format]} ${className}`}
    >
      <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-rose-800/60">
        <span>Advertisement</span>
        <span aria-hidden="true">·</span>
        <span>Ad Slot: {id}</span>
      </div>
      <p className="mt-1 text-xs text-rose-900/40">
        Monetization slot reserved for display ad networks (728×90 / 300×250 responsive)
      </p>
    </aside>
  );
};
