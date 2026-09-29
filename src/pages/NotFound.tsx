import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { AdSlot } from '../components/AdSlot';
import { SheepIcon, YarnBallIcon } from '../components/icons';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="py-20 text-center">
      <SEO
        title="Page Not Found (404) — Winter Crochet Patterns"
        description="The requested page could not be found. Return to our free crochet pattern collection."
      />

      <div className="mx-auto max-w-md px-4">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-[#FFF7EF] border border-rose-100 text-[#7A3E55] mb-6 shadow-xs">
          <SheepIcon className="w-14 h-14" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
          Error 404
        </span>
        <h1 className="font-display text-3xl font-bold text-slate-900 mt-1">
          Dropped a Stitch?
        </h1>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          We couldn't find the page you were looking for. It might have been unraveled or moved to a new winter shelf.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#7A3E55] px-6 py-3 text-xs font-semibold text-white hover:bg-[#582639] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/free-patterns"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-rose-200 bg-white px-6 py-3 text-xs font-semibold text-[#7A3E55] hover:bg-[#FFF7EF]"
          >
            <span>Browse Free Patterns</span>
          </Link>
        </div>

        <AdSlot id="notfound-bottom" format="horizontal" />
      </div>
    </div>
  );
};
