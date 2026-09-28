import React from 'react';
import { SEO } from '../components/SEO';
import { AdSlot } from '../components/AdSlot';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-10 sm:py-16">
      <SEO
        title="Privacy Policy — Winter Crochet Patterns"
        description="Privacy policy and ad network disclosures for Winter Crochet Patterns visitors."
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-rose-100 bg-white p-8 sm:p-12 shadow-xs">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
            Legal & Compliance
          </span>
          <h1 className="font-display text-3xl font-bold text-slate-900 mt-1 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mb-8">
            Last updated: October 2026
          </p>

          <div className="prose prose-slate max-w-none text-sm text-slate-600 space-y-5 leading-relaxed">
            <h2 className="font-display text-lg font-bold text-slate-900 pt-2">
              1. Information We Collect
            </h2>
            <p>
              Winter Crochet Patterns ("we", "us", or "our") respects your privacy. When you browse our website, download free PDF patterns, or subscribe to our newsletter, we may collect minimal information necessary to deliver our services.
            </p>
            <p>
              • <strong>Email Addresses:</strong> When you voluntary subscribe to our Free Winter Starter Pack or newsletter, we store your email address solely to send you requested pattern updates and guides. You can unsubscribe at any time using the link in the footer of every email.
            </p>
            <p>
              • <strong>Usage & Log Data:</strong> Like most web servers, our hosting infrastructure automatically logs standard access information, such as IP addresses, browser types, referring pages, and access timestamps.
            </p>

            <h2 className="font-display text-lg font-bold text-slate-900 pt-2">
              2. Cookies & Advertising Networks
            </h2>
            <p>
              This website is monetized through third-party advertising partners (such as Google AdSense and programmatic ad networks) to keep all our crochet patterns 100% free to download.
            </p>
            <p>
              Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites on the internet. You may opt out of personalized advertising by visiting your browser's cookie settings or <a href="https://www.aboutads.info" target="_blank" rel="noreferrer" className="text-[#7A3E55] underline">aboutads.info</a>.
            </p>

            <h2 className="font-display text-lg font-bold text-slate-900 pt-2">
              3. Analytics
            </h2>
            <p>
              We may utilize privacy-respecting analytics tools to understand which crochet patterns are most popular, helping us design more relevant cold-weather guides. These tools do not sell or track personal identifying information across external services.
            </p>

            <h2 className="font-display text-lg font-bold text-slate-900 pt-2">
              4. Contact Us
            </h2>
            <p>
              If you have any questions or requests regarding our privacy practices, please contact us at <a href="mailto:privacy@wintercrochetpatterns.com" className="text-[#7A3E55] underline">privacy@wintercrochetpatterns.com</a>.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <AdSlot id="privacy-policy-bottom" format="horizontal" />
        </div>
      </div>
    </div>
  );
};
