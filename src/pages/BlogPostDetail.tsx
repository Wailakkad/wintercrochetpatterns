import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../data/posts';
import { PATTERNS } from '../data/patterns';
import { AdSlot } from '../components/AdSlot';
import { SEO } from '../components/SEO';
import {
  Calendar,
  Clock,
  ChevronRight,
  Download,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Scissors,
  Bookmark,
  Share2,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { YarnBallIcon, SheepIcon } from '../components/icons';
import { BlogCta } from '../components/BlogCta';
import { TipCallout } from '../components/TipCallout';
import { getDownloadUrl } from '../utils/downloads';

/** Matches inline links written as [anchor text](url) inside section content. */
const RICH_LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/**
 * Renders section content as plain text (line breaks preserved) while turning
 * `[label](url)` into a Router <Link> for internal URLs and a safe external
 * <a target="_blank" rel="noopener noreferrer"> for absolute URLs.
 */
function renderRichText(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const pattern = new RegExp(RICH_LINK_PATTERN.source, 'g');
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const label = match[1];
    const url = match[2];
    const className =
      'font-medium text-[#7A3E55] underline decoration-rose-200 underline-offset-2 hover:decoration-[#7A3E55] transition-colors';

    nodes.push(
      url.startsWith('/') ? (
        <Link key={`link-${key++}`} to={url} className={className}>
          {label}
        </Link>
      ) : (
        <a
          key={`link-${key++}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {label}
        </a>
      )
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

export const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const matchingPattern = PATTERNS.find((p) => p.slug === post.patternSlug);
  // Direct download URL derived from the stored Drive link (never mutates the data).
  const downloadUrl = matchingPattern ? getDownloadUrl(matchingPattern) : undefined;

  return (
    <div className="py-8 sm:py-12">
      <SEO
        title={`${post.title} — Crochet Tutorial`}
        description={post.metaDescription ?? post.excerpt}
        canonical={post.canonical}
        ogType="article"
        ogImage={post.coverImage}
        publishedTime={post.date}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-[#7A3E55] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/blog" className="hover:text-[#7A3E55] transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800 truncate">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-medium">
            <span className="text-[#7A3E55] font-semibold uppercase tracking-wider">{post.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {post.date}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-3 pt-4 border-t border-rose-100">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8D7E5] text-[#7A3E55]">
              <SheepIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">{post.author.name}</p>
              <p className="text-[11px] text-slate-500">{post.author.role}</p>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="max-w-4xl mx-auto mb-10 overflow-hidden rounded-3xl border border-rose-100 bg-[#FFF7EF] shadow-sm">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full aspect-16/9 object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Quick Summary Box */}
        {post.quickSummary && (
          <section
            aria-label={post.quickSummary.title}
            className="max-w-4xl mx-auto mb-10 rounded-2xl border border-rose-200 bg-[#FFF7EF]/70 p-6 sm:p-7"
          >
            <h2 className="font-display text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#7A3E55]" />
              {post.quickSummary.title}
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 leading-relaxed">
              {post.quickSummary.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{renderRichText(bullet)}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* CTAs / callouts placed right after the Quick Summary box */}
        {(post.ctas?.some((c) => c.after === 'quick-summary') ||
          post.callouts?.some((c) => c.after === 'quick-summary')) && (
          <div className="max-w-4xl mx-auto mb-10 space-y-4">
            {post.callouts
              ?.filter((c) => c.after === 'quick-summary')
              .map((c) => (
                <TipCallout key={c.title} title={c.title} body={c.body} tone={c.tone} />
              ))}
            {post.ctas
              ?.filter((c) => c.after === 'quick-summary')
              .map((c) => (
                <BlogCta key={c.headline} cta={c} />
              ))}
          </div>
        )}

        {/* Article Layout with Sidebar for Desktop Ad & Quick Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Article Body (8 cols) */}
          <main className="lg:col-span-8 space-y-10">
            {/* Table of Contents */}
            <nav aria-label="Table of contents" className="rounded-2xl border border-rose-100 bg-[#FFF7EF]/50 p-6">
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[#7A3E55] mb-3 flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-[#7A3E55]" />
                In this guide:
              </h2>
              <ol className="space-y-2 text-xs sm:text-sm">
                {post.tableOfContents.map((toc) => (
                  <li key={toc.id}>
                    <a
                      href={`#${toc.id}`}
                      className="text-slate-700 hover:text-[#7A3E55] hover:underline font-medium"
                    >
                      {toc.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Mobile In-between Sections Ad */}
            <div className="lg:hidden">
              <AdSlot id={`blog-mobile-top-${post.slug}`} format="horizontal" />
            </div>

            {/* Article Sections */}
            {post.sections.map((section, sIdx) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
                <h2 className="font-display text-2xl font-bold text-slate-900 border-b border-rose-100/80 pb-2">
                  {section.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-700 whitespace-pre-line leading-relaxed">
                  {renderRichText(section.content)}
                </p>

                {/* Optional data table (e.g. sizing guidance) */}
                {section.table && (
                  <div className="overflow-x-auto rounded-2xl border border-rose-100 bg-white shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-rose-100 bg-[#FFF7EF]/70">
                          {section.table.headers.map((header) => (
                            <th
                              key={header}
                              className="px-4 py-3 font-display text-[11px] font-bold uppercase tracking-wider text-[#7A3E55] whitespace-nowrap"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rowIdx) => (
                          <tr key={rowIdx} className={rowIdx % 2 === 1 ? 'bg-[#FFFDFB]' : 'bg-white'}>
                            {row.map((cell, cellIdx) => (
                              <td
                                key={cellIdx}
                                className="border-t border-rose-50 px-4 py-3 text-slate-700"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {section.table.caption && (
                      <p className="border-t border-rose-100 px-4 py-3 text-[11px] text-slate-500">
                        {section.table.caption}
                      </p>
                    )}
                  </div>
                )}

                {/* If section has detailed steps */}
                {section.steps && (
                  <div className="mt-6 space-y-4">
                    {section.steps.map((st) => (
                      <div
                        key={st.step}
                        className="rounded-2xl border border-rose-100 bg-white p-5 shadow-xs"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F8D7E5] font-display text-xs font-bold text-[#7A3E55]">
                            {st.step}
                          </span>
                          <h3 className="font-display text-base font-bold text-slate-900">
                            {st.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                          {st.instruction}
                        </p>
                        {st.tip && (
                          <div className="mt-3 ml-10 rounded-xl bg-amber-50/80 border border-amber-200/60 p-3 text-xs text-amber-900">
                            <span className="font-semibold text-amber-800">Pro Tip: </span>
                            {st.tip}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* In-article images for this section */}
                {post.inArticleImages
                  ?.filter((img) => img.afterSectionId === section.id)
                  .map((img, imgIdx) => (
                    <figure
                      key={`${img.src}-${imgIdx}`}
                      className="overflow-hidden rounded-2xl border border-rose-100 bg-[#FFF7EF]"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-auto"
                      />
                      {img.caption && (
                        <figcaption className="px-4 py-3 text-xs text-slate-500 text-center">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}

                {/* Branded tip callouts for this section */}
                {post.callouts
                  ?.filter((c) => c.after === section.id)
                  .map((c) => (
                    <TipCallout key={c.title} title={c.title} body={c.body} tone={c.tone} />
                  ))}

                {/* Promotional CTA blocks (placed after their configured section) */}
                {post.ctas
                  ?.filter((cta) => cta.after === section.id)
                  .map((cta) => (
                    <BlogCta key={cta.headline} cta={cta} />
                  ))}

                {/* Inject ad between section 2 and 3 */}
                {sIdx === 1 && (
                  <div className="my-8">
                    <AdSlot id={`blog-mid-article-${post.slug}`} format="in-content" />
                  </div>
                )}
              </section>
            ))}

            {/* Finishing Tips */}
            <section className="rounded-2xl border border-rose-100 bg-[#FFFDFB] p-6 shadow-xs">
              <h2 className="font-display text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-rose-500" />
                Designer Finishing Checklist
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {post.finishingTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            {post.faqs && post.faqs.length > 0 && (
              <section id="faq" className="scroll-mt-24 space-y-4">
                <h2 className="font-display text-2xl font-bold text-slate-900 border-b border-rose-100/80 pb-2">
                  FAQ
                </h2>
                <div className="space-y-3">
                  {post.faqs.map((faq, idx) => (
                    <div key={idx} className="rounded-2xl border border-rose-100 bg-white p-5 shadow-xs">
                      <h3 className="font-display text-sm font-bold text-slate-900 flex items-start gap-2">
                        <HelpCircle className="w-4 h-4 text-[#7A3E55] shrink-0 mt-0.5" />
                        <span>{faq.q}</span>
                      </h3>
                      <p className="mt-2 pl-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* End-of-article CTAs (after="end") */}
            {post.ctas
              ?.filter((cta) => cta.after === 'end')
              .map((cta) => (
                <BlogCta key={cta.headline} cta={cta} />
              ))}

            {/* End of article Download PDF Card */}
            {matchingPattern && (
              <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-[#FFF7EF] via-[#FFF5F9] to-[#F8D7E5]/50 p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55]">
                      Take it offline
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                      Download the Printable PDF Guide
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-md">
                      Includes the printer-friendly checklist, size breakdown ({matchingPattern.sizes}), and materials list.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2.5 w-full sm:w-auto shrink-0">
                    <a
                      href={downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7A3E55] px-6 py-3 text-xs font-semibold text-white shadow-sm hover:bg-[#582639] transition-all cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </a>
                    <Link
                      to={`/patterns/${matchingPattern.slug}`}
                      className="inline-flex items-center justify-center gap-1 text-xs font-medium text-[#7A3E55] hover:underline"
                    >
                      <span>View Pattern Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </main>

          {/* Desktop Sidebar (4 cols) with AdSlot & Matching Pattern Quick Card */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Matching Pattern Card */}
            {matchingPattern && (
              <div className="sticky top-24 rounded-2xl border border-rose-100 bg-white p-5 shadow-xs">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7A3E55] block mb-2">
                  Matching Pattern
                </span>
                <Link to={`/patterns/${matchingPattern.slug}`} className="block overflow-hidden rounded-xl bg-rose-50 mb-3">
                  <img
                    src={matchingPattern.imageUrl}
                    alt={matchingPattern.title}
                    className="w-full aspect-4/3 object-cover hover:scale-103 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <h4 className="font-display text-base font-bold text-slate-900">
                  {matchingPattern.title}
                </h4>
                <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                  {matchingPattern.excerpt}
                </p>

                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#7A3E55] py-2.5 text-xs font-semibold text-white hover:bg-[#582639] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Free PDF</span>
                </a>

                {/* Sidebar AdSlot */}
                <div className="mt-8 pt-6 border-t border-rose-100">
                  <AdSlot id={`blog-sidebar-${post.slug}`} format="rectangle" />
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};
