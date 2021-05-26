let startBtn = tag(".start")
let stopBtn = tag(".stop")
let resetBtn = tag(".reset")
let display = tag(".screen")
let hour = tag(".hour")
let minute = tag(".minute")
let seconds = tag(".seconds")
let counter = 00
var interval;


resetBtn.addEventListener("click",reset);
startBtn.addEventListener("click", function(){
    startBtn.disabled = true;
   interval = setInterval(start,1000)
   
});
stopBtn.addEventListener("click",stop)

function tag(selector)
{
    return document.querySelector(selector);
}

function stop()
{

   clearInterval(interval)
   startBtn.disabled = false;
}

function start()
{
    
    counter++
    if (counter % 60 != 0)
    {
        seconds.innerHTML = counter % 60;
    }
    minute.innerHTML = parseInt(counter/60);
    hour.innerHTML =  parseInt(counter/3600)
    

}

function reset()
{
    counter = 00
    hour.innerHTML = counter;
    minute.innerHTML = counter;
    seconds.innerHTML = counter;
    clearInterval(interval)
    startBtn.disabled = false;
    
}

