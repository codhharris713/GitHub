function another_function() { //defined and named function
    var str = "something"; //defined a variable with string value 
    var result = str.fontcolor("blue"); // fontcolor methond
    document.getElementById("blue_text").innerHTML = result; //value result on HTML id blue_text
}
function myFunction() { //declared function
    var sentence = "I am learning"; //createtd variable called sentence assign value to I am learing
    sentence += "a lot from this book!"; //used += operator to concatenate a string 
    document.getElementById("Concatenate").innerHTML = sentence;
}

