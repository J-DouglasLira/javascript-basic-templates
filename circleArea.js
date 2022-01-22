// import 'bootstrap@4.6.0'
// import $ from 'jquery'

function areaDoCirculo(raio){
  let area = Math.PI*(raio*raio);
  const formatArea = area.toFixed(4)
  return formatArea;
};
var raio = 22 //prompt()
const A  = areaDoCirculo(raio);
console.log("A=",A);

