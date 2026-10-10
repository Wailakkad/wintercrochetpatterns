import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PRODUCTS, getProduct } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductShowcaseSection } from '../components/ProductShowcaseSection';
import { AdSlot } from '../components/AdSlot';
import { SEO } from '../components/SEO';
import { FAQAccordion } from '../components/FAQAccordion';
import {
  ChevronRight,
  ShoppingCart,
  ShieldCheck,
  Zap,
  FileDown,
  Ruler,
  CheckCircle2,
  Heart,
  Sparkles,
  Scissors,
  BookOpen,
  Clock,
  Mail
} from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProduct(slug);

  if (!product) {
    return <Navigate to="/store" replace />;
  }

  const related = PRODUCTS.filter((p) => p.slug !== product.slug);
  const buyUrl = product.payhipUrl;

  const faqs = [
    {
      question: 'Is this a physical product?',
      answer:
        'No. Every item in this shop is a digital PDF crochet pattern. Nothing is shipped — after your purchase you get immediate access to download the file(s).'
    },
    {
      question: 'How do I receive my pattern after paying?',
      answer:
        'Checkout is completed securely on Payhip. Right after payment you’ll be given instant access to the PDF download, so you can save it, print it, and start crocheting the same day.'
    },
    {
      question: 'Which crochet terms are the instructions written in?',
      answer:
        'All patterns in this shop are written in English using US crochet terms, with clear abbreviations, materials lists, and step-by-step instructions laid out for easy printing.'
    },
    {
      question: 'What if I need help with the pattern?',
      answer:
        'You’re never on your own — email us anytime at hello@wintercrochetpatterns.com and we’ll help you pick the right size, yarn, or step.'
    }
  ];

  return (
    <div className="py-8 sm:py-12">
      <SEO
        title={product.title}
        description={product.seoDescription}
        ogImage={product.image}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="transition-colors hover:text-[#7A3E55]">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          <Link to="/store" className="transition-colors hover:text-[#7A3E55]">
            Store
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          <span className="truncate font-semibold text-slate-800">{product.category}</span>
        </nav>

        {/* Hero: original-size image + sticky buy box */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: image shown at original size (uncropped) */}
          <div className="overflow-hidden rounded-3xl border border-rose-100 bg-[#FFF7EF] shadow-sm">
            <img
              src={product.image}
              alt={product.title}
              className="block h-auto w-full"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right: buy box */}
          <div className="lg:sticky lg:top-24">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="rounded-lg bg-[#F8D7E5]/70 px-2.5 py-1 uppercase tracking-wider text-[#7A3E55]">
                {product.category}
              </span>
              <span className="rounded-lg bg-[#FFF7EF] px-2.5 py-1 text-[#7A3E55]">
                PDF Pattern
              </span>
              <span className="rounded-lg bg-[#DFF7EF] px-2.5 py-1 text-emerald-800">
                {product.skillLevel.split('(')[0].trim()}
              </span>
            </div>

            <h1 className="font-display mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              {product.title}
            </h1>

            {/* Price */}
            <div className="mt-4 flex items-end gap-3">
              <span className="font-display text-4xl font-bold text-[#7A3E55]">
                ${product.price.toFixed(2)}
              </span>
              <span className="pb-1.5 text-xs font-medium text-slate-500">USD · one-time purchase</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {product.shortDescription}
            </p>

            {/* Primary CTA → Payhip checkout */}
            <div className="mt-6">
              <a
                href={buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#7A3E55] px-6 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#582639] hover:shadow-md active:scale-95"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Buy Now — ${product.price.toFixed(2)}</span>
              </a>
              <p className="mt-2.5 flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-500">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                Secure checkout powered by Payhip · Instant PDF delivery after payment
              </p>
            </div>

            {/* Trust bullets */}
            <ul className="mt-5 grid grid-cols-1 gap-2 rounded-2xl border border-rose-100 bg-[#FFF7EF]/40 p-4 text-xs text-slate-700 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <Zap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7A3E55]" />
                Instant digital download
              </li>
              <li className="flex items-start gap-2">
                <FileDown className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7A3E55]" />
                Printable, clean-layout PDF
              </li>
              <li className="flex items-start gap-2">
                <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7A3E55]" />
                Written in US crochet terms
              </li>
              <li className="flex items-start gap-2">
                <Ruler className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7A3E55]" />
                Size & fit guidance included
              </li>
            </ul>

            {/* Contact reassurance */}
            <p className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-500">
              <Mail className="h-3.5 w-3.5 text-slate-400" />
              Questions before buying? Email{' '}
              <a
                href="mailto:hello@wintercrochetpatterns.com"
                className="font-medium text-[#7A3E55] hover:underline"
              >
                hello@wintercrochetpatterns.com
              </a>
            </p>
          </div>
        </div>

        {/* Mid-content AdSlot */}
        <div className="my-12">
          <AdSlot id={`product-detail-${product.slug}`} format="horizontal" />
        </div>

        {/* What you'll make */}
        <section className="max-w-3xl">
          <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
            What You&rsquo;ll Make
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {product.whatYoullMake.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-2xl border border-rose-100 bg-white p-4"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span className="text-sm leading-relaxed text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Alternating value showcases (model / finished-project shots) */}
        {product.showcase && product.showcase.length > 0 && (
          <div className="mt-14 space-y-14 sm:space-y-16">
            {product.showcase.map((item, i) => (
              <ProductShowcaseSection key={i} showcase={item} />
            ))}
          </div>
        )}

        {/* Why you'll love it */}
        {product.highlights && (
          <section className="mt-12 max-w-3xl">
            <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
              Why You&rsquo;ll Love This Pattern
            </h2>
            <div className="mt-4 rounded-3xl border border-rose-100 bg-gradient-to-br from-[#FFF7EF] to-[#F8D7E5]/25 p-5 sm:p-6">
              <ul className="space-y-3">
                {product.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Heart className="mt-0.5 h-4 w-4 shrink-0 fill-rose-400 text-rose-400" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* What's included */}
        <section className="mt-12 max-w-3xl">
          <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
            {product.includesTitle ?? "What's Included"}
          </h2>
          <div className="mt-4 rounded-3xl border border-rose-100 bg-white p-5 shadow-xs sm:p-6">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {product.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7A3E55]" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-2xl bg-emerald-50 p-3.5 text-xs text-emerald-800">
              <span className="font-semibold">Everything is printable</span> — clean page layout so
              you can keep the PDF at your hook&rsquo;s side, not scroll endlessly on your phone.
            </div>
          </div>
        </section>

        {/* Details: skill, sizing, materials, format */}
        <section className="mt-12">
          <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
            Pattern Details
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Skill level */}
            <div className="rounded-2xl border border-rose-100 bg-white p-5">
              <h3 className="font-display flex items-center gap-2 text-sm font-bold text-slate-900">
                <Sparkles className="h-4 w-4 text-[#7A3E55]" />
                Skill Level
              </h3>
              <p className="mt-2 text-sm text-slate-700">{product.skillLevel}</p>
            </div>

            {/* Sizing */}
            {(product.sizing || product.sizingTable) && (
              <div className="rounded-2xl border border-rose-100 bg-white p-5">
                <h3 className="font-display flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Ruler className="h-4 w-4 text-[#7A3E55]" />
                  Sizing / Fit
                </h3>
                {product.sizing && (
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{product.sizing}</p>
                )}
                {product.sizingTable && (
                  <div className="mt-3 overflow-hidden rounded-xl border border-rose-100">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#FFF7EF] text-[#7A3E55]">
                        <tr>
                          {product.sizingTable.headers.map((h) => (
                            <th key={h} className="px-3 py-2 font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-rose-100 bg-white text-slate-700">
                        {product.sizingTable.rows.map((row, i) => (
                          <tr key={i}>
                            {row.map((cell, j) => (
                              <td key={j} className="px-3 py-2">
                                {j === 0 ? <span className="font-semibold">{cell}</span> : cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Materials */}
            {product.materials && (
              <div className="rounded-2xl border border-rose-100 bg-white p-5">
                <h3 className="font-display flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Scissors className="h-4 w-4 text-[#7A3E55]" />
                  Materials (General)
                </h3>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                  {product.materials.map((mat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 text-[#7A3E55]">•</span>
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Format / download */}
            <div className="rounded-2xl border border-rose-100 bg-[#FFF7EF]/50 p-5">
              <h3 className="font-display flex items-center gap-2 text-sm font-bold text-slate-900">
                <FileDown className="h-4 w-4 text-[#7A3E55]" />
                Format & Delivery
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                {(product.format ?? ['Digital download (PDF)', 'English, US crochet terms']).map(
                  (f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                      <span>{f}</span>
                    </li>
                  )
                )}
              </ul>
              {product.downloadNote && (
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  {product.downloadNote}
                </p>
              )}
              {product.license && (
                <p className="mt-3 rounded-xl bg-white p-3 text-xs leading-relaxed text-slate-600">
                  <span className="font-semibold text-[#7A3E55]">License: </span>
                  {product.license}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* How buying works */}
        <section className="mt-12 rounded-3xl border border-rose-100 bg-[#FFF7EF]/50 p-6 sm:p-8">
          <h2 className="font-display text-center text-xl font-bold text-slate-900 sm:text-2xl">
            Start Crocheting in 3 Simple Steps
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                step: '1',
                title: 'Add to cart on Payhip',
                body: 'Click “Buy Now” and you’ll land on Payhip’s checkout page for this exact pattern.'
              },
              {
                step: '2',
                title: 'Pay securely',
                body: 'Complete payment through Payhip’s trusted, encrypted checkout process.'
              },
              {
                step: '3',
                title: 'Download your PDF',
                body: 'Get immediate access to your pattern file — save it, print it, and begin right away.'
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
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <div className="mx-auto mb-5 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
              Before You Buy
            </span>
            <h2 className="font-display mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-rose-200/70 bg-gradient-to-br from-[#F8D7E5]/70 via-[#FFF7EF] to-[#E9E2FF]/50 p-6 text-center sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
              {product.category} · Instant Access
            </span>
            <h2 className="font-display mx-auto mt-2 max-w-2xl text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
              {product.closingLine ?? 'Ready to start your next cozy project?'}
            </h2>
            <div className="mt-4 flex flex-col items-center gap-3">
              <span className="font-display text-3xl font-bold text-[#7A3E55]">
                ${product.price.toFixed(2)}
                <span className="ml-1.5 font-sans text-xs font-medium text-slate-500">USD</span>
              </span>
              <a
                href={buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#7A3E55] px-8 py-4 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#582639] hover:shadow-lg active:scale-95"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Get This Pattern on Payhip</span>
              </a>
              <p className="flex items-center gap-1.5 text-[11px] text-slate-600">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                Secure Payhip checkout · {product.downloadNote ?? 'Instant digital download, no physical item shipped.'}
              </p>
            </div>
          </div>
        </section>

        {/* Related products */}
        <div className="mt-16 border-t border-rose-100 pt-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
                Keep Exploring
              </span>
              <h2 className="font-display mt-1 text-2xl font-bold text-slate-900">
                You May Also Like
              </h2>
            </div>
            <Link
              to="/store"
              className="text-xs font-semibold text-[#7A3E55] hover:underline"
            >
              View All Patterns →
            </Link>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2">
            {related.map((rel) => (
              <ProductCard key={rel.slug} product={rel} />
            ))}
          </div>
        </div>

        {/* Trust footer strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-2xl border border-rose-100 bg-white px-5 py-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-[#7A3E55]" />
            Instant access after purchase
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            Secure Payhip payment
          </span>
          <span className="flex items-center gap-1.5">
            <FileDown className="h-3.5 w-3.5 text-[#7A3E55]" />
            Digital PDF — nothing to ship
          </span>
        </div>
      </div>
    </div>
  );
};
