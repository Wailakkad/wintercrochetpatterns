import fs from 'fs';
import path from 'path';

const pdfDir = path.resolve(process.cwd(), 'public/pdfs');
if (!fs.existsSync(pdfDir)) {
  fs.mkdirSync(pdfDir, { recursive: true });
}

function createPdfContent(title, category, subtitle, sections) {
  // A clean, valid minimal PDF-1.4 generator
  const contentLines = [
    `BT`,
    `/F1 22 Tf`,
    `50 740 Td`,
    `(${title}) Tj`,
    `/F1 12 Tf`,
    `0 -24 Td`,
    `(${subtitle}) Tj`,
    `0 -16 Td`,
    `(Winter Crochet Patterns - Free Printable Guide) Tj`,
    `0 -30 Td`,
    `/F1 14 Tf`,
    `(Pattern Overview & Sizing:) Tj`,
    `/F1 10 Tf`,
    `0 -18 Td`,
    `(${sections[0] || 'Suitable for all skill levels. Printable standard format.'}) Tj`,
    `0 -24 Td`,
    `/F1 14 Tf`,
    `(Materials & Hooks:) Tj`,
    `/F1 10 Tf`,
    `0 -18 Td`,
    `(${sections[1] || 'Yarn: Bulky or Worsted weight. Hook: As specified in pattern.'}) Tj`,
    `0 -24 Td`,
    `/F1 14 Tf`,
    `(Stitch Instructions & Steps:) Tj`,
    `/F1 10 Tf`,
    `0 -18 Td`,
    `(${sections[2] || 'Follow the step-by-step instructions provided in the online guide.'}) Tj`,
    `0 -24 Td`,
    `/F1 14 Tf`,
    `(Care & Finishing:) Tj`,
    `/F1 10 Tf`,
    `0 -18 Td`,
    `(${sections[3] || 'Hand wash cold, lay flat to dry. Enjoy your cozy winter handmade creation!'}) Tj`,
    `0 -40 Td`,
    `/F1 9 Tf`,
    `(C 2026 Winter Crochet Patterns - Free for personal use and handmade gift sales.) Tj`,
    `ET`
  ];

  const stream = contentLines.join('\n');
  const streamLength = Buffer.byteLength(stream);

  const objects = [
    `%PDF-1.4\n`,
    `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`,
    `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`,
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n`,
    `4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`,
    `5 0 obj\n<< /Length ${streamLength} >>\nstream\n${stream}\nendstream\nendobj\n`
  ];

  let offset = 0;
  const offsets = [];
  let pdfBody = '';

  for (let i = 0; i < objects.length; i++) {
    offsets.push(offset);
    pdfBody += objects[i];
    offset = Buffer.byteLength(pdfBody);
  }

  const xrefStart = offset;
  let xref = `xref\n0 6\n0000000000 65535 f \n`;
  for (let i = 1; i <= 5; i++) {
    xref += String(offsets[i]).padStart(10, '0') + ` 00000 n \n`;
  }

  const trailer = `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

  return Buffer.from(pdfBody + xref + trailer);
}

const patterns = [
  {
    filename: 'cozy-beanie-hat-pattern.pdf',
    title: 'Cozy Beanie Hat Pattern',
    subtitle: 'Beginner-Friendly Ribbed Winter Hat (Adult S/M & L)',
    sections: [
      'Gauge: 12 hdc-blo sts x 8 rows = 4 inches. Negative ease ensures snug elastic fit.',
      'Materials: 180 yds Bulky #5 yarn, 6.0mm hook, faux fur pompom, tapestry needle.',
      'Steps: Ch 36. Row 1: hdc in 2nd ch. Row 2-44: hdc-blo. Seam into tube, cinch crown tightly.',
      'Care: Hand wash cold with wool wash, dry flat. Remove pompom before washing.'
    ]
  },
  {
    filename: 'fingerless-gloves-pattern.pdf',
    title: 'Fingerless Gloves Pattern',
    subtitle: 'Cozy Textured Wrist & Hand Warmers with Thumb Opening',
    sections: [
      'Gauge: 15 hdc x 11 rows = 4 inches. Sized for Small (6.5"), Medium (7.5"), Large (8.5").',
      'Materials: 150 yds Worsted #4 yarn, 5.0mm hook, locking stitch markers, yarn needle.',
      'Steps: Work 28 rows sc-blo ribbing for cuff. Join round, work 4 rnds hdc, ch 5 for thumb.',
      'Care: Machine wash gentle cycle in mesh bag or hand wash, dry flat.'
    ]
  },
  {
    filename: 'beginner-crochet-jacket-pattern.pdf',
    title: 'Beginner Crochet Jacket Pattern',
    subtitle: '5-Panel Oversized Cardigan Jacket (Sizes XS to 4XL)',
    sections: [
      'Gauge: 9 hdc x 7 rows = 4 inches. Relaxed drop-shoulder silhouette with wooden buttons.',
      'Materials: 950-1200 yds Bulky #5 yarn, 8.0mm hook, 6.5mm hook for trim, 4 wooden buttons.',
      'Steps: Crochet 1 back panel, 2 front panels, 2 sleeves. Mattress seam and add ribbed collar.',
      'Care: Store folded to prevent stretching. Hand wash or delicate soak only.'
    ]
  },
  {
    filename: 'winter-ear-warmer-headband-pattern.pdf',
    title: 'Winter Ear Warmer Headband Pattern',
    subtitle: '1-Hour Twisted Knot Ear Warmer (Baby, Child & Adult)',
    sections: [
      'Gauge: 14 sts x 10 rows = 4 inches in camel stitch (half double crochet in 3rd loop).',
      'Materials: 90 yds Worsted #4 yarn, 5.5mm hook, yarn needle, scissors.',
      'Steps: Ch 16. Work 50 rows 3rd-loop hdc. Fold ends into 4-layer sandwich, seam across.',
      'Care: Hand wash warm, block flat with steam. Keep ears toasty all winter.'
    ]
  },
  {
    filename: 'winter-crochet-starter-pack.pdf',
    title: 'Winter Crochet Starter Pack (Bundle)',
    subtitle: 'Complete 4-Pattern Winter Collection + Yarn Substitution Cheat Sheet',
    sections: [
      'Includes: Cozy Beanie, Fingerless Gloves, Beginner Jacket, Twisted Headband.',
      'Bonus: Master Yarn Substitution Matrix (Bulky #5, Worsted #4, Aran weights).',
      'Bonus: Stitch glossary with US and UK terms, visual gauge ruler markings.',
      'Winter Crochet Patterns - Free printable collection for personal use and gifting.'
    ]
  }
];

for (const p of patterns) {
  const buf = createPdfContent(p.title, '', p.subtitle, p.sections);
  fs.writeFileSync(path.join(pdfDir, p.filename), buf);
  console.log(`Generated ${p.filename}`);
}
