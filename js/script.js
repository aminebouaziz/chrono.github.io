var time =0;
var running=0 ;
var myArray = [];

 function starPause(){
  if(running == 0){
    running=1;
    increment();
    document.getElementById("starPause").innerHTML ="Pause";
  }
  else {
    running =0;
    document.getElementById("starPause").innerHTML ="resume";
  }

 }
 function reset(){
  running =0;
  time=0;
  document.getElementById("starPause").innerHTML ="Start";
   document.getElementById("output").innerHTML ="00:00:00";
   document.getElementById("a").innerHTML ="00:00:00";



 }
 function increment(){
  if(running==1){
  setTimeout(function(){
    time++;
    var min=Math.floor(time/10/60);
    var sec=Math.floor(time/10);
    var msec=time % 10;
    if(min<10){
      min="0"+min;
    }
    if(sec<10){
      sec ="0"+sec;
    }
     if(msec<10){
      msec ="0"+msec;
    }

    var x= min +":" +sec+":"+msec;
    document.getElementById("output").innerHTML = x ;
    increment();
  },100);
}
 }



 function lap(){

   var min=Math.floor(time/10/60);
    var sec=Math.floor(time/10);
    var msec=time % 10;
    if(min<10){
      min="0"+min;
    }
    if(sec<10){
      sec ="0"+sec;
    }
     if(msec<10){
      msec ="0"+msec;
    }
    var x= min +":" +sec+":"+msec;

    myArray.push(x);

document.getElementById("a").innerHTML = ''; //VIDER 

for (var i = 0; i < myArray.length; i++) {
  
document.getElementById("a").innerHTML += myArray[i] + '<br>';
 
    
}

 }