// Variablen Deklaration
const button = document.querySelector("#button");

let counter = 0;

const output = document.querySelector(".umwickeln");

// Funktion

button.addEventListener("click", (event) => {
    event.preventDefault();

    const newElement = document.createElement("div");

    newElement.textContent = counter;

    if (counter % 10 == 0) {
        newElement.classList.add("weiss");
    } else {
        newElement.classList.add("rechteck");
    }

    output.appendChild(newElement);


    counter++;
})

document.querySelector("#remove").addEventListener("click", (event) => {
    event.preventDefault();

    output.lastElementChild.remove();
    counter--;
})
