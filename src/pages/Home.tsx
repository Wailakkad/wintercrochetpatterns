import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PATTERNS } from '../data/patterns';
import { FAQ_ITEMS } from '../data/posts';
import { PatternCard } from '../components/PatternCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { AdSlot } from '../components/AdSlot';
import { SEO } from '../components/SEO';
import { SheepIcon, YarnBallIcon, SnowflakeIcon, StarIcon } from '../components/icons';
import {
  Sparkles,
  Download,
  BookOpen,
  Heart,
  CheckCircle,
  ArrowRight,
  Printer,
  Compass,
  Layers,
  Smile,
  Mail
} from 'lucide-react';

interface HomeProps {
  onOpenStarterPack: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenStarterPack }) => {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState('');
  const [subscribedToast, setSubscribedToast] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleLeadMagnetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubscribedToast(true);
    }, 400);
  };

  const collections = [
    { label: 'Crochet Baby Beanies', category: 'Baby Hat' },
    { label: 'Crochet Earwarmers', category: 'Headband' },
    { label: 'Crochet Cardigan Patterns', category: 'Cardigan' },
    { label: 'Crochet Fingerless Gloves', category: 'Gloves' }
  ];

  const testimonials = [
    {
      name: 'Clara Johansson',
      location: 'Stockholm, Sweden',
      role: 'First-time garment maker',
      rating: 5,
      content: 'The Cardigan with Granny Squares was the very first piece of clothing I ever crocheted. The instructions were crystal clear and the printable PDF formatting made it so easy to follow square by square on my sofa!'
    },
    {
      name: 'Hannah Brooks',
      location: 'Portland, Oregon',
      role: 'Weekend crocheter',
      rating: 5,
      content: 'I made three Easy and Cute Baby Beanies in one weekend for holiday gifts! They worked up in under an hour each and the newborn-to-12-month sizing guide was spot-on.'
    },
    {
      name: 'Elena Rostova',
      location: 'Montreal, Canada',
      role: 'Handmade market vendor',
      rating: 5,
      content: 'The Illuin Earwarmer is pure magic — textured, snug, and finished in about an hour. My customers at the winter fair adored them, and having the free PDF to reference was fantastic.'
    }
  ];

  return (
    <div className="relative">
      <SEO
        title="Cozy Free Crochet PDF Patterns for Baby Beanies, Gloves, Cardigans & Earwarmers"
        description="Download free beginner-friendly printable PDF crochet patterns. Size-inclusive baby beanies, fingerless gloves, granny square cardigans, and textured earwarmers."
      />

      {/* =========================================================================
          SECTION 1: HERO
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F9] via-[#FFFDFB] to-[#FFFDFB] pt-12 pb-16 sm:pt-20 sm:pb-24">
        {/* Subtle decorative SVGs */}
        <div className="pointer-events-none absolute -top-12 -left-12 h-64 w-64 rounded-full bg-[#F8D7E5]/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/4 -right-12 h-72 w-72 rounded-full bg-[#E9E2FF]/30 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Small sheep / yarn decorative badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-rose-100 px-4 py-1.5 shadow-xs mb-6">
            <SheepIcon className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
              Handcrafted With Love & Warmth
            </span>
            <YarnBallIcon className="w-4 h-4" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 text-balance max-w-4xl mx-auto leading-tight">
            Winter Crochet Patterns <span className="text-[#7A3E55]">(PDF)</span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto text-balance font-normal leading-relaxed">
            Beginner-friendly, printable + size-inclusive. Cozy PDF patterns for baby beanies, fingerless gloves, granny square cardigans, and earwarmers you will love to make and wear.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/free-patterns"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#7A3E55] px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#582639] hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>Browse Free Patterns</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={onOpenStarterPack}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-rose-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#7A3E55] hover:bg-[#FFF7EF] hover:border-[#7A3E55] transition-all active:scale-95 cursor-pointer shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-[#7A3E55]" />
              <span>Get the Free Starter Pack</span>
            </button>
          </div>

          {/* Micro trust cues */}
          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-emerald-600" />
              Instant PDF Download
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Printer className="w-3.5 h-3.5 text-emerald-600" />
              Printer & Ink-Saver Friendly
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              100% Free
            </span>
          </div>
        </div>
      </section>

      {/* Ad slot between hero and props */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AdSlot id="home-top-leaderboard" format="horizontal" />
      </div>

      {/* =========================================================================
          SECTION 2: QUICK VALUE PROPS (3 CARDS)
          ========================================================================= */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="rounded-2xl border border-rose-100 bg-[#FFFDFB] p-6 sm:p-8 transition-transform hover:-translate-y-1 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8D7E5]/70 text-[#7A3E55] mb-5">
                <Printer className="w-6 h-6" />
              </div>
              <h2 className="font-display text-xl font-bold text-slate-900">
                Printable PDFs
              </h2>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                Clean, beautifully formatted A4 and US Letter PDF guides. High-contrast typography and printer-friendly ink-saver layouts you can annotate anywhere without screens.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-rose-100 bg-[#FFFDFB] p-6 sm:p-8 transition-transform hover:-translate-y-1 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E9E2FF]/70 text-[#7A3E55] mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="font-display text-xl font-bold text-slate-900">
                Beginner-Friendly Steps
              </h2>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                Zero complicated crown math or confusing abbreviations. Every guide includes stitch tutorials, row-by-row checkpoints, and video-friendly pointers.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-rose-100 bg-[#FFFDFB] p-6 sm:p-8 transition-transform hover:-translate-y-1 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DFF7EF]/70 text-[#7A3E55] mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h2 className="font-display text-xl font-bold text-slate-900">
                Cozy Winter Wearables
              </h2>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                Modern, everyday winter garments and accessories designed for genuine warmth, elastic drape, and inclusive sizing from child sizes up to adult 4XL.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FEATURED FREE PATTERNS (4 CARDS)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#FFF7EF]/40 border-y border-rose-100/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
                Seasonal Favorites
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Featured Free Patterns
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-xl">
                Our complete collection of cold-weather essentials. Download the PDF or read the step-by-step tutorial online.
              </p>
            </div>
            <Link
              to="/free-patterns"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#7A3E55] hover:underline"
            >
              <span>Explore all patterns</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PATTERNS.map((pattern) => (
              <PatternCard key={pattern.slug} pattern={pattern} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HOW IT WORKS (3 STEPS)
          ========================================================================= */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
              Simple & Straightforward
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              How It Works
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              From choosing your yarn to slipping into your finished winter piece in three easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-rose-100 shadow-xs">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8D7E5] text-[#7A3E55] font-display text-xl font-bold mb-4">
                01
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Pick a Pattern
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Browse our collection of baby beanies, gloves, cardigans, and earwarmers. Check the difficulty, yarn weight, and time estimate that fits your schedule.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-rose-100 shadow-xs">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9E2FF] text-[#7A3E55] font-display text-xl font-bold mb-4">
                02
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Download PDF
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Click the free download button for an instant printable PDF. No paywalls, no forced memberships, and no clutter.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-rose-100 shadow-xs">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DFF7EF] text-[#7A3E55] font-display text-xl font-bold mb-4">
                03
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Start Crocheting
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Grab your hook and cozy winter yarn. Follow the row-by-row directions or pair with our in-depth blog tutorials for tips along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: SEASONAL COLLECTIONS STRIP
          ========================================================================= */}
      <section className="py-10 bg-[#FFF5F9] border-y border-rose-100/70">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
                Quick Discovery
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                Seasonal Collections
              </h2>
            </div>

            {/* Interactive category buttons/tabs */}
            <div className="flex flex-wrap items-center gap-2.5">
              {collections.map((col) => (
                <button
                  key={col.label}
                  onClick={() => navigate(`/free-patterns?category=${col.category}`)}
                  className="rounded-xl border border-rose-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-2xs hover:border-[#7A3E55] hover:text-[#7A3E55] hover:bg-[#FFF7EF] transition-all cursor-pointer whitespace-nowrap active:scale-95"
                >
                  {col.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page Ad Slot */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AdSlot id="home-mid-content" format="in-content" />
      </div>

      {/* =========================================================================
          SECTION 6: EMAIL / LEAD MAGNET CTA
          ========================================================================= */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-rose-200 bg-gradient-to-br from-[#FFF7EF] via-[#FFF5F9] to-[#F8D7E5]/40 p-8 sm:p-12 shadow-sm">
            {/* Cute decor sheep/yarn */}
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-36 w-36 opacity-30 text-[#7A3E55]">
              <SheepIcon className="w-full h-full" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
                Exclusive Digital Gift
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Free Winter Starter Pack
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Join our cozy newsletter for the instant 4-pattern bundle PDF, plus yarn substitution charts, size calculation worksheets, and monthly new stitch tutorials.
              </p>

              {!subscribedToast ? (
                <form onSubmit={handleLeadMagnetSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:border-[#7A3E55] focus:outline-none focus:ring-2 focus:ring-[#F8D7E5]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-xl bg-[#7A3E55] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#582639] transition-all active:scale-95 disabled:opacity-50 cursor-pointer whitespace-nowrap"
                  >
                    {submitting ? 'Subscribing...' : 'Get the Starter Pack'}
                  </button>
                </form>
              ) : (
                <div className="mt-6 rounded-2xl bg-white p-5 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">Check your inbox (demo)</p>
                      <p className="text-xs text-slate-500">We prepared your free Winter Starter Pack!</p>
                    </div>
                  </div>
                  <a
                    href="/pdfs/winter-crochet-starter-pack.pdf"
                    download="winter-crochet-starter-pack.pdf"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#7A3E55] px-4 py-2 text-xs font-semibold text-white hover:bg-[#582639] transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF Now</span>
                  </a>
                </div>
              )}

              <p className="mt-3 text-xs text-slate-500">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: TESTIMONIALS (3 BELIEVABLE REVIEWS)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FFFDFB]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
              Real Maker Stories
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Loved by Crocheters Worldwide
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Thousands of crafters have completed their first winter projects with our free guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-2xl border border-rose-100 bg-white p-6 shadow-xs"
              >
                {/* 5 Stars SVG */}
                <div className="flex items-center gap-1 mb-4" aria-label="5 stars rating">
                  {[...Array(t.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed flex-1 italic">
                  "{t.content}"
                </p>

                <div className="mt-5 pt-4 border-t border-rose-50 flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-sm font-bold text-slate-900">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                  <span className="text-xs text-slate-400">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FAQ (ACCORDION - AT LEAST 5)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FFF7EF]/50 border-t border-rose-100/70">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
              Got Questions?
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Everything you need to know about downloading our free PDFs, printing, and yarn choices.
            </p>
          </div>

          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>
    </div>
  );
};
