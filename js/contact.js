const contactSection = document.querySelector('.contact');

document.addEventListener('scroll', () => {
  const contactSectionY = contactSection.getBoundingClientRect().y;
  const contactSectionHeight = contactSection.getBoundingClientRect().height;
  const clientHeight = document.documentElement.clientHeight;

  if (clientHeight > contactSectionY + (contactSectionHeight * 2) / 3) {
    gsap.to('.contact-contect__container', {
      duration: 1,

      opacity: 1,
    });
    gsap.to('.contact-form__container', {
      duration: 1,

      opacity: 1,
    });
  }
});
