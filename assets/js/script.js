// Global variables, arrays
let username = "";
let character = 3;
let characterArray = [{
    name: "grey",
    normal: "./assets/images/grey.webp",
    happy: "./assets/images/grey-happy.webp",
    sad: "./assets/images/grey-sad.webp"
},
{
    name: "orange",
    normal: "./assets/images/orange.webp",
    happy: "./assets/images/orange-happy.webp",
    sad: "./assets/images/orange-sad.webp'"
},
{
    name: "spot",
    normal: "./assets/images/spot.webp",
    happy: "./assets/images/spot-happy.webp",
    sad: "./assets/images/spot-sad.webp"
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
let characters = document.getElementsByClassName("character");
let gameCharacter = document.getElementsByClassName("game-area-character")[0];



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
        });
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
        });
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
    let validUsername = false;
    let assignedCharacter = false;
    validUsername = validateUsername();
    if (validUsername) {
        assignedCharacter = assignCharacter();
        if (assignedCharacter) {
            runGame();
        }
    } 
}

/**
 * validates the username,
 * and assigns it to username variable
 */
function validateUsername() {
    let enteredUsername = document.getElementById('username').value;
    // The source https://stackoverflow.com/questions/9628879/javascript-regex-username-validation
    let usernamePattern = /^[a-zA-Z ]+$/;
    if (enteredUsername.length < 1) {
        alert("Please enter your name");
    } else if (enteredUsername.length > 20) {
        alert("You can use up to 20 characters only");
    } else if (enteredUsername.match(usernamePattern)) {
        username = enteredUsername;
        return true;
    } else {
        alert("Please use letters only");
    }
}

/**
 * Checks if the character was chosen,
 * sets the chosen character image for the game area
 */
function assignCharacter() {
    if (character < 3) {
        let chosenCharacter = characterArray[character].normal;
        // The source https://stackoverflow.com/questions/19066638/insert-javascript-variable-as-background-image-source
        gameCharacter.style.backgroundImage = "url(" + chosenCharacter + ")";
        return true;
    } else {
        alert("Please choose a character");
    }
}

/**
 * display message under input instead of alert for validateUsername() function
 */
function displayInputMessage(text) {
    
}

/**
 * The function prepares the game area, the clickable objects and the contentArray
 */
function runGame() {
    changeArea("start-area", "game-area");
    randomiseContentArray(contentArray);
    objectsListen();
}

/**
 * Manages the area transfer, the current area disappears,
 * the next area arrives
 */
function changeArea(a, b) {
    document.getElementById(a).style.display = "none";
    document.getElementById(b).style.display = "block";
}

/**
 * Mixes the contentArray, which is passed as a parameter, 
 * so that every new game has various layouts of mice inside the boxes.
 */
function randomiseContentArray(array) {
    // The source https://stackoverflow.com/a/12646864 
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Adds event listeners to objects, 
 * reads number of the object
 * and transfers it to the function which will process the user's choice
 */
function objectsListen() {
    let objectsArray = document.getElementsByClassName("object");
    for (let object of objectsArray) {
        object.addEventListener("click", function() {
            let indexNum = this.getAttribute("data-attr");
            checkChoice(indexNum);
        });
    }
}

function checkChoice(indexNum) {
    console.log(indexNum);
}
