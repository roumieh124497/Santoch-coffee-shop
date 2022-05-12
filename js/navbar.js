const navigationSection = document.querySelector('.navigation');
const navBarBtnContainer = document.querySelector('.navBarBtnContainer');
const navButton = document.querySelector('.burger-custom__button');
const upperDiv = document.querySelector('.upperDiv');
const middleDiv = document.querySelector('.middleDiv');
const lowerDiv = document.querySelector('.lowerDiv');

const homeBtn2 = document.querySelector('.home-btn2');
const menuBtn2 = document.querySelector('.menu-btn2');
const aboutBtn2 = document.querySelector('.about-btn2');
const contactBtn2 = document.querySelector('.contact-btn2');

let isClicked = true;

function clicked() {
  middleDiv.style.marginLeft = '80px';
  upperDiv.style.position = 'absolute';
  upperDiv.style.top = '50%';
  upperDiv.style.transform = 'translateY(50%)';
  upperDiv.style.transform = 'rotate(45deg)';
  lowerDiv.style.position = 'absolute';
  lowerDiv.style.bottom = '40%';
  lowerDiv.style.transform = 'translateY(-50%)';
  lowerDiv.style.transform = 'rotate(-45deg)';
  if (window.innerWidth < 450) {
    navBarBtnContainer.style.display = 'grid';
    navBarBtnContainer.style.gridTemplateColumns = '1fr 1fr';
  } else {
    navBarBtnContainer.style.display = 'flex';
  }
  isClicked = false;
}

function unclicked() {
  middleDiv.style.marginLeft = '0px';
  upperDiv.style.position = 'static';
  upperDiv.style.top = '0%';
  upperDiv.style.transform = 'translateY(0%)';
  upperDiv.style.transform = 'rotate(0deg)';
  lowerDiv.style.position = 'static';
  lowerDiv.style.bottom = '0%';
  lowerDiv.style.transform = 'translateY(0%)';
  lowerDiv.style.transform = 'rotate(0deg)';
  navBarBtnContainer.style.display = 'none';
  isClicked = true;
}
//home scoll
$('.home-btn').click(function () {
  $('html, body').animate(
    {
      scrollTop: $('.home').offset().top,
    },
    1000,
  );
});
//menu scroll
$('.menu-btn').click(function () {
  $('html, body').animate(
    {
      scrollTop: $('.menu').offset().top,
    },
    1000,
  );
});

//about scroll
$('.about-btn').click(function () {
  $('html, body').animate(
    {
      scrollTop: $('.about').offset().top,
    },
    1000,
  );
});
//contact scroll
$('.contact-btn').click(function () {
  $('html, body').animate(
    {
      scrollTop: $('.contact').offset().top,
    },
    1000,
  );
});

homeBtn2.addEventListener('click', () => {
  $('html, body').animate(
    {
      scrollTop: $('.home').offset().top,
    },
    1000,
  );
  unclicked();
});
menuBtn2.addEventListener('click', () => {
  $('html, body').animate(
    {
      scrollTop: $('.menu').offset().top,
    },
    1000,
  );
  unclicked();
});
aboutBtn2.addEventListener('click', () => {
  $('html, body').animate(
    {
      scrollTop: $('.about').offset().top,
    },
    1000,
  );
  unclicked();
});
contactBtn2.addEventListener('click', () => {
  $('html, body').animate(
    {
      scrollTop: $('.contact').offset().top,
    },
    1000,
  );
  unclicked();
});

if (window.innerWidth <= 700) {
  navButton.style.top = '90px';
  navBarBtnContainer.style.top = '140px';
}

document.addEventListener('scroll', () => {
  const navigationSectionY = navigationSection.getBoundingClientRect().y;
  const navigationSectionHeight =
    navigationSection.getBoundingClientRect().height;
  const navTotalHieght = navigationSectionY + navigationSectionHeight;

  if (window.innerWidth <= 700) {
    navButton.style.top = '30px';
    navBarBtnContainer.style.top = '80px';
    if (!(navTotalHieght < 0)) {
      navButton.style.top = '90px';
      navBarBtnContainer.style.top = '140px';
    }
    return;
  }
  if (navTotalHieght < 0) {
    navButton.style.display = 'flex';
  } else {
    navButton.style.display = 'none';
    unclicked();
  }
});

navButton.addEventListener('click', () => {
  if (isClicked) {
    clicked();
  } else {
    unclicked();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 700) {
    navButton.style.top = '90px';
    navBarBtnContainer.style.top = '140px';
  }
});
