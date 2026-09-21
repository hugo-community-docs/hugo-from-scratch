import { initScrollToTop } from '../components/scroll-to-top/scroll-to-top';

// If the feature isn't enabled at build time, this will be tree-shaken away
{{ if site.Params.scrollToTop }}
initScrollToTop();
{{ end }}

console.log("Hello world");
