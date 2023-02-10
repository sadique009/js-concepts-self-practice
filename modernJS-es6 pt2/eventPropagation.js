// the event propagation mode determines in which order the elements receive the event.
// event in js is anything which triggers an action. eg. a button click, a window load.

// it is broadly categorized into 3 main types:
// a. the capture phase. going from the window to the event target phase.
// b. the target phase. it is the target phase. event propagation starts from here.
// c. the bubble phase. going from the event target parent back to the window.

// bottom to top : "event bubbling".
// with event bubbling, the event is first captured and handled by the innermost element,
// and then propagated to the outer elements.

// by default, the browser is set to event bubbling.
// to set it to event capturing, set the flag to "true".

// top to bottom : "event capturing".
// with event capturing, the event is first captured and handled by the outermost element,
// and then propagated to the inner elements.
// capturing is also called "trickling".

// EXAMPLE-1:-

// const parent = document.createElement("div");
// const child = document.createElement("div");
// const parentBtn=document.createElement("button");
// const childBtn=document.createElement("button");

// document.body.appendChild(parent);
// document.body.appendChild(child);

const parentId = document.getElementById("parentId");
const childId = document.getElementById("childId");

const parentCall = () => {
  alert("parent div called");
  console.log("parent div called");
};

const childCall = () => {
  alert("child div called");
  console.log("child div called");
  // to prevent event bubbling, we use "event.stopPropagation()" method.
  // it prevents the parent event from triggering.
  event.stopPropagation();
};

// setting the flag to true for event capturing.
// "addEventListener" accepts a 3rd parameter also.
// by default, the 3rd parameter is set to "false", no need to specifically mention it.
parentId.addEventListener("click", parentCall, true);
childId.addEventListener("click", childCall, true);

// EXAMPLE-2:-
