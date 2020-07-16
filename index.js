const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]


function superbowlWin(record) {
  let won_year = record.find(function(object){
    //console.log(object);
    //console.log(object.result);
    return object.result==="W"
    //return object === {year: "2018", result: "L"}
  })
  if (won_year) {
    return won_year.year
  }
  else {
    return won_year
  }
}
