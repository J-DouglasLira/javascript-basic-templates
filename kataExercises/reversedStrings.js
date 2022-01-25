
/*Complete the function  so that it reverses the string passed into it.
for example: "world! => !dlroW */

// first solution:

function solution(str){
  let myNewStr = "";
    for( let i = 1; i<str.length+1; i++){
      myNewStr += str[str.length-i];
    }
    return myNewStr;
} 

console.log(solution("First solution"));


//second solution 

function solutionSecondWay(string){
 return string.split("").reverse().join("");
}

console.log(solutionSecondWay("Second solution"));
// Third solution; 

function solutionNewWay(newString){
  const input = newString.split("");
  let reverse = [];
  for (let i = 0; i<input.length; i++){
    reverse.unshift(input[i]);
  }
  return reverse.join("");
}

console.log(solutionNewWay("Third solution"));




