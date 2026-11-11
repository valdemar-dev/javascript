/*
Open t6 folder in your IDE/editor. 
Make a script that opens an alert window that says 'Button Clicked' when the 
<button> element is clicked. (1p)
*/

const button = document.getElementsByTagName("button")[0];
button.onclick = () => {
    alert("Button Clicked");
};