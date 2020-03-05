/*
1. setTimeout() allows to execute statements ONCE after an interval
2. clearTimeout() clears a timer set with setTimeout()
3. setInterval() allows to execute statements REPEATEDLY after an interval
4. clearInterval() clears a time set with setInterval()
*/


// setTimeout function take 2 arguments 
// 1.funciton you want to perform 2.time in miliseconds

let timeID = 0;
let startTimer = () => {
    timeID = window.setTimeout(displayMessage,5000);
};

// clearTimeout takes unique ID, above method return its ID
let stopTimer = () => {
    window.clearTimeout(ID);
};

let displayMessage = () => {
    document.getElementById("heading1").innerHTML = "5 seconds has passed";
};

// setInterval method
let intervalID = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
    
document.getElementById("startInterval").disabled = true;
document.getElementById("stopInterval").disabled = true;
document.getElementById("resetInterval").disabled = true;

let beginOperation = () => {
    document.getElementById("heading3").innerHTML = `Now select operation`;
    document.getElementById("startInterval").disabled = false;
    document.getElementById("stopInterval").disabled = false;
    document.getElementById("resetInterval").disabled = false;
};

let startInterval = () => {
    intervalID = window.setInterval(time24HoursFormat,1000);

    let radbtn1 = document.getElementById("radbtn1");
    let radbtn2 = document.getElementById("radbtn2");

    if(radbtn1.checked == true) time24HoursFormat();
    else if(radbtn2.checked == true) time12HoursFormat();
};

// clearTimeout takes unique ID, above method return its ID
let stopInterval = () => {
    window.clearInterval(intervalID);
};

let displayTimeInSeconds = () => {
    document.getElementById("heading2").innerHTML = `${seconds} seconds`;
    seconds++;
};

let resetInterval = () => {
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("heading2").innerHTML = `00:00:00`;
};

let time24HoursFormat = () => {
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60) {
           minutes=0; 
           hours++;    
        } 
    } 
    document.getElementById("heading2").innerHTML = `${prependZero(hours)}:${prependZero(minutes)}:${prependZero(seconds)}`;
    seconds++;
};

let time12HoursFormat = () => {
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60) {
           minutes=0; 
           hours++;  
           if(hours==12){
            hours=0;
           }  
        } 
    } 
    document.getElementById("heading2").innerHTML = `${prependZero(hours)}:${prependZero(minutes)}:${prependZero(seconds)}`;
    seconds++;
};

let prependZero = (number) => {
    if (number <= 9)
        return "0" + number;
    else
        return number;
};
