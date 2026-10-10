import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ArrowRight, Download } from 'lucide-react';
import { YarnBallIcon } from './icons';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-rose-100/80 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-rose-200 hover:shadow-md">
      {/* Visual Slot — original image size (no crop, no forced aspect ratio) */}
      <Link
        to={`/store/${product.slug}`}
        className="block w-full overflow-hidden bg-[#FFF7EF]"
        aria-label={`View ${product.title}`}
      >
        {!imageError ? (
          <img
            src={product.image}
            alt={product.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="block h-auto w-full transition-transform duration-300 group-hover:scale-103"
          />
        ) : (
          <div className="flex aspect-4/3 w-full flex-col items-center justify-center p-6 text-center text-[#7A3E55]">
            <YarnBallIcon className="w-12 h-12 mb-2 opacity-60" />
            <span className="font-display font-semibold text-sm">{product.category}</span>
            <span className="mt-1 text-xs text-rose-800/60">PDF Crochet Pattern</span>
          </div>
        )}
      </Link>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between gap-2 text-xs font-medium">
          <span className="font-semibold uppercase tracking-wider text-[#7A3E55]">
            {product.category}
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-[#FFF7EF] px-2 py-0.5 text-[11px] font-semibold text-[#7A3E55]">
            <Download className="w-3 h-3" />
            PDF Pattern
          </span>
        </div>

        <h3 className="font-display text-base sm:text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#7A3E55]">
          <Link to={`/store/${product.slug}`}>{product.title}</Link>
        </h3>

        <p className="mt-2 flex-1 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-3">
          {product.shortDescription}
        </p>

        {/* Price + action */}
        <div className="mt-5 flex items-center justify-between border-t border-rose-100/60 pt-4">
          <span className="font-display text-xl font-bold text-slate-900">
            ${product.price.toFixed(2)}
            <span className="ml-1 font-sans text-xs font-medium text-slate-500">USD</span>
          </span>
          <Link
            to={`/store/${product.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#7A3E55] transition-transform group-hover:translate-x-0.5"
          >
            <span>View Pattern</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
