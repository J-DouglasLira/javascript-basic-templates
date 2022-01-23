
function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}

let arr = [3,4,2,4,5];
let n =  3;

let a = multiply(arr,n);
console.log(a);











