import React from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { AdSlot } from '../components/AdSlot';
import { SEO } from '../components/SEO';
import { ShieldCheck, Zap, Ruler, FileDown } from 'lucide-react';

export const Store: React.FC = () => {
  return (
    <div className="py-10 sm:py-14">
      <SEO
        title="Store — Premium Crochet Pattern PDFs"
        description="Shop premium beginner-friendly crochet pattern PDFs: an upcycled denim sweater jacket with granny flower sleeves, a size-inclusive top-down pullover (XS–5XL), and a Flower Power granny poncho. Instant digital download, secure Payhip checkout."
        ogImage={PRODUCTS[0].image}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
            Premium Pattern Shop
          </span>
          <h1 className="font-display mt-2 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Crochet Pattern Shop
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Step-by-step, printer-friendly PDF patterns with sizing guides, fit checkpoints, and
            finish checklists. Buy once, download instantly, crochet tonight.
          </p>
        </div>

        {/* Trust strip */}
        <div className="mb-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {[
            { icon: Zap, label: 'Instant Download', sub: 'PDF right after checkout' },
            { icon: ShieldCheck, label: 'Secure Checkout', sub: 'Payments handled by Payhip' },
            { icon: FileDown, label: 'Print-Ready PDF', sub: 'Clean US terms layout' },
            { icon: Ruler, label: 'Size-Inclusive', sub: 'XS–5XL fit guidance' }
          ].map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-start gap-2.5 rounded-2xl border border-rose-100 bg-white p-3.5 sm:p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F8D7E5]/60 text-[#7A3E55]">
                <Icon className="w-4 h-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold text-slate-800">{label}</span>
                <span className="block text-[11px] leading-snug text-slate-500">{sub}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Ad Slot Above Grid */}
        <AdSlot id="store-catalog-top" format="horizontal" />

        {/* Results line */}
        <div className="mb-6 mt-8 flex items-center justify-between text-xs text-slate-500">
          <span>
            Showing all {PRODUCTS.length} premium patterns
          </span>
          <span className="font-medium text-emerald-700">Instant digital delivery on every order</span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* Ad Slot Below Grid */}
        <div className="mt-10">
          <AdSlot id="store-catalog-bottom" format="horizontal" />
        </div>

        {/* How buying works */}
        <div className="mt-14 rounded-3xl border border-rose-100 bg-[#FFF7EF]/50 p-6 sm:p-8">
          <h2 className="font-display text-center text-xl font-bold text-slate-900 sm:text-2xl">
            How Ordering Works
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                step: '1',
                title: 'Pick your pattern',
                body: 'Open a product page and review the full details, sizing, and what’s inside the PDF.'
              },
              {
                step: '2',
                title: 'Checkout on Payhip',
                body: 'You’re taken to Payhip’s secure checkout to pay with your preferred method.'
              },
              {
                step: '3',
                title: 'Download instantly',
                body: 'The PDF is available for immediate download — start crocheting the same day.'
              }
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-rose-100 bg-white p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7A3E55] font-display text-sm font-bold text-white">
                  {item.step}
                </span>
                <h3 className="font-display mt-3 text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-slate-500">
            All products are digital PDF patterns — no physical items are shipped.
          </p>
        </div>
      </div>
    </div>
  );
};
