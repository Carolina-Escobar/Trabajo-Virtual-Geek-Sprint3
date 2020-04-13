'use strict';
//Geek girl uno
const geekGirl1 = {
    name: 'Susana',
    age: 34,
    profession: 'periodista',
}

geekGirl1.showBio = function () {
    return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.profession;
};

alert(geekGirl1.showBio());

// Geek girl dos
const geekGirl2 = {
    name: 'Rocio',
    age: 25,
    profession: 'actriz', 
}

geekGirl2.showBio = function () {
    return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.profession;
};

alert(geekGirl2.showBio());



