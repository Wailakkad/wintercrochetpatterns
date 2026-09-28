import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PATTERNS } from '../data/patterns';
import { BLOG_POSTS } from '../data/posts';
import { PatternCard } from '../components/PatternCard';
import { AdSlot } from '../components/AdSlot';
import { SEO } from '../components/SEO';
import {
  Download,
  BookOpen,
  ChevronRight,
  Clock,
  Scissors,
  CheckCircle,
  HelpCircle,
  Sparkles,
  Layers,
  Printer,
  Share2
} from 'lucide-react';
import { YarnBallIcon, SheepIcon } from '../components/icons';
import { getDownloadUrl } from '../utils/downloads';

export const PatternDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [downloadSuccessToast, setDownloadSuccessToast] = useState(false);

  const pattern = PATTERNS.find((p) => p.slug === slug);
  if (!pattern) {
    return <Navigate to="/free-patterns" replace />;
  }

  // Find matching blog tutorial if exists
  const matchingPost = BLOG_POSTS.find((post) => post.patternSlug === pattern.slug);

  // Related patterns (3 related)
  const relatedPatterns = PATTERNS.filter((p) => pattern.relatedSlugs.includes(p.slug)).slice(0, 3);

  // Derived from the stored Drive URL (see src/utils/downloads.ts); the data stays untouched.
  const downloadUrl = getDownloadUrl(pattern);

  const handleDownloadClick = () => {
    setDownloadSuccessToast(true);
    setTimeout(() => {
      setDownloadSuccessToast(false);
    }, 4500);
  };

  return (
    <div className="py-8 sm:py-12">
      <SEO
        title={`${pattern.title} — Free Printable Crochet Pattern (PDF)`}
        description={pattern.description}
        ogImage={pattern.imageUrl}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-[#7A3E55] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/free-patterns" className="hover:text-[#7A3E55] transition-colors">
            Free Patterns
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800 truncate">{pattern.title}</span>
        </nav>

        {/* Main Product / Pattern Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Large Preview Image */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-3xl border border-rose-100 bg-[#FFF7EF] shadow-sm">
              <img
                src={pattern.imageUrl}
                alt={`${pattern.title} completed crochet project`}
                className="w-full h-auto aspect-4/3 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Quick specifications strip below image */}
            <div className="mt-4 rounded-2xl border border-rose-100/70 bg-[#FFFDFB] p-4 text-xs text-slate-600">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="font-semibold text-[#7A3E55] block">Hook Size</span>
                  <span className="text-slate-800">{pattern.hookSize}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#7A3E55] block">Yarn Weight</span>
                  <span className="text-slate-800">{pattern.yarnWeight}</span>
                </div>
                <div className="col-span-2 pt-2 border-t border-rose-50">
                  <span className="font-semibold text-[#7A3E55] block">Target Gauge</span>
                  <span className="text-slate-800">{pattern.gauge}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pattern Info, Details, Download CTA */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
              <span className="text-[#7A3E55] uppercase tracking-wider">{pattern.category}</span>
              <span aria-hidden="true">·</span>
              <span>Level: {pattern.difficulty}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 font-normal text-slate-500">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {pattern.time}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {pattern.title}
            </h1>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              {pattern.description}
            </p>

            {/* Download and tutorial CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownloadClick}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#7A3E55] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#582639] hover:shadow-md transition-all active:scale-95 cursor-pointer flex-1"
              >
                <Download className="w-4 h-4" />
                <span>Download Free PDF Pattern</span>
              </a>

              {matchingPost && (
                <Link
                  to={`/blog/${matchingPost.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-rose-200 bg-white px-5 py-3.5 text-sm font-semibold text-[#7A3E55] hover:bg-[#FFF7EF] hover:border-[#7A3E55] transition-all active:scale-95"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Tutorial</span>
                </Link>
              )}
            </div>

            {/* Download confirmation feedback toast */}
            {downloadSuccessToast && (
              <div className="mt-3 flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-800 animate-in fade-in">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Your PDF download has started! Enjoy your cozy crochet session.</span>
              </div>
            )}

            {/* Sizing & Dimensions */}
            <div className="mt-6 rounded-2xl border border-rose-100 bg-[#FFF7EF]/40 p-5">
              <h2 className="font-display text-xs font-bold uppercase tracking-wider text-[#7A3E55] mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#7A3E55]" />
                Size Inclusivity & Dimensions
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {pattern.sizes}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {pattern.finishedDimensions}
              </p>
            </div>

            {/* Materials List */}
            <div className="mt-6">
              <h2 className="font-display text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Scissors className="w-4 h-4 text-[#7A3E55]" />
                Materials Needed
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {pattern.materials.map((mat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#7A3E55] mt-0.5">•</span>
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stitches Used */}
            <div className="mt-6">
              <h2 className="font-display text-sm font-bold text-slate-900 mb-2">
                Stitches & Abbreviations
              </h2>
              <div className="flex flex-wrap gap-2">
                {pattern.stitches.map((st, i) => (
                  <span
                    key={i}
                    className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs text-slate-700 font-medium"
                  >
                    {st}
                  </span>
                ))}
              </div>
            </div>

            {/* Pro Crafting Pointers */}
            <div className="mt-6 border-t border-rose-100 pt-5">
              <h2 className="font-display text-xs font-bold uppercase tracking-wider text-[#7A3E55] mb-2">
                Designer Tips
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {pattern.skillPointers.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-0.5">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mid-content AdSlot */}
        <div className="my-12">
          <AdSlot id={`pattern-detail-${pattern.slug}`} format="horizontal" />
        </div>

        {/* You May Also Like Section */}
        <div className="mt-16 pt-12 border-t border-rose-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
                More Cozy Projects
              </span>
              <h2 className="font-display text-2xl font-bold text-slate-900 mt-1">
                You May Also Like
              </h2>
            </div>
            <Link to="/free-patterns" className="text-xs font-semibold text-[#7A3E55] hover:underline">
              View All Patterns →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPatterns.map((rel) => (
              <PatternCard key={rel.slug} pattern={rel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
