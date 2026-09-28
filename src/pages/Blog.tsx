import React from 'react';
import { BLOG_POSTS } from '../data/posts';
import { BlogCard } from '../components/BlogCard';
import { AdSlot } from '../components/AdSlot';
import { SEO } from '../components/SEO';
import { BookOpen, Sparkles } from 'lucide-react';
import { YarnBallIcon } from '../components/icons';

export const Blog: React.FC = () => {
  return (
    <div className="py-10 sm:py-14">
      <SEO
        title="Crochet Tutorials & Pattern Walkthroughs — Winter Crochet Patterns"
        description="Comprehensive, step-by-step winter crochet tutorials: baby beanie basics, granny square cardigan construction, textured earwarmers, and fingerless glove fit tips."
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF7EF] border border-rose-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#7A3E55] mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Maker Library</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Crochet Tutorials & Guides
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            In-depth companion tutorials for all our free printable patterns. Learn abbreviations, row-by-row mechanics, and pro blocking tips.
          </p>
        </div>

        {/* AdSlot Top */}
        <AdSlot id="blog-listing-top" format="horizontal" />

        {/* Blog Post Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* AdSlot Bottom */}
        <div className="mt-12">
          <AdSlot id="blog-listing-bottom" format="horizontal" />
        </div>
      </div>
    </div>
  );
};
