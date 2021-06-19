function addition_Function() { //defined and named function
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 =" + addition; //addition operator add numbers
    
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math_1").innerHTML = "5 - 2 =" + Subtraction; //subtraction operator subracts numbers
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math_2").innerHTML = "6 x 8 = " + simple_Math; // multiplication operator multiplies numbers
    
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math_3").innerHTML = "48 / 6 =" + simple_Math; //division operator divides numbers
    
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2-5;
    document.getElementById("Math_4").innerHTML = "1 plus 2, mutiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math; //this is a multiple operations function
    
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math_5").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math; //modulus operator returns the division remainder
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math_6").innerHTML = -x; //unary operator contains a single operand--this is a negation operator as well that returns the negatice form of this number
}

var X = 5; //this is a increment operator it increase to something
X++;
document.write(X) ;
document.write("<br>"); //line break to sepreate the increment and decrement 
var Y = 5.25; //this is a decrement operator that reduces to something
Y--;
document.write(Y) ;

window.alert(Math.random()); //Math.random returns a ramdom number 0 and 1

window.alert(Math.random() * 100); //Random number displayed between numbers you choose

document.getElementById("Math_7").innerHTML = Math.PI; //Math.PI returns a ratio of a circles circumference to its diameter

document.getElementById("Math_8").innerHTML = Math.round(4.9); //Math.round returns the nearest integer