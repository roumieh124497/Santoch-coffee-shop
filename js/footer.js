const upButton = document.querySelector('.uppBotton');

upButton.addEventListener('click', () => {
  $('html, body').animate(
    {
      scrollTop: $('.home').offset().top,
    },
    1000,
  );
});
