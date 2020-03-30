var playerWin = 0;
var computerWin = 0;

function playGame (player1, computer2, playUntil) {

    while(playerWin < playUntil && computerWin < playUntil) {
      var hand = ['rock', 'paper', 'scissors'];

      function getHand() {
        let rand = Math.random();
        
        if (rand < 0.34) {
          return hand[0];
        } else if (0.34 < rand < 0.67) {
          return hand[1];
        } else {
          return hand[2];
        }
      }

      var computerChoice = getHand();
      var userChoice = getHand();

      console.log(player1 + " you have " + playerWin);
      console.log(computer2 + " you have " + computerWin);

      function compare() {
        if(computerChoice==userChoice) {
        return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is a tie!";
        }
        if(computerChoice=="rock") {
            if(userChoice=="scissors") {
              computerWin++;
                return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou lost!";
            }
            else {
              playerWin++;
                return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou won!";
            }
        }
        if(computerChoice=="paper") {
            if(userChoice=="rock") {
              computerWin++;
                return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou lost!";
            }
            else {
              playerWin++;
                return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou won!";
            }
        }
        if(computerChoice=="scissors") {
            if(userChoice=="paper") {
              computerWin++;
                return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou lost!";
            }
            else {
              playerWin++;
                return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou won!";
            }
        }
      }
      console.log(compare());
    }
    console.log("Great job! The " + computer2 + " had " + computerWin + ". "+ player1 + " had " + playerWin);
}

playGame("Branson", "Computer", 5);