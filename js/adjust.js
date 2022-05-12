const footerSection = document.querySelector('footer');
const offerSection2 = document.querySelector('.offer');
const body = document.querySelector('body');

document.addEventListener('scroll', () => {
  const footerSectionY = footerSection.getBoundingClientRect().y;
  const offerSectionY2 = offerSection2.getBoundingClientRect().y;

  const clientHeight = document.documentElement.clientHeight;
  if (window.innerWidth >= 350) {
    if (clientHeight > footerSectionY || clientHeight > offerSectionY2) {
      body.style.padding = '0';
    } else {
      body.style.padding = '25px';
    }
  }
});
