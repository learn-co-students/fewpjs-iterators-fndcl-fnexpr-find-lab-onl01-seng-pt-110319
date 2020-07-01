const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(recordList) {
  let winningYear = recordList.find(record => record.result === "W" )
  if (winningYear) {
    winningYear = winningYear.year;
  }
  return winningYear;
}