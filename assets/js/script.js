/*jshint esversion: 6 */

// Global variables, arrays
let username = "";
let character = 3;
const characterArray = [{
    name: "grey",
    normal: "url('./assets/images/grey.webp')",
    happy: "url('./assets/images/grey-happy.webp')",
    sad: "url('./assets/images/grey-sad.webp')",
},
{
    name: "orange",
    normal: "url('./assets/images/orange.webp')",
    happy: "url('./assets/images/orange-happy.webp')",
    sad: "url('./assets/images/orange-sad.webp')",
},
{
    name: "spot",
    normal: "url('./assets/images/spot.webp')",
    happy: "url('./assets/images/spot-happy.webp')",
    sad: "url('./assets/images/spot-sad.webp')",
}];
const contentArray = [{
    type: "mouse",
    value: 1,
},
{
    type: "empty",
    value: 0,
},
{
    type: "mouse",
    value: 1,
},
{
    type: "mouse",
    value: 1,
},
{
    type: "empty",
    value: 0,
},
{
    type: "mouse",
    value: 1,
},
{
    type: "empty",
    value: 0,
},
{
    type: "mouse",
    value: 1,
},
{
    type: "mouse",
    value: 1,
}];

// Selection of elements from DOM
const btnArray = document.getElementsByTagName('button');
const characters = document.getElementsByClassName("character");
const gameCharacter = document.getElementById("game-area-character");
const objectsArray = document.getElementsByClassName("object");
const currentScore = document.getElementById("score");
const tryCount = document.getElementById("tries");
const resultCharacter = document.getElementById("result-area-character");
const totalScore = document.getElementById("total-score");
const soundOnIcon = document.getElementById("sound-on");
const soundOffIcon = document.getElementById("sound-off");
const icons = document.getElementsByClassName("icon");

// Once the page loads, add event listeners to buttons, characters and mute icon
document.addEventListener("DOMContentLoaded", function() {
    buttonListen();
    characterListen();
    listenAudioControl();
});

// Functions

/**
 * Adds Event Listener to all buttons
 */
function buttonListen() {
    const tempArray = Array.from(btnArray);
    tempArray.forEach((element) => {
        element.addEventListener("click", buttonReact);
    });
}

/**
 * Calls the function according to the id of the button
 */
function buttonReact() {
    if(this.id === "start") {
        stopSounds();
        buttonClick.play();
        startGame();
    } else if (this.id === "restart-game") {
        stopSounds();
        buttonClick.play();
        restartGame("game-area", "game-area");
    } else if (this.id === "exit-game") {
        stopSounds();
        buttonClick.play();
        exitGame("game-area", "start-area");
    } else if (this.id === "restart-result") {
        stopSounds();
        buttonClick.play();
        restartGame("result-area", "game-area");
    } else if (this.id === "exit-result") {
        stopSounds();
        buttonClick.play();
        exitGame("result-area", "start-area");
    } else {
        alert("unknown button id");
    }
}

/**
 * Adds Event Listener to characters on start area
 */
function characterListen() {
    const tempArray = Array.from(characters);
    tempArray.forEach((element) => {
        element.addEventListener("click", chooseCharacter);
    });
}

/**
 * Assigns index to character variable to use characterArray later
 */
function chooseCharacter() {
    if (this.id === "grey") {
        borderChange(this);
        stopSounds();
        catSound.play();
        character = 0;
    } else if (this.id === "orange") {
        borderChange(this);
        stopSounds();
        catSound.play();
        character = 1;
    } else if (this.id === "spot") {
        borderChange(this);
        stopSounds();
        catSound.play();
        character = 2;
    } else {
        alert("unknown character id");
    }
}

/**
 * Calls function to remove borders from all characters,
 * adds border to the last chosen character
 */
function borderChange(box) {
    removeCharacterBorders();
    box.style.border = "2px solid #BD6E2A";
    box.style.boxShadow = "#221916 2px 2px 2px";
}

/**
 * Removes borders from all characters on start area
 */
function removeCharacterBorders() {
    const tempArray = Array.from(characters);
    tempArray.forEach((element) => {
        element.style.border = "none";
        element.style.boxShadow = "none";
    });
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
            runGame("start-area", "game-area");
        }
    }
}

