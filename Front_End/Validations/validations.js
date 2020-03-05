
// we have change the button type="submit", this will automatically refresh the page
// if type is button then page will not refresh
// form is used to process the data on the server side
// password type is type="password", means we will not able to see the password (it will be encrypted)

// here onsubmit is used on form tag, because we want to validate after submitting form and not after clicking button only
// action="message.html" shows which page to redirect after submitting form
// return specified in onsubmit shows validation funciton is returning some value
// if false is returned then it will not redirect the page
// false value means onsubmit event will not be called and form will not be submitted & you will be on same page


// here lables are added to get invalid user input
// border functionality is not working for time being

// html file = mainPage.html

// use arrow function
let validation = ()=> {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if(username == "") {
        alert("Blank username");
        //username.style.border = "solid 3px red";
        document.getElementById("usernameLbl").style.visibility = "visible";
        return false;
    } 
    else if(password == "") {
        alert("Blank password");
        //password.style.border = "solid 3px red";
        document.getElementById("passwordLbl").style.visibility = "visible";
        return false;
    } 
    else if(password.length < 5){
        alert("Password too short");
        return false;
    } 
    else {
        true;
    } 
};

// regular expression
// we can have different paterns in regular expression
// html file = message.html
// validate mobile number using regular expression
// validate email id using regular expression 
let validateUserNameUsingRegEx = ()=> {
    let username = document.getElementById("username1").value.trim();
    let regx = /E00/;
 
    if(regx.test(username))alert("Valid user");
    else alert("Invalid user");
};

