import React, { useEffect, useState } from 'react';

/**
 * AdSlot Component — Adsterra monetization
 *
 * Two ad units are wired in (both provided by the site owner):
 *  1. Native Banner  -> profitableratecpmnetwork widget (any format except 'rectangle')
 *  2. Banner 300x250 -> highrevenueformat iframe banner (format 'rectangle')
 *
 * WHY IFRAMES: both vendor snippets are written for plain HTML pages and rely on
 * `document.write` / a hard-coded container id. Injecting them straight into the
 * React document would either wipe the page (document.write after load) or clash
 * when several slots share the same container id. Each slot therefore gets its
 * own sandboxed-by-isolation `srcDoc` document, so the codes run exactly as the
 * network expects and duplicate ids never collide.
 *
 * The native unit reports its rendered height to the parent via postMessage so
 * the iframe resizes to the ad instead of clipping it.
 */

interface AdSlotProps {
  id: string;
  format?: 'horizontal' | 'rectangle' | 'in-content';
  className?: string;
}

type AdKind = 'native' | 'banner-300x250';

/* ------------------------------------------------------------------ */
/* Ad unit #1 — Native Banner (3:1 widget layout)                      */
/* ------------------------------------------------------------------ */
const NATIVE_INVOKE_SRC =
  'https://pl31567325.profitableratecpmnetwork.com/192b56be9b0b18254fe23f3ae8c6412f/invoke.js';
const NATIVE_CONTAINER_ID = 'container-192b56be9b0b18254fe23f3ae8c6412f';

/* ------------------------------------------------------------------ */
/* Ad unit #2 — Banner 300x250 (iframe format)                         */
/* ------------------------------------------------------------------ */
const BANNER_KEY = '9bf3dbcdf29facc9275b7e10ae69b8ca';
const BANNER_INVOKE_SRC = `https://www.highrevenueformat.com/${BANNER_KEY}/invoke.js`;

/** Reports the ad document height to the parent page so the iframe can auto-size. */
const heightReporter = (slotId: string): string => `
<script>
  (function () {
    function report() {
      var el = document.documentElement;
      var h = Math.max(el.scrollHeight, document.body ? document.body.scrollHeight : 0);
      h = Math.max(120, Math.min(h, 700));
      parent.postMessage({ type: 'ad-slot-height', id: ${JSON.stringify(slotId)}, height: h }, '*');
    }
    window.addEventListener('load', report);
    window.addEventListener('resize', report);
    setInterval(report, 2000);
    if (window.ResizeObserver) { new ResizeObserver(report).observe(document.documentElement); }
  })();
</script>`;

/** Complete standalone document for the Native Banner unit. */
const buildNativeDoc = (slotId: string): string => `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  html, body {
    margin: 0 !important; padding: 0 !important; background: transparent;
    width: 100% !important; text-align: center !important;
    display: flex !important; justify-content: center !important;
  }

  /* HORIZONTAL ROW: every ad card sits side by side (left -> right) on one line.
     wrap is kept only so the network's own <=400px rule can stack them on phones.
     margin:0 auto + max-width:100% block the network's inline margin-left:auto
     (which is what pushed the widget to the right edge). */
  #${NATIVE_CONTAINER_ID} {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: wrap !important;
    align-items: stretch !important;
    justify-content: center !important;
    gap: 10px !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 auto !important;
    padding: 0 !important;
  }

  /* Cards share the line equally — also cancels their inline width:100%. */
  #${NATIVE_CONTAINER_ID} > * {
    flex: 1 1 0 !important;
    min-width: 0 !important;
    max-width: none !important;
    margin: 0 !important;
    align-self: stretch !important;
  }
  @media screen and (max-width: 400px) {
    #${NATIVE_CONTAINER_ID} > * { flex: 1 1 100% !important; }
  }

  /* Bigger creatives: each image fills its card instead of keeping a small
     intrinsic size, height scales with the real aspect ratio. */
  #${NATIVE_CONTAINER_ID} img,
  #${NATIVE_CONTAINER_ID} video {
    display: block;
    width: 100% !important;
    max-width: 100% !important;
    height: auto !important;
    max-height: 320px !important;
    object-fit: contain;
  }
  #${NATIVE_CONTAINER_ID} a { display: block; text-decoration: none; }
</style>
</head>
<body>
<script async="async" data-cfasync="false" src="${NATIVE_INVOKE_SRC}"></script>
<div id="${NATIVE_CONTAINER_ID}"></div>
<script>
  /* The network injects its cards asynchronously and may wrap them in extra
     <div> level(s). If so, the CSS row above would only see one child and the
     cards would never line up — so walk down to the level that actually holds
     the cards, turn IT into the row, and distribute its children evenly. */
  (function () {
    var CID = ${JSON.stringify(NATIVE_CONTAINER_ID)};
    function els(node) {
      return [].filter.call(node.children, function (n) { return n.nodeType === 1; });
    }
    /* Wrapper = one child whose own children are all the same tag (a list of
       cards). A real card holds mixed tags (img/div/a), so we stop there. */
    function looksLikeList(list) {
      return list.length > 1 && list.every(function (n) { return n.tagName === list[0].tagName; });
    }
    function row(el) {
      el.style.setProperty('display', 'flex', 'important');
      el.style.setProperty('flex-direction', 'row', 'important');
      el.style.setProperty('flex-wrap', 'wrap', 'important');
      el.style.setProperty('align-items', 'stretch', 'important');
      el.style.setProperty('justify-content', 'center', 'important');
      el.style.setProperty('gap', '10px', 'important');
      el.style.setProperty('width', '100%', 'important');
      el.style.setProperty('max-width', '100%', 'important');
      el.style.setProperty('margin', '0 auto', 'important');
      el.style.setProperty('padding', '0', 'important');
    }
    function share(child) {
      child.style.setProperty('flex', '1 1 0', 'important');
      child.style.setProperty('min-width', '0', 'important');
      child.style.setProperty('max-width', 'none', 'important');
      child.style.setProperty('margin', '0', 'important');
      child.style.setProperty('align-self', 'stretch', 'important');
    }
    function normalize() {
      var c = document.getElementById(CID);
      if (!c) return;
      var level = c;
      for (var i = 0; i < 3; i++) {
        var kids = els(level);
        if (kids.length === 1 && looksLikeList(els(kids[0]))) { level = kids[0]; continue; }
        break;
      }
      row(level);
      els(level).forEach(share);
    }
    normalize();
    var tries = 0;
    var iv = setInterval(function () { normalize(); if (++tries > 30) clearInterval(iv); }, 500);
    if (window.MutationObserver) {
      new MutationObserver(normalize).observe(document.documentElement, { childList: true, subtree: true });
    }
  })();
</script>
${heightReporter(slotId)}
</body>
</html>`;

