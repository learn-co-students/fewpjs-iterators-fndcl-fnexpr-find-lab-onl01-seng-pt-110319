const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(object) {
  let winningYear = object.find(object => object.result === "W");
  return winningYear ? winningYear.year : undefined
}
