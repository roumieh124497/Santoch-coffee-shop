const menuSection = document.querySelector('.menu');

document.addEventListener('scroll', () => {
  const menuSectionY = menuSection.getBoundingClientRect().y;
  const menuSectionHeight = menuSection.getBoundingClientRect().height;
  const clientHeight = document.documentElement.clientHeight;
  // console.log(clientHeight);
  console.log(menuSectionY);
  if (menuSectionY < 0) {
    gsap.to('.product--1', { duration: 0.5, marginRight: '0px', opacity: 1 });
    gsap.to('.product--2', {
      delay: 0.5,
      duration: 0.5,
      marginLeft: '0px',
      opacity: 1,
    });
    gsap.to('.product--3', {
      delay: 1,
      duration: 0.5,
      marginRight: '0px',
      opacity: 1,
    });
    gsap.to('.product--4', {
      delay: 1.5,
      duration: 0.5,
      marginLeft: '0px',
      opacity: 1,
    });
    gsap.to('.product--5', {
      delay: 2,
      duration: 0.5,
      marginRight: '0px',
      opacity: 1,
    });
    gsap.to('.product--6', {
      delay: 2.5,
      duration: 0.5,
      marginLeft: '0px',
      opacity: 1,
    });
    gsap.to('.product--7', {
      delay: 3,
      duration: 0.5,
      marginRight: '0px',
      opacity: 1,
    });
    gsap.to('.product--8', {
      delay: 3.5,
      duration: 0.5,
      marginLeft: '0px',
      opacity: 1,
    });
  }
});
