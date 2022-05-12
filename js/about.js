const aboutSection = document.querySelector('.about');

document.addEventListener('scroll', () => {
  const aboutSectionY = aboutSection.getBoundingClientRect().y;
  const aboutSectionHeight = aboutSection.getBoundingClientRect().height;
  const clientHeight = document.documentElement.clientHeight;

  if (clientHeight > aboutSectionY + (aboutSectionHeight * 2) / 3) {
    gsap.to('.image-container', { duration: 1, opacity: 1, marginLeft: '0' });
    gsap.to('.about-container', { duration: 1, opacity: 1, marginRight: '0' });
  }
});
