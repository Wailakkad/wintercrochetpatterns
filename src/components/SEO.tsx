import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  publishedTime?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = 'Free beginner-friendly printable PDF crochet patterns for a baby beanie, granny square cardigan, textured earwarmer, and fingerless gloves. Step-by-step guides with materials and stitches.',
  canonical,
  ogType = 'website',
  ogImage = 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790630140/Easy_and_Cute_Baby_Beanie.jpg',
  publishedTime
}) => {
  const fullTitle = title
    ? `${title} — Winter Crochet Patterns`
    : 'Winter Crochet Patterns — Cozy Free PDF Patterns & Guides';

  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://wintercrochetpatterns.com';
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : siteUrl);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content="Winter Crochet Patterns" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      {ogImage && <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />}
    </Helmet>
  );
};
