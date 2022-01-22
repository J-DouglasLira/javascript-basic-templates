/* Given an array of integers, find the sum of its elements. 
for example, if the array ar = [1,2,3], 1+2+3 = 6; so return 6*/

function myArr(arrSize){
  var arr = [];
  let arrSum = 0;
  for(let i = 1 ; i<arrSize+1; i++){
    arr.push(i);
}
  for(let j = 0; j<arr.length; j++){
  arrSum+=arr[j];
} 
  return arrSum;
}

let myResult = myArr(100);
console.log(myResult);




