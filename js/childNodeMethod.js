// Children & Child Node method examples.

var a = document.getElementById("outer").children;
console.log(a);

var ab = document.getElementById("parent-element").children[1].style.backgroundColor = "red";
console.log(ab);

// child node example.
var c = document.getElementById("outer").childNodes;
console.log(c);
document.getElementById("outer").childNodes[1].style.backgroundColor = "green";

var cd = document.getElementById("inner").childNodes;
console.log(cd);
