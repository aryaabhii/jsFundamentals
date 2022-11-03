document.getElementById("info").onclick = backgroundColor;
// function for changing color.
function backgroundColor() {
   document.getElementById("info").style.backgroundColor = "Grey";
}

// New AddEventistner Examples....
document.getElementById("para-1").addEventListener("click", changeBackground);
function changeBackground() {
   document.getElementById("para-1").style.backgroundColor = "green";
}

document.getElementById("para-2").addEventListener("click", function changeBackground_2() {
   document.getElementById("para-2").style.border = "5px dotted red";
})

document.getElementById("outer_div").addEventListener("click", function alertExample() {
   alert("Welcome to outer div....");
}, false)

document.getElementById("inner_div").addEventListener("click", function alertExample() {
   alert("Welcome to inner div....");
}, false)

document.getElementById("para-3").addEventListener("mouseleave", changeBackground_3);
function changeBackground_3() {
   document.getElementById("para-3").style.background = "yellow";
}

// this will remove event listner.
document.getElementById("para-3").addEventListener("click", remove);
function remove() {
   document.getElementById("para-3").removeEventListener("mouseleave", changeBackground_3);
}