// referencing html tags with id using queryselector
var startButton = document.querySelector("#startButton");
var QuestiontextBox = document.querySelector(".question-textbox");
var timeCount = document.querySelector(".timer-count");
var secondsTextbox = document.querySelector(".secondsTextbox");

// index used in the for loop to mark what question user is currently on
var index = 0;

// making a interval function that creates a timer
function countdown () {
// timer variable defined
var timer = 59;

var timeInterval = setInterval(function () {
    if (timer > 1) {
        timeCount.textContent = timer;
        timer--;
    } else if (timer === 1) {
        timeCount.textContent = timer;
        timer--;
        secondsTextbox.textContent = "Second remaining";
    } else {
        timeCount.textContent = "";
        secondsTextbox.textContent = "";
        clearInterval(timeInterval);
    }

}, 1000);
}

startButton.addEventListener("click", function () {
    countdown();
})
// function to render questions


// an array will hold the questions with the questions themselves inside and object as strings
// inside the objects the options are in an array because we want to select just one option and not all the options as one string

var questionsAsked = [
    {
        question: "The condition in an if/else estatement is enclosed within ____.",
        options: ["quotes", "parentheses", "curly brackets", "square brackets"],
        answer: "parantheses"
    },
    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "alerts", "booleans", "numbers"],
        answer: "alerts"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["terminal/bash", "for loops", "javascript", "console log"],
        answer: "console log"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["curly brackets", "paranthesis", "quotes", "commas"],
        answer: "quotes"
    },
    {
        question: "Arrays in javascript can be used to store ____.",
        options: ["other arrays", "numbers and strings", "booleans", "all of the above"],
        answer: "all of the above"
    },
];