const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let result =  array.find(x => x.result === "W");
  return !!result ? result.year : undefined;
}