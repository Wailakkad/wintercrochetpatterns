import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { AdSlot } from '../components/AdSlot';
import { BONNET_UPSELL_PERKS, getProduct } from '../data/products';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle,
  ChevronRight,
  Clock,
  Download,
  Layers,
  Palette,
  Printer,
  ShieldCheck,
  Sparkles,
  Timer
} from 'lucide-react';

const FREE_PDF_URL = '/pdfs/free-granny-square-sampler-pattern.pdf';
const FREE_PDF_FILENAME = 'Free_Granny_Square_Sampler_Pattern.pdf';
const BONNET = getProduct('granny-square-baby-bonnet-pattern')!;

const WHATS_INSIDE = [
  {
    icon: Sparkles,
    title: 'Boutique-Grade Instructions',
    body: 'Crystal-clear, step-by-step guidance designed by professional pattern writers with zero fluff or broken links.'
  },
  {
    icon: Palette,
    title: 'The Signature 4-Color Palette',
    body: 'Learn how to flawlessly transition through our custom yarn color sequence: Navy, Pool Green, Terracotta, and Cream.'
  },
  {
    icon: Printer,
    title: 'Printer-Friendly A4 Format',
    body: 'Clean margins and minimalist typography optimized for smooth digital viewing or home printing.'
  },
  {
    icon: Layers,
    title: 'Complete Mini-Project',
    body: 'A fully standalone granny square you can finish in an afternoon and use as a stylish coaster or motif component.'
  }
] as const;

