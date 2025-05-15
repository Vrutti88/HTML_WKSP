count=0;
function increment(){
    count++;
    document.getElementById('countvalue').innerHTML=`Counter Value:- ${count}`
}
function decrement(){
    count--;
    document.getElementById('countvalue').innerHTML=`Counter Value:- ${count}`
}
function reset(){
    count=0;
    document.getElementById('countvalue').innerHTML=`Counter Value:- ${count}`
}