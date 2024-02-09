var popContent ='<button id="backtotop">Back to Top</button>';
var newButton = document.createElement("a");
var textnode = document.createTextNode("Back to Top");
newButton.appendChild(textnode);
newButton.id = "backtotop";
newButton.href = "#top";
document.body.append(newButton);