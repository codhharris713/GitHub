function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

function Vote_Function() { // use of a conditional operator (ternary)
    var Age, Can_Vote;
    Vote = document.getElementById("Vote").value;
    Can_Vote = (Age < 18) ? "You are not old enough to vote":"You are old enough "; // the ternary operator is ?
    document.getElementById("voting").innerHTML = Can_Vote + "to vote.";
}

function Vehicle (Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function my_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    "manufactured in " + Erik.Vehicle_Year;
}

function my_Function2(){
    document.getElementById("New_and_This").innerHTML = "something";
}

function Person(First, last, age, eye){ // constructor function that uses (this)
    this.firstName = First;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
function my_Function3() {
var myFather = new Person("John", "Doe", 50, "blue"); // constructor function that uses (new)
document.getElementById("here").innerHTML =
"My father is " + myFather.age + ".";
}

function my_Function4() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() { // nested function contained within the function above it
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}