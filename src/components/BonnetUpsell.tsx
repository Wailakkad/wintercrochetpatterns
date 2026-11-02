import React from 'react';
import { Link } from 'react-router-dom';
import { BONNET_UPSELL_PERKS, getProduct } from '../data/products';
import { ArrowRight, BadgeCheck, CheckCircle, ShieldCheck, Timer } from 'lucide-react';

const BONNET = getProduct('granny-square-baby-bonnet-pattern')!;

export type BonnetUpsellVariant = 'cardigan' | 'beanie';

/**
 * Lead-in copy per host free pattern, so the upsell reads like a natural
 * next step from the page the visitor is already on.
 */
const VARIANT_COPY: Record<
  BonnetUpsellVariant,
  { eyebrow: string; heading: string; body: string }
> = {
  cardigan: {
    eyebrow: 'You Already Love Granny Squares',
    heading: 'Turn Your Granny Square Skills Into a Breathtaking Baby Bonnet',
    body: 'The same multi-color square technique that makes this cardigan a statement piece is the one behind our trending baby bonnet. Take the skills you already have and stitch a keepsake baby gift in an afternoon.'
  },
  beanie: {
    eyebrow: 'Making Something for Baby?',
    heading: 'Your Next Baby Project: The Granny Square Baby Bonnet',
    body: 'Loved this quick, snug beanie? Level up to the bonnet version—the same easy baby-hat energy with a timeless granny-square twist, full edging steps, and neat braided ties.'
  }
};

interface BonnetUpsellProps {
  variant: BonnetUpsellVariant;
  /**
   * 'banner'  -> slim above-the-fold strip (product name, price + CTA visible
   *              immediately on page entry, no scrolling needed).
   * 'detailed'-> full value-stack block with image, perks and trust row.
   */
  layout?: 'banner' | 'detailed';
}

/**
 * Free -> paid funnel block. Promotes the exact paid product
 * "Crochet Granny Square Baby Bonnet Pattern (PDF) – Easy Baby Hat
 * Crochet Pattern (US Terms)" inside free pattern landing pages.
 */
export const BonnetUpsell: React.FC<BonnetUpsellProps> = ({ variant, layout = 'detailed' }) => {
  const copy = VARIANT_COPY[variant];

  if (layout === 'banner') {
    return (
      <section
        aria-label="Premium pattern recommendation"
        className="overflow-hidden rounded-2xl border border-rose-200 bg-gradient-to-r from-[#FFF7EF] via-white to-[#FFF7EF] shadow-sm"
      >
        <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:gap-5 sm:p-5">
          <img
            src={BONNET.image}
            alt=""
            aria-hidden="true"
            className="h-16 w-16 shrink-0 rounded-xl border border-rose-100 object-cover sm:h-20 sm:w-20"
            referrerPolicy="no-referrer"
          />

          <div className="min-w-0 flex-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7A3E55]">
              {copy.eyebrow}
            </span>
            <p className="font-display mt-0.5 text-sm font-bold leading-snug text-slate-900 line-clamp-2">
              {BONNET.title}
            </p>
            <p className="mt-1 text-xs leading-snug text-slate-600 line-clamp-2">{copy.body}</p>
          </div>

          <div className="flex shrink-0 flex-col items-stretch gap-2 sm:items-end">
            <div className="sm:text-right">
              <span className="font-display block text-lg font-bold text-[#7A3E55]">
                ${BONNET.price.toFixed(2)}
              </span>
              <span className="block text-[11px] text-slate-500">Instant PDF · US terms</span>
            </div>
            <Link
              to={`/store/${BONNET.slug}`}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#7A3E55] px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#582639] transition-all active:scale-95 whitespace-nowrap"
            >
              <span>Get the Full Bonnet Pattern</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-label="Premium pattern recommendation"
      className="overflow-hidden rounded-3xl border border-rose-200 bg-gradient-to-b from-[#FFF7EF] to-white shadow-sm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Product visual + price badge */}
        <div className="relative min-h-[260px] lg:col-span-4 bg-[#FFF7EF]">
          <img
            src={BONNET.image}
            alt={BONNET.title}
            className="absolute inset-0 h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 rounded-xl bg-white border border-rose-100 px-3.5 py-2 shadow-md">
            <span className="block font-display text-lg font-bold text-[#7A3E55]">
              ${BONNET.price.toFixed(2)}
            </span>
            <span className="block text-[11px] text-slate-500">Instant PDF download</span>
          </div>
        </div>

        {/* Copy + value stack + CTA */}
        <div className="p-6 sm:p-8 lg:col-span-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
            {copy.eyebrow}
          </span>
          <h2 className="font-display mt-2 text-xl sm:text-2xl font-bold leading-snug text-slate-900 text-balance">
            {copy.heading}
          </h2>
          <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{copy.body}</p>

          {/* Exact paid product name */}
          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#7A3E55]">
            The Full Premium Pattern
          </p>
          <p className="font-display mt-1 text-sm sm:text-base font-bold leading-snug text-slate-900">
            {BONNET.title}
          </p>

          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
            {BONNET_UPSELL_PERKS.map((perk) => (
              <li key={perk} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
            <Link
              to={`/store/${BONNET.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#7A3E55] px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#582639] hover:shadow-lg transition-all active:scale-95"
            >
              <span>Upgrade to the Full Premium Bonnet Pattern</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-xs font-semibold text-slate-500">
              ${BONNET.price.toFixed(2)} · one-time payment
            </span>
          </div>

          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] font-medium text-slate-500">
            <li className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Secure checkout
            </li>
            <li className="flex items-center gap-1">
              <Timer className="w-3.5 h-3.5 text-emerald-600" />
              Instant access after purchase
            </li>
            <li className="flex items-center gap-1">
              <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
              US terms · Easy / Confident Beginner
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
