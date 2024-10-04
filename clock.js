setInterval(showtime,1000);
function showtime(){
    let time=new Date();
    let hour=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();

hour=hour < 10 ?'0'+hour:hour
min=min < 10 ?'0'+min:min
sec=sec < 10 ?'0'+sec:sec

let curernttime=hour+':'+min+':'+sec;

document.getElementById('clock').innerHTML=curernttime;
}
showtime();