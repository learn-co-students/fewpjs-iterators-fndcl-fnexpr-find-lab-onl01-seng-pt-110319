/*
Write a function called superbowlWin() that:
  Receives 1 argument, an Array of JavaScript Objects
  
  Each object has two properties: year and result
  
  Use find() to test each Object to see if the result is "W" — a win!
  
  superbowlWin() should return the year when the win occurred (if it occurred at all!). If no
  
  win is found, it should return, sadly, undefined

*/
const arrayOfObjects = [      // Brackets = ARRAY PART
                              //Curlys = OBJECT PART
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"},
  {year: "2019", result: "W"},
  {year: "2020", result: "W"},
  {year: "2010", result: "W"}
                                      ]

function superbowlWin(arg1){ // arg1 can be ARRAY OF OBJECTS
  let x = arg1.find( record => // this is like Ruby's  do |item| item.action
    record.result === "W")
    if (x)
      return x.year;
    else
      return undefined;
  
}
