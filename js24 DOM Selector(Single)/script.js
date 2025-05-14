// DOM Selector (Single Elements) 
// document.getElementById() and document.querySelector()

// Part 1 >>>> document.getElementById()  >>> It can modify contents only using "id"
let val;
val = document.getElementById('document-title');
val = document.getElementById('document-title').id;
val = document.getElementById('document-title').className;

// Changing Style
val = document.getElementById('document-title');
val.style.background = '#eee';
val.style.color = 'blue';
val.style.padding = '10px';
val.style.display = 'block';

// Changing Contents 
val.textContent = "New Title";
val.innerText = "Another New Title";
val.innerHTML = "<i>New Title 3.0</i>"

// Part 2 >>>>  document.querySelector()  >>>> It can modify contents using "id", "class" and "tag name"
val = document.querySelector('#document-title');  // id 
val = document.querySelector('#document-class');  // class

val = document.querySelector('h3');  // h3 = tag name
val = document.querySelector('ol');  // ol = tag name
val = document.querySelector('ol li');  // ol li = nested tag name
val.style.background = 'red';
val.style.padding = '10px 0px 10px 0px';

val = document.querySelector('li:last-child');
val = document.querySelector('li:nth-child(3)').style.background = 'green';

console.log(val);