function Call_Loop() { //while loops through the block of code as long as its true
    var Digit = "";
    var X = 1;
    while (X < 11) { // code block to be executed
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loops").innerHTML = Digit;
}

function my_Function() {
    var str = "hello World!";
    var n = str.length;
    document.getElementById("demo").innerHTML = n;
}

var Instruments =["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"] //code to be executed
var Content = "";
var Y;
function for_Loop() { // for loop repeats  section of code
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { //array holding four values under a single name with index number
    var Star_Trek_Picture = []
    Star_Trek_Picture[0] = "working"; // elements numbered 
    Star_Trek_Picture[1] = "resting";
    Star_Trek_Picture[2] = "eating";
    Star_Trek_Picture[3] = "being";
    document.getElementById("Array").innerHTML = " Here is Spock " + Star_Trek_Picture[3] + ".";
}

function constant_function() {
    const Cup_of_Noodles = {type: "udon", flavor: "chicken", spice_level:"Hot"}
    Cup_of_Noodles.color = "orange";
    Cup_of_Noodles.price = "$.99";
    document.getElementById("Constant").innerHTML = " The cost of the " + Cup_of_Noodles.type + " is " + Cup_of_Noodles.price;
}

var A = 82;
document.write(A);
{
    let A = 33; // let statment declares block scoped local variable
    document.write("<br>" + A);
}
document.write("<br>" + A);

function my_Function_1(name) { //use return statment to display name in a <p> element 
    return "Hello " + name;
}
document.getElementById("something").innerHTML = my_Function_1("Tech Academy");

let cookbook = { 
    category: "Thai ",
    chapter_1: "Appetizers",
    chapter_2: "Salads",
    chapter_3: "Main Dishes",
    chapter_4: "Desserts",
    description : function() {
        return "The cookbook has " + this.chapter_1 + this.chapter_2 + this.chapter_3 + this.chapter_4;
    }
};
document.getElementById("cook").innerHTML = cookbook.description();

let text = ""
for (let i = 0; i < 10; i++){
    if (i === 3) {break; }
    text += "The number is " + i + "<br>";
    }
    document.getElementById("loops").innerHTML = text;

let text1 = "";
for (let i = 0; i < 10; i++){
    if (i === 3) {continue; }
    text1+= "the number is " + i + "<br>";
}
document.getElementById("something_1").innerHTML = text1;
