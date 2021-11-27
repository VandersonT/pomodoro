let workTime = 25;
let pauseTime = 5;
let sessionTime = 3;

//Increase work time
let btnIncreaseWorkTime = document.querySelector('.btnIncreaseWorkTime');
btnIncreaseWorkTime.addEventListener('click', function(){
    let getWorkTimeValue = document.querySelector('.workTime').innerText;
    workTime = parseInt(getWorkTimeValue);
    workTime += 1;
    document.querySelector('.workTime').innerHTML = workTime;
});

//Reduce work time
let btnReduceWorkTime = document.querySelector('.btnReduceWorkTime');
btnReduceWorkTime.addEventListener('click', function(){
    let getWorkTimeValue = document.querySelector('.workTime').innerText;
    if(parseInt(getWorkTimeValue) < 2){
        return false;
    }
    workTime = parseInt(getWorkTimeValue);
    workTime -= 1;
    document.querySelector('.workTime').innerHTML = workTime;
});

//Increase pause time
let btnIncreasePause = document.querySelector('.btnIncreasePause');
btnIncreasePause.addEventListener('click', function(){
    let getPauseTimeValue = document.querySelector('.pauseTime').innerText;
    pauseTime = parseInt(getPauseTimeValue);
    pauseTime += 1;
    document.querySelector('.pauseTime').innerHTML = pauseTime;
});

//Reduce pause time
let btnReducePause = document.querySelector('.btnReducePause');
btnReducePause.addEventListener('click', function(){
    let getPauseTimeValue = document.querySelector('.pauseTime').innerText;
    if(parseInt(getPauseTimeValue) < 2){
        return false;
    }
    pauseTime = parseInt(getPauseTimeValue);
    pauseTime -= 1;
    document.querySelector('.pauseTime').innerHTML = pauseTime;
});

//Increase session time
let btnIncreaseSession = document.querySelector('.btnIncreaseSession');
btnIncreaseSession.addEventListener('click', function(){
    let getSessionTimeValue = document.querySelector('.sessionTime').innerText;
    sessionTime = parseInt(getSessionTimeValue);
    sessionTime += 1;
    document.querySelector('.sessionTime').innerHTML = sessionTime;
});

//Reduce session time
let btnReduceSession = document.querySelector('.btnReduceSession');
btnReduceSession.addEventListener('click', function(){
    let getSessionTimeValue = document.querySelector('.sessionTime').innerText;
    if(parseInt(getSessionTimeValue) < 2){
        return false;
    }
    sessionTime = parseInt(getSessionTimeValue);
    sessionTime -= 1;
    document.querySelector('.sessionTime').innerHTML = sessionTime;
});

let continueButton = document.querySelector('.startButton');

continueButton.addEventListener('click', function(){
    document.querySelector('.boxOption').style.display = 'none';
    document.querySelector('.pomodoroWorking').style.display = 'block';
    startPomodoro();
});
