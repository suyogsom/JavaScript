/*
to add jQuery to your project either download and add that file via src
OR use CDN as below

<script src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous">
</script>

this CDN uses script which is present on server
*/

let fadeoutHeader = function() {
   $("#heading1").fadeToggle(2000);
};

/*
jQuery selectors allows to select and manipulate HTML elements
Selectors are used to find elements by name, id, classes, type, attributes, value
We can customize those selectors as well
*/

/*
There are 3 CSS selectors namely tag , id (#), class (.)
Examples are below, we can pass multiple inputs for $("") just seperate by comma
To access things inside the parent use $("parent > child")
To access specific tage $("tag name:first") , last, even, odd
See custom selector
*/

// arrow function
let selectorsCSSFunction = ()=> {
    // selectors are same as that of below method in JS
    // document.getElementByID().action();
    // selector pattern $("h2(thing you want to access)").action();
    
    // tags are access directly inside $("__")
    // to access tag write name of tag inside, ex h2
    // to accees id we have to include #, ex #IDName
    // to access class we have to include ., ex .className
    
    //$("h1").fadeToggle(1000);
    //$("#heading2").fadeToggle(1000);
    $(".header").fadeToggle(1000);
};

// using arrow funciton
let customSelectors = ()=>{
    //$("div > p").fadeToggle(1000);
    //$("p:first").fadeToggle(1000);
    $("li:even").fadeToggle(1000);
};


$("#btn5").click(()=>{
    $("#heading4").hide();
});
