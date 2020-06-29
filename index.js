const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(team) {
 let result = team.find(function(e) {return e.result === "W"})
 if(result) {
   return result.year;
 } else{
   return undefined;
 }


}