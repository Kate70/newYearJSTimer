const newYears = '1 Jan 2022';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl=document.getElementById('mins');
const secondsEl = document.getElementById('seconds')
setInterval(createSnow, 100)

function createSnow (){
    const snow_flake = document.createElement('i');
    snow_flake.classList.add('fas');
    snow_flake.classList.add('fa-snowflake');
    snow_flake.style.left=Math.random()*window.innerWidth+'px';
    snow_flake.style.animationDirection=Math.random()*3+2+'s';
    snow_flake.style.opacity = Math.random();
    snow_flake.style.fontSize=Math.random()*10+10+'px'

    document.body.appendChild(snow_flake)
    setTimeout(()=>{
        snow_flake.remove()
    },5000)
    
}

function countDown(){
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    
    const totalSeconds = (newYearDate-currentDate)/1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor (totalSeconds%60);
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;




    console.log(days, hours, minutes, seconds );
   
}
countDown();
setInterval(countDown, 1000)
