const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
	const yearWon = records.find(record => record.result === "W")
	if (yearWon) {
		return yearWon.year
	} else {
		return undefined
	}
}
