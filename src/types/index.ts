export type Category = 'Baby Hat' | 'Cardigan' | 'Headband' | 'Gloves';
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

export interface BlogPostSection {
  id: string;
  title: string;
  content: string;
  steps?: {
    step: number;
    title: string;
    instruction: string;
    tip?: string;
  }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** SEO meta description (falls back to `excerpt` when omitted). */
  metaDescription?: string;
  date: string;
  readingTime: string;
  coverImage: string;
  patternSlug: string;
  category: Category;
  author: {
    name: string;
    role: string;
  };
  tableOfContents: { id: string; label: string }[];
  sections: BlogPostSection[];
  finishingTips: string[];
  faqs?: { q: string; a: string }[];
}
