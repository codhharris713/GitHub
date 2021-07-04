//This var keeps track of whose turn it is.
let activePlayer = 'X' ;
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [] ;

//This function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been slected already.
    //The .some() method is used to check each elementof selectedSquare array
    //to see if it conatines the square number clicked on.
if (!selectedSquares.some(element => element.includes(squareNumber))) {
    //This variable retrieves the html element id that was clicked.
    let select = document.getElementById(squareNumber);
    //This condition checks whos turn it is.
    if (activePlayer === 'X') {
        //If activePlayer is equal to 'X', the x.png is placed in HTML.
        select.style.backgroundImage = 'url("images/x_1.png") ' ;
        //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O' 
    } else {
        //If activePlayer is equal to 'O', the o.png is placed in HTML.
        select.style.backgroundImage = 'url("images/o_3.png") ' ;
    }
    //squareNumber and activePlayer are concatednated together and added to array
    selectedSquares.push(squareNumber + activePlayer);
    //This calls a function to check for any win conditions 
    checkWinConditions() ;
    //This condition is for changing the active player
    if (activePlayer === 'X') {
        //if active player is X change to O
        activePlayer = 'O';
    //If active player is anything other then X
} else {
    //change the activePlayer to X
    activePlayer = 'X';
}



    //This function plays placement sound.
    audio ('./media/place_1.mp3') ;
    //This condition checks to see if it is computers turn.
    if(activePlayer === 'O') {
        //this function disables clicking for computer choice.
        disableClick() ;
        //This function waits 1 second before computer places imgae and enables click
        setTimeout(function () { computersTurn() ; } , 1000 )
    }
    //Returning ture is needed for our computersTurn() function to work
    return true;
}
//This function results in a random square being selected.
function computersTurn() {
    //This boolean is needed for our while loop.
    let success = false;
    //this variable stores a random number 0-8
    let pickASquare;
    //This condition allows our while loop  to keep trying if a square is selected already
    while(!success) {
        //A radom number between 0-8 is selected
        pickASquare = String(Math.floor(Math.random() * 9));
        //If the random number evaluated returns true, the saaure hasnt been selected yet.
        if (placeXOrO(pickASquare)) {
            //This line calls the function
            placeXOrO(pickASquare) ;
            //this changes our boolean and ends the loop
            success = true;
        };
    }
  }
}

//This function parses the selectedSqaures array to search for win conditions
//drawWinLine function is called to draw line if condition is met
function checkWinConditions() {
    // X O, 1, 2 condition
    if      (arrayIncludes('0X', '1X', '2X' )) { drawWinLine(50, 100, 558, 100)  }
    // X 3, 4, 5 condition
     else if     (arrayIncludes('3X', '4X', '5X' )) { drawWinLine(50, 304, 558, 304)  }
    // X 6, 7, 8 condition
    else if      (arrayIncludes('6X', '7X', '8X' )) { drawWinLine(50, 508, 558, 508)  }
    // X O, 3, 6 condition
    else if      (arrayIncludes('0X', '3X', '6X' )) { drawWinLine(100, 50, 100, 558)  }
    // X 2, 5, 8 condition
    else if      (arrayIncludes('1X', '4X', '7X' )) { drawWinLine(304, 50, 304, 588)  }
    // X 6, 4, 2 condition
    else if      (arrayIncludes('2X', '5X', '8X' )) { drawWinLine(508, 50, 508, 558)  }
    // X 0, 4, 8 condition
    else if      (arrayIncludes('6X', '4X', '2X' )) { drawWinLine(100, 508, 510, 90)  }
    // X O, 3, 6 condition
    else  if     (arrayIncludes('0X', '4X', '8X' )) { drawWinLine(100, 100, 520, 520)  }
  
  
    
    else if      (arrayIncludes('00', '10', '20' )) { drawWinLine(50, 100, 558, 100)  }
  
    else if      (arrayIncludes('30', '40', '50' )) { drawWinLine(50, 304, 558, 304)  }
    
    else if      (arrayIncludes('60', '70', '80' )) { drawWinLine(50, 508, 558, 508)  }
    
    
    else if      (arrayIncludes('00', '30', '60' )) { drawWinLine(100, 50, 100, 558)  }
    
    else if      (arrayIncludes('10', '40', '70' )) { drawWinLine(304, 50, 304, 558)  }
    
    else if      (arrayIncludes('20', '50', '80' )) { drawWinLine(508, 50, 508, 558)  }

    else if      (arrayIncludes('60', '40', '20' )) { drawWinLine(100, 508, 510, 90)  }
   
    else if      (arrayIncludes('00', '40', '80' )) { drawWinLine(100, 100, 520, 520)  }

    //This conditon checks for tie. If none of the above conditions register and 9 // squares are slected the code excutes
    else if (selectedSquares.length >= 9) {
        //This function plays in the time game sound
        audio('./media/tie_3.mp3');
        //this function sets a .3 second timer before the reset game is called.
        setTimeout(function () { resetGame() ; } , 1000);
    }

    // This function checks if any arry includes 3 strings. it is used to check for // each win condition
    function arrayIncludes (squareA, squareB, squareC) {
        //These 3 var will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        //if the 3 var we pass are all included in our array ture is// returned and our else if condition exe the drawWinLine function
        if (a === true && b === true && c === true) {return true }
    }
}

