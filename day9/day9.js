// DOM Manipulation

// Activity 1  #Selecting and Manipulating Elements
// Task1
let update = document.getElementById('greet');
update.textContent = 'WELCOME LAIBA';

// Task2
let updatebg = document.getElementsByClassName("changebgColor");
for (let i = 0; i < updatebg.length; i++) {
    updatebg[i].style.backgroundColor = 'pink'; 
}


// Activity 2  #Creating and Appending Elements
// Task3
const hero = document.createElement('div');
hero.textContent = 'Select Course';
document.body.appendChild(hero);

// Task4
const ul = document.getElementById('myList');
const list = document.createElement('li');
list.textContent = 'new Item';

ul.appendChild(list);


// Activity 3  #Removing Elements
// Task5
const removeElement = document.getElementById('rm');
removeElement.remove();

// Task6
const removeLastChild = document.getElementById('myList');
removeLastChild.removeChild(removeLastChild.lastChild);

// Activity 4  #Modifying Attributes and Classes
// Task7
let changeAttribute = document.getElementsByTagName('a');

for (let i = 0; i < changeAttribute.length; i++) {
    changeAttribute[i].textContent ='Go to Facebook'
    changeAttribute[i].setAttribute('href', 'https://www.facebook.com/') ;
}
// Task8
let element = document.getElementById('myElement');
let addClass = document.getElementById('addClassButton');
let removeClass = document.getElementById('removeClassButton');
let toggleClass = document.getElementById('toggleClassButton');


addClass.addEventListener('click',()=>{
    element.classList.add('highlight')
});

removeClass.addEventListener('click',()=>{
    element.classList.remove('highlight')
});

toggleClass.addEventListener('click',()=>{
    element.classList.toggle('hidden')
});

// Activity 5  #Event handling
// Task9
let para = document.getElementById('myPara');
let btn = document.getElementById('changeText');
btn.addEventListener('click', ()=>{
    para.textContent = 'hellooooo'
})

// Task10
para.addEventListener('mouseover', ()=>{
    para.style.borderColor = 'red'
})