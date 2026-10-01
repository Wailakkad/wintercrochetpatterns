import { BlogPost } from '../types';

/** Payhip product link for the paid pattern funnel, with UTM tracking. */
const PAYHIP_HAND_WARMERS_URL =
  'https://payhip.com/b/ZtGeJ?utm_source=blog&utm_medium=cta&utm_campaign=hand_warmers';

/** Payhip product link for the free-pattern → paid-PDF funnel, with UTM tracking. */
const PAYHIP_FREE_PATTERN_EASY_URL =
  'https://payhip.com/b/ZtGeJ?utm_source=blog&utm_medium=cta&utm_campaign=free_pattern_easy';

/** Payhip product link for the fit-guide funnel, with UTM tracking. */
const PAYHIP_FIT_GUIDE_URL =
  'https://payhip.com/b/ZtGeJ?utm_source=blog&utm_medium=cta&utm_campaign=fit_guide';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'easy-cute-baby-beanie-pattern',
    title: 'How to Crochet an Easy and Cute Baby Beanie (Free Beginner Pattern)',
    excerpt:
      'A free beginner-friendly baby beanie crochet pattern you can finish in 30–60 minutes—soft, snug, and sized for newborns up to 12 months.',
    metaDescription:
      'Free easy and cute baby beanie crochet pattern. See the materials, stitch abbreviations, step-by-step overview and tips for a cozy newborn–12 month winter hat.',
    date: 'September 3, 2026',
    readingTime: '5 min read',
    coverImage: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790630140/Easy_and_Cute_Baby_Beanie.jpg',
    patternSlug: 'easy-cute-baby-beanie',
    category: 'Baby Hat',
    author: {
      name: 'Emma Lindqvist',
      role: 'Head Pattern Designer'
    },
    tableOfContents: [
      { id: 'materials', label: '1. Materials' },
      { id: 'abbreviations', label: '2. Stitch Abbreviations' },
      { id: 'steps', label: '3. Step-by-Step Overview' },
      { id: 'tips', label: '4. Tips' },
      { id: 'faq', label: '5. FAQ' }
    ],
    sections: [
      {
        id: 'materials',
        title: 'Materials',
        content:
          'This cozy winter baby hat is a one-skein project, so it is perfect for using up soft baby yarn from your stash.\n\n• 1 skein baby yarn — DK or Worsted weight (#3/#4), approx. 60–90 yards\n• 4–5 mm crochet hook (US G/6–H/8)\n• Tapestry needle\n• Scissors\n• Stitch marker\n\nChoose a washable merino or acrylic blend: baby items get washed often, and a soft halo keeps the beanie gentle against delicate skin.'
      },
      {
        id: 'abbreviations',
        title: 'Stitch Abbreviations',
        content:
          'The pattern uses four basic stitches, so it is a great first project if you have just learned to crochet in rounds.\n\n• ch: Chain\n• sc: Single Crochet\n• hdc: Half Double Crochet\n• sl st: Slip Stitch\n• st(s): Stitch(es)\n• rnd: Round\n• inc: Increase (2 stitches in one stitch)\n• dec: Decrease (work 2 stitches together)'
      },
      {
        id: 'steps',
        title: 'Step-by-Step Overview',
        content:
          'The beanie is worked from the top down in joined rounds, so you can try it on as you go. Exact stitch counts for each size are inside the printable PDF.',
        steps: [
          {
            step: 1,
            title: 'Start the Crown',
            instruction:
              'Make a magic ring (or chain 4 and join with a sl st), then work the first round of stitches into the ring. Pull the ring tight so there is no hole at the top of the beanie.',
            tip: 'Leave a long starting tail — you will use it to close any tiny gap in the centre.'
          },
          {
            step: 2,
            title: 'Increase Rounds',
            instruction:
              'Work evenly spaced increases in each following round until the crown reaches the diameter listed for your size in the PDF (newborn through 12 months).',
            tip: 'Place a stitch marker in the first stitch of every round to keep your count honest.'
          },
          {
            step: 3,
            title: 'Work the Body Even',
            instruction:
              'Stop increasing and crochet even rounds until the hat measures the body length given in the pattern, leaving room for a small folded brim if you want one.',
            tip: 'Try the beanie on a baby doll or measure around a real head to check the fit early.'
          },
          {
            step: 4,
            title: 'Shape the Brim & Fasten Off',
            instruction:
              'Finish with a round of slip stitches or a simple single crochet edging for a tidy rim, then cut the yarn, fasten off, and weave in all ends with the tapestry needle.',
            tip: 'Weave each tail back through the inside of at least 10 stitches so it never works loose in the wash.'
          }
        ]
      },
      {
        id: 'tips',
        title: 'Tips',
        content:
          '• Check your gauge before starting: a slightly tighter fabric keeps the beanie warm, while a looser one gives more stretch.\n• If you crochet tightly, move up one hook size so the brim stays soft and flexible.\n• Keep the hat simple for everyday wear, or add a tiny pom-pom for a cute classic look.\n• Make two in different colours — they are quick, affordable gifts for baby showers and twins.'
      }
    ],
    finishingTips: [
      'Block the finished beanie lightly so the stitches settle evenly.',
      'Fold and steam the brim for a neat, rounded edge.',
      'Store flat — baby beanies hold their shape better than being hung or stretched.'
    ],
    faqs: [
      {
        q: 'How long does this baby beanie take to make?',
        a: 'Most crocheters finish it in 30–60 minutes. It is one of the fastest patterns in our free library, which makes it ideal for last-minute gifts.'
      },
      {
        q: 'What yarn works best for a baby beanie?',
        a: 'A soft DK or worsted (#3/#4) baby yarn that is machine washable. Avoid scratchy fibres and anything with a loose halo that could irritate sensitive skin.'
      },
      {
        q: 'Which sizes are included?',
        a: 'Newborn through 12 months. Exact measurements and stitch counts for every size are listed in the downloadable PDF.'
      }
    ]
  },
  {
    slug: 'cardigan-with-granny-squares-pattern',
    title: 'Crochet a Cardigan with Granny Squares: Step-by-Step Guide',
    excerpt:
      'Learn how to build a cozy, colorful cardigan from classic granny squares—materials, stitch abbreviations, joining methods, and sizing explained.',
    metaDescription:
      'Free step-by-step guide to crocheting a cardigan with granny squares: materials, stitch abbreviations, square layout, joining, sizing and designer tips.',
    date: 'September 10, 2026',
    readingTime: '7 min read',
    coverImage: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790630117/Cardigan_with_Granny_Squares.jpg',
    patternSlug: 'cardigan-with-granny-squares',
    category: 'Cardigan',
    author: {
      name: 'Emma Lindqvist',
      role: 'Head Pattern Designer'
    },
    tableOfContents: [
      { id: 'materials', label: '1. Materials' },
      { id: 'abbreviations', label: '2. Stitch Abbreviations' },
      { id: 'steps', label: '3. Step-by-Step Overview' },
      { id: 'tips', label: '4. Tips' },
      { id: 'faq', label: '5. FAQ' }
    ],
    sections: [
      {
        id: 'materials',
        title: 'Materials',
        content:
          'A granny square cardigan is mostly a repetition of small, satisfying motifs, so you can crochet it anywhere — and swap colors easily.\n\n• Worsted weight (#4) yarn in 2–4 colors (yardage per size, see PDF)\n• 5 mm crochet hook (US H/8)\n• Tapestry needle\n• Scissors\n\nPlan roughly the same yardage for each main color, plus a smaller amount for accent rounds. A wool blend gives warmth and drape, while acrylic is easy-care and budget friendly for a bigger garment.'
      },
      {
        id: 'abbreviations',
        title: 'Stitch Abbreviations',
        content:
          'If you have made a granny square before, you already know almost every stitch in this cardigan.\n\n• ch: Chain\n• sl st: Slip Stitch\n• sc: Single Crochet\n• dc: Double Crochet\n• granny cluster: 3 dc worked into the same space\n• sp: Space\n• RS / WS: Right side / wrong side'
      },
      {
        id: 'steps',
        title: 'Step-by-Step Overview',
        content:
          'The cardigan is built by crocheting individual squares, arranging them into a garment layout, then joining and adding the finishing bands. The PDF includes the square count and layout for each size.',
        steps: [
          {
            step: 1,
            title: 'Make the Granny Squares',
            instruction:
              'Work the required number of squares in your chosen colours, keeping your tension even so every square finishes the same size.',
            tip: 'Count your clusters out loud each round — miscounted corners are the most common mistake.'
          },
          {
            step: 2,
            title: 'Block & Plan the Layout',
            instruction:
              'Pin and lightly steam each square to one uniform size, then lay out the back, fronts, and sleeves on the floor to plan colour placement.',
            tip: 'Photograph your layout before joining so you can rebuild it if the pieces get shuffled.'
          },
          {
            step: 3,
            title: 'Join the Squares',
            instruction:
              'Join squares with slip stitches through the back loops (or your preferred join) following the layout diagram, working sleeve and body seams as marked in the PDF.',
            tip: 'Join with the same yarn colour you used for the outer round so the seam disappears into the design.'
          },
          {
            step: 4,
            title: 'Add Bands & Finishing',
            instruction:
              'Pick up stitches along the front edges and hem to work a simple band, then fasten off and weave in all ends along the seams.',
            tip: 'Weave in each colour change as you go — a granny square cardigan has many tails, and they add up fast.'
          }
        ]
      },
      {
        id: 'tips',
        title: 'Tips',
        content:
          '• Swatch one square first: if it is too loose, go down a hook size so the cardigan keeps its shape.\n• Use the same dye lot of yarn where possible to avoid subtle colour shifts across the body.\n• Try the cardigan on after joining the shoulders to check the length before finishing the bands.\n• Weave the ends into the granny clusters rather than across the open spaces for a neater inside.'
      }
    ],
    finishingTips: [
      'Block all squares to the same size before joining for perfectly straight seams.',
      'Steam the finished cardigan gently to relax the fabric and even out the joins.',
      'Fold and store flat to keep the shoulders from stretching out.'
    ],
    faqs: [
      {
        q: 'Is this cardigan beginner-friendly?',
        a: 'It is rated Intermediate. If you can crochet a basic granny square and are comfortable counting stitches, you can absolutely make it — the construction is just more assembly than a simple accessory.'
      },
      {
        q: 'How much yarn do I need?',
        a: 'It depends on the size, but most sizes use worsted (#4) yarn in 2–4 colours. Exact yardage per colour is listed in the downloadable PDF.'
      },
      {
        q: 'How long does the project take?',
        a: 'Plan for 8–14 hours in total. Most of that is making the squares, so it is a perfect take-along project for evenings and commutes.'
      }
    ]
  },
  {
    slug: 'illuin-earwarmer-headband-pattern',
    title: 'Illuin Earwarmer Headband: Free Crochet Pattern & Tutorial',
    excerpt:
      'Crochet a textured Illuin earwarmer in about an hour—an easy beginner headband that keeps ears warm without the bulk of a full hat.',
    metaDescription:
      'Free Illuin earwarmer crochet pattern: materials, stitch abbreviations, step-by-step overview, fit tips and FAQ for a beginner-friendly textured headband.',
    date: 'September 17, 2026',
    readingTime: '4 min read',
    coverImage: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790630109/Illuin_Earwarmer.jpg',
    patternSlug: 'illuin-earwarmer',
    category: 'Headband',
    author: {
      name: 'Emma Lindqvist',
      role: 'Head Pattern Designer'
    },
    tableOfContents: [
      { id: 'materials', label: '1. Materials' },
      { id: 'abbreviations', label: '2. Stitch Abbreviations' },
      { id: 'steps', label: '3. Step-by-Step Overview' },
      { id: 'tips', label: '4. Tips' },
      { id: 'faq', label: '5. FAQ' }
    ],
    sections: [
      {
        id: 'materials',
        title: 'Materials',
        content:
          'The Illuin Earwarmer is a one-skein, one-hour project — the fastest wearable in our free library.\n\n• 1 skein worsted weight (#4) yarn, approx. 80–110 yards\n• 5 mm crochet hook (US H/8)\n• Tapestry needle\n• Scissors\n\nA wool or wool-blend yarn adds warmth and memory so the band springs back into shape after each wear.'
      },
      {
        id: 'abbreviations',
        title: 'Stitch Abbreviations',
        content:
          'All you need are the basics — the texture comes from where you place them.\n\n• ch: Chain\n• sc: Single Crochet\n• hdc: Half Double Crochet\n• dc: Double Crochet\n• sl st: Slip Stitch\n• BLO: Back Loop Only (insert the hook under the back loop of the V)'
      },
      {
        id: 'steps',
        title: 'Step-by-Step Overview',
        content:
          'The earwarmer is worked flat as a long strip, then seamed into a loop. Row counts for each size are inside the printable PDF.',
        steps: [
          {
            step: 1,
            title: 'Foundation Row',
            instruction:
              'Chain the number given for your size, then work the first row of stitches across, keeping the chain relaxed so the edge stays stretchy.',
            tip: 'A tight foundation chain is the usual cause of a headband that will not stretch over the head.'
          },
          {
            step: 2,
            title: 'Build the Texture',
            instruction:
              'Repeat the textured row pattern until your strip reaches the length listed in the PDF, always turning and starting with the same stitch type.',
            tip: 'Check the width after a few rows — it should sit about 4" tall to cover the ears fully.'
          },
          {
            step: 3,
            title: 'Fasten Off & Seam',
            instruction:
              'Fasten off with a long tail, fold the strip with right sides together, and slip stitch or whip stitch the short ends to form a loop.',
            tip: 'Try the band on before you weave the tail in, so you can still adjust the seam if it feels snug.'
          }
        ]
      },
      {
        id: 'tips',
        title: 'Tips',
        content:
          '• Work with a relaxed hand so the earwarmer keeps its stretch.\n• Steam block the finished strip to even out the texture before seaming.\n• Make a matching pair of fingerless gloves from the same yarn for an instant gift set.\n• Because it is so quick, this is an ideal craft-fair and stocking-stuffer project.'
      }
    ],
    finishingTips: [
      'Weave the seam tail through every layer so the join stays invisible.',
      'Steam lightly to set the textured stitches evenly.',
      'Pair it with matching fingerless gloves for a coordinated winter set.'
    ],
    faqs: [
      {
        q: 'How long does the Illuin Earwarmer take?',
        a: 'About one hour for most crocheters. It is worked flat in a simple repeat, so there is no shaping to slow you down.'
      },
      {
        q: 'What sizes are included?',
        a: 'Teen/Adult. Measurements and row counts are in the PDF, and the stitch pattern is easy to shorten or lengthen for other sizes.'
      },
      {
        q: 'Do I need to know how to crochet in the round?',
        a: 'No. The band is worked flat back and forth and seamed at the end, so it is a great first project for beginners.'
      }
    ]
  },
  {
    slug: 'fingerless-gloves-pattern',
    title: 'Easy Fingerless Gloves: Free Crochet Pattern (1.5–2 Hours)',
    excerpt:
      'Beginner-friendly fingerless gloves with stretchy ribbed cuffs and a comfy thumb opening—cozy everyday warmth you can crochet in under two hours.',
    metaDescription:
      'Free beginner fingerless gloves crochet pattern with materials, stitch abbreviations, step-by-step overview, fit tips and FAQ. Cozy, quick and adult-sized.',
    date: 'September 24, 2026',
    readingTime: '5 min read',
    coverImage: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790630126/Fingerless_Gloves.jpg',
    patternSlug: 'fingerless-gloves',
    category: 'Gloves',
    author: {
      name: 'Emma Lindqvist',
      role: 'Head Pattern Designer'
    },
    tableOfContents: [
      { id: 'materials', label: '1. Materials' },
      { id: 'abbreviations', label: '2. Stitch Abbreviations' },
      { id: 'steps', label: '3. Step-by-Step Overview' },
      { id: 'tips', label: '4. Tips' },
      { id: 'faq', label: '5. FAQ' }
    ],
    sections: [
      {
        id: 'materials',
        title: 'Materials',
        content:
          'These cozy fingerless gloves are a small, quick project — one skein makes a full pair.\n\n• 1 skein worsted weight (#4) yarn, approx. 120–160 yards\n• 4–5 mm crochet hook (US G/6–H/8)\n• Tapestry needle\n• Scissors\n• Stitch markers\n\nWool blends trap warmth beautifully, while acrylic or cotton blends are soft and easy to wash for everyday wear.'
      },
      {
        id: 'abbreviations',
        title: 'Stitch Abbreviations',
        content:
          'The gloves combine basic stitches with back-loop ribbing for stretch.\n\n• ch: Chain\n• sc: Single Crochet\n• hdc: Half Double Crochet\n• sl st: Slip Stitch\n• BLO: Back Loop Only (ribbing)\n• st(s): Stitch(es)\n• rnd: Round'
      },
      {
        id: 'steps',
        title: 'Step-by-Step Overview',
        content:
          'Each mitt is made in two stages: a ribbed cuff worked flat, then the hand worked in rounds along the cuff edge. Exact counts are in the PDF.',
        steps: [
          {
            step: 1,
            title: 'Crochet the Ribbed Cuff',
            instruction:
              'Work a short strip of back-loop-only ribbing until it comfortably wraps around your wrist, then join the short ends to form a tube.',
            tip: 'The cuff should feel snug but not tight — it needs to stretch over your hand each time you put it on.'
          },
          {
            step: 2,
            title: 'Pick Up Rounds for the Hand',
            instruction:
              'Rotate the cuff and work evenly spaced stitches around its long edge, joining with a slip stitch to start working in rounds.',
            tip: 'Use stitch markers at the quarter points to keep your stitch count even around the cuff.'
          },
          {
            step: 3,
            title: 'Leave the Thumb Opening',
            instruction:
              'Work the palm rounds as instructed, then skip the marked stitches and chain across to create the thumb opening before continuing upward.',
            tip: 'Try the mitt on right after this round — the thumb hole should sit naturally at the base of your thumb.'
          },
          {
            step: 4,
            title: 'Finish the Top Edge',
            instruction:
              'Work the final rounds even, then add a round of slip stitches for a neat, firm edge. Fasten off and weave in the ends.',
            tip: 'Make the second mitt exactly the same — the opening works symmetrically on either hand.'
          }
        ]
      },
      {
        id: 'tips',
        title: 'Tips',
        content:
          '• Crochet the cuff before anything else and check the fit — it controls how the whole mitt sits.\n• Keep your tension relaxed over the hand so the glove slides easily over the knuckles.\n• Weave tails into the ribbed cuff rather than the palm, where they can poke your hand.\n• Make a matching earwarmer from the same yarn for a complete winter set.'
      }
    ],
    finishingTips: [
      'Steam the cuff lightly so the ribbing lies flat and springs back.',
      'Check both mitts are the same length before weaving in the final ends.',
      'Pair with the Illuin Earwarmer for a matching handmade gift set.'
    ],
    faqs: [
      {
        q: 'Are these gloves suitable for beginners?',
        a: 'Yes. They are rated Easy: you only need chains, single crochet, half double crochet and back-loop ribbing, plus a simple skipped-stitch thumb opening.'
      },
      {
        q: 'What sizes are included?',
        a: 'Adult. Circumference and length measurements for each size are listed in the downloadable PDF.'
      },
      {
        q: 'Can I sell the finished gloves?',
        a: 'You are welcome to sell finished handmade items. Please do not resell or redistribute the digital PDF pattern itself.'
      }
    ]
  },
  {
    slug: 'crochet-hand-warmers',
    title: 'Crochet Hand Warmers: Easy Fit Guide + Beginner Tips',
    excerpt:
      'Learn how to crochet cozy hand warmers with beginner-friendly fit tips (wrist, thumb opening, and length). Includes a quick mini-guide and a printable PDF pattern upgrade.',
    metaDescription:
      'Crochet hand warmers made easy: a beginner fit guide with wrist, palm, and thumb-opening measurements in inches and cm, a mini BLO cuff guide, troubleshooting FAQ, and a printable PDF pattern.',
    date: 'October 1, 2026',
    readingTime: '7 min read',
    coverImage: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1790858760/Crochet_hand_warmers_flatlay_setup_2K_20261001144435.jpg',
    category: 'Gloves',
    author: {
      name: 'Emma Lindqvist',
      role: 'Head Pattern Designer'
    },
    quickSummary: {
      title: 'Quick Summary',
      bullets: [
        'Crochet hand warmers are a fast one-skein winter project: a wrist-to-palm tube with a thumb opening and open fingers.',
        'Measure wrist circumference, palm width, and hand length (inches + cm) before you start — fit is 90% of the result.',
        'The thumb opening follows one rule: chain the same number of stitches you skip below it.',
        'A back-loop-only (BLO) ribbed cuff keeps the wrist snug without being tight.',
        'The mini-guide below is free; a printable, photo-rich PDF pattern is available if you prefer to crochet from paper.'
      ]
    },
    tableOfContents: [
      { id: 'intro', label: '1. Why Crochet Hand Warmers?' },
      { id: 'hand-warmers-vs-fingerless-gloves', label: '2. Hand Warmers vs Fingerless Gloves' },
      { id: 'materials', label: '3. Materials Checklist' },
      { id: 'sizing-and-fit', label: '4. Sizing & Fit' },
      { id: 'thumb-opening', label: '5. Thumb Opening Basics' },
      { id: 'mini-guide', label: '6. Mini Guide: Cuff + Fit Check' },
      { id: 'conclusion', label: '7. Start Your Hand Warmers This Week' },
      { id: 'faq', label: '8. Troubleshooting FAQ' }
    ],
    sections: [
      {
        id: 'intro',
        title: 'Why Crochet Hand Warmers Are the Perfect Winter Project',
        content:
          'Crochet hand warmers are the fastest way to turn one cozy evening into a finished winter accessory. Unlike a full mitten, a hand warmer is a simple tube that covers your wrist and palm, leaves your fingers free, and opens at the thumb — so it works up quickly and fits almost everyone.\n\nThey are a perfect first (or fiftieth) winter project because they:\n\n• Use less than one skein of worsted yarn — a great stash-buster.\n• Take about 1–2 hours per pair, which makes them ideal for gifts, craft fairs, and holiday markets.\n• Keep hands warm while you type, drive, push a stroller, or crochet.\n• Teach real garment skills — gauge, measuring, and fit — on a tiny, low-risk canvas.\n\nIf you have ever finished a project only to find it too tight or too short, this guide is for you. Below you will find a plain-English fit guide, a thumb-opening rule you can reuse on any project, and a free mini-guide you can start today.'
      },
      {
        id: 'hand-warmers-vs-fingerless-gloves',
        title: 'Crochet Hand Warmers vs Fingerless Gloves',
        content:
          'They are close cousins, and the fit rules overlap, but they are not the same thing.\n\nCrochet hand warmers (also called wrist warmers or mitts) are worked as one piece that covers the wrist and palm. The fingers stay fully open and the thumb peeks through a single hole. There is no finger shaping, which is why they are so fast.\n\nFingerless gloves usually cover a little more: they extend past the knuckles and often include individual finger tubes or a shaped top edge around the fingers. They take longer and involve more counting, but they give extra warmth on windy days.\n\nNot sure which to make? Start with hand warmers. You will practice the same skills — a ribbed cuff, even rounds, and a skipped-stitch thumb opening — in half the time, then move on to our [free winter crochet patterns](/free-patterns) when you are ready for the full glove version.'
      },
      {
        id: 'materials',
        title: 'Materials Checklist',
        content:
          'One of the best things about crochet hand warmers is the tiny materials list. You can make a whole pair from leftovers.\n\n• Yarn: 1 skein worsted weight (#4), approx. 90–140 yards. A wool or wool-blend yarn traps heat and springs back; acrylic and cotton blends are soft, washable, and budget friendly.\n• Hook: 4–5 mm (US G/6–H/8). Match the hook to your yarn so the fabric is firm enough to block wind but still stretches over your hand.\n• Tapestry needle for weaving in ends.\n• Scissors.\n• 2 stitch markers — one for the first stitch of the round, one for the thumb position.\n• A tape measure: the single most useful tool in this whole guide.\n\nOptional but handy: a row counter, or a pencil and paper for tracking rounds, and a steamer if you plan to block your finished pair.'
      },
      {
        id: 'sizing-and-fit',
        title: 'Sizing & Fit: How to Measure Your Hand',
        content:
          'Fit is where hand warmers succeed or fail. Take 60 seconds to measure before you touch the hook — crocheting to your own numbers beats guessing every time.\n\nMeasure these three spots on your drawing hand (it is usually the larger one):\n\n• Wrist circumference: wrap the tape around the wrist bone. Most adults land on 6–8 in (15–20 cm).\n• Palm width: measure across the widest part of the palm, just below the knuckles, with the hand flat and relaxed. Typically 3–3.75 in (7.5–9.5 cm).\n• Length: from the mid-wrist crease to the base of the fingers (where the knuckles start). Usually 5–6 in (12.5–15 cm).\n\nNow add ease. A hand warmer should be snug, not skin-tight:\n\n• At the wrist, aim for about 0.5–1 in (1–2.5 cm) of negative ease so the cuff grips.\n• Across the palm, leave about 0.5 in (1–2 cm) of positive ease so your hand slides in comfortably.\n\nQuick check: the tube should pull on over your knuckles with a gentle tug and then sit without gaps at the wrist. If it spins around your hand, it is too big. If your fingers tingle after a minute, it is too tight.'
      },
      {
        id: 'thumb-opening',
        title: 'Thumb Opening Basics: Chain and Skip the Same Number',
        content:
          'Every thumb hole in crochet is basically the same trick, and once you know it you can add one to any tube, mitten, or sleeve.\n\nThe principle: skip the same number of stitches you chain.\n\n• Decide where the opening should sit, then mark it with a stitch marker on the round before you reach it.\n• Work to the marker, chain a small number (for example 4–6 chains, about 1–1.5 in / 3–4 cm), and skip the same number of stitches below.\n• Join back into the next unskipped stitch and keep working the round as normal.\n\nBecause the chains replace the skipped stitches, your stitch count stays the same and the fabric above the hole does not flare or pucker. The skipped stitches become the bottom edge of the opening; the chain becomes the top edge.\n\nTry the mitt on immediately after that round. Your thumb should rest in the opening without pulling and without a floppy gap. It is much easier to rip back one round now than to fix a hole later.'
      },
      {
        id: 'mini-guide',
        title: 'Mini Guide: Cuff Approach + Fit Check',
        content:
          'This free mini-guide gives you the shape of crochet hand warmers without the exact stitch counts (the row-by-row version with close-up photos is in the printable PDF).\n\nStep 1 — Build a ribbed cuff.\nCrochet a short flat strip of back-loop-only (BLO) ribbing. Work rows of single or half double crochet, inserting your hook under the back loop only on every stitch — that simple change turns a flat strip into stretchy, knit-look ribbing. Keep going until the strip wraps around your wrist snugly, then slip stitch the short ends together to form a tube.\n\nWhy BLO? The unworked front loops act like tiny hinges, so the cuff expands to go over your hand and then springs back to grip your wrist.\n\nStep 2 — Pick up for the hand.\nRotate the cuff and work evenly spaced stitches along its long edge (roughly 3 stitches per 2 rows is a sensible starting point), join with a slip stitch, and work plain rounds.\n\nStep 3 — Place the thumb opening.\nWork plain rounds until you reach the base of your thumb, then apply the chain-and-skip rule from the previous section. Mark the spot before you commit.\n\nStep 4 — Fit check.\nTry the mitt on and check three things: the cuff grips without leaving a red mark, the thumb sits in its opening without stretching, and the top edge lands just past your knuckles (or at the base of your fingers if you want it shorter). Adjust by adding or removing plain rounds — that is the only math this project needs.'
      },
      {
        id: 'conclusion',
        title: 'Start Your Crochet Hand Warmers This Week',
        content:
          'You now have everything you need to crochet hand warmers that actually fit: the three measurements that matter, the chain-and-skip rule for the thumb, a stretchy BLO cuff, and a simple fit check you can repeat on any project.\n\nIf you want to keep going, browse our [free winter crochet patterns](/free-patterns) for more quick winter makes, or head [back to the blog](/blog) for new tutorials every week.\n\nAnd if you would rather follow a clean, printable, photo-rich pattern than scroll on a screen, the full Fingerless Gloves pattern PDF is waiting below — US terms, stitch counts, and clear step photos.'
      }
    ],
    inArticleImages: [
      {
        afterSectionId: 'materials',
        src: '/images/blog/crochet-hand-warmers-materials.svg',
        alt: 'Flatlay of worsted yarn, crochet hook, scissors, stitch markers and a tape measure for crochet hand warmers',
        caption: 'Everything a pair of hand warmers needs — one skein, one hook, one afternoon.'
      },
      {
        afterSectionId: 'sizing-and-fit',
        src: '/images/blog/crochet-hand-warmers-fit.svg',
        alt: 'Diagram showing where to measure wrist circumference, palm width and hand length for crochet hand warmers',
        caption: 'Measure wrist, palm, and length first — then crochet to your own numbers.'
      }
    ],
    ctas: [
      {
        after: 'hand-warmers-vs-fingerless-gloves',
        headline: 'Want the printable version?',
        body: 'Get the Fingerless Gloves Crochet Pattern PDF (US terms + step-by-step photos + fit tips).',
        buttonLabel: 'Get the PDF Pattern',
        url: PAYHIP_HAND_WARMERS_URL
      },
      {
        after: 'mini-guide',
        headline: 'Upgrade to the photo-rich PDF',
        body: 'Printable layout, stitch counts, and clear step photos—made for beginners.',
        buttonLabel: 'View on Payhip',
        url: PAYHIP_HAND_WARMERS_URL
      },
      {
        after: 'conclusion',
        headline: 'Make cozy hand warmers this week',
        body: 'If you prefer a clean printable PDF (no scrolling), grab the pattern here.',
        buttonLabel: 'Get Pattern PDF',
        url: PAYHIP_HAND_WARMERS_URL
      }
    ],
    finishingTips: [
      'Try both hand warmers on together before weaving in the last tail — check that the pair matches in length and thumb placement.',
      'Steam lightly from the wrong side so the ribbing lies flat and keeps its spring.',
      'Weave tails into the ribbed cuff rather than the palm, so nothing scratches the inside of your hand.'
    ],
    faqs: [
      {
        q: 'My cuff is too tight — what did I do wrong?',
        a: 'Almost always tension or hook size. Rip back to the ribbing and redo it with one hook size larger, keeping your hand relaxed. The cuff should stretch over your knuckles with a gentle tug and then snap back — if it leaves a red mark on your wrist, it is too tight.'
      },
      {
        q: 'My thumb hole is too small (or too big). How do I fix it?',
        a: 'A thumb opening should measure about 1–1.5 in (3–4 cm). Too small means you skipped too few stitches; too big means you skipped too many or chained too loosely. Remember the rule: chain the same number you skip, then try the mitt on right after that round before moving on.'
      },
      {
        q: 'My seam is twisting and my edges look messy.',
        a: 'Twisting usually means you lost track of the first stitch of the round. Place a marker in that first stitch every round, join with a slip stitch into the first stitch (not into the turning chain), and keep the working yarn behind your work. Weave the starting tail along the seam on the wrong side to neaten the edge further.'
      }
    ]
  },
  {
    slug: 'crochet-fingerless-gloves-free-pattern-easy',
    title: 'Crochet Fingerless Gloves Free Pattern (Easy, US Terms)',
    excerpt:
      'Try this easy crochet fingerless gloves free pattern in US terms, with sizing tips and a simple thumb opening. Upgrade to the printable PDF for step-by-step photos and a clean layout.',
    metaDescription:
      'Easy crochet fingerless gloves free pattern in US crochet terms: beginner-friendly ribbed cuffs, simple rounds, and a chain-skip thumb opening, with sizing in inches and cm.',
    date: 'October 1, 2026',
    readingTime: '8 min read',
    coverImage: '/images/blog/free-fingerless-gloves-hero.svg',
    category: 'Gloves',
    author: {
      name: 'Emma Lindqvist',
      role: 'Head Pattern Designer'
    },
    quickSummary: {
      title: 'Quick Summary',
      bullets: [
        'Time: about 1.5–2 hours for a pair — a perfect evening or weekend project.',
        'Skill level: easy beginner, written in US crochet terms with basic stitches only.',
        'You will practice: back-loop ribbing, joined rounds, a chain-skip thumb opening, and simple fit measuring.',
        'Materials: one skein of worsted (#4) yarn, a 5 mm hook, a tapestry needle, and 2 stitch markers.',
        'The free basic pattern below is complete; the printable PDF adds photos, a full sizing table, and a polished finish.'
      ]
    },
    tableOfContents: [
      { id: 'intro', label: '1. Why Make These This Winter' },
      { id: 'materials', label: '2. Materials & Abbreviations' },
      { id: 'sizing', label: '3. Sizing Guide' },
      { id: 'free-pattern', label: '4. The Free Basic Pattern' },
      { id: 'free-pattern-steps', label: '5. Pattern Steps' },
      { id: 'conclusion', label: '6. Finishing & Next Steps' },
      { id: 'faq', label: '7. Troubleshooting FAQ' }
    ],
    sections: [
      {
        id: 'intro',
        title: 'Why You Will Love This Easy Fingerless Gloves Crochet Pair',
        content:
          'This easy crochet fingerless gloves free pattern is made for cold mornings, typing sessions, and gift season. A fingerless gloves crochet pair works up in under two hours, uses one skein of worsted yarn, and keeps your hands warm while your fingers stay free.\n\nEverything below is written from scratch in US crochet terms and uses only three stitches: chain, single crochet, and slip stitch. You will make a stretchy back-loop cuff, work the hand in simple joined rounds, and open a thumb hole with the chain-and-skip trick.\n\nIf you have already made our [crochet hand warmers](/blog/crochet-hand-warmers), the fit logic will feel familiar — they use the same three measurements, just without the finger coverage. And if you would rather follow photos than text, the printable PDF version is linked throughout this guide.\n\nReady to keep exploring? Browse our [free winter crochet patterns](/free-patterns) for more cozy, quick makes.'
      },
      {
        id: 'materials',
        title: 'Materials & Abbreviations (US Crochet Terms)',
        content:
          'Materials for one pair:\n\n• Yarn: 1 skein worsted weight (#4), approx. 120–160 yards. A wool blend is the warmest; acrylic and wool-acrylic mixes are soft, washable, and budget friendly.\n• Hook: 5 mm (US H/8). Move up to 5.5 mm if your tension is tight or your hands are large.\n• Tapestry needle, scissors, and 2 stitch markers.\n• Optional: a tape measure, for checking fit as you go.\n\nAbbreviations used in this pattern:\n\n• ch: chain\n• sc: single crochet (US)\n• sl st: slip stitch\n• BLO: back loop only\n• st(s): stitch(es)\n• rnd(s): round(s)\n• sk: skip\n\nGauge: 14 sc x 13 rnds = 4 in x 4 in (10 cm x 10 cm) worked in joined rounds with a 5 mm hook. A quick swatch gives you an exact fit; if you skip it, simply check the measurements as you go.'
      },
      {
        id: 'sizing',
        title: 'Sizing Guide: Wrist, Palm, and Length',
        content:
          'Good fit is what separates a glove you wear all winter from one that lives in a drawer. Measure your hand before you start — you only need three numbers, in inches or centimeters:\n\n• Wrist circumference: around the wrist bone. Typical adult range: 6–8 in (15–20 cm).\n• Palm circumference: around the widest part of the palm, just below the knuckles. Typical range: 7.5–9 in (19–23 cm).\n• Length: from the mid-wrist crease to the base of the fingers (where the knuckles start). Typical range: 5–6 in (12.5–15 cm).\n\nNow add ease. The cuff should grip gently — aim for about 0.5–1 in (1–2.5 cm) smaller than your wrist so it stretches. The hand should slide on over your knuckles with a little room to spare: about 0.5 in (1–2 cm) larger than your palm measurement.\n\nThe sample below fits an adult medium (about 8 in / 20 cm palm circumference). The adjustment notes inside the pattern show exactly where to add or remove stitches so the same free pattern can fit a teen, a large adult, or a smaller hand.'
      },
      {
        id: 'free-pattern',
        title: 'The Easy Crochet Fingerless Gloves Free Pattern',
        content:
          'Here is the complete free basic version, written from scratch in US crochet terms. It makes one pair of adult medium hand warmers with a simple thumb opening. Follow the five steps, then use the adjustment notes to make the fit your own.\n\nSample measurements (adult medium):\n\n• Cuff: 6.5 in (16.5 cm) long unstretched, about 2.5 in (6 cm) tall\n• Hand: about 8.5 in (21.5 cm) around, worked over 30 stitches\n• Total length: about 7 in (18 cm) from the top edge of the cuff to the finger edge\n\nAdjust for size:\n\n• Wrist: add or remove 2 cuff rows for roughly every 0.5 in (1 cm) of length — each row adds about 0.3 in (0.8 cm).\n• Hand width: pick up 2 more or 2 fewer stitches around the cuff edge, spaced evenly. Two stitches change the circumference by about 0.5 in (1.3 cm).\n• Thumb position: move the thumb round 1–2 rounds closer to or further from the cuff.\n• Length: add or remove plain rounds above the thumb opening to stop exactly at your knuckles.\n\nThe free version gives you a real, wearable pair. The printable PDF adds a full sizing table (XS–4XL), a photo for every step, and a cleaner finish.'
      },
      {
        id: 'free-pattern-steps',
        title: 'Free Pattern: Step-by-Step Instructions',
        content:
          'Work the cuff flat, join it into a tube, then work the hand in joined rounds. Both mitts are made exactly the same — the thumb opening works the same way on either hand, so there is no mirroring to worry about.',
        steps: [
          {
            step: 1,
            title: 'Make the ribbed cuffs (make 2)',
            instruction:
              'Ch 10. Row 1: sc in 2nd ch from hook and in each ch across (9 sc), turn. Rows 2 and beyond: ch 1, sc in the BLO of each st across (9 sc), turn. Repeat until the strip measures about 6.5 in (16.5 cm) — roughly 21 rows. It should wrap your wrist snugly with a little stretch.',
            tip: 'If your foundation chain is tight, use a larger hook for the chain only — the cuff has to stretch over your hand every time you put the mitt on.'
          },
          {
            step: 2,
            title: 'Join the cuff into a tube',
            instruction:
              'Fold the strip with the short ends together and slip stitch through both layers across, or seam it with a tapestry needle using a mattress stitch. Turn the tube right side out so the seam sits on the inside.',
            tip: 'Line up the ribbing ridges row for row before you seam, so the texture continues around the wrist without a jog.'
          },
          {
            step: 3,
            title: 'Pick up and work the hand in rounds',
            instruction:
              'Rotate the cuff so the long edge faces up. Work 30 sc evenly along that edge (about 3 stitches for every 2 rows), then sl st to the first st to join. Rnds 2–7: ch 1, sc in each st around, sl st to join. Place a marker in the first stitch of every round.',
            tip: 'Picking up an even number of stitches matters more than hitting exactly 30 — keep the count the same for both mitts and they will match.'
          },
          {
            step: 4,
            title: 'Leave the thumb opening',
            instruction:
              'Rnd 8: ch 1, sc 20, ch 5, sk 5, sc in the last 5 sts, sl st to join (30 sts). Rnds 9–16: ch 1, sc 20, sc in each of the 5 ch, sc 5, sl st to join (30 sts). Try the mitt on after rnd 8 — your thumb should sit in the gap without pulling.',
            tip: 'Chain the same number you skip: 4 chains and skip 4 for a smaller thumb, 6 and 6 for a larger one. The stitch count never changes.'
          },
          {
            step: 5,
            title: 'Finish the edge and weave in ends',
            instruction:
              'Work one optional round of sc for a firmer top edge, or leave the fabric plain for a softer finish. Fasten off and pull both tails through the inside of the ribbing with a tapestry needle. Repeat all five steps for the second mitt.',
            tip: 'Try the pair on before weaving in the final tail — adding one more round is easy while the yarn is still attached.'
          }
        ]
      },
      {
        id: 'conclusion',
        title: 'Finishing & Next Steps',
        content:
          'You now have a complete, original free basic pattern: two ribbed cuffs, joined rounds, and a thumb opening you can place anywhere. Make the first pair tonight, try them on, and adjust one number at a time until the fit feels made for your hand.\n\nLoved this project? Head [back to the blog](/blog) for more tutorials, or browse our [free winter crochet patterns](/free-patterns) to pick your next quick make.\n\nAnd when you are ready for the polished version, the printable PDF has the full sizing table and step photos waiting below.'
      }
    ],
    inArticleImages: [
      {
        afterSectionId: 'sizing',
        src: '/images/blog/free-fingerless-gloves-sizing.svg',
        alt: 'Where to measure wrist circumference, palm circumference and hand length for fingerless gloves',
        caption: 'Three numbers — wrist, palm, length — are all you need for a good fit.'
      },
      {
        afterSectionId: 'free-pattern-steps',
        src: '/images/blog/free-fingerless-gloves-steps.svg',
        alt: 'Step-by-step overview of the free crochet fingerless gloves pattern: cuff, join, rounds, thumb opening',
        caption: 'Five steps: cuff, join, rounds, thumb opening, finish.'
      }
    ],
    callouts: [
      {
        after: 'sizing',
        title: 'Fit Tip',
        tone: 'rose',
        body: 'Measure your palm below the knuckles, not across the knuckles, and keep the tape parallel to the floor. Then add about 0.5 in (1–2 cm) of ease so the glove slides on without stretching flat.'
      },
      {
        after: 'free-pattern-steps',
        title: 'Thumb Tip',
        tone: 'mint',
        body: 'Chain the same number you skip — always. Try the mitt on right after the thumb round: it is much easier to move the opening by one round now than to reopen it later.'
      }
    ],
    ctas: [
      {
        after: 'quick-summary',
        headline: 'Want the printable, photo-rich version?',
        body: 'Get the Fingerless Gloves Crochet Pattern PDF (US terms + step-by-step photos + fit tips).',
        buttonLabel: 'Get the PDF Pattern',
        url: PAYHIP_FREE_PATTERN_EASY_URL
      },
      {
        after: 'free-pattern',
        headline: 'Prefer a no-scroll printable PDF?',
        body: 'Clean layout + photo steps—made for beginners.',
        buttonLabel: 'View the PDF on Payhip',
        url: PAYHIP_FREE_PATTERN_EASY_URL
      },
      {
        after: 'free-pattern-steps',
        headline: 'Upgrade for the best experience',
        body: 'Printable pages, clearer photo guidance, and a polished finish.',
        buttonLabel: 'Get the Pattern PDF',
        url: PAYHIP_FREE_PATTERN_EASY_URL
      },
      {
        after: 'conclusion',
        headline: 'Make your next pair this week',
        body: 'If you want a neat printable PDF (US terms + photos), grab it here.',
        buttonLabel: 'Get the PDF',
        url: PAYHIP_FREE_PATTERN_EASY_URL
      }
    ],
    finishingTips: [
      'Block or steam both mitts so the ribbing lies flat and the pair finishes the same length.',
      'Weave tails into the cuff rather than the palm, so nothing rubs against your skin.',
      'Make the second mitt right away, with the same hook and tension, while the first one is fresh.'
    ],
    faqs: [
      {
        q: 'My cuff is too tight (or too loose). What did I do wrong?',
        a: 'The cuff should measure about 0.5–1 in (1–2.5 cm) less than your wrist so it stretches. Too tight means tight chains or too few rows — redo it with a larger hook for the foundation chain, or add 2 rows. Too loose means too many rows or a hook that is too big — remove 2 rows or drop one hook size.'
      },
      {
        q: 'My thumb opening is too small or too big.',
        a: 'A comfortable thumb opening is about 1–1.5 in (3–4 cm). The rule is always the same: chain the same number you skip. Chain 4 and skip 4 for a smaller thumb, 6 and 6 for a larger one, and try the mitt on right after that round before you continue.'
      },
      {
        q: 'There is a gap where I joined the cuff or started a new round.',
        a: 'Gaps come from a loose join. Work your first stitch into the same stitch you joined into, keep the joining slip stitch and turning chain snug, and pull the yarn tail tight before you fasten off. Weave the tail through the gap itself and the fabric closes up.'
      },
      {
        q: 'Which yarn is best for softness and warmth?',
        a: 'A wool or wool-blend worsted yarn is the warmest and springs back so the cuff keeps its grip. For sensitive skin or easy-care gifts, choose a soft acrylic or a superwash merino blend that is machine washable. Avoid novelty or scratchy fibers — they rub at the wrist where the fit is snug.'
      }
    ]
  },
  {
    slug: 'fingerless-gloves-crochet-fit-guide',
    title: 'Fingerless Gloves Crochet Fit Guide: Thumb Opening + Sizing Fixes (US Terms)',
    excerpt:
      'Fix the most common fingerless gloves crochet fit problems—thumb opening too tight/loose, wrist fit, length, and gaps. Includes a sizing checklist and beginner-friendly adjustment tips.',
    metaDescription:
      'Fingerless gloves crochet fit guide: fix a thumb opening that is too tight or loose, plus cuff, length, and gap problems. Sizing table and beginner-friendly fixes in US crochet terms.',
    canonical: 'https://wintercrochetpatterns.com/blog/fingerless-gloves-crochet-fit-guide',
    date: 'October 1, 2026',
    readingTime: '8 min read',
    coverImage: '/images/blog/fingerless-gloves-fit-hero.svg',
    category: 'Gloves',
    author: {
      name: 'Emma Lindqvist',
      role: 'Head Pattern Designer'
    },
    quickSummary: {
      title: 'Quick Summary',
      bullets: [
        'Measure three spots first: wrist circumference, palm width, and length from wrist crease to knuckles (inches + cm below).',
        'The thumb opening rule: chain the same number you skip — then adjust by only 1–2 chains at a time.',
        'Size up when the fabric will not stretch over your knuckles; size down when the mitt spins or bunches.',
        'Change one thing at a time — hook size, then cuff rows, then rounds — and try on after every adjustment.'
      ]
    },
    tableOfContents: [
      { id: 'intro', label: '1. Why Fit Issues Happen' },
      { id: 'measure', label: '2. Measure Before You Crochet' },
      { id: 'thumb-opening', label: '3. Thumb Opening Too Tight / Too Loose' },
      { id: 'cuff', label: '4. Wrist Cuff Too Tight / Too Loose' },
      { id: 'length', label: '5. Length Too Short / Too Long' },
      { id: 'troubleshooting', label: '6. Gaps, Messy Edges & Twisting Seams' },
      { id: 'conclusion', label: '7. Fix the Fit, Keep the Gloves' },
      { id: 'faq', label: '8. Troubleshooting FAQ' }
    ],
    sections: [
      {
        id: 'intro',
        title: 'Why Fingerless Gloves Crochet Fit Goes Wrong',
        content:
          'A fingerless gloves crochet project rarely fails because of the pattern — it fails because of fit. One pair rides up, another pinches at the thumb, and a third looks great until you spot a gap at the join. The good news: almost every problem comes down to three things — yarn, hook size, and tension — and each one has a quick fix.\n\nThis guide is the troubleshooting companion to our patterns. You will measure your hand properly in inches and centimeters, learn the one rule behind every thumb opening, and get specific fixes for cuffs, length, gaps, and twisting seams. Everything is written in beginner-friendly US crochet terms, so it works whether you are on your first pair or your fifth.\n\nIf you still need a project to practice on, start with our [easy crochet fingerless gloves free pattern](/blog/crochet-fingerless-gloves-free-pattern-easy) — or compare notes with our [crochet hand warmers](/blog/crochet-hand-warmers) guide, which uses the same measurements without thumb shaping.'
      },
      {
        id: 'measure',
        title: 'Measure Before You Crochet (Inches + cm)',
        content:
          'Fit fixes start with numbers, not luck. Grab a soft tape measure and write down three measurements before you touch the hook:\n\n• Wrist circumference: wrap the tape around the wrist bone, snug but not tight. Typical adult range: 6–8 in (15–20 cm).\n• Palm width: measure across the widest part of the palm, just below the knuckles, with the hand flat and relaxed. Typical range: 3–3.75 in (7.5–9.5 cm).\n• Length: from the wrist crease to the base of the fingers (your knuckles). Typical range: 5–6 in (12.5–15 cm).\n\nUse the table below as a starting point, not a guarantee — hands vary, and your own tension matters more than any chart.',
        table: {
          headers: ['Size', 'Wrist', 'Palm', 'Length (wrist → knuckles)'],
          rows: [
            ['Adult S', '6–6.5 in (15–16.5 cm)', '7–7.5 in (18–19 cm)', '5–5.5 in (12.5–14 cm)'],
            ['Adult M', '6.5–7.5 in (16.5–19 cm)', '7.5–8.5 in (19–21.5 cm)', '5.5–6 in (14–15 cm)'],
            ['Adult L', '7.5–8 in (19–20 cm)', '8.5–9 in (21.5–23 cm)', '6–6.5 in (15–16.5 cm)']
          ],
          caption:
            'Guidance only, not guaranteed sizing. Measure your own hand and treat these as a starting point.'
        }
      },
      {
        id: 'thumb-opening',
        title: 'Thumb Opening Too Tight or Too Loose',
        content:
          'This is the fix most crocheters come for. A thumb opening that pinches or gapes comes from one thing: the chain and the skipped stitches below it not matching.\n\nThe principle: chain X, skip X.\n\n• Work across the round to the marked spot.\n• Chain a small number, then skip exactly the same number of stitches below it.\n• Join back into the next unskipped stitch and keep working the round as normal.\n\nBecause the chains replace the skipped stitches, your stitch count never changes and the fabric above the hole stays flat instead of flaring.\n\nAdjusting in small steps:\n\n• Opening too tight? Add 1–2 chains — and skip 1–2 more stitches with them (chain 5 and skip 5 instead of 4 and 4).\n• Opening too loose? Take out 1–2 chains the same way.\n• Check after that single round: put the mitt on. Your thumb should sit straight in the gap with no sideways pull and no floppy room.\n\nGaps at the join? Two habits close them: work the first stitch of the next round into the same stitch you joined into, and pull each chain loop up to normal height before you stitch into it. Loose chains are the usual culprit.',
        steps: [
          {
            step: 1,
            title: 'Mark before you commit',
            instruction:
              'Try the mitt on while working plain rounds and mark the round where the base of your thumb sits. Move the marker one round up or down before you start chaining — placement fixes half of all thumb complaints.',
            tip: 'Mark the round with a stitch marker rather than counting from memory; rounds blur together faster than you think.'
          },
          {
            step: 2,
            title: 'Chain and skip the same number',
            instruction:
              'Work to the marker, chain the chosen number (4–6 for most adults), skip the same number of stitches below, then join back into the next unskipped stitch. Count the round out loud once to confirm the total has not changed.',
            tip: 'Chain one extra only if your chains are naturally tight — a firm chain sits smaller than a relaxed one.'
          },
          {
            step: 3,
            title: 'Try on, then adjust by 1–2',
            instruction:
              'Put the mitt on immediately. Pinching means add 1–2 chains (and skips); gaping means remove them. Rip back only that one round rather than guessing at the next pair.',
            tip: 'Write the number that works for you in your notes — your thumb sizing is the same on every future pair.'
          }
        ]
      },
      {
        id: 'cuff',
        title: 'Wrist Cuff Too Tight or Too Loose',
        content:
          'The wrist cuff is supposed to grip, not strangle. BLO (back loop only) ribbing is what makes that possible: every unworked front loop acts like a tiny hinge, so the fabric expands to go over your hand and springs back around your wrist.\n\nCuff too tight:\n\n• Add rows to the cuff strip before joining — each row adds about 0.3 in (0.8 cm) of length around the wrist.\n• If the ribbing itself feels rigid, work the foundation chain with one hook size larger, keeping the rest of the cuff as is.\n• Check: the cuff should stretch over your knuckles with a gentle tug and leave no mark.\n\nCuff too loose:\n\n• Remove 2 rows, or work the cuff with one hook size smaller.\n• Make sure you are actually in the back loop — a cuff worked through both loops has almost no stretch and slides around all day.\n\nSimple rule: the cuff strip should measure about 0.5–1 in (1–2.5 cm) less than your wrist measurement, because the ribbing does the rest.'
      },
      {
        id: 'length',
        title: 'Length Too Short or Too Long',
        content:
          'Length problems are the easiest to fix, because you only add or remove whole rounds or rows — no reshaping required.\n\nToo short (stops before your knuckles):\n\n• Add plain rounds (or rows, if you work flat) until the top edge sits at the base of your fingers.\n• Add the same number above the thumb opening on both mitts so the pair matches.\n\nToo long (bunches at the knuckles):\n\n• Remove the same number of rounds from both mitts, counting back from the top edge.\n\nKeep the stitch count consistent while you do it: changing the length never changes how many stitches are in a round. If your count drifts, you are accidentally increasing or decreasing — place a marker in the first stitch of every round and count once per round before moving on.'
      },
      {
        id: 'troubleshooting',
        title: 'Gaps, Messy Edges & Twisting Seams',
        content:
          'Once the big three — cuff, thumb, and length — are right, these smaller issues are quick wins.\n\nGaps at the join:\n\n• Work the first stitch into the same stitch as the join and keep that slip stitch firm.\n• Weave the starting tail through the gap itself; the hole closes as if it was never there.\n\nMessy edges:\n\n• Keep the starting chain snug but not tight — a loose chain shows up as a row of loops down the edge.\n• Insert the hook under both loops of the last stitch of each row; catching only one loop makes the edge scalloped.\n\nTwisting seam:\n\n• Mark the first stitch of every round so you never lose the start.\n• Keep the working yarn behind the piece and join with a slip stitch into the first stitch, not into the chain.\n• If the tube still twists, the seam was probably sewn with the ribbing misaligned. Re-thread the tapestry needle and line up the ridges row for row.'
      },
      {
        id: 'conclusion',
        title: 'Fix the Fit, Keep the Gloves',
        content:
          'Fit is a skill, not a talent. Measure first, change one thing at a time, and try on after every adjustment — a pair that finally fits will outlast every project you rushed through.\n\nIf you want the measurement notes, stitch counts, and photo guidance in one place, the printable PDF is linked below.\n\nStill building your queue? Browse our [free winter crochet patterns](/free-patterns), revisit the [easy crochet fingerless gloves free pattern](/blog/crochet-fingerless-gloves-free-pattern-easy) for a practice pair, or head [back to the blog](/blog) for more fit tips.'
      }
    ],
    inArticleImages: [
      {
        afterSectionId: 'measure',
        src: '/images/blog/gloves-measurements.svg',
        alt: 'Where to measure for fingerless gloves: wrist circumference, palm width, and length to the knuckles',
        caption: 'Wrist, palm, length — in inches and centimeters.'
      },
      {
        afterSectionId: 'thumb-opening',
        src: '/images/blog/thumb-opening-diagram.svg',
        alt: 'Diagram of the thumb opening rule: chain the same number of stitches you skip',
        caption: 'Chain X, skip X: the stitch count never changes.'
      }
    ],
    callouts: [
      {
        after: 'measure',
        title: 'Fit Tip',
        tone: 'rose',
        body: 'Measure with the tape parallel to the floor and your hand relaxed. A fist or a stretched hand changes the number by up to 0.5 in (1 cm).'
      },
      {
        after: 'thumb-opening',
        title: 'Thumb Tip',
        tone: 'mint',
        body: 'Chain the same number you skip, then try the mitt on after that one round. Moving the opening by one round is easy now; reopening it later is not.'
      },
      {
        after: 'length',
        title: 'Common Mistake',
        tone: 'rose',
        body: 'Changing hook size, cuff rows, and thumb chains all in one session. Adjust one thing at a time, try on, then adjust again — otherwise you will never know what fixed the fit.'
      }
    ],
    ctas: [
      {
        after: 'quick-summary',
        headline: 'Want a printable PDF with photo steps?',
        body: 'Get the Fingerless Gloves Crochet Pattern PDF (US terms + step-by-step photos + fit tips).',
        buttonLabel: 'Get the PDF Pattern',
        url: PAYHIP_FIT_GUIDE_URL
      },
      {
        after: 'thumb-opening',
        headline: 'Make fit easy (no guessing)',
        body: 'The PDF includes clear photo steps and a clean printable layout.',
        buttonLabel: 'View Pattern PDF',
        url: PAYHIP_FIT_GUIDE_URL
      },
      {
        after: 'end',
        headline: 'Ready to finish your gloves?',
        body: 'Grab the printable PDF pattern and follow along with step-by-step photos.',
        buttonLabel: 'Get the Pattern',
        url: PAYHIP_FIT_GUIDE_URL
      }
    ],
    finishingTips: [
      'Try both mitts on together before weaving in the last tail so the pair matches.',
      'Steam the ribbing lightly so the cuff lies flat and keeps its spring.',
      'Write down your stitch counts and round numbers the first time — the second pair takes half as long.'
    ],
    faqs: [
      {
        q: 'What is the best yarn for hand warmers and gloves?',
        a: 'A worsted weight (#4) wool or wool-blend yarn is the best all-around choice: it traps heat, breathes, and springs back so cuffs keep their grip. For sensitive skin or easy-care gifts, use a soft acrylic or a superwash merino blend. Avoid scratchy novelty fibers — the wrist is the snugest part of the mitt and will rub.'
      },
      {
        q: 'What hook size range should I use?',
        a: 'For worsted (#4) yarn, 4.5–5.5 mm (US G/7–I/9) covers most gauges. Start at 5 mm (US H/8), make a small swatch, and move up if the fabric will not stretch over your knuckles or down if it looks loose and holey. Keep the same hook for both mitts.'
      },
      {
        q: 'How do I make my gloves warmer?',
        a: 'Three simple changes: use a wool-blend yarn instead of acrylic, go down one hook size for a denser fabric, and add a round or two so the mitt reaches further up your fingers. A longer BLO cuff over the wrist also blocks cold air.'
      },
      {
        q: 'Can I make fingerless gloves for kids?',
        a: 'Yes. Measure the child’s hand the same way — a typical 6–8 year old lands near a 5 in (12.5 cm) wrist and a 4–4.5 in (10–11.5 cm) palm. Use a lighter yarn and a smaller hook, or simply scale the adult numbers down: fewer cuff rows, fewer stitches picked up, and a smaller thumb opening (chain 3, skip 3).'
      },
      {
        q: 'Why are my finished gloves stiff?',
        a: 'Stiffness usually comes from tension or fiber. Loosen your grip, go up one hook size, and choose wool or acrylic over cotton, which has little give. A little steam relaxes the fabric dramatically — hold the iron a few inches away and let the steam do the work.'
      },
      {
        q: 'How do I avoid thumb discomfort?',
        a: 'The thumb opening should sit at the base of your thumb with no pulling. Rubbing means the hole is too small: add 1–2 chains and skip 1–2 more stitches. Bunching means it is too big: remove chains the same way. If the position feels wrong, move the thumb round one round closer to or further from the cuff.'
      }
    ]
  }
];

