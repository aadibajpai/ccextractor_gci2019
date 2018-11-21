window.sr = new ScrollReveal();

var fadeFromTop = {
  delay: 250,
  distance: '20px',
  origin: 'top',
}

var fadeFromBottom = {
  delay: 250,
  distance: '25px',
  origin: 'bottom',
}

ScrollReveal().reveal(
  '#logo_stylized, #gci_logo_stylized, #gsoc_logo_stylized, h1, h2, h3, h4, h5, h6, p, .btn-info, .sectHead, .sectPara, .sectLinks, .sectSubHead', fadeFromTop
);

ScrollReveal().reveal(
  '.mainBackgroundItem, .sect2BackgroundItem, .sect3BackgroundItem', fadeFromBottom
);
