/* It's pretty straightforward. 
Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, 
the original string. You don't have to worry with strings with less than two characters. */

// first solution 

function removeChar(str){
  let myStrToArr = str.split(""); /// [d,o]
  myStrToArr.shift();
  myStrToArr.pop();
  return myStrToArr.join("");
}
 
// second solution;

function removeChar2(str){
  let myStrToArr = str.split(""); /// [d,o]
  if(myStrToArr.length<3){
    return myStrToArr.join("");
  } else { 
    myStrToArr.shift();
    myStrToArr.pop();
  }
  return myStrToArr.join("");
}

 console.log(removeChar2("do"));