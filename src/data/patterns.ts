import { Pattern } from '../types';

/**
 * Free pattern library.
 *
 * `pdfUrl` holds the EXACT Google Drive link as provided by the project owner
 * (redistribution rights confirmed). The UI converts it to a direct download
 * URL via src/utils/downloads.ts — the value stored here is never modified.
 *
 * COMPLIANCE: if redistribution rights are ever NOT confirmed, set
 * USE_DRIVE_PDF_DOWNLOADS = false in src/utils/downloads.ts and add the
 * original designer page URL to each pattern as `sourceUrl`. The buttons will
 * then open `sourceUrl` instead of the Drive PDF.
 */
export const PATTERNS: Pattern[] = [
  {
    slug: 'easy-cute-baby-beanie',
    title: 'Easy and Cute Baby Beanie',
    category: 'Baby Hat',
    difficulty: 'Beginner',
    time: '30–60 min',
    timeCategory: '< 2 hrs',
    excerpt: 'A simple, snug baby beanie with a cute classic look—perfect for quick gifting.',
    description:
      'Download the printable PDF for this easy and cute baby beanie—a cozy winter baby hat that is beginner-friendly from the very first stitch. Worked in soft baby yarn with basic stitches, it works up in 30–60 minutes and fits newborns through 12 months. An ideal quick project for baby showers, cold-weather gifting, and first-time crocheters who want a cute, classic result.',
    materials: [
      '1 skein baby yarn — DK or Worsted weight (#3/#4), approx. 60–90 yards',
      '4–5 mm crochet hook (US G/6–H/8)',
      'Tapestry needle',
      'Scissors',
      'Stitch marker'
    ],
    sizes: 'Newborn–12 months (baby sizes, see PDF)',
    stitches: ['Chain (ch)', 'Single Crochet (sc)', 'Half Double Crochet (hdc)', 'Slip Stitch (sl st)'],
    pdfUrl: 'https://drive.google.com/file/d/18ZX_vSI22BzRVoMk4OM-QaZKh3E_pc6U/view?usp=drive_link',
    imageUrl: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790630140/Easy_and_Cute_Baby_Beanie.jpg',
    relatedSlugs: ['illuin-earwarmer', 'fingerless-gloves', 'cardigan-with-granny-squares'],
    hookSize: '4–5 mm (US G/6–H/8)',
    yarnWeight: 'DK / Worsted #3–4 baby yarn',
    gauge: 'Approx. 14 sts x 12 rows = 4" x 4" (see PDF)',
    skillPointers: [
      'Use a soft, washable baby yarn (merino or acrylic blend) so the hat is gentle on sensitive skin.',
      'Work the brim loosely so the beanie stretches comfortably over a baby’s head.',
      'Leave a 12-inch tail for seaming and weaving in ends neatly on the inside.'
    ],
    finishedDimensions: 'Approx. 13" (newborn) to 16" (12 months) unstretched circumference — exact measurements in the PDF.'
  },
  {
    slug: 'cardigan-with-granny-squares',
    title: 'Cardigan with Granny Squares',
    category: 'Cardigan',
    difficulty: 'Intermediate',
    time: '8–14 hours',
    timeCategory: '4+ hrs',
    excerpt: 'A statement cardigan built from granny squares—cozy, colorful, and on-trend.',
    description:
      'This printable PDF pattern guides you through a statement cardigan built from classic granny squares. Each square is quick to crochet, then joined into a cozy, colorful, on-trend garment with comfortable ease and a relaxed fit. Intermediate-friendly construction, multiple sizes, and clear diagrams make this the perfect weekend project for crocheters ready to level up.',
    materials: [
      'Worsted weight (#4) yarn in 2–4 colors (yardage per size, see PDF)',
      '5 mm crochet hook (US H/8)',
      'Tapestry needle',
      'Scissors'
    ],
    sizes: 'Multiple sizes (see PDF)',
    stitches: ['Chain (ch)', 'Slip Stitch (sl st)', 'Single Crochet (sc)', 'Double Crochet (dc)', 'Granny Cluster'],
    pdfUrl: 'https://drive.google.com/file/d/1_YNXjk40xPDWYIJPxOT522toK1OGrdfP/view?usp=drive_link',
    imageUrl: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790630117/Cardigan_with_Granny_Squares.jpg',
    relatedSlugs: ['fingerless-gloves', 'easy-cute-baby-beanie', 'illuin-earwarmer'],
    hookSize: '5 mm (US H/8)',
    yarnWeight: 'Worsted #4',
    gauge: '1 granny cluster block = 4.5" square; 13 dc x 7 rows = 4" x 4"',
    skillPointers: [
      'Make all squares with the same tension and block them to one size before joining.',
      'Lay out your square layout in a mirror to plan color placement before you seam.',
      'Join squares with slip stitches on the right side for a tidy, visible seam line.'
    ],
    finishedDimensions: 'Multi-size finished bust measurements and length are listed in the PDF sizing table.'
  },
  {
    slug: 'illuin-earwarmer',
    title: 'Illuin Earwarmer',
    category: 'Headband',
    difficulty: 'Beginner',
    time: '~1 hour',
    timeCategory: '< 2 hrs',
    excerpt: 'A textured earwarmer headband that keeps ears warm without a full hat.',
    description:
      'The Illuin Earwarmer is a textured crochet headband that keeps ears warm without the bulk of a full hat. This beginner-friendly, printable PDF pattern works up in about an hour using worsted yarn and simple stitches, making it a perfect first wearable and a great quick-gift project for winter markets, teachers, and friends.',
    materials: [
      '1 skein worsted weight (#4) yarn, approx. 80–110 yards',
      '5 mm crochet hook (US H/8)',
      'Tapestry needle',
      'Scissors'
    ],
    sizes: 'Teen/Adult (see PDF)',
    stitches: ['Chain (ch)', 'Single Crochet (sc)', 'Half Double Crochet (hdc)', 'Double Crochet (dc)', 'Slip Stitch (sl st)'],
    pdfUrl: 'https://drive.google.com/file/d/1SemVfcruZoyS55viNGDavEzBHYTu8pC7/view?usp=drive_link',
    imageUrl: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790630109/Illuin_Earwarmer.jpg',
    relatedSlugs: ['easy-cute-baby-beanie', 'fingerless-gloves', 'cardigan-with-granny-squares'],
    hookSize: '5 mm (US H/8)',
    yarnWeight: 'Worsted #4',
    gauge: 'Approx. 14 sts x 10 rows = 4" x 4" (see PDF)',
    skillPointers: [
      'Keep your tension relaxed so the earwarmer stretches over the head without tightness.',
      'Try it on as you go—the band should fit snugly but comfortably over the ears.',
      'Weave the tail through the seam on the wrong side for an invisible finish.'
    ],
    finishedDimensions: 'Approx. 4" wide x 19" circumference before seaming (teen/adult, see PDF).'
  },
  {
    slug: 'fingerless-gloves',
    title: 'Fingerless Gloves',
    category: 'Gloves',
    difficulty: 'Easy',
    time: '1.5–2 hours',
    timeCategory: '< 2 hrs',
    excerpt: 'Cozy fingerless gloves for everyday warmth—quick and beginner-friendly.',
    description:
      'These cozy fingerless gloves keep your hands warm while leaving your fingers free for typing, driving, and crafting. The printable PDF walks you through an easy, beginner-friendly construction with stretchy ribbed cuffs worked in back loops, plus a comfortable thumb opening. A quick 1.5–2 hour project and a favorite handmade gift.',
    materials: [
      '1 skein worsted weight (#4) yarn, approx. 120–160 yards',
      '4–5 mm crochet hook (US G/6–H/8)',
      'Tapestry needle',
      'Scissors',
      'Stitch markers'
    ],
    sizes: 'Adult (see PDF)',
    stitches: ['Chain (ch)', 'Single Crochet (sc)', 'Half Double Crochet (hdc)', 'Slip Stitch (sl st)', 'Ribbing (BLO)'],
    pdfUrl: 'https://drive.google.com/file/d/18H3mzHDcBzBoPkU-AQ1pMZOrl5zWkx-4/view?usp=drive_link',
    imageUrl: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790630126/Fingerless_Gloves.jpg',
    relatedSlugs: ['easy-cute-baby-beanie', 'illuin-earwarmer', 'cardigan-with-granny-squares'],
    hookSize: '4–5 mm (US G/6–H/8)',
    yarnWeight: 'Worsted #4',
    gauge: 'Approx. 15 sts x 11 rows = 4" x 4" (see PDF)',
    skillPointers: [
      'Mark the first stitch of each round so you never add accidental stitches.',
      'Try the mitt on before closing the thumb hole to check the fit.',
      'Both mitts are worked identically—no mirrored shaping required.'
    ],
    finishedDimensions: 'Approx. 7.5" long with a 7" unstretched palm circumference (adult, see PDF).'
  }
];

export const STARTER_PACK_FEATURES = [
  'All 4 Printable Winter Patterns (Baby Beanie, Granny Square Cardigan, Earwarmer, Gloves)',
  'Print-friendly black & white ink-saver version of each guide',
  'Yarn substitution chart with exact yardages and hook equivalents',
  'Stitch abbreviation glossary & visual gauge measurement guide'
];
