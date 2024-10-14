  "use strict";

  const box = document.getElementById('box'); //обращение к элементу напрямую

  console.log(box);

  const btns = document.getElementsByTagName('button');

  console.log(btns[0]);

  const circles = document.getElementsByClassName('circle'); // тут сверху и снизу создается псевдомассив
  console.log(circles);

  const hearts = document.querySelectorAll('.heart'); //точка нужна чтобы показать что мы работаем с классом

hearts.forEach(item => {
  console.log(item);
});

const oneHeart = document.querySelector('.heart'); ////обращение к элементу напрямую
console.log(oneHeart);

