const output = document.getElementById("output");

const liste = document.querySelector("#myList");

let outputText = "";

function firstElement() {
    outputText = liste.firstElementChild.innerHTML;
    console.log(outputText);
    output.innerHTML = outputText;
}

function lastElement() {
    outputText = liste.lastElementChild.innerHTML;
    console.log(outputText);
    output.innerHTML = outputText;
}

function secondElement() {
    outputText = liste.firstElementChild.nextElementSibling.innerHTML;
    console.log(outputText);
    output.innerHTML = outputText;
}

function secondLastElement() {
    outputText = liste.lastElementChild.previousElementSibling.innerHTML;
    console.log(outputText);
    output.innerHTML = outputText;
}