/**
 * validates the username,
 * and assigns it to username variable
 */
function validateUsername() {
    const enteredUsername = document.getElementById('username').value;
    // The source https://stackoverflow.com/questions/9628879/javascript-regex-username-validation
    const usernamePattern = /^[a-zA-Z ]+$/;
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
        const chosenCharacter = characterArray[character].normal; 
        // The source https://stackoverflow.com/questions/19066638/insert-javascript-variable-as-background-image-source
        gameCharacter.style.backgroundImage = chosenCharacter;
        ariaLabelDisplay();
        return true;
    } else {
        alert("Please choose a character");
    }
}

/**
 * Displays the matching aria label for the chosen character
 */
function ariaLabelDisplay() {
    if (character === 0) {
        gameCharacter.ariaLabel = "grey cat";
    } else if (character === 1) {
        gameCharacter.ariaLabel = "orange cat";
    } else {
        gameCharacter.ariaLabel = "white cat with grey and orange spots";
    }
}

/**
 * The function prepares the game area, the clickable objects and the contentArray
 */
function runGame(a, b) {
    randomiseContentArray(contentArray);
    objectsListen();
    changeArea(a, b);
    displayMessage("Feed me", "game-area-message");
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
 * Adds event listeners to objects, works once
 */
function objectsListen() {
    const tempArray = Array.from(objectsArray);
    tempArray.forEach((element) => {
        element.addEventListener("click", checkChoice, {
            once: true,
        });
    });
}

/**
 * Reads data-attr of the clicked box and saves it as index number,
 * reads type property of the object from contentArray under that index,
 * checks the user's choice and calls the function to display the outcome
 */
function checkChoice() {
    stopSounds();
    openDoor.play();
    const indexNum = this.getAttribute("data-attr");
    const choice = contentArray[indexNum].type;
    if (choice === "mouse") {
        positiveChoice(indexNum);
    } else if (choice === "empty") {
        negativeChoice(indexNum);
    } else {
        alert(`Invalid type: ${choice}`);
    }
}

/**
 * Changes the background of the clicked object to the mouse picture,
 * displays a message, increaments the score
 * and reduces the tries
 */
function positiveChoice(indexNum) {
    objectsArray[indexNum].style.backgroundImage = "url('./assets/images/mouse.webp')";
    objectsArray[indexNum].ariaLabel = "mouse";
    displayMessage("Excellent", "game-area-message");
    incrementScore();
    countTries();
    checkValues();
}

/**
 * Changes the background of the clicked object to the empty picture,
 * displays a message and reduces the tries
 */
function negativeChoice(indexNum) {
    objectsArray[indexNum].style.backgroundImage = "url('./assets/images/empty.webp')";
    objectsArray[indexNum].ariaLabel = "empty";
    displayMessage("Don't worry", "game-area-message");
    countTries();
    checkValues();
}

/**
 * Displays message to the user, after each choice
 */
function displayMessage(message, id) {
    document.getElementById(id).innerHTML = message + ', ' + username + '!';
}

/**
 * Reads current score, increases it by one
 * and assigns the new number into the score box
 */
function incrementScore() {
    const oldScore = parseInt(currentScore.innerHTML);
    const newScore = oldScore + 1;
    currentScore.innerHTML = newScore;
}

/**
 * Reads the current number of attempts, decreases it by one
 * and assigns the new number into its box
 */
function countTries() {
    const oldAmount = parseInt(tryCount.innerHTML);
    const newAmount = oldAmount - 1;
    tryCount.innerHTML = newAmount;
}

/**
 * Reads and checks current number of attempts and score,
 * proceeds to countResult if tries equal zero 
 * or the score equals six
 */
function checkValues() {
    if (parseInt(tryCount.innerHTML) === 0) {
        objectsReset();
        countResult();
    } else if (parseInt(currentScore.innerHTML) === 5) {
        objectsReset();
        window.setTimeout(displayWin, 1500);
    }
}

/**
 * Compares user score with win score,
 * calls next functions to display the result to the user
 */
function countResult() {
    const winValue = 5;
    const userScore = parseInt(currentScore.innerHTML);
    if (userScore === winValue) {
        window.setTimeout(displayWin, 1300);
    } else if (userScore < winValue) {
        window.setTimeout( displayLoss, 1300);
    } else {
        alert("Invalid user score");
    }
}

/**
 * Takes the user to the result area, shows the happy character,
 * displays the message and the total score
 */
function displayWin() {
    changeArea("game-area", "result-area");
    stopSounds();
    winSound.play();
    resultCharacter.style.backgroundImage = characterArray[character].happy;
    resultCharacter.ariaLabel = "happy cat";
    displayMessage("Well done", "result-area-message");
    totalScore.innerHTML = currentScore.innerHTML;
}

/**
 * Takes the user to the result area, shows the sad character,
 * displays the message and the total score
 */
function displayLoss() {
    changeArea("game-area", "result-area");
    stopSounds();
    loseSound.play();
    resultCharacter.style.backgroundImage = characterArray[character].sad;
    resultCharacter.ariaLabel = "sad cat";
    displayMessage("Better luck next time", "result-area-message");
    totalScore.innerHTML = currentScore.innerHTML;
}

/**
 * Removes event listeners from objects
 */
function objectsReset() {
    const tempArray = Array.from(objectsArray);
    tempArray.forEach((element) => {
        element.removeEventListener("click", checkChoice);
    });
}

/**
 * Reacts to user`s click on restart and play again buttons,
 * prepares the game area for a new game/round
 */
function restartGame(a, b) {
    // reset the game area
    objectsReset();
    currentScore.innerHTML = 0;
    tryCount.innerHTML = 6;
    resetBackground();
    // move to the game area and start a new game/round
    runGame(a, b);
}

/**
 * Removes event listeners from all boxes
 */
function resetBackground() {
    const tempArray = Array.from(objectsArray);
    tempArray.forEach((element) => {
        element.style.backgroundImage = "url('./assets/images/door.webp')";
    });
}

/**
 * Reacts to user`s click on exit button,
 * takes the user to the start area,
 * resets username and character,
 * resets the game area
 */
function exitGame(a, b) {
    // reset the username
    username = "";
    document.getElementById('username').value = "";
    // reset the character
    character = 3;
    removeCharacterBorders();
    // reset the game area
    objectsReset();
    currentScore.innerHTML = 0;
    tryCount.innerHTML = 6;
    resetBackground();
    // move to the start area
    changeArea(a, b);
}

// Sound effects
const buttonClick = new sound("./assets/audio/button-click.wav");
const catSound = new sound("./assets/audio/cat-sound.wav");
const openDoor = new sound ("./assets/audio/open-door-short.wav");
const winSound = new sound("./assets/audio/win-game.wav");
const loseSound = new sound("./assets/audio/lose-game.wav");

// The source https://www.w3schools.com/graphics/game_sound.asp
/**
 * Creates a new object constructor to handle sound objects
 */
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.muted = "true"; // the sound is mute by default
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    };
    this.stop = function(){
        this.sound.pause();
        this.sound.currentTime = "0"; //resets the paused audio time to the beginning
    };
}

/**
 * Stops all the audios and resets them
 */
function stopSounds() {
    buttonClick.stop();
    catSound.stop();
    openDoor.stop();
    winSound.stop();
    loseSound.stop();
}

/**
 * Controls the mute button display, 
 * turns the sound on if it was off, and conversely
 */
function muteAudioControl() {
    const allAudios = Array.from(document.getElementsByTagName("audio"));
    allAudios.forEach((element) => {
        if (element.muted) {
            soundOffIcon.style.display = "none";
            soundOnIcon.style.display = "var(--fa-display, inline-block)";
            element.muted = false;
        } else {
            soundOnIcon.style.display = "none";
            soundOffIcon.style.display = "var(--fa-display, inline-block)";
            element.muted = true;
        }
    });
}

/**
 * Adds event listeners to the mute buttons,
 * calls the function to change it once it is clicked
 */
function listenAudioControl() {
    const tempArray = Array.from(icons);
    tempArray.forEach((element) => {
        element.addEventListener("click", muteAudioControl);
    });
}