const selectElements = document.querySelector("#farbeAuswahlen");

console.log(selectElements);

document.getElementById("button").addEventListener("click", (event) => {
    // console.log(event.target.value);
    event.preventDefault();
    const selectIndex = selectElements.selectedIndex;

    console.log(selectIndex);

    selectElements.options[selectElements.selectedIndex].remove();
})