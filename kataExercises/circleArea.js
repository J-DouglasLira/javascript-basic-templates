// import 'bootstrap@4.6.0'
// import $ from 'jquery'

const A  = areaDoCirculo(22);

function areaDoCirculo(raio){
  let area = Math.PI*(raio*raio);
  const formatArea = area.toFixed(4)
  return formatArea;
};

 //prompt()


console.log("A=",A);

