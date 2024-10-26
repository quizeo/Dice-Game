// Display initial "Refreshing..." message
document.querySelector("h1").textContent = "Refreshing...";
document.querySelector("h1").classList.add("changeText");

// Delay to simulate refreshing effect
setTimeout(function() {
    // Generate random numbers for both dice
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Update dice images based on random numbers
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    // Determine the winner and update the h1 text
    if (randomNumber > randomNumber2) {
        document.querySelector("h1").textContent = "Player 1 Wins!";
    } else if (randomNumber < randomNumber2) {
        document.querySelector("h1").textContent = "Player 2 Wins!";
    } else {
        document.querySelector("h1").textContent = "Draw!";
    }
    
    // Remove the "changeText" class after showing results
    document.querySelector("h1").classList.remove("changeText");

}, 1000); // 1 second delay (1000 milliseconds)
