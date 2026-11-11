'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];


/*
Open t4 folder in your IDE/editor. Add HTML by using createElement() and appendChild methods. (2p)
Add the following HTML code to the element with id="target". Add the values from 'students' array to the <option> elements in a for-loop.
<option value="2345768">John</option>
<option value="2134657">Paul</option>
<option value="5423679">Jones</option>
open Element Inspector from DevTools to see the full result. (right click, inspect...)
*/

const target = document.getElementById("target");

for (const student of students) {
    const option = document.createElement("option");
    option.value = student.id;
    option.innerText = student.name;

    target.appendChild(option);
}