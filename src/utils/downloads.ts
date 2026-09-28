import { Pattern } from '../types';

/**
 * COMPLIANCE SWITCH
 * -----------------
 * `true`  -> Download buttons open the Google Drive PDF stored in `pdfUrl`.
 * `false` -> Download buttons open `sourceUrl` (the original designer page)
 *            instead, and the Drive PDF link is never handed to visitors.
 * Flip this one flag if redistribution rights for the PDFs are not confirmed.
 */
export const USE_DRIVE_PDF_DOWNLOADS = true;

// Matches the file id in Google Drive "view" links:
// https://drive.google.com/file/d/<ID>/view?usp=drive_link
const DRIVE_FILE_ID_PATTERN = /drive\.google\.com\/file\/d\/([^/?#]+)/;

/**
 * Extracts the Google Drive file id from a Drive URL.
 * Returns null when the URL is not a Drive /file/d/ link.
 */
export function getDriveFileId(url: string): string | null {
  const match = url.match(DRIVE_FILE_ID_PATTERN);
  return match ? match[1] : null;
}

/**
 * Turns a Drive "view" link into a direct download URL
 * (https://drive.google.com/uc?export=download&id=<ID>).
 * Non-Drive URLs (e.g. local /pdfs/ files) are returned untouched, so the
 * helper works for both hosted PDFs and Drive-hosted PDFs.
 *
 * NOTE: the stored `pdfUrl` in the data files stays exactly as provided —
 * only the href of the download button is derived from it here.
 */
export function toDirectDownloadUrl(url: string): string {
  const fileId = getDriveFileId(url);
  return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : url;
}

/**
 * Single place that decides where every "Download PDF" button points.
 * Switch `USE_DRIVE_PDF_DOWNLOADS` (or supply `sourceUrl` values) to change
 * behaviour across the whole site without touching the page components.
 */
export function getDownloadUrl(pattern: Pick<Pattern, 'pdfUrl' | 'sourceUrl'>): string {
  if (!USE_DRIVE_PDF_DOWNLOADS) {
    return pattern.sourceUrl ?? pattern.pdfUrl;
  }
  return toDirectDownloadUrl(pattern.pdfUrl);
}

/** True when the target leaves the site (used for target="_blank" links). */
export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}
