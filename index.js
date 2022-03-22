let Alice = [23, 67, 32]
let Bob = [12, 67, 43]
let Hans = [34, 24, 42]

var playerA = 0
var playerB = 0

let calcPoints = (a, b) => {
  for (i = 0; i < 3; i++) {
    if (a[i] == b[i]) {
      return
      // ROUND DRAW! console.log("Player A points increased by one. Now it's " + playerA)
    } else if (a[i] > b[i]) {
      playerB = playerB + 1
      // console.log("Player B points increased by one. Now it's " + playerB)
      return playerB
    } else if (a[i] < b[i]) {
      playerA = playerA + 1
      return playerA
    }
  }
}

let findWinner = (playerA, playerB, c) => {
  c(playerA,playerB);
  if (playerA == playerB) {
    console.log(
      "Unfortunately the prize will be shared since the participants has tie'd the competition"
    )
  } else if (playerB > playerA) {
    console.log('Player B won the match! WINNER WINNER CHICKEN DINNER!')
  } else if (playerA > playerB) {
    console.log('Player A won the match! WINNER WINNER CHICKEN DINNER!')
  }
}

findWinner(Bob, Alice, calcPoints)