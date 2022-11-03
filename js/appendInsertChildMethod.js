// Append & Insert Before.....

// append text into a h1 tag.
var newElement = document.createElement("h2");
console.log(newElement);
var newNodeText = document.createTextNode("Hi, Welcome to JAVA SCRIPTS.");
console.log(newNodeText);
newElement.append(newNodeText);
document.getElementById("test").appendChild(newElement);

// append comment.
var newComment = document.createComment("This is comment...");
console.log(newComment);
document.getElementById("test").appendChild(newComment);

// Insert example.
// append before or after.
var target = document.getElementById("test");
var targetNode = document.getElementById("test").childNodes;
target.insertBefore(newNodeText, target.childNodes[0]);
console.log(targetNode);

// Append text into a paragraph tag.
var pE = document.createElement("p");
console.log(pE);
var ntx = document.createTextNode("Hello!");
console.log(ntx);
pE.append(ntx);
document.getElementById("para")

