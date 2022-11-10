// Variablen Definition

const userInput = document.getElementById("userinput");
const liste = document.querySelector("#liste");
const button = document.querySelector("#enter");

userInput.addEventListener("keypress", ((event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        button.click();
    }
}))

function add() {
    const newElement = document.createElement("li");

    newElement.textContent = userInput.value;

    liste.appendChild(newElement);
}