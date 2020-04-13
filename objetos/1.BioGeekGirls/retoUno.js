'use strict';
const geekOne = document.querySelector('.geekOne');

const geekGirl1 = {
    name: 'Susana',
    age: 34,
    profession: 'periodista',
}

geekOne.innerHTML = `Mi nombre es ${geekGirl1.name}, tengo ${geekGirl1.age} años y soy ${geekGirl1.profession}.`;

const geekGirl2 = {
    name: 'Rocio',
    age: 25,
    profession: 'actriz', 
}
 const geekTwo = document.querySelector('.geekTwo').innerHTML = `Mi nombre es ${geekGirl2.name}, tengo ${geekGirl2.age} años y soy ${geekGirl2.profession}.`;