const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(object){
  let winner=object.find(function(e){ 
   return e.result==="W"
  })
  if(winner === undefined) {
    return winner
  } else {
    
    return winner.year
  }

}