export const GrannySquareSampler: React.FC = () => {
  const [downloadToast, setDownloadToast] = useState(false);

  const handleDownloadClick = () => {
    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 4500);
  };

  const downloadButton = (
    <a
      href={FREE_PDF_URL}
      download={FREE_PDF_FILENAME}
      onClick={handleDownloadClick}
      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#7A3E55] px-7 py-4 text-sm font-semibold text-white shadow-md hover:bg-[#582639] hover:shadow-lg transition-all active:scale-95 cursor-pointer"
    >
      <Download className="w-4 h-4" />
      <span>Download My Free Pattern Now</span>
    </a>
  );

  return (
    <div className="pb-28 sm:pb-0">
      <SEO
        title="Free Granny Square Sampler Pattern (PDF) — Baby Bonnet Preview"
        description="Get the free granny square sampler PDF: the signature 4-color motif behind our trending baby bonnet. Boutique-grade US-terms instructions in printer-friendly A4 format—instant download, no hidden fees."
        ogImage={BONNET.showcase?.[0]?.images?.[0] ?? BONNET.image}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="pt-8 mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-[#7A3E55] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/free-patterns" className="hover:text-[#7A3E55] transition-colors">
            Free Patterns
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800 truncate">Granny Square Sampler</span>
        </nav>

        {/* ============================ 1. HERO ============================ */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F8D7E5]/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
              <Sparkles className="w-3.5 h-3.5" />
              Free Exclusive Preview Pattern
            </span>

            <h1 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 text-balance">
              Master the Art of Heirloom Crochet: Get Your Free Granny Square Sampler Pattern!
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Jumpstart your next project with this exclusive, boutique-grade preview pattern. Learn the signature
              multi-color motif behind our trending baby bonnet design—completely free.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
              {downloadButton}
              <Link
                to="/free-patterns"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-rose-200 bg-white px-5 py-4 text-sm font-semibold text-[#7A3E55] hover:bg-[#FFF7EF] hover:border-[#7A3E55] transition-all active:scale-95"
              >
                <span>Browse All Free Patterns</span>
              </Link>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Instant PDF download. No hidden fees. Printer-friendly A4 format.
            </p>

            {downloadToast && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-800 animate-in fade-in">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Your free PDF download has started! Enjoy your crochet session.</span>
              </div>
            )}

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-600">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                100% free—no email required
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                US crochet terms
              </li>
              <li className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                Beginner friendly · 1–2 hours
              </li>
            </ul>
          </div>

          {/* Hero visual: finished motif flat lay + floating proof chips */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-rose-100 bg-[#FFF7EF] shadow-sm">
              <img
                src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1793278974/Showcase_1_The_Finished_Look_flat_lay_with_tools.jpg"
                alt="Multi-color granny square crochet project flat lay with crochet hook and tools"
                className="w-full h-auto aspect-4/3 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="absolute -top-3 left-4 rounded-xl bg-white border border-rose-100 px-3.5 py-2 shadow-md">
              <span className="block font-display text-sm font-bold text-[#7A3E55]">100% Free PDF</span>
              <span className="block text-[11px] text-slate-500">Instant download</span>
            </div>

            <div className="absolute -bottom-3 right-4 rounded-xl bg-white border border-rose-100 px-3.5 py-2 shadow-md">
              <span className="block font-display text-sm font-bold text-[#7A3E55]">A4 · Printer-friendly</span>
              <span className="block text-[11px] text-slate-500">Clean margins, no fluff</span>
            </div>
          </div>
        </section>

        {/* ==================== 2. VISUAL / MOCKUP ==================== */}
        <section className="mt-16 sm:mt-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">A Look Inside</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Boutique Layout, Ready for Your Hook’s Side
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              A high-end editorial pattern page you can read on any screen—or print at home in crisp A4.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-rose-100 bg-[#FFF7EF] shadow-sm">
            <img
              src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1793278970/Left_tile_Written_Steps_Stitch_Charts_printed_pages_preview.jpg"
              alt="Printed crochet pattern pages with written steps and stitch charts"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 border border-rose-100 px-4 py-2.5 shadow-sm backdrop-blur-xs">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A3E55]">
                Free guide preview
              </span>
              <span className="block text-xs text-slate-600">Step-by-step instructions · A4 format</span>
            </div>
          </div>
        </section>

        {/* ==================== 3. WHAT'S INSIDE ==================== */}
        <section className="mt-16 sm:mt-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
              What’s Inside the Free Guide?
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Everything You Need to Crochet the Signature Square
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHATS_INSIDE.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-rose-100 bg-white p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8D7E5]/50 text-[#7A3E55]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display mt-4 text-sm font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 px-5 py-4">
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm font-semibold text-emerald-900">
                Your download starts instantly—no email, no fees, no waiting.
              </p>
              <p className="text-xs text-emerald-800/80 mt-0.5">
                Save the PDF, print it, and crochet the square today.
              </p>
            </div>
            <a
              href={FREE_PDF_URL}
              download={FREE_PDF_FILENAME}
              onClick={handleDownloadClick}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7A3E55] px-5 py-3 text-xs font-semibold text-white shadow-sm hover:bg-[#582639] transition-all active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              Download My Free Pattern Now
            </a>
          </div>
        </section>

        {/* ==================== 4. TRANSITION / UPSELL ==================== */}
        <section className="mt-16 sm:mt-20">
          <div className="overflow-hidden rounded-3xl border border-rose-200 bg-gradient-to-b from-[#FFF7EF] to-white shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              {/* Copy + checklist + CTA */}
              <div className="p-6 sm:p-9">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
                  Level Up Your Project
                </span>
                <h2 className="font-display mt-2 text-2xl sm:text-3xl font-bold leading-tight text-slate-900 text-balance">
                  Love This Square? Turn It Into a Breathtaking Baby Bonnet!
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  This free guide teaches you the core building block. But why stop there? Take your skills to the next
                  level with our complete, premium Multi-Color Baby Bonnet PDF Guide.
                </p>

                <div className="mt-6 rounded-2xl border border-rose-100 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#7A3E55] mb-3">
                    What You Get in the Full Paid Version:
                  </p>
                  <ul className="space-y-2.5">
                    {BONNET_UPSELL_PERKS.map((perk) => (
                      <li key={perk} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center gap-4 rounded-2xl bg-[#7A3E55] px-5 py-4">
                  <span className="font-display text-3xl font-bold text-white">${BONNET.price.toFixed(2)}</span>
                  <span className="text-xs leading-snug text-rose-100">
                    One-time payment · Instant PDF download
                    <br />
                    Less than a coffee run—you keep it forever.
                  </span>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <Link
                    to={`/store/${BONNET.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#7A3E55] px-6 py-4 text-sm font-semibold text-white shadow-md hover:bg-[#582639] hover:shadow-lg transition-all active:scale-95 flex-1"
                  >
                    <span>Upgrade to the Full Premium Bonnet Pattern</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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

                <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                  You’ve already learned the hardest part—the square. The full guide finishes the bonnet with sizing,
                  edging, ties, and stitch charts, so your first bonnet looks like it came from a boutique.
                </p>
              </div>

              {/* Product visual */}
              <div className="relative min-h-[320px] bg-[#FFF7EF]">
                <img
                  src={BONNET.image}
                  alt={BONNET.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 border border-rose-100 p-4 shadow-md backdrop-blur-xs">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7A3E55]">
                    {BONNET.category} · Premium PDF
                  </span>
                  <p className="font-display mt-0.5 text-sm font-bold leading-snug text-slate-900 line-clamp-2">
                    {BONNET.title}
                  </p>
                  <Link
                    to={`/store/${BONNET.slug}`}
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#7A3E55] hover:underline"
                  >
                    See the full pattern details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final recap CTA */}
        <section className="mt-12 rounded-3xl border border-rose-100 bg-white p-6 sm:p-8 text-center shadow-xs">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
            Ready to crochet your signature granny square?
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
            Grab the free sampler PDF now—it takes one click, and your next heirloom project starts today.
          </p>
          <div className="mt-5 flex flex-col items-center gap-3">
            {downloadButton}
            <p className="text-[11px] text-slate-500">
              Instant PDF download · No hidden fees · Printer-friendly A4 format
            </p>
          </div>
        </section>

        {/* Ad */}
        <AdSlot id="granny-sampler-bottom" format="horizontal" />

        {/* ==================== 5. FOOTER TRUST BADGE ==================== */}
        <div className="pb-10 flex flex-col items-center gap-2 text-center">
          <BadgeCheck className="w-6 h-6 text-[#7A3E55]" />
          <p className="text-xs font-medium text-slate-500">
            Crafted with precision for modern makers. Independent indie design standards.
          </p>
          <Link to="/free-patterns" className="text-xs font-semibold text-[#7A3E55] hover:underline">
            Explore more free patterns →
          </Link>
        </div>
      </div>

      {/* Sticky mobile download bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-rose-100 bg-[#FFFDFB]/95 px-4 py-3 backdrop-blur-md sm:hidden">
        <a
          href={FREE_PDF_URL}
          download={FREE_PDF_FILENAME}
          onClick={handleDownloadClick}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#7A3E55] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#582639] active:scale-95"
        >
          <Download className="w-4 h-4" />
          Download Free Pattern PDF
        </a>
      </div>
    </div>
  );
};
