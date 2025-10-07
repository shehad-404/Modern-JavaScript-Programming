// Traversing >>> Child Nodes, Parent Nodes, Siblings 

let val;
let list = document.querySelector('ul');
let listItem = document.querySelector('ul li:last-child');

val = list;
val = listItem;

// 1. Get Child Nodes  >>> contain "text" for every "Enter" after Tag name
val = list;
val = list.childNodes; // returns a NodeList
val = list.childNodes[0]; // returns the first child node ("text")
val = list.childNodes[1]; // returns the second child node (li)
val = list.childNodes[2]; // returns the third child node ("text")
val = list.childNodes[3]; // returns the fourth child node (li)
val = list.childNodes[4]; // returns the fifth child node ("text")
val = list.childNodes[5]; // returns the sixth child node (li)

// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// 9 Document Itself
// 10 Doctype
val = list.childNodes;

// 2. Get Children >>> don't contain "text" for every "Enter" after Tag name
val = list.children; // returns an HTMLCollection
val = list.children[0]; // returns the first child node (li)
val = list.children[1]; // returns the second child node (li)
val = list.children[2]; // returns the third child node (li)

list.children[0].textContent = 'Hello World'; // change the text of the first child node (li)

val = list.children[1].children[0]; // returns the first child node of the second child node (li)
val = list.children[1].children[0].href; // returns the href attribute of the first child node of the second child node (li)

// 3. Get Element Child >>> directly get the elements
val = list.firstChild; // returns the first child node (text)
val = list.firstElementChild; // returns the first child element (li)
val = list.lastChild; // returns the last child node (text)
val = list.lastElementChild; // returns the last child element (li)

val = list.childElementCount; // returns the number of child elements (li)


// 4. Get Parent Node
val = listItem;
val = listItem.parentNode; // returns the parent node (ul)
val = listItem.parentElement; // returns the parent element (ul)
val = listItem.parentElement.parentElement; // returns the grandparent element (body)

// 5. Get Next Sibling
val = listItem.nextSibling; // returns the next sibling node (text)
val = listItem.nextElementSibling; // returns the next sibling element (li)
// val = listItem.nextElementSibling.nextElementSibling; // returns the next sibling element (li)

// 6. Get Previous Sibling
val = document.querySelector('ul li:last-child');
val = listItem.previousSibling; // returns the previous sibling node (text)
val = listItem.previousElementSibling; // returns the previous sibling element (li)

console.log(val);