/** Complete standalone document for the 300x250 banner unit. */
const buildBannerDoc = (): string => `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  html, body { margin: 0; padding: 0; background: transparent; overflow: hidden; }
  body { display: flex; align-items: center; justify-content: center; }
</style>
</head>
<body>
<script>
  atOptions = {
    'key' : '${BANNER_KEY}',
    'format' : 'iframe',
    'height' : 250,
    'width' : 300,
    'params' : {}
  };
</script>
<script src="${BANNER_INVOKE_SRC}"></script>
</body>
</html>`;

export const AdSlot: React.FC<AdSlotProps> = ({
  id,
  format = 'horizontal',
  className = ''
}) => {
  const kind: AdKind = format === 'rectangle' ? 'banner-300x250' : 'native';
  const [nativeHeight, setNativeHeight] = useState<number>(340);

  // Native ad pushes its content height up from inside the iframe.
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const data = event.data as { type?: string; id?: string; height?: number };
      if (!data || data.type !== 'ad-slot-height' || data.id !== id) return;
      if (typeof data.height === 'number') setNativeHeight(data.height);
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [id]);

  const srcDoc = kind === 'native' ? buildNativeDoc(id) : buildBannerDoc();

  const frameStyles: React.CSSProperties =
    kind === 'native'
      ? // FULL WIDTH: without an explicit width an <iframe> defaults to 300px,
        // which also triggers the network's <=350px stacked layout and squeezes
        // the cards into unreadable slivers.
        { width: '100%', maxWidth: '100%', height: nativeHeight }
      : { width: 300, height: 250 };

  const wrapperStyles = format === 'rectangle' ? 'min-h-[268px]' : 'min-h-[220px]';

  /**
   * Three-level centered shell (see src/index.css .native-ad-center):
   *   <aside>  w-full, centered          -> spans the full content width
   *     <div>  w-full max-w-6xl          -> keeps the ad inside the page measure
   *       <div> w-full, margin auto      -> the ad mount node, always middle
   * This structure (plus the CSS override) neutralises any float / auto-margin /
   * right alignment the ad network injects.
   */
  return (
    <aside
      aria-label="Advertisement"
      className={`native-ad-center col-span-full w-full my-10 mx-auto flex justify-center rounded-xl border border-rose-100 bg-[#FFF7EF]/60 px-4 py-3 text-center transition-colors ${wrapperStyles} ${className}`}
    >
      <div className="w-full max-w-6xl flex justify-center">
        <div
          className="w-full flex flex-col items-center justify-center text-center"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <span className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-rose-800/50">
            Advertisement
          </span>
          <iframe
            key={id}
            title={`Advertisement ${id}`}
            srcDoc={srcDoc}
            loading="lazy"
            scrolling="no"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            className="border-0 bg-transparent w-full"
            style={frameStyles}
          />
        </div>
      </div>
    </aside>
  );
};
