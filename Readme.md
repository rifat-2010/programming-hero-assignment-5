<!-- question 01 -->
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer : 
Here are the differences between these three functions:

getElementById : It finds an HTML element by its unique ID.
getElementsByClassName : It finds all HTML elements that have a specific class name.
querySelector : It finds the first HTML element that matches a specified CSS selector.



<!-- question 02 -->

2. How do you create and insert a new element into the DOM?

Answer : 
To create and add a new HTML element using JavaScript, we first use the createElement() function. This function helps us make a new tag that we want to add to our project. Then, to place this new element somewhere in the HTML document, we use the appendChild() function. We put the new element inside the appendChild() function to attach it to an existing parent element.


<!-- question 03 -->

3. What is Event Bubbling and how does it work?

Answer : 
I already know what an event is, and that is what happens when we click on an underlined text or a button, etc. And event bubbling is a process where the event starts from the child element (like a button) and gradually spreads to the parent elements.


<!-- question 04 -->
4. What is Event Delegation in JavaScript? Why is it useful?

Answer : 
Event delegation is a technique in JavaScript where we add an event listener to a parent element, and it handles events on all its child elements. It takes advantage of event bubbling. For example, when a child element (such as a button) is clicked, the event is passed up to the parent, and we can work with that event from there.


<!-- question 05 -->
5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:
preventDefault(): This function is mainly used to stop the default action of an event. And stopPropagation(): This function is mainly used to stop the bubbling of an event inside an event. It basically stops the propagation of an event from its child to its parent, or it is not the child or parent's job. The main difference here is that one is a default action of an event and the other is a stop the propagation of an event from its child to its parent, or it is not the child or parent's job.