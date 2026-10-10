export type Category = 'Baby Hat' | 'Cardigan' | 'Headband' | 'Gloves' | 'Sweaters' | 'Ponchos';
export type Difficulty = 'Beginner' | 'Easy' | 'Intermediate';

export interface Pattern {
  slug: string;
  title: string;
  category: Category;
  difficulty: Difficulty;
  time: string;
  timeCategory: '< 2 hrs' | '2-4 hrs' | '4+ hrs';
  excerpt: string;
  description: string;
  materials: string[];
  sizes: string;
  stitches: string[];
  /** Canonical stored URL (exact Google Drive /view link). Never rewritten in the data layer. */
  pdfUrl: string;
  /**
   * Original designer page. Used only when USE_DRIVE_PDF_DOWNLOADS is false
   * (i.e. redistribution rights for the hosted PDF are NOT confirmed).
   */
  sourceUrl?: string;
  imageUrl: string;
  relatedSlugs: string[];
  hookSize: string;
  yarnWeight: string;
  gauge: string;
  skillPointers: string[];
  finishedDimensions: string;
}

/** Paid product sold via Payhip (store). */
export interface Product {
  slug: string;
  title: string;
  category: string;
  /** Price in US dollars (e.g. 12.99). */
  price: number;
  /** Original-size Cloudinary image URL (displayed uncropped). */
  image: string;
  /** Payhip checkout URL. */
  payhipUrl: string;
  /** Short description used on cards and the hero block. */
  shortDescription: string;
  whatYoullMake: string[];
  highlights?: string[];
  includesTitle?: string;
  includes: string[];
  skillLevel: string;
  sizing?: string;
  sizingTable?: { headers: string[]; rows: string[][] };
  materials?: string[];
  format?: string[];
  downloadNote?: string;
  license?: string;
  closingLine?: string;
  /** Alternating visual value sections (model / finished-project shots). */
  showcase?: ProductShowcase[];
  /** SEO meta description for the landing page. */
  seoDescription: string;
}

/** Alternating image + copy row on a product landing page. */
export interface ProductShowcase {
  /** 'image-right' → text on the left, image on the right (desktop). */
  layout: 'image-right' | 'image-left';
  /** Small uppercase eyebrow above the heading. */
  label: string;
  title: string;
  description: string;
  points?: string[];
  /** One or more original-size images (displayed uncropped). */
  images: string[];
}

/** Simple data table rendered inside a section (e.g. sizing guidance). */
export interface BlogPostTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface BlogPostSection {
  id: string;
  title: string;
  /**
   * Plain text with optional line breaks. Links are written as
   * `[anchor text](/relative-or-absolute-url)` and rendered as Router
   * `<Link>` (internal) or `<a target="_blank" rel="noopener noreferrer">` (external).
   */
  content: string;
  /** Optional styled table rendered directly after the section content. */
  table?: BlogPostTable;
  steps?: {
    step: number;
    title: string;
    instruction: string;
    tip?: string;
  }[];
}

/** In-article promotional callout (rendered as a styled box). */
export interface BlogPostCta {
  /**
   * Where to insert the CTA:
   * - 'quick-summary' → right after the Quick Summary box
   * - a section id    → right after that section
   * - 'end'           → after the FAQ block (end of article)
   */
  after: string;
  headline: string;
  body: string;
  buttonLabel: string;
  /** Absolute URL (external links open in a new tab with rel="noopener noreferrer"). */
  url: string;
}

/** Branded tip/callout box (e.g. "Fit Tip", "Thumb Tip"). */
export interface BlogPostCallout {
  /** 'quick-summary', or a section id. */
  after: string;
  title: string;
  body: string;
  /** Brand tone: blush/rose (default) or mint. */
  tone?: 'rose' | 'mint';
}

/** In-article image inserted after a given section. */
export interface BlogPostImage {
  afterSectionId: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** SEO meta description (falls back to `excerpt` when omitted). */
  metaDescription?: string;
  /** Optional explicit canonical URL (falls back to the current page URL). */
  canonical?: string;
  date: string;
  readingTime: string;
  coverImage: string;
  /**
   * Matching free pattern slug. Omit for posts that intentionally have no
   * free-PDF download card / matching-pattern sidebar (e.g. paid-product funnels).
   */
  patternSlug?: string;
  category: Category;
  author: {
    name: string;
    role: string;
  };
  /** Short scannable bullet box rendered near the top of the article. */
  quickSummary?: { title: string; bullets: string[] };
  tableOfContents: { id: string; label: string }[];
  sections: BlogPostSection[];
  inArticleImages?: BlogPostImage[];
  ctas?: BlogPostCta[];
  callouts?: BlogPostCallout[];
  finishingTips: string[];
  faqs?: { q: string; a: string }[];
}
