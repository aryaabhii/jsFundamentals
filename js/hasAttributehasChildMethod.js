// Has Attribute & Has Child Method.

// has attribute
var target = document.getElementById("test");
var find = target.hasAttribute("title");

console.log(find);

// has child
var target2 = document.getElementById("test2");
var find2 = target2.hasChildNodes();
console.log(find2);