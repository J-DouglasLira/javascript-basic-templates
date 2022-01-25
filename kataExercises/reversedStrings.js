
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

console.log(solution("doug"));

//second solution 

function solutionSecondWay(string){
 return string.split("").reverse().join("");
}







