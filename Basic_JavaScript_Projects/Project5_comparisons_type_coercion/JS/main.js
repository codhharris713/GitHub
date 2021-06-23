document.write(typeof "Word") // using typeof operator to display a string variable


document.write("hello world" + 5); // expression combining a string and a number

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0
}

function my_Function_1() {
document.getElementById("Test_1").innerHTML = isNaN('007');
}

function my_Function_2() {
document.getElementById("Test_2").innerHTML = isNaN('This is a string');
}

document.write(2E310);

document.write(-3E310);

function my_Function_3() {
    document.getElementById("Test_3").innerHTML = (Number.NEGATIVE_INFINITY);
}
function my_Function_4() {
    document.getElementById("Test_4").innerHTML = (Number.POSITIVE_INFINITY);
}

document.write(10 > 2); // boolean comparsion that returns true
document.write(10 < 2); // bollean comparsion that returns false

console.log(2 + 2);
console.log(10 < 2);

document.write(10 == 10); // using double equal signs to output true
document.write(3 == 11); // using double equal signs to output false

X = 10;
Y = 10;
document.write(X === Y); // triple equal signs data type and value match returns true

A = 82;
B = "12 is a number";
document.write(A === B); // triple equal signs different data type and value returns false

C = 4;
D = "4";
document.write(C === D); // triple equal signs different data type but same vale returns false

E = 12;
D = 6;
document.write(E === D); // triple equal signs same data but different value returns false 

document.write(5 > 2 && 10 > 4); // using the AND operator
document.write(5 < 4 && 10 < 4);
document.write(5 > 10 || 10 > 4); // using the OR operator
document.write(5 > 10 || 10 > 20);

function not_Function() {
    document.getElementById("Not").innerHTML = ! (20 > 10); // using the NOT operator
}