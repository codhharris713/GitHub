function my_Dictionary() {
var person = { // create object
    firstName: "Cody",
    lastName: "Harris",
    age: "34",
    eyeColor: "green"
};

delete person.firstName;
document.getElementById("Dictionary").innerHTML = person.firstName;

document.getElementById("Dictionary").innerHTML = person.firstName;
};


