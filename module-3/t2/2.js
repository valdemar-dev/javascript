/*
Open t2 folder in your IDE/editor. Add HTML by using createElement() and appendChild methods. (2p)
Add the following HTML code to the element with id="target"
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
Add class my-item to the second list item
*/

const target = document.getElementById("target");

const createLi = (content) => {
    const li = document.createElement("li");
    li.innerHTML = content;

    return li;
};
{
    const li1 = createLi("First item");
    const li2 = createLi("Second item");
    const li3 = createLi("Third item");

    target.appendChild(li1);
    target.appendChild(li2);
    target.appendChild(li3);

    li2.classList.add("my-item");
}