window.sr = new ScrollReveal();

var fadeFromTop = {
  delay: 100,
  distance: '20px',
  origin: 'top',
}

var fadeFromBottom = {
  delay: 100,
  distance: '25px',
  origin: 'bottom',
}

ScrollReveal().reveal(
  '#logo_stylized, .sectHead, .sectPara, .sectLinks, .sectSubHead', fadeFromTop
);

ScrollReveal().reveal(
  '.svgItem', fadeFromBottom
);
