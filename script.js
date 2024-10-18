let timerDisplay = document.querySelector(".display__time-left");
let endTime = document.querySelector(".display__end-time");
let buttons = document.querySelectorAll(".timer__button");

let countdown;


timer(0,0)

function timer(minutes, seconds) {
    clearInterval(countdown)
    countdown = setInterval(function() {
        if (minutes === 0 && seconds === 0) {
            clearInterval(countdown);
            timerDisplay.innerHTML = "0:00"; 
            return;
        } else if (seconds === 0 && minutes >= 0) {
            minutes--
            seconds = 59
            
        } else if(seconds == 0 && minutes == 0){
            clearInterval(countdown)
        }else {
            seconds--
        }
        
        timerDisplay.innerHTML = `${minutes}:${seconds < 10 ? '0' : '' }${seconds}`;
        
    }, 1000);
}




buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault
        let buttonValue = +e.target.getAttribute("data-time")

        let minutes = Math.floor(buttonValue / 60)
        let seconds = buttonValue % 60
        

        timer(minutes, seconds)
        console.log(buttonValue)
        
    })

})
