// clone node Method Examples.

var listOne = document.getElementById("list_1").children[2];

var copyElement = listOne.cloneNode(true);

console.log(copyElement);

// for append.
document.getElementById("list_2").appendChild(copyElement);

