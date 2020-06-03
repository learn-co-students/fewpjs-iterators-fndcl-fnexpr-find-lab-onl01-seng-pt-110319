const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arrayOfObjects) {
  let win = arrayOfObjects.find(function(season) {return season.result === "W"});
  if (win) {
    return win.year;
  } else {
    return undefined;
  }
}