export const FAQ_ITEMS = [
  {
    question: 'How do I download and print the free PDF patterns?',
    answer:
      'Every pattern page features a direct "Download Free PDF" button. Click it to open the PDF in a new tab, then save or print it from your browser. All our PDFs are laid out in clean standard Letter/A4 format with high-contrast text for effortless home printing.'
  },
  {
    question: 'Are these patterns suitable for total beginners?',
    answer:
      'Yes! We intentionally design our patterns with beginner accessibility in mind. The Easy and Cute Baby Beanie and the Illuin Earwarmer use simple stitches and minimal shaping, so you can finish your first project in about an hour. Every guide includes a stitch glossary, step-by-step overview, and clear sizing notes.'
  },
  {
    question: 'Can I substitute the suggested yarn brands and weights?',
    answer:
      'Absolutely. On every pattern page and inside the PDF, we list the yarn weight category (e.g. Worsted #4) and the target gauge. As long as your swatch matches the stitches-per-inch measurement, you can substitute any soft acrylic, wool, cotton, or blend you love.'
  },
  {
    question: 'Can I sell items made from these free crochet patterns?',
    answer:
      'Yes, you are warmly invited to sell finished physical handmade items that you crochet from our patterns at craft fairs or online stores. We only ask that you do not resell, redistribute, or claim the digital PDF pattern files or photos as your own.'
  },
  {
    question: 'What is included in the Free Winter Starter Pack?',
    answer:
      'The Winter Starter Pack is a curated digital bundle containing all 4 printable winter patterns, a printer-friendly ink-saver edition, our master yarn substitution chart, and a comprehensive stitch abbreviation cheat sheet.'
  },
  {
    question: 'Do your patterns include inclusive size options?',
    answer:
      'Yes! Our wearable patterns include multi-size breakdowns: the baby beanie covers newborn–12 months, the Cardigan with Granny Squares includes multiple adult sizes, and the gloves and earwarmer include teen/adult measurements with guidance for adjusting.'
  }
];
