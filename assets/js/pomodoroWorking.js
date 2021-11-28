function startPomodoro(){
    let SessionsCompleted = 0;
    let isPaused = false;
    let currentStatus = 'working';
    let minutes = workTime-1;
    let secounds = 60;
    let isMute = false;
    document.querySelector('.controlSound').innerHTML = '<i class="fas fa-volume-up"></i>';
    let finished = false;

    let timer = setInterval(working, 1000);

    function working(){  
        if(minutes == 0 && secounds == 0){
            
            if(!isMute){
                var alarm = new Audio('./media/audio/alarm.mp3');
                alarm.play();
            }

            if(currentStatus == 'working'){

                //check if it's over
                SessionsCompleted += 1;
                if(SessionsCompleted == sessionTime){
                    document.querySelector('.showTime').style.border = '3px solid #691010';
                    document.querySelector('.boxInfoAndControl h2').style.color = '#691010';
                    document.querySelector('.boxInfoAndControl h2').innerText = 'Finalizado'; 
                    clearInterval(timer);
                    finished = true;
                    return false;
                }
                /***/

                changeToPausedTheme()

                minutes = pauseTime-1;
                secounds = 60;

                currentStatus = 'resting';
            }else{
                changeToWorkingTheme()

                minutes = workTime-1;
                secounds = 60;

                currentStatus = 'working';
            }

            return false;
        }

        if(minutes == 0 && secounds == 15 && isMute == false){
            var countdown = new Audio('./media/audio/countdown.mp3');
            countdown.play();
        }
        
        if(secounds == 0){
            minutes -= 1;
            secounds = 60;
        }
        secounds -= 1;

        document.querySelector('.showTime h2').innerHTML = ("0000" + minutes).slice(-2)+':'+("0000" + secounds).slice(-2);
    }

    /*------------------------------------------Pause-----------------------------------------------------*/
    let controlTimer = document.querySelector('.controlTimer');
    controlTimer.addEventListener('click', function(){
        
        if(!finished){
            if(isPaused){
                timer = setInterval(working, 1000);
                document.querySelector('.controlTimer').innerHTML = '<i class="fas fa-pause"></i>';
            }else{
                clearInterval(timer);
                document.querySelector('.controlTimer').innerHTML = '<i class="fas fa-play"></i>';
            }
            isPaused = !isPaused;
        }
    });
    /*-----------------------------------------------------------------------------------------------------*/

    /*------------------------------------------Sound------------------------------------------------------*/
    let controlSound = document.querySelector('.controlSound');
    controlSound.addEventListener('click', function(){
        if(isMute){
            controlSound.innerHTML = '<i class="fas fa-volume-up"></i>';
        }else{
            controlSound.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
        isMute = !isMute;
    });
    /*-----------------------------------------------------------------------------------------------------*/

    /*----------------------------------------Functions----------------------------------------------------*/
    function changeToWorkingTheme(){
        document.querySelector('.showTime').style.border = '3px solid #209352';
        document.querySelector('.boxInfoAndControl h2').style.color = '#1f9552';
        document.querySelector('.boxInfoAndControl h2').innerText = 'Trabalho'; 
    }

    function changeToPausedTheme(){
        document.querySelector('.showTime').style.border = '3px solid #f1c84b';
        document.querySelector('.boxInfoAndControl h2').style.color = '#bda14d';
        document.querySelector('.boxInfoAndControl h2').innerText = 'Descanso';
    }
    /*-----------------------------------------------------------------------------------------------------*/

    let returnToHome = document.querySelector('.returnToHome');
    returnToHome.addEventListener('click', function(){
        clearInterval(timer);
        document.querySelector('.showTime h2').innerHTML = '00:00';
        document.querySelector('.boxOption').style.display = 'flex';
        document.querySelector('.pomodoroWorking').style.display = 'none';
        currentStatus = 'working';
        changeToWorkingTheme();
    });

}

