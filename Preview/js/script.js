  "use strict";

  const box = document.getElementById('box'), //обращение к элементу напрямую
        btns = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'), // тут сверху и снизу создается псевдомассив
        wrapper = document.querySelector('.wrapper'),
        hearts = wrapper.querySelectorAll('.heart'), //точка нужна чтобы показать что мы работаем с классом
        oneHeart = wrapper.querySelector('.heart'); ////обращение к элементу напрямую
        
/*
 box.style.backgroundColor = 'blue';
box.style.width = '500px';
*/
box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';
/*
for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = 'blue';
} */

  hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
  });

  const div = document.createElement('div');
  //const text = document.createTextNode('тут был яя'); редко используется такой метод нах он нужен

  div.classList.add('black');
  
  wrapper.append(div);
 //wrapper.appendChild(div);

//wrapper.prepend(div);

//hearts[0].before(div);
//hearts[0].after(div);

//wrapper.insertBefore(div, hearts[1]);

//circles[0].remove(); // норм команда актуальная респект
//wrapper.removeChild(hearts[1]); // устаревшая команда кринж 

hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World</h1>";

//div.textContent = "hello";

div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');