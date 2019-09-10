// 1) Print the first p tag to the console using the ID, class, and tag selectors.
//
let el = document.getElementById('first');
console.log(el);
let p1_special = document.querySelectorAll("body p.special");
for(let i = 0; i<p1_special.length;i++) {
    console.log(p1_special[i]);
}
let p_el = document.getElementsByTagName("p");
console.log(p_el);

// 2) Print the special class using both the query selector and query all selector.
//
let p2a_special = document.querySelector("body p.special");
console.log(p2a_special);

let p2_special = document.querySelectorAll("body p.special");
 for(let i = 0; i<p2_special.length;i++) {
     console.log(p2_special[i]);
 }
// 3) Change the color of the h1 statement to blue.
//
let h1el = document.getElementsByTagName("h1");
h1el[0].style.color ="blue";

// 4) Change the color of the last p tag to yellow.
let id_el = document.getElementById("last");
id_el.style.color ="yellow";


