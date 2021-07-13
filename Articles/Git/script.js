'use-strict';

const nav = document.querySelector('.course-navigation');
const navBtn = document.querySelector('.art');
const homeBtn = document.querySelector('.hom');

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