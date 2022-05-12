const homeCoffeshopButton = document.querySelector('.home-coffeshop__button');
gsap.to('.home', { width: '100%', duration: 1 });
gsap.to('.navigation', { display: 'block' });

homeCoffeshopButton.addEventListener('click', () => {
  $('html, body').animate(
    {
      scrollTop: $('.menu').offset().top,
    },
    1000,
  );
});
