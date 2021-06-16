document.write('Hello, World!');
var A = "This is a String";
document.write(A);
var B = "This is B";
window.alert(B);
document.write("\"Be who yu are and say what feel,"
+" because those who mide dont\'t matter and those who matter dont\'t mind.\""
+ "-Dr. Seuss");
var Family = "The Family Matters", Dad = "Carl", Mom = "Harriette",
                Daughter = "Estelle", Son = "Edward";
document.write(Dad);
var red = "This is the color red.";
var red = red.fontcolor("red");
document.write(red);
document.write(4 + 4);
function My_First_Function() { //Defining a function and naming it
    var str = "This text is green!"; //Defining a variable and giving it a string value
    var result = str.fontcolor ("green"); //Using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML=result; //Putting the value of result inot HTML element with "Green_Text" id
}