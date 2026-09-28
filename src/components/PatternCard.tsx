import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pattern } from '../types';
import { Download, Clock, ArrowRight } from 'lucide-react';
import { YarnBallIcon } from './icons';

interface PatternCardProps {
  pattern: Pattern;
}

export const PatternCard: React.FC<PatternCardProps> = ({ pattern }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-rose-100/80 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-rose-200 hover:shadow-md">
      {/* Visual Slot */}
      <Link to={`/patterns/${pattern.slug}`} className="relative aspect-4/3 w-full overflow-hidden bg-[#FFF7EF]">
        {!imageError ? (
          <img
            src={pattern.imageUrl}
            alt={pattern.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-103"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center text-[#7A3E55]">
            <YarnBallIcon className="w-12 h-12 mb-2 opacity-60" />
            <span className="font-display font-semibold text-sm">{pattern.title}</span>
            <span className="text-xs text-rose-800/60 mt-1">Free PDF Guide</span>
          </div>
        )}
      </Link>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Zero-Pill Clean Metadata with typographic dot separators */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
          <span className="text-[#7A3E55] font-semibold">{pattern.category}</span>
          <span aria-hidden="true">·</span>
          <span>{pattern.difficulty}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-slate-400" />
            {pattern.time}
          </span>
        </div>

        <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-[#7A3E55] transition-colors">
          <Link to={`/patterns/${pattern.slug}`}>
            {pattern.title}
          </Link>
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed flex-1">
          {pattern.excerpt}
        </p>

        {/* Action button */}
        <div className="mt-5 pt-4 border-t border-rose-100/60 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
            100% Free PDF
          </span>
          <Link
            to={`/patterns/${pattern.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#7A3E55] group-hover:translate-x-0.5 transition-transform"
          >
            <span>Get Pattern</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
