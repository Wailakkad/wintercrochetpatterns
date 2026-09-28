import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PATTERNS } from '../data/patterns';
import { Category, Difficulty } from '../types';
import { PatternCard } from '../components/PatternCard';
import { AdSlot } from '../components/AdSlot';
import { SEO } from '../components/SEO';
import { Filter, SlidersHorizontal, RotateCcw, Search } from 'lucide-react';

export const FreePatterns: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = (searchParams.get('category') as Category) || 'All';
  const initialDifficulty = (searchParams.get('difficulty') as Difficulty) || 'All';
  const initialTime = searchParams.get('time') || 'All';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>(initialDifficulty);
  const [selectedTime, setSelectedTime] = useState<string>(initialTime);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const categories = ['All', 'Baby Hat', 'Cardigan', 'Headband', 'Gloves'];
  const difficulties = ['All', 'Beginner', 'Easy', 'Intermediate'];
  const timeCategories = ['All', '< 2 hrs', '2-4 hrs', '4+ hrs'];

  const filteredPatterns = PATTERNS.filter((pattern) => {
    if (selectedCategory !== 'All' && pattern.category !== selectedCategory) return false;
    if (selectedDifficulty !== 'All' && pattern.difficulty !== selectedDifficulty) return false;
    if (selectedTime !== 'All' && pattern.timeCategory !== selectedTime) return false;
    if (
      searchQuery.trim() &&
      !pattern.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !pattern.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedDifficulty('All');
    setSelectedTime('All');
    setSearchQuery('');
    setSearchParams({});
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="py-10 sm:py-14">
      <SEO
        title="Free Crochet Patterns (PDF) — Winter Collection"
        description="Browse our library of free printable crochet patterns: an easy baby beanie, a granny square cardigan, a textured earwarmer, and cozy fingerless gloves. Clean instant PDF downloads."
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
            Instant Digital Downloads
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-2">
            Free Crochet Patterns (PDF)
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            All patterns include printable PDF instructions, stitch keys, sizing details, and materials checklists. Zero fees, ever.
          </p>
        </div>

        {/* Ad Slot Above Grid */}
        <AdSlot id="patterns-catalog-top" format="horizontal" />

        {/* Filters Bar */}
        <div className="mt-8 rounded-2xl border border-rose-100 bg-white p-5 shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search patterns or stitches..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#7A3E55] focus:outline-none focus:ring-1 focus:ring-[#F8D7E5]"
              />
            </div>

            {/* Filter Dropdowns / Tabs */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-medium text-slate-500">Category:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-800 focus:border-[#7A3E55] focus:outline-none cursor-pointer"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-medium text-slate-500">Difficulty:</span>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-800 focus:border-[#7A3E55] focus:outline-none cursor-pointer"
                >
                  {difficulties.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              {/* Time */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-medium text-slate-500">Time:</span>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-800 focus:border-[#7A3E55] focus:outline-none cursor-pointer"
                >
                  {timeCategories.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reset button */}
              {(selectedCategory !== 'All' || selectedDifficulty !== 'All' || selectedTime !== 'All' || searchQuery) && (
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#7A3E55] hover:bg-rose-50 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6 flex items-center justify-between text-xs text-slate-500">
          <span>Showing {filteredPatterns.length} of {PATTERNS.length} free patterns</span>
          <span className="text-emerald-700 font-medium">All downloads include printable PDF</span>
        </div>

        {/* Product Grid */}
        {filteredPatterns.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPatterns.map((pattern) => (
              <PatternCard key={pattern.slug} pattern={pattern} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-rose-100 bg-white p-12 text-center">
            <p className="text-sm font-medium text-slate-700">No patterns match your filter criteria.</p>
            <p className="mt-1 text-xs text-slate-500">Try clearing your filters or search query.</p>
            <button
              onClick={resetFilters}
              className="mt-4 rounded-xl bg-[#7A3E55] px-4 py-2 text-xs font-semibold text-white hover:bg-[#582639]"
            >
              Show All Patterns
            </button>
          </div>
        )}

        {/* Ad Slot Below Grid */}
        <AdSlot id="patterns-catalog-bottom" format="horizontal" />
      </div>
    </div>
  );
};
