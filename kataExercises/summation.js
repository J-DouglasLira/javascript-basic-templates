/* Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example: 

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 */



var summation = function (num) {
  let summation = 0;
  for (i=0; i<num+1; i++) {
    summation+=i;
  }
  return summation;
} 

/* second */
function summationSecond(num){
  let i = 0;
  let summation2 = 0;
  while(i<num+1){
    summation2+=i;
    i++;
  }
  return summation2;
}

/* third way */ 

var summationThird = function (num) {
  return (num*(num+1))/2;
}



console.log(summationSecond(100))