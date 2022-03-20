
const daysE1 = document.getElementById("days")
const hoursH1= document.getElementById("hours")
const minsM1 = document.getElementById("mins")
const secondsS1 = document.getElementById("seconds")

const newYearDate = "1 Jan 2023";

function getTimeRemaining(){
    const total = Date.parse(newYearDate) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const mins = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24));

    daysE1.innerHTML = days
    hoursH1.innerHTML = hours
    minsM1.innerHTML = formatTime(mins)
    secondsS1.innerHTML = formatTime(seconds)
}
 function formatTime(time){
     return time < 10 ? `0${time}` :time;
 }

    getTimeRemaining();
    setInterval(getTimeRemaining, 1000)