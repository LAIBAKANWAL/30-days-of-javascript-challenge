# Day 10: Event Handling

Event handling is a fundamental concept in JavaScript that enables you to create interactive web applications. By understanding and utilizing events, you can respond to user actions such as clicks, key presses, and form submissions. This section covers the basics of event handling, including mouse events, keyboard events, form events, and the powerful technique of event delegation.

## Basic Event Handling
Basic event handling involves attaching event listeners to HTML elements to execute specific functions when events occur. Event listeners can be added using methods such as addEventListener. The basic syntax is:

element.addEventListener('event', functionName);


## Mouse Events
Mouse events are triggered by actions involving the mouse, such as clicking, double-clicking, or hovering over an element. Common mouse events include:

* click: Fired when the user clicks on an element.
* dblclick: Fired when the user double-clicks on an element.
* mouseover: Fired when the mouse pointer is moved onto an element.
* mouseout: Fired when the mouse pointer is moved out of an element.

## Keyboard Events
Keyboard events are triggered by actions involving the keyboard, such as pressing or releasing a key. Common keyboard events include:

* keydown: Fired when a key is pressed down.
* keyup: Fired when a key is released.

## Form Events
Form events are triggered by actions related to form elements, such as submitting a form or changing the value of an input field. Common form events include:

* submit: Fired when a form is submitted.
* change: Fired when the value of an input, select, or textarea element is changed.
* input: Fired when the value of an input or textarea element is changed.


## Event Delegation
Event delegation is a technique that involves adding a single event listener to a parent element to manage events for multiple child elements. This is particularly useful for handling events on dynamically added elements.

Event delegation leverages the concept of event bubbling, where events propagate up the DOM tree from the target element to its ancestors. By attaching an event listener to a common ancestor, you can efficiently manage events for all its descendants.
