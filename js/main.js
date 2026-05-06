/* Reveal.js initialization */
window.addEventListener('DOMContentLoaded', () => {
  Reveal.initialize({
    width: 1920,
    height: 1080,
    margin: 0.04,
    minScale: 0.2,
    maxScale: 2.0,
    hash: true,
    history: true,
    controls: true,
    progress: true,
    slideNumber: 'c/t',
    transition: 'slide',
    transitionSpeed: 'default',
    backgroundTransition: 'fade',
    pdfSeparateFragments: false,
    plugins: [RevealNotes, RevealHighlight],
  });
});
