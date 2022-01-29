  function points(games) {
  let totalAmountOfPoints = 0;
  for (let i = 0; i<games.length; i++) {
    if(games[i][0] > games[i][2]){
      totalAmountOfPoints = totalAmountOfPoints+3;
    } else if(games[i][0] < games[i][2]){
      totalAmountOfPoints = totalAmountOfPoints;
    } else if(games[i][0] === games[i][2]){
      totalAmountOfPoints = totalAmountOfPoints+1;
    }
  }
  return totalAmountOfPoints;
} 


var games =  ['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'];
console.log(points(games));
