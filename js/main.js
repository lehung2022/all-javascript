const view1 = document.getElementById('view1');
console.log(view1);
const view2 = document.getElementById('view2');
console.log(view2);
// (4:00) Changing the CSS with the style property


// (5:45) Selecting elements by class name 
const view3 = document.getElementsByClassName("view");
console.log(view3);
// (7:05) Selecting elements with querySelectorAll()
const view4 = document.querySelectorAll(".view");
console.log(view4);
// (8:10) HTMLCollection vs NodeList

// (9:00) Searching within the results of a previous selector
const divs = document.querySelectorAll("div");
console.log(divs);
// (10:15) Selecting elements by tag name
const sameDivs = document.getElementsByTagName("div");
// (11:20) Applying more specific DOM selectors
const moreDivs = view1.querySelectorAll("div:nth-of-type(2n)");
// (13:05) Modifying CSS with a DOM selector
for (let i = 0; i < moreDivs.length; i++) {
    moreDivs[i].style.backgroundColor = "#6feb4c";
}


// (16:30) Changing text inside of an element
const changeText = document.querySelector("nav h1");
changeText.textContent = "What the hell just happened?";
console.log(changeText);
// (17:00) Changing the HTML within a parent element
const navBar = document.querySelector("nav");
navBar.innerHTML = `<h4>Hi, buddy</h4> <p>Go to the right, come on</p>`;
navBar.style.textAlign = "center";
navBar.style.justifyContent = "space-between";
console.log(navBar);
// (19:54) Navigating the DOM tree
view1.style.display = "none";
view2.style.flexDirection = "flex";
view2.style.flexWrap = "wrap";
view2.style.flexDirection = "row";
view2.style.margin = "0 auto";
// (28:40) Removing all the nodes in a parent element
while (view2.lastChild) {
    view2.lastChild.remove();
}
// (30:00) Creating new elements
// (30:43) Adding new property values to the element
// (32:15) Appending the new element to the DOM
const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#5d1dac";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.display = "flex";
    newDiv.style.flexDirection = "row";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    newDiv.style.margin = "auto";
    parent.append(newDiv);   
}

// (33:30) Creating new elements with a loop
for (let i = 1; i <12; i++) {
    createDivs(view2, 10);
}