// Write your code here!

document.querySelector("main#main").remove();

let newHeader = document.createElement('h1')
newHeader.setAttribute("id", "victory");
document.body.appendChild(newHeader)
newHeader.innerHTML = "Grizzly is the champion";
