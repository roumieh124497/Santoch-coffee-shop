const offerSection = document.querySelector('.offer');

document.addEventListener('scroll', () => {
  const offerSectionY = offerSection.getBoundingClientRect().y;
  const offerSectionHeight = offerSection.getBoundingClientRect().height;
  const clientHeight = document.documentElement.clientHeight;

  if (clientHeight > offerSectionY + (offerSectionHeight * 2) / 3) {
    gsap.to('.offer-card1', { duration: 0.5, opacity: 1, marginLeft: '0px' });
    gsap.to('.offer-card2', {
      delay: 0.5,
      duration: 0.5,
      opacity: 1,
      marginLeft: '0px',
    });
    gsap.to('.offer-card3', {
      delay: 1,
      duration: 0.5,
      opacity: 1,
      marginLeft: '0px',
    });
  }
});
