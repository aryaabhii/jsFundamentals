// class list method examples....
document.getElementById("info").classList.add("demo_1", "demo_2", "demo_3", "demo_4");

// code to add class.
var addExample = document.getElementById("info").classList;
console.log(addExample);

// code to remove class.
document.getElementById("info").classList.remove("demo_1", "demo_2", "demo_3", "demo_4");
var removeExample = document.getElementById("info").classList;
console.log(removeExample);

// adding classes with event listner..
document.getElementById("info").addEventListener("click", demo);
function demo() {
   document.getElementById("info").classList.add("demo_11", "demo_12", "demo_13", "demo_14");
   var addExample_2 = document.getElementById("info").classList;
   console.log(addExample_2);
}

// remove class using event listener.
document.getElementById("info").addEventListener("click", demo_2);
function demo_2() {
   document.getElementById("info").classList.remove("demo_11");
   var removeExample_2 = document.getElementById("info").classList;
   console.log(removeExample_2);
}

// add class using togle method.
document.getElementById("info").addEventListener("click", demo);
function demo() {
   document.getElementById("info").classList.toggle("demo_111");
   var addExample_2 = document.getElementById("info").classList;
   console.log(addExample_2);
}

// for extract single class using item.
document.getElementById("info").addEventListener("click", demoItem);
function demoItem() {
   var itemEx = document.getElementById("info").classList.item(0);
   console.log(itemEx);
}

// for contains. It is used to check the class is here or not.
document.getElementById("para-1").addEventListener("click", demoContain);
function demoContain() {
   var conEx = document.getElementById("para-1").classList.contains("paragraph");
   console.log(conEx);
}
