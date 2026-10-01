import React from 'react';
import { SheepIcon, YarnBallIcon } from './icons';

interface TipCalloutProps {
  title: string;
  body: string;
  tone?: 'rose' | 'mint';
}

/**
 * Branded in-article tip box (e.g. "Fit Tip", "Thumb Tip").
 */
export const TipCallout: React.FC<TipCalloutProps> = ({ title, body, tone = 'rose' }) => {
  const isMint = tone === 'mint';
  const shell = isMint ? 'border-[#DFF7EF] bg-[#DFF7EF]/60' : 'border-rose-200 bg-[#FFF5F9]';

  return (
    <aside aria-label={title} className={`rounded-2xl border p-5 shadow-xs ${shell}`}>
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-rose-100 bg-white text-[#7A3E55]">
          {isMint ? <YarnBallIcon className="w-5 h-5" /> : <SheepIcon className="w-5 h-5" />}
        </span>
        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#7A3E55]">
            {title}
          </h3>
          <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">{body}</p>
        </div>
      </div>
    </aside>
  );
};
