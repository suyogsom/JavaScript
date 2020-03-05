//console.log(document.title);

// element by ID is an unique and pplies to only one object
let changeHeading = function () {
   document.getElementById('heading2').innerText = 'text changed now!';
};

// placeholder is used to display default value, it goes off if you type in something
let printTextInput = function() {
    let message = document.getElementById("text1").value;
    alert(message);
};

let compareTextArea = function() {
    let userName = document.getElementById("text2").value;
    let password = document.getElementById("text3").value;

    if(userName === password)alert("User name is password");
    else alert("Both are different");
};

// uses name="group" to select one of the radio button
let printRadioButton = function() {
    let radbtn1 = document.getElementById("radbtn1");
    let radbtn2 = document.getElementById("radbtn2");
    
    if(radbtn1.checked == true)alert(radbtn1.value);
    else if(radbtn2.checked == true)alert(radbtn2.value);
    else alert("none of them selected");
};

// note that when it is showing on alert it is showing the value="app" mentioned
let printDropDown = function() {
    let selectdItem = document.getElementById("dropdown1");
    alert(selectdItem.options[selectdItem.selectedIndex].value);
};

// element by tag allpies to all the tag in HTML file
// if we want to change in bulk we can use get element by tag
// means tag name like p tag or div tag etc
let changeParaStyleByTag = function() {
    let allParas = document.getElementsByTagName("p");
    // this will give back array of those tags
    
   allParas[0].style.color = "red";
   allParas[1].style.color = "blue";
   allParas[2].style.color = "green";
   allParas[3].style.color = "pink";
};

// element by class name applies to discret elements means only selected items
let changeParaStyleByClass = function() {
    let allParas = document.getElementsByClassName("para1");
    // this will give back array of those tags
    
    allParas[0].style.color = "yellow";
    allParas[1].style.color = "yellow";
};

