// Make a variable that generates random numbers between 19 and 120 for the computer random number.
// Make variables that grnerates random numbers between 1 and 12 for the crystals random number.
// A random number will be generated by the computer.
// A random number is assigned to each crystal. Crystals should randomly generate a new number every game.
// The player can click on any crystals.
// The crystals will add their random generated number value to the computer random number.
// If the current number is equal to the computer random number, increment wins by 1 point. 
// If the current number exceeds the computer random number, increment loses by 1.
// Reset the game (do not refresh the webpage).

// Fun stuff
$(document).ready(function() {
    // Crystal random variables
    var crystalUno = "";
    var crystalTwo = "";
    var crystalThree = "";
    var crystalFour = "";

    // CPU random variables
    var cpuRandomNum = "";

    // Other global variables   
    var wins = 0;
    var loses = 0;
    var userNum = 0;

    // Place crystal images into HTML
    $("#crystal1").html('<img src="assets/images/crystal1.png" alt="crystal 1" style="width:100%" />');
    $("#crystal2").html('<img src="assets/images/crystal2.png" alt="crystal 2" style="width:100%" />');
    $("#crystal3").html('<img src="assets/images/crystal3.png" alt="crystal 3" style="width:100%" />');
    $("#crystal4").html('<img src="assets/images/crystal4.png" alt="crystal 4" style="width:100%" />');

    // Override HTML text for numbers and scores
    $("#winScore").html(wins);
    $("#loseScore").html(loses);
    $("#userGuess").html(userNum);
    $("#randomNum").html(cpuRandomNum);

    // What happens when crystals are clicked
    // Crystal 1 click function
    $("#crystal1").on("click", function() {
        userNum += crystalUno;
        $("#userGuess").html(userNum);
        // console.log("-clicked crystal 1: " + crystalUno);
        check();
    });
    // Crystal 2 click function
    $("#crystal2").on("click", function() {
        userNum += crystalTwo;
        $("#userGuess").html(userNum);
        // console.log("-clicked crystal 2: " + crystalTwo);
        check();
    });
    // Crystal 3 click function
    $("#crystal3").on("click", function() {
        userNum += crystalThree;
        $("#userGuess").html(userNum);
        // console.log("-clicked crystal 3: " + crystalThree);
        check();
    });
    // Crystal 4 click function
    $("#crystal4").on("click", function() {
        userNum += crystalFour;
        $("#userGuess").html(userNum);
        // console.log("-clicked crystal 4: " + crystalFour);
        check();
    });

    // Run the running function
    function running(){
        // Generate random variables for the crystals again
        crystalUno = crystalRandomNumber();
        crystalTwo = crystalRandomNumber();
        crystalThree = crystalRandomNumber();
        crystalFour = crystalRandomNumber();

        // Generate random variables for the cpu again
        cpuRandomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#randomNum").html(cpuRandomNum);
        $("#displayStatus").html('<h2 style="text-align:center">You want to get exactly ' + cpuRandomNum + '.</h2>');
        
        // Test random numbers
        // console.log("Number to reach: " + cpuRandomNum);
        // console.log("crystal 1: " + crystalUno);
        // console.log("crystal 2: " + crystalTwo);
        // console.log("crystal 3: " + crystalThree);
        // console.log("crystal 4: " + crystalFour);
    }

    // Check function to compare user current number to cpu random number
    function check(){
        // Player wins when the number is equal to the cpu random number
        if (userNum === cpuRandomNum){
            wins++;
            $("#status").html('<h2 style="text-align:center">You Win!</h2>');
            $("#winScore").html(wins);
            // Resets user number to 0
            userNum = 0;
            running();
            $("#userGuess").html(userNum);
        // Player loses when the number is larger than the cpu random number    
        } else if (userNum > cpuRandomNum){
            loses++;
            $("#status").html('<h2 style="text-align:center">Loser!</h2>');
            $("#loseScore").html(loses);
            // Resets user number to 0
            userNum = 0;
            running();
            $("#userGuess").html(userNum);
        }
    }

    // Crystal call function to generate random numbers
    function crystalRandomNumber(){
        var crystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        return crystal;
    }

    // Magic begins here
    running();
});