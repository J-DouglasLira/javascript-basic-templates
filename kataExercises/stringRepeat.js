
/* Write a function called repeatStr
 which repeats the given string string exactly n times.
 repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/
/// first solution; 
function repeatStr(n,s){
  return s.repeat(n);
} 

// second solution
function repeatStrtwo(n,s){
  let result = ""
  let i = 0;
  do{
    result = result+s;
    i++ 
  } while (i<n)
  return result;
}



s = "string";
n = 2;

console.log(repeatStrtwo(n,s));