// form events.

// fill focus color.
function focusFunction(element) {
   element.style.backgroundColor = "orange";
}
// remove focus color.
function onBlurFunction(element) {
   element.style.backgroundColor = ""
}
// for store and print input value.
function inputFunction(element) {
   var store = element.value;
   document.getElementById("inputOut").innerHTML = store;
}

// on change function.
function changeFunction(element) {
   var store = element.value;
   document.getElementById("inputOut").innerHTML = store;
}

// onselect function.
function selectFunction() {
   console.log("This is selected.");
}

// submit function.
function submitFunction() {
   var name = document.getElementById("name").value;
   alert("Submitted success !" + " " + name);
}



