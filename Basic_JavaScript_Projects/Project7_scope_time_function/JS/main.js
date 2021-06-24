var X = 10; // Global Variable
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();
///////////////////////////////////////////////////
function Add_numbers_3() { // Local Variable
    var X = 20;
    document.write(20 + X + "<br>");
}
function Add_numbers_4() {
    document.write(X + 200);
}
Add_numbers_3();
Add_numbers_4();
////////////////////////////////////////////////////
function Add_numers_5() {
    var X= 10;
    console.log(15 + X);
}
    function Add_numbers_6() {
        console.log(X + 100);
}
Add_numbers_5();
Add_numbers_6();

