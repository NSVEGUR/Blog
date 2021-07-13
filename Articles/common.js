'use-strict';

const nav = document.querySelector('.course-navigation');
const navBtn = document.querySelector('.art');
const homeBtn = document.querySelector('.hom');
const modeBtn = document.querySelector('.mode');

const theme = function (flag) {
  if (flag) {
    document.querySelector('body').style.color = '#000000';
    document.querySelector('body').style.backgroundColor = '#f2f2f2';
    localStorage.setItem('modeFlag', 0);
  }
  else {
    document.querySelector('body').style.color = '#ffffff';
    document.querySelector('body').style.backgroundColor = '#121212';
    localStorage.setItem('modeFlag', 1);
  }
}

modeBtn.addEventListener('click', () => {
  Number(localStorage.getItem('modeFlag')) ? theme(1) : theme(0);
})

homeBtn.addEventListener('click',
  () => {
    window.location = "../../index.html"
  })

navBtn.addEventListener('click',
  () => {
    nav.scrollIntoView({
      behavior: "smooth"
    })
  })

nav.querySelectorAll('li').forEach((e, index) => {
  e.addEventListener('click',
    () => {
      const section = document.querySelector(`.section--${index}`);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start", inline: "nearest"
      })
    })
})