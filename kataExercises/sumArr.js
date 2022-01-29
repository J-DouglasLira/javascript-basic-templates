function arrayPlusArray(arr1,arr2){
  let arrSum = 0;
  for (let i = 0; i<arr1.length; i++){ 
   arrSum = arrSum+arr1[i];           // soma do array 1;
  }
  for (let j = 0; j<arr2.length; j++){ 
    arrSum = arrSum+arr2[j];        // resultado do array 1 + soma do array 2;
  }
  return arrSum;	
}



let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log(arrayPlusArray(arr1, arr2));
