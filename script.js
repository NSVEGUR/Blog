'use strict';

let flagMode = 1;
let flagOverlay = 1;
let dropDown = document.querySelector('.intro');
let dropOverlay = document.querySelector('.body-overlay');

const light = function () {
  document.querySelector('html').style.color = '#000000';
  document.querySelector('html').style.backgroundColor = '#ffffff';
  document.querySelector('.mode').textContent = '☾';
  document.querySelector('.mode').style.backgroundColor = '#000000';
  document.querySelector('.mode').style.color = '#ffffff';
  document.querySelector('.drop').style.color = '#000000';
  flagMode = flagMode ? 0 : 1;
}

const dark = function () {
  document.querySelector('html').style.color = '#ffffff';
  document.querySelector('html').style.backgroundColor = '#000000';
  document.querySelector('.mode').textContent = '✹';
  document.querySelector('.mode').style.backgroundColor = '#ffffff';
  document.querySelector('.mode').style.color = '#000000';
  document.querySelector('.drop').style.color = '#ffffff';
  flagMode = flagMode ? 0 : 1;
}

document.querySelector('.mode').addEventListener
  ('click', function () {
    flagMode ? light() : dark();
  });

document.querySelector('.drop').addEventListener
  ('click', function () {
    dropDown.classList.toggle('hidden');
    dropOverlay.classList.toggle('hidden');
    flagOverlay ? document.querySelector('.drop').textContent = '✖' : document.querySelector('.drop').textContent = '≡';
    flagOverlay = flagOverlay ? 0 : 1;
  });

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !dropDown.classList.contains('hidden')) {
    dropDown.classList.add('hidden');
    dropOverlay.classList.add('hidden');
    flagOverlay ? document.querySelector('.drop').textContent = '✖' : document.querySelector('.drop').textContent = '≡';
    flagOverlay = flagOverlay ? 0 : 1;
  }
});

document.querySelector('.body-overlay').addEventListener('click', function () {
  dropDown.classList.add('hidden');
  dropOverlay.classList.add('hidden');
  flagOverlay ? document.querySelector('.drop').textContent = '✖' : document.querySelector('.drop').textContent = '≡';
  flagOverlay = flagOverlay ? 0 : 1;
})