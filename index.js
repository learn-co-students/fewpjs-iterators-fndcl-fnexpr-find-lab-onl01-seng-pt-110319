const testVar = {}

function testFunc() {
  return "hi"
}

 
function superbowlWin(object) {


  let result = object.find(object => object.result === "W")

  return result ? result.year : undefined;

}
