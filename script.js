

// Global variable (accessible anywhere)
let defaultColor = "#3498db";

// Function with parameters & return value
function setBoxColor(element, color) {
    element.style.backgroundColor = color;
    return color; // return value for reuse
}

// Function demonstrating local scope
function animateBox() {
    let animationClass = "animate"; // local variable
    const box = document.querySelector(".box");

    // Remove class if already applied (so animation can restart)
    box.classList.remove(animationClass);
    void box.offsetWidth; // trick to force reflow
    box.classList.add(animationClass);
}

// Function that changes box color using global variable
function changeBoxColor() {
    const box = document.querySelector(".box");
    let newColor = getRandomColor(); // get color from another function
    defaultColor = setBoxColor(box, newColor); // update global variable
}

// Utility function to get a random color
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listeners
document.getElementById("animateBtn").addEventListener("click", animateBox);
document.getElementById("changeColorBtn").addEventListener("click", changeBoxColor);

