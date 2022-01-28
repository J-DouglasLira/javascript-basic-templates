/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

*/


function positiveSum(arr) {
  let sum = 0;
  let i = 0;
  do{
    if(arr[i]>=0){
      sum = sum+arr[i];
    }
  i++;
  } while (i<arr.length);
  return sum;
}

arr = [1,-4,7,12];
console.log(positiveSum(arr));
