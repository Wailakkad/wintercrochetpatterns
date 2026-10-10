import React, { useState } from 'react';
import { ProductShowcase } from '../types';
import { CheckCircle2 } from 'lucide-react';
import { YarnBallIcon } from './icons';

interface ProductShowcaseSectionProps {
  showcase: ProductShowcase;
}

export const ProductShowcaseSection: React.FC<ProductShowcaseSectionProps> = ({ showcase }) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const imageOnRight = showcase.layout === 'image-right';

  const imageBlock = (
    <div className={imageOnRight ? 'order-1 lg:order-2' : 'order-1'}>
      <div className="relative">
        {/* Decorative brand blobs peeking behind the photo frame */}
        <span
          aria-hidden="true"
          className="absolute -left-3 -top-3 h-16 w-16 rounded-full bg-[#F8D7E5]/70 sm:h-20 sm:w-20"
        />
        <span
          aria-hidden="true"
          className="absolute -bottom-3 -right-3 h-14 w-14 rounded-full bg-[#E9E2FF]/80 sm:h-16 sm:w-16"
        />

        {/* Photo frame — images shown at original size (uncropped) */}
        <div
          className={`relative grid gap-3 ${
            showcase.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
          }`}
        >
          {showcase.images.map((src) =>
            failedImages[src] ? (
              <div
                key={src}
                className="flex aspect-square w-full flex-col items-center justify-center rounded-3xl border border-rose-100 bg-[#FFF7EF] p-4 text-center text-[#7A3E55]"
              >
                <YarnBallIcon className="mb-2 h-10 w-10 opacity-60" />
                <span className="font-display text-xs font-semibold">Winter Crochet Patterns</span>
              </div>
            ) : (
              <img
                key={src}
                src={src}
                alt={showcase.title}
                referrerPolicy="no-referrer"
                onError={() => setFailedImages((prev) => ({ ...prev, [src]: true }))}
                className="block h-auto w-full rounded-3xl border border-rose-100 bg-[#FFF7EF] shadow-sm"
              />
            )
          )}
        </div>
      </div>
    </div>
  );

  const textBlock = (
    <div className={imageOnRight ? 'order-2 lg:order-1' : 'order-2'}>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F8D7E5]/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#7A3E55]">
        {showcase.label}
      </span>
      <h2 className="font-display mt-3 text-xl font-bold leading-snug text-slate-900 sm:text-2xl lg:text-3xl">
        {showcase.title}
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        {showcase.description}
      </p>
      {showcase.points && showcase.points.length > 0 && (
        <ul className="mt-5 space-y-2.5">
          {showcase.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
      {imageOnRight ? (
        <>
          {textBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </section>
  );
};
