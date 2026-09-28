import React from 'react';
import { SEO } from '../components/SEO';
import { AdSlot } from '../components/AdSlot';

export const Terms: React.FC = () => {
  return (
    <div className="py-10 sm:py-16">
      <SEO
        title="Terms of Use & Pattern License — Winter Crochet Patterns"
        description="Terms of use and crochet pattern license conditions for Winter Crochet Patterns."
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-rose-100 bg-white p-8 sm:p-12 shadow-xs">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
            Pattern Licensing & Usage
          </span>
          <h1 className="font-display text-3xl font-bold text-slate-900 mt-1 mb-6">
            Terms of Use
          </h1>
          <p className="text-xs text-slate-500 mb-8">
            Last updated: October 2026
          </p>

          <div className="prose prose-slate max-w-none text-sm text-slate-600 space-y-5 leading-relaxed">
            <h2 className="font-display text-lg font-bold text-slate-900 pt-2">
              1. Digital Pattern License
            </h2>
            <p>
              All crochet patterns, written tutorials, photography, illustrations, and downloadable PDF files provided on Winter Crochet Patterns are protected by copyright. By downloading our PDF patterns, you are granted a non-exclusive, non-transferable license to use the patterns for personal and non-commercial digital reproduction.
            </p>

            <h2 className="font-display text-lg font-bold text-slate-900 pt-2">
              2. Selling Finished Physical Items
            </h2>
            <p>
              We celebrate indie makers! You are explicitly permitted and encouraged to sell physical handmade garments, hats, mittens, and headbands that you personally crochet using our patterns at craft markets, holiday fairs, and in small-scale online shops.
            </p>
            <p>
              We kindly ask (though do not require) that you credit "Winter Crochet Patterns (wintercrochetpatterns.com)" as the pattern designer when displaying your handmade items.
            </p>

            <h2 className="font-display text-lg font-bold text-slate-900 pt-2">
              3. Restrictions on Digital Files
            </h2>
            <p>
              You may not:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Resell, redistribute, license, or host our downloadable PDF files on any other server or marketplace (e.g., Etsy, Ravelry, LoveCrafts).</li>
              <li>Claim the written instructions or photographs as your own design or work.</li>
              <li>Translate and re-publish our patterns in full without prior written consent.</li>
            </ul>

            <h2 className="font-display text-lg font-bold text-slate-900 pt-2">
              4. Disclaimer of Warranties
            </h2>
            <p>
              While we test all our patterns for accuracy, stitch counts, and gauge consistency, crafting results can vary based on individual tension, hook brands, and yarn substitutions. All patterns are provided "as-is" without warranty.
            </p>

            <h2 className="font-display text-lg font-bold text-slate-900 pt-2">
              5. Contact
            </h2>
            <p>
              For licensing inquiries or questions, reach out to <a href="mailto:licensing@wintercrochetpatterns.com" className="text-[#7A3E55] underline">licensing@wintercrochetpatterns.com</a>.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <AdSlot id="terms-bottom" format="horizontal" />
        </div>
      </div>
    </div>
  );
};
