import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { YarnBallIcon } from './icons';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-rose-100/80 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-rose-200 hover:shadow-md">
      <Link to={`/blog/${post.slug}`} className="relative aspect-16/10 w-full overflow-hidden bg-[#FFF7EF]">
        {!imgError ? (
          <img
            src={post.coverImage}
            alt={post.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-103"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center text-[#7A3E55]">
            <YarnBallIcon className="w-10 h-10 mb-2 opacity-60" />
            <span className="font-display font-medium text-xs">Crochet Tutorial</span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        {/* Unboxed metadata */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
          <span className="text-[#7A3E55] font-semibold">{post.category}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-slate-400" />
            {post.date}
          </span>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>

        <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#7A3E55] transition-colors leading-snug">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed flex-1">
          {post.excerpt}
        </p>

        <div className="mt-4 pt-4 border-t border-rose-100/60 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">
            By {post.author.name}
          </span>
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#7A3E55] group-hover:translate-x-0.5 transition-transform"
          >
            <span>Read Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
