function full_Sentence() { //concat joins two or more strings
    var part_1 = "Whats Up";
    var part_2 = "My Dude";
    var whole_sentence = part_1.concat(part_2);
    document.getElementById("connect").innerHTML = whole_sentence;
}

function slice_Method() { //Slice method extract a part of a string and returns the extracted parts in a new string
    var sentence = "I work all day and then I do my school work all night.";
    var section = sentence.slice (27,33);
    document.getElementById("slice").innerHTML = section;
}

function upper_Function() { // covert the string to uppercase letters
    var str = "Time to get ice cream!";
    var res = str.toUpperCase() ;
    document.getElementById("upper_case").innerHTML = res;
}

function search_Function() { //search a string for "Time" and display the position of the match
    var str = "Time to search a string";
    var n = str.search("Time");
    document.getElementById("search").innerHTML = n;
}

function string_Method(){ //this method returns the value of a string object
    var X = 200
    document.getElementById("Number_String").innerHTML = X.toString();
}

function precision_Method() {
    var Y = 13838.138138888888888;
    document.getElementById("Precision").innerHTML = Y.toPrecision(13);
}

function fixed_Function(){ // method coverts number into a string
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("fixed").innerHTML = n;
}
 
function value_Method(){ // returns the primitive vale of a string object
    var str = "Out to Lunch";
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res;

}