import React from 'react';
import { Link } from 'react-router-dom';
import { AdSlot } from '../components/AdSlot';
import { SEO } from '../components/SEO';
import { SheepIcon, YarnBallIcon, SnowflakeIcon } from '../components/icons';
import { Heart, Sparkles, Printer, CheckCircle, ArrowRight, Mail } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="py-10 sm:py-16">
      <SEO
        title="About Us — Winter Crochet Patterns"
        description="Learn about our cozy indie crochet studio, our size-inclusive pattern philosophy, and why all our cold-weather PDF guides are 100% free."
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF7EF] border border-rose-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#7A3E55] mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Our Mission</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Cozy Patterns for Every Maker
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            We believe warmth, creativity, and the joy of handmade winter wear should be accessible to everyone, everywhere.
          </p>
        </div>

        {/* Story Section */}
        <div className="rounded-3xl border border-rose-100 bg-white p-8 sm:p-10 shadow-xs space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div className="flex items-center gap-3 pb-4 border-b border-rose-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8D7E5] text-[#7A3E55]">
              <SheepIcon className="w-8 h-8" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-slate-900">
                The Story Behind Winter Crochet Patterns
              </h2>
              <p className="text-xs text-slate-500">Born on snowy winter mornings with hot tea and cozy wool</p>
            </div>
          </div>

          <p>
            Winter Crochet Patterns started with a simple observation: many online crochet patterns are either locked behind steep subscription paywalls or buried underneath cluttered, slow-loading websites that are impossible to read while holding yarn and a hook.
          </p>

          <p>
            We set out to create a peaceful corner on the web dedicated exclusively to cold-weather accessories and garments. Every single pattern in our library is engineered from the ground up to be:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="rounded-2xl bg-[#FFF7EF] p-5 border border-rose-100">
              <span className="font-display text-sm font-bold text-[#7A3E55] block mb-1">
                1. 100% Free Access
              </span>
              <p className="text-xs text-slate-600">
                No memberships, hidden credit card forms, or expiring tokens. Click and download your PDF instantly.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FFF5F9] p-5 border border-rose-100">
              <span className="font-display text-sm font-bold text-[#7A3E55] block mb-1">
                2. Printer Friendly
              </span>
              <p className="text-xs text-slate-600">
                Designed with ink-saver black-and-white layouts, high-contrast fonts, and clear checklist checkboxes.
              </p>
            </div>

            <div className="rounded-2xl bg-[#DFF7EF]/60 p-5 border border-emerald-100">
              <span className="font-display text-sm font-bold text-emerald-900 block mb-1">
                3. Size-Inclusive
              </span>
              <p className="text-xs text-slate-600">
                Garments and wearables written with comprehensive measurements from baby/child through adult 4XL.
              </p>
            </div>
          </div>

          <h3 className="font-display text-xl font-bold text-slate-900 pt-4">
            Commercial Policy for Crafters
          </h3>
          <p>
            Are you a maker who sells at holiday bazaars, local markets, or on Etsy? You have our enthusiastic blessing to sell the finished physical products you create using our patterns. We only ask that you do not redistribute our digital PDF pattern files or claim the written guides as your own work.
          </p>

          <div className="pt-6 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-900">Have a question or pattern suggestion?</p>
              <p className="text-xs text-slate-500">We love hearing from crafters around the world.</p>
            </div>
            <a
              href="mailto:hello@wintercrochetpatterns.com"
              className="inline-flex items-center gap-2 rounded-xl bg-[#7A3E55] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#582639] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Say Hello</span>
            </a>
          </div>
        </div>

        {/* AdSlot */}
        <div className="mt-12">
          <AdSlot id="about-page-bottom" format="horizontal" />
        </div>
      </div>
    </div>
  );
};
