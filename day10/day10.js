// Event Handling

// Activity 1  #Basic Event Handling
// Task1
let para = document.getElementById('para');
let btn = document.getElementById('changeText');

btn.addEventListener('click',()=>{
    para.textContent = 'hellooooooo'
})

// Task2
let img = document.getElementById('img');
img.addEventListener('dblclick',()=>{
    if(img.style.display === 'none'){
        img.style.display = 'block'
    }
    else{
        img.style.display = 'none'
    }
})

// Activity 2  #Mouse Events
// Task3
para.addEventListener('mouseover',()=>{
    para.style.backgroundColor = 'pink';
})

// Task4
para.addEventListener('mouseout',()=>{
    para.style.backgroundColor = '';
})

// Activity 3  #Keyboard Events
// Task5
let inpt = document.getElementById('keyEvents');
inpt.addEventListener('keydown',(e)=>{
   console.log(e);
   console.log(e.key);
})

// Task6
let displayParagraph = document.getElementById('displayParagraph');
inpt.addEventListener('keyup',()=>{
    const currentValue = inpt.value
    displayParagraph.textContent = `${currentValue}`;
 })


 // Activity 4  #Form Events
// Task7
let myForm = document.getElementById('myForm');
let formData = document.getElementById('formData');

let inp = document.getElementById('inp');

myForm.addEventListener('submit',(e)=>{
   e.preventDefault();

   formData.textContent = inp.value;
   
})

// Task8
let dropdown = document.getElementById('dropdown');
let optionpara = document.getElementById('optionpara');

dropdown.addEventListener('change',()=>{
  
    optionpara.textContent = dropdown.value;
    
 })


// Activity 5  #Event Delegation
// Task9
let myList = document.getElementById('myList');

myList.addEventListener('click', (e) => {
 
    if (e.target && e.target.nodeName === 'LI') {
        console.log(`Clicked item text: ${e.target.textContent}`);
    }
});

// Task10
let addBtn = document.getElementById('addBtn');
let itemCounter = 4;

addBtn.addEventListener('click',()=>{

    let newList = document.createElement('li');
    newList.textContent = `Item ${itemCounter}`

    myList.appendChild(newList)

    itemCounter++;
})

