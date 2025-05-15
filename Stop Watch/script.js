let hours=0;
let minutes=0;
let seconds=0;
let interval=null;

function showtime(){
    const format=(val)=>val.toString().padStart(2,0);
    document.getElementById("clock").innerHTML=`${format(hours)}:${format(minutes)}:${format(seconds)}`
}

function start(){
    interval=setInterval(()=>{
        seconds++;
        if(seconds==60){
            seconds=0;
            minutes++;
        }
        if(minutes==60){
            minutes=0;
            hours++;
        }asdc
        showtime();
    },1000)
}
function stop(){
    clearInterval(interval);
    interval=null;
}
function reset(){
    stop();
    hours=0;
    minutes=0;
    seconds=0;
    showtime();
}
showtime()