import { useEffect } from 'react';

interface PageMeta {
  title: string;
  description: string;
}

/* Upsert a <meta> tag, keyed by name or property. */
function upsertMeta(key: 'name' | 'property', value: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${key}="${value}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(key, value);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/* Per-route SEO: keeps the document title, description, canonical URL and the
   shared OG/Twitter tags in sync with the active page and language. Crawlers
   that execute JS pick these up; static crawlers fall back to index.html. */
export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);

    const { pathname } = window.location;
    const url = `https://tharlei.com${pathname}`;
    upsertMeta('property', 'og:url', url);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description]);
}
