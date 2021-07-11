'use strict';

const splash = document.querySelector('.splash');
const home = document.getElementById('#section1');
const articles = document.getElementById('#section2');
const works = document.getElementById('#section3');
const articlesBtn = document.querySelector('.art');
const worksBtn = document.querySelector('.pro');
const homeBtn = document.querySelector('.hom');

if (sessionStorage.isVisited) {
  splash.classList.add('display-none');
}

if (!sessionStorage.isVisited) {
  document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
      splash.classList.add('display-none');
    }, 3000);
  });
  sessionStorage.isVisited = 'true';
}
let flagOverlay = 1;
let dropDown = document.querySelector('.intro');
let dropOverlay = document.querySelector('.body-overlay');


const light = function () {
  document.querySelector('html').style.color = '#000000';
  document.querySelector('html').style.backgroundColor = '#f3f3f3';
  document.querySelector('.mode').textContent = '☾';
  document.querySelector('.mode').style.backgroundColor = '#000000';
  document.querySelector('.mode').style.color = '#ffffff';
  document.querySelector('.drop').style.color = '#000000';
  localStorage.setItem('themeCount', '1');
}

const dark = function () {
  document.querySelector('html').style.color = '#ffffff';
  document.querySelector('html').style.backgroundColor = '#121212';
  document.querySelector('.mode').textContent = '✹';
  document.querySelector('.mode').style.backgroundColor = '#ffffff';
  document.querySelector('.mode').style.color = '#000000';
  document.querySelector('.drop').style.color = '#ffffff';
  localStorage.setItem('themeCount', '0');
}

if (localStorage.isVisited) {
  Number(localStorage.getItem('themeCount')) ? light() : dark();
}
if (!localStorage.isVisited) {
  light();
  localStorage.isVisited = 'true';
}
document.querySelector('.mode').addEventListener
  ('click', function () {
    Number(localStorage.getItem('themeCount')) ? dark() : light();
  });

document.querySelector('.drop').addEventListener
  ('click', function () {
    dropDown.classList.toggle('hidden');
    dropOverlay.classList.toggle('hidden');
    flagOverlay ? document.querySelector('.drop').textContent = '–' : document.querySelector('.drop').textContent = '≡';
    flagOverlay = flagOverlay ? 0 : 1;
  });

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !dropDown.classList.contains('hidden')) {
    dropDown.classList.add('hidden');
    dropOverlay.classList.add('hidden');
    flagOverlay ? document.querySelector('.drop').textContent = '–' : document.querySelector('.drop').textContent = '≡';
    flagOverlay = flagOverlay ? 0 : 1;
  }
});

document.querySelector('.body-overlay').addEventListener('click', function () {
  dropDown.classList.add('hidden');
  dropOverlay.classList.add('hidden');
  flagOverlay ? document.querySelector('.drop').textContent = '–' : document.querySelector('.drop').textContent = '≡';
  flagOverlay = flagOverlay ? 0 : 1;
})


homeBtn.addEventListener('click',
  (e) => {
    e.preventDefault();
    home.scrollIntoView({
      behavior: "smooth"
    })
  })

articlesBtn.addEventListener('click',
  (e) => {
    e.preventDefault();
    articles.scrollIntoView({
      behavior: "smooth"
    })
  })

worksBtn.addEventListener('click',
  (e) => {
    e.preventDefault();
    works.scrollIntoView({
      behavior: "smooth"
    })
  })