# Day 9: DOM Manipulation

## DOM (Document Object Model) Manipulation allows you to interact with and modify the HTML and CSS of a webpage using JavaScript. It involves various techniques for selecting, creating, appending, removing elements, modifying attributes and classes, and handling events. Below are key concepts and methods related to DOM manipulation:

1. Selecting and Manipulating Elements
Selecting Elements: Use methods like document.getElementById(), document.getElementsByClassName(), document.getElementsByTagName(), and document.querySelector() to select elements from the DOM.

2. Manipulating Elements: Once an element is selected, you can change its content, style, and attributes using properties like innerHTML, textContent, and style.

## Creating and Appending Elements
* Creating Elements: Use document.createElement() to create new HTML elements

* Appending Elements: Add the newly created elements to the DOM using methods like appendChild(), insertBefore(), or append().

* Removing Elements
Removing Elements: To remove elements from the DOM, use remove() or removeChild()

* Modifying Attributes and Classes
Modifying Attributes: Use setAttribute(), getAttribute(), and removeAttribute() to change or access attributes of elements.

* Modifying Classes: Use classList.add(), classList.remove(), classList.toggle(), and classList.contains() to manage CSS classes.

## Event Handling
* Adding Event Listeners: Use addEventListener() to listen for and respond to events such as clicks, mouse movements, and key presses.

* Handling Events: Define event handler functions to execute when an event occurs. These functions can modify the DOM or trigger other actions.