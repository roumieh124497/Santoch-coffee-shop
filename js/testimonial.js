const testominalSection = document.querySelector('.testimonials');

document.addEventListener('scroll', () => {
  const testominalSectionY = testominalSection.getBoundingClientRect().y;
  const testominalSectionHeight =
    testominalSection.getBoundingClientRect().height;
  const clientHeight = document.documentElement.clientHeight;

  if (clientHeight > testominalSectionY + (testominalSectionHeight * 2) / 3) {
    gsap.to('.about-images .div1', { duration: 0.4, opacity: 1 });
    gsap.to('.about-images .div2', { delay: 0.4, duration: 0.4, opacity: 1 });
    gsap.to('.about-images .div3', { delay: 0.8, duration: 0.4, opacity: 1 });
    gsap.to('.about-images .div4', { delay: 1.2, duration: 0.4, opacity: 1 });
    gsap.to('.about-images .div5', { delay: 1.6, duration: 0.4, opacity: 1 });
    gsap.to('.about-images .div6', { delay: 2, duration: 0.4, opacity: 1 });
    gsap.to('.about-images .div7', { delay: 2.4, duration: 0.4, opacity: 1 });
    gsap.to('.about-images .div8', { delay: 2.8, duration: 0.4, opacity: 1 });
    gsap.to('.about-images .div9', { delay: 3.2, duration: 0.4, opacity: 1 });
    gsap.to('.about-images .div10', { delay: 3.6, duration: 0.4, opacity: 1 });
    gsap.to('.about-images .div11', { delay: 4, duration: 0.4, opacity: 1 });
    gsap.to('.about-images .div12', { delay: 4.4, duration: 0.4, opacity: 1 });
  }
});
