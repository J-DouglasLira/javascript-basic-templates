var arrayOfSheep = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];

function countSheeps(arrayOfSheep) {
let numbersOfSheeps = 0
for(let i = 0; i<arrayOfSheep.length; i++){
arrayOfSheep[i] === true ? numbersOfSheeps+=1 :  "False"
}
return "there are " + numbersOfSheeps + " numbers of sheeps";
}
console.log(countSheeps(arrayOfSheep));


// second method;

var arrayOfSheep2 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];


function countSheeps2(arrayOfSheep2) {
  return "there are "+ arrayOfSheep2.filter(function(v) {return !!v;}).length +
  " numbers of sheeps"; 
}

console.log(countSheeps2(arrayOfSheep2));

