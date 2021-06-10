'use strict';

let flag = 1;

const light = function () {
  document.querySelector('html').style.color = '#000000';
  document.querySelector('html').style.backgroundColor = '#ffffff';
  document.querySelector('.mode').textContent = '☾';
  document.querySelector('.mode').style.backgroundColor = '#000000';
  document.querySelector('.mode').style.color = '#ffffff';
  flag = flag ? 0 : 1;
}

const dark = function () {
  document.querySelector('html').style.color = '#ffffff';
  document.querySelector('html').style.backgroundColor = '#000000';
  document.querySelector('.mode').textContent = '☼';
  document.querySelector('.mode').style.backgroundColor = '#ffffff';
  document.querySelector('.mode').style.color = '#000000';
  flag = flag ? 0 : 1;
}

document.querySelector('.mode').addEventListener
  ('click', function () {
    flag ? light() : dark();
  });