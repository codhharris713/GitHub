function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is the best color ever !" ;
    switch(Colors) {
      case "Orange":
          Color_Output = "Orange" + Color_String;
          break;
          case "Green":
          Color_Output = "Green" + Color_String;
          break;
          case "Purple":
          Color_Output = "Purple" + Color_String;
          break;
          case "Yellow":
          Color_Output = "Yellow" + Color_String;
          break;
          case "Pink":
          Color_Output = "Pink" + Color_String;
          break;
          case "Red":
          Color_Output = "Red" + Color_String;
          break;
          default:
          Color_Output = "Write color exactly as shown in list" ;
    }
        document.getElementById("Output").innerHTML = Color_Output;
}
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!"; // index value of var A to 0
}

var c = document.getElementById("ID_Canvas");
var ctx = c.getContext("2d");

ctx.font = "30px Verdana";

////create gradient
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");

/////Fill with gradient
ctx.strokeStyle = gradient;
ctx.strokeText("Hello There!", 10, 50);