//This function makes our body element temporarily unclickable
function disableClick() {
    //this makes our body unclickable
    body.style.pointerEvents = 'none' ;
    //this makes our body clickable again after 1 second
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}
//this function takes a string parameter of the path you set earlier for placement sound
function audio(audioURL) {
    //we create a new audio object we pass the path as a parameter
    let audio = new Audio(audioURL) ;
    //play method plays our sound
    audio.play() ;
}

//This function utilizes html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses our html canvas element.
    const canvas = document.getElementById('win-lines')
    //This line gives us access to methods and prperties to use on canvas.
    const c = canvas.getContext('2d') ;
    //This line indicates where the start of a lines x axis is.
    let x1 = coordX1, 
    //this line indicated where the start of a lines y axis is.
        y1 = coordY1,
    //this line indicates where the end of lines x axis is
        x2 = coordX2,
    //this line indicated where the end of lines y axis is
        y2 = coordY2,
    //this var stores temp x axis data we updated in our animation loop
    x = x1,
    y = y1;

    //this function interacts with the canvas
    function animateLineDrawing() {
    //this var creates a loop
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    //this method clears from last loop iteration
    c.clearRect(0, 0, 608, 608)
    //this method starts a new path
    c.beginPath();
    //This method moves us to a starting point for our line
    c.moveTo (x1, y1)
    //this method indicates the end point in our line
    c.lineTo (x, y)
    //this method sets the width of our line
    c.lineWidth = 10;
    //This method set the color of our line
    c.strokeStyle = 'rgba(70, 255, 33, .8)' ;
    //this method draws everything we laid out above
    c.stroke() ;
    //this condition checks if we reached the endpoint
    if (x1 <= x2 && y1 <= y2) {
    //this condition add 10 to the previous end x point
        if (x < x2) { x += 10; }
    //this condition ass 10 to the previous end y point
        if (y < y2) { y += 10; }
    //this condition cancels our animation loop if we have reach the end points
        if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop) ; }
    }
    //this condition is similar to the one above this is necessary for the 6, 4, 2 win condition
    if (x1 <= x2 && y1 >= y2) {
        if (x < x2) { x += 10; }
        if (y > y2) { y -= 10; }
        if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop) ; }
    }
}


//This function clears our canvas after our win line is drawn.
function clear() {
    //this line starts our animation loop.
    const animationLoop = requestAnimationFrame(clear);
    //this line clears our canvas
    c.clearRect(0, 0, 608, 608);
    //This line stops our animation loop.
    cancelAnimationFrame (animationLoop);
}
//This line disallows clicking while the win sound is playing
disableClick() ;
//This line plays the win sounds
audio ('./media/winGame_2.mp3') ;
//This line calls our main animation loop.
animateLineDrawing() ;
//This line waits 1 second. Then, clears canvas resets game, and allows clicking again.
setTimeout(function () { clear() ; resetGame() ; }, 1000);
}

//This function resets the game in the event of a tie or win
function resetGame() {
    //This for loop iterates through each HTML square element
    for (let i = 0; i < 9; i++) {
        //This var get the html element of i.
        let square = document.getElementById(String(i))
        //This removes our elements backgroundImage.
        square.style.backgroundImage = ''
    }
    //This resets our array so it is empty and we can start over.
    selectedSquares = [];
}