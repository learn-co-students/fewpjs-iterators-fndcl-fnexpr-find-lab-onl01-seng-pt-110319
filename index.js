const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let winner = arr.find(win => {
    return win.result === "W"
  })
  if(winner === undefined) {
    return winner
  } else {

    return winner.year
  }

}
