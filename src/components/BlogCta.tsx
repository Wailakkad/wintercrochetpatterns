import React from 'react';
import { BlogPostCta } from '../types';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { YarnBallIcon } from './icons';

interface BlogCtaProps {
  cta: BlogPostCta;
}

/**
 * Promotional callout box used inside blog articles.
 * External URLs (e.g. Payhip product links) open in a new tab safely.
 */
export const BlogCta: React.FC<BlogCtaProps> = ({ cta }) => {
  const isExternal = /^https?:\/\//i.test(cta.url);

  return (
    <aside
      aria-label={cta.headline}
      className="relative overflow-hidden rounded-3xl border border-rose-200 bg-gradient-to-br from-[#FFF7EF] via-[#FFF5F9] to-[#F8D7E5]/50 p-6 sm:p-8 shadow-xs"
    >
      {/* Decorative yarn icon */}
      <div className="pointer-events-none absolute -bottom-5 -right-5 h-28 w-28 text-[#7A3E55] opacity-20">
        <YarnBallIcon className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-xl">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#7A3E55]">
          <Sparkles className="w-3 h-3" />
          Printable Pattern
        </span>

        <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-3">
          {cta.headline}
        </h3>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{cta.body}</p>

        <a
          href={cta.url}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#7A3E55] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#582639] transition-all active:scale-95 cursor-pointer"
        >
          <span>{cta.buttonLabel}</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};
