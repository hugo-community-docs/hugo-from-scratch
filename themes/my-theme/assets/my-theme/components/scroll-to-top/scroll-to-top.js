export function initScrollToTop(threshold = 300) {
	const btn = document.getElementById('scroll-to-top');
	if (!btn) return;

	const update = () => btn.classList.toggle('is-visible', scrollY > threshold);

	addEventListener('scroll', update, { passive: true });
	btn.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
	update();
}
