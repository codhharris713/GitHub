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
function Add_numers_5() { // function with error used console.log to debug
    var X= 10;
    console.log(15 + X);
}
    function Add_numbers_6() {
        console.log(X + 100);
}
Add_numbers_5();
Add_numbers_6();
////////////////////////////////////////////////////
function get_Date() {
    if (new Date().getHours() < 20) {
        document.getElementById("Greeting").innerHTML ="How are you today?"; 
    }
}

function get_Date_1() {
    if (new Date().getFullYear() < 2022) {
        document.getElementById("What_Year").innerHTML = "What year is it?";
    }
}
function Year_Function() { // Get Date Methods using the Year Method
    Year = document.getElementById("Year").value;
    if (Year <= 2000) {
        Beer = "You are old enough to drink";
    }
    else {
        Beer = "You can not drink";
    }
    document.getElementById("Year_Born").innerHTML = Beer;
}

function Time_function() { // Time function
    var Time = new Date().getHours();
    var Reply;
        if (Time < 12 == Time > 0) {
            Reply = "It is morning time!";
        }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;

    }
