
function Stopwatch(){   
  let startTime, endTime, running, duration = 0;

  this.start = function(){
    if (running)
      throw new Error ('Stopwatch has already started.');
    running = true;
    startTime = new Date ();

  };

  this.stop = function() {

  };

  this.reset = function(){

  };

  Object.defineProperty(this,'duration',{
    get: ()=>{return duration;}
  });
}

