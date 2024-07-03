// Global variables, arrays
let username = "";
let character;
let characterArray = [{
    name: "grey",
    normal: "./assets/images/grey.png",
    happy: "./assets/images/grey-happy.png",
    sad: "./assets/images/grey-sad.png"
},
{
    name: "orange",
    normal: "./assets/images/orange.png",
    happy: "./assets/images/orange-happy.png",
    sad: "./assets/images/orange-sad.png"
},
{
    name: "spot",
    normal: "./assets/images/spot.png",
    happy: "./assets/images/spot-happy.png",
    sad: "./assets/images/spot-sad.png"
}];
let contentArray = [{
    type: "mouse",
    value: 1
},
{
    type: "empty",
    value: 0
},
{
    type: "mouse",
    value: 1
},
{
    type: "mouse",
    value: 1
},
{
    type: "empty",
    value: 0
},
{
    type: "mouse",
    value: 1
},
{
    type: "empty",
    value: 0
},
{
    type: "mouse",
    value: 1
},
{
    type: "mouse",
    value: 1
}];

// Selection of elements from DOM
document.getElementById('username').value; // get entered username
let characters = document.getElementsByClassName("character");


// Once the page loads, add event listeners to buttons and characters
document.addEventListener("DOMContentLoaded", function() {
    buttonReact();
    characterListen();
});

// Functions

/**
 * Adds Event Listener to all buttons, 
 * calls the function according to the id of the button
 */
function buttonReact() {
    let btnArray = document.getElementsByTagName('button');
    for (let button of btnArray) {
        button.addEventListener("click", function() {
            if(this.id === "start") {
                startGame();
            } else if (this.id === "restart-game") {
                console.log("calls restart function");
            } else if (this.id === "exit-game") {
                console.log("calls exit function");
            } else if (this.id === "restart-result") {
                console.log("calls restart function");
            } else if (this.id === "exit-result") {
                console.log("calls exit function");
            } else {
                alert("unknown button id");
            }
        })
    }
}

/**
 * Adds Event Listener to characters on start area, 
 * assigns index to character variable to use characterArray later
 */
function characterListen() {
    for (let option of characters) {
        option.addEventListener("click", function() {
            if (this.id === "grey") {
                borderChange(this);
                character = 0;
            } else if (this.id === "orange") {
                borderChange(this);
                character = 1;
            } else if (this.id === "spot") {
                borderChange(this);
                character = 2;
            } else {
                alert("unknown character id");
            }
        })
    }
}

/**
 * Removes border from all characters,
 * adds border to the last chosen character
 */
function borderChange(box) {
    for (let i of characters) {
        i.style.border = "none";
        i.style.boxShadow = "none";
    }
    box.style.border = "2px solid #BD6E2A";
    box.style.boxShadow = "#221916 2px 2px 2px";
}

/**
 * Runs the main game function, when valid username was created 
 * and a character was chosen
 */
function startGame() {
    if (validateUsername() && assignCharacter()) {
        runGame()
    } else {
        alert("Please enter username and choose a character")
    }
}
