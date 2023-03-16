//help
/*var introduce_btn = document.getElementById("help")
var dialog = document.getElementById("dialog")
var dialog_in = document.getElementById("dialog-in")
var dialog_close_btn = document.getElementById("dialog-close-btn")
introduce_btn.addEventListener("click", function(){
    dialog.showModal()
    dialog_click = 0
    dialog_in_click = 0
})
dialog_close_btn.addEventListener("click", function(){
    dialog.close()
})*/

//nav btn scroll
var nav_btn_function = document.getElementsByClassName("nav-function")
var section = document.getElementsByTagName("section")
nav_btn_function[0].addEventListener("click", function(){scroll_(0)})//70
nav_btn_function[1].addEventListener("click", function(){scroll_(1)})
nav_btn_function[2].addEventListener("click", function(){scroll_(2)})

function scroll_(x){
    var y = section[x].offsetTop - section[x].scrollTop - 125
    window.scrollTo({
        top: y,
        behavior: "smooth"
    })
}

//clock btn
var stopwatch_btn = document.getElementById("stopwatch-btn")
var countdown_btn = document.getElementById("countdown-btn")
var clock_container = document.getElementById("clock-container")
var stopwatch = document.getElementById("stopwatch")
stopwatch_btn.style = "background-color: #c8e3f6"
countdown_btn.style = "background-color: #f1f1f1"

countdown_btn.addEventListener("click", function(){
    
    var width = stopwatch.offsetWidth + 1;
    clock_container.scrollTo({
        left: width,
        behavior: "smooth"
    })
    stopwatch_btn.style = "background-color: #f1f1f1"
    countdown_btn.style = "background-color: #c8e3f6"
})
stopwatch_btn.addEventListener("click", function(){
    clock_container.scrollTo({
        left: 0,
        behavior: "smooth"
    })
    stopwatch_btn.style = "background-color: #c8e3f6"
    countdown_btn.style = "background-color: #f1f1f1"
})

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//clock stopwatch control
//stopwatch------------------------------------------------------------
var stopwatch_play = document.getElementById("stopwatch-play-btn")
var stopwatch_reset = document.getElementById("stopwatch-reset-btn")
var stopwatch_play_icon = document.getElementById("stopwatch-icon-play")
var stopwatch_play_state = 0 //0=pause 1=going(display pause)
var stopwatch_id
stopwatch_play.addEventListener("click", function(){
    if(stopwatch_play_state == 0){ //pause now
        //console.log("start")
        stopwatch_play_icon.src = "../static/img/icon/baseline_pause_white_48dp.png"
        stopwatch_play_state = 1
        stopwatch_start()
    }
    else{ //start now
        //console.log("pause")
        stopwatch_play_icon.src = "../static/img/icon/baseline_play_arrow_white_48dp.png"
        stopwatch_play_state = 0
        stopwatch_pause()
    }
})
stopwatch_reset.addEventListener("click", function(){
    //console.log("reset")
    stopwatch_reset_func()

    stopwatch_play_icon.src = "../static/img/icon/baseline_play_arrow_white_48dp.png"
    stopwatch_play_state = 0
    stopwatch_pause()
})

var stopwatch_hr = document.getElementById("stopwatch-hr")
var stopwatch_min = document.getElementById("stopwatch-min")
var stopwatch_sec = document.getElementById("stopwatch-sec")
var time = 0, time_last = 0
var date_start, date_end;
var t_ms
function stopwatch_start(){
    //dot_transform(0)
    date_start = new Date()
    stopwatch_id = setInterval(function(){
        date_end = new Date();
        t_ms = time_last*10 + parseInt((date_end - date_start)/10)
        //10ms就改dot
        dot_transform(t_ms)
        if(t_ms % 10 == 0){
            //100ms才改數字
            time = time_last + parseInt((date_end - date_start)/100)
            //console.log(time)
            time_transform(time)
        }    
    }, 10)
}
function stopwatch_pause(){
    time_last = time
    clearInterval(stopwatch_id)
}
function stopwatch_reset_func(){
    clearInterval(stopwatch_id)
    time = 0
    time_last = 0
    time_transform(0)
    dot_transform(0)
}
function time_transform(t){
    var hr = parseInt(t/36000)
    t = t - hr*36000
    var min = parseInt(t/600)
    t = t - min*600
    var sec = t/10

    //console.log(hr, min, sec)
    //hour display
    stopwatch_hr.innerHTML = hr
    //minute  display
    if(min < 10){
        stopwatch_min.innerHTML = "0" + String(min)
    }
    else{
        stopwatch_min.innerHTML = min
    }
    //second display
    var s
    if(sec < 10){
        s = "0" + String(sec)
    }
    else{
        s = String(sec)
    }
    if(time % 10 == 0){
        s = s + ".0"
    }
    stopwatch_sec.innerHTML = s
}
var stopwatch_dot = document.getElementById("stopwatch-dot")
function dot_transform(t){
    var x = (t % 6000)
    if(x == 0){
        //剛好y分鐘整解度歸0
        stopwatch_dot.style = "transform: rotate(0deg)"
        console.log(0)
    }
    else{
        var d = 0.06 * x
        stopwatch_dot.style = "transform: rotate(" + d + "deg)"
    }
    
}
//countdown------------------------------------------------------------
var countdown_play = document.getElementById("countdown-play-btn")
var countdown_reset = document.getElementById("countdown-reset-btn")
var countdown_play_icon = document.getElementById("countdown-icon-play")
var countdown_play_state = 0 //0=pause 1=going(display pause)
var countdown_id
countdown_play.addEventListener("click", function(){
    if(times_up_state == 1){
        //倒數到0
        alert("請重新設定倒數時間或將計時器歸零")
    }
    else{
        if(countdown_play_state == 0){ //pause now
            //console.log("count start")
            countdown_play_icon.src = "../static/img/icon/baseline_pause_white_48dp.png"
            countdown_play_state = 1
            countdown_start()
        }
        else{ //start now
            //console.log("count pause")
            countdown_play_icon.src = "../static/img/icon/baseline_play_arrow_white_48dp.png"
            countdown_play_state = 0
            countdown_pause()
        }
    }
    
})
countdown_reset.addEventListener("click", function(){
    //console.log("count reset")
    countdown_reset_func()
    countdown_play_icon.src = "../static/img/icon/baseline_play_arrow_white_48dp.png"
    countdown_play_state = 0
    countdown_pause()
})

var countdown_hr = document.getElementById("countdown-hr")
var countdown_min = document.getElementById("countdown-min")
var countdown_sec = document.getElementById("countdown-sec")
var time_countdown = 0, time_last_countdown = 0
var time_countdown_initial = 0
var date_start_countdown, date_end_countdown
function countdown_start(){
    times_up_state = 0
    if(time_countdown > 0){
        //暫停後開始
        time_countdown = time_countdown
    }
    else{
        //倒數到0後的開始
        time_countdown = time_countdown_initial
    }
    //dot_transform_countdown(0)
    date_start_countdown = new Date()
    countdown_id = setInterval(function(){
        date_end_countdown = new Date();
        var t_ms_countdown = time_last_countdown*10 - parseInt((date_end_countdown - date_start_countdown)/10)
        //10ms就改dot
        dot_transform_countdown(t_ms_countdown)
        if(t_ms_countdown % 10 == 0){
            //100ms才改數字
            time_countdown = time_last_countdown - parseInt((date_end_countdown - date_start_countdown)/100)
            //console.log(time_countdown)
            time_transform_countdown(time_countdown)
        }
    }, 10)
}
function countdown_pause(){
    time_last_countdown = time_countdown//_initial
    clearInterval(countdown_id)
}
function countdown_reset_func(){
    //console.log(countdown_id)
    clearInterval(countdown_id)
    time_countdown = time_countdown_initial
    time_last_countdown = time_countdown_initial
    time_transform_countdown(time_countdown_initial)

    time_box_to_blue()
    dot_transform_countdown(0)
}
function time_transform_countdown(t){
    var hr = parseInt(t/36000)
    t = t - hr*36000
    var min = parseInt(t/600)
    t = t - min*600
    var sec = t/10

    //hour display
    countdown_hr.innerHTML = hr
    //minute  display
    if(time_countdown >= 0){
        if(min < 10){
            countdown_min.innerHTML = "0" + String(min)
        }
        else{
            countdown_min.innerHTML = min
        }
        //second display
        var s
        if(sec < 10){
            s = "0" + String(sec)
        }
        else{
            s = String(sec)
        }
    
        if(time_countdown % 10 == 0){
            s = s + ".0"
        }
        countdown_sec.innerHTML = s
    }
    else{
        countdown_play_icon.src = "../static/img/icon/baseline_play_arrow_white_48dp.png"
        countdown_play_state = 0
        clearInterval(countdown_id)
        //console.log("time's up")
        times_up_state = 1
        times_up()
    }
}
var time_box = document.getElementsByClassName("time-box") //[0-2]碼表 [3-5]倒數
var time_title = document.getElementsByClassName("time-title")
var time_display_area = document.getElementsByClassName("time-display-area")
var times_up_id = 0, times_up_state = 0//0:沒有倒數到0 1:倒數到0了
function times_up(){
    var x = 0
    times_up_id = setInterval(function(){
        alarm_audio.play();
        if(x % 2 == 0){ //紅色
            time_box[3].style = "background-color: #bd3b36"
            time_box[4].style = "background-color: #bd3b36"
            time_box[5].style = "background-color: #bd3b36"
            time_title[3].style = "color: #FAFAFA"
            time_title[4].style = "color: #FAFAFA"
            time_title[5].style = "color: #FAFAFA"
            time_display_area[3].style = "color: #FAFAFA"
            time_display_area[4].style = "color: #FAFAFA"
            time_display_area[5].style = "color: #FAFAFA"
        }
        else{ //原色
            time_box[3].style = "background-color: #c8e3f6"
            time_box[4].style = "background-color: #c8e3f6"
            time_box[5].style = "background-color: #c8e3f6"
            time_title[3].style = "color: #4690db"
            time_title[4].style = "color: #4690db"
            time_title[5].style = "color: #4690db"
            time_display_area[3].style = "color: #4690db"
            time_display_area[4].style = "color: #4690db"
            time_display_area[5].style = "color: #4690db"

        }
        x++
    }, 500)
}
function time_box_to_blue(){
    if(times_up_state == 1){
        //倒數到0了 警示紅色亮起 要回歸藍色
        clearInterval(times_up_id)
        time_box[3].style = "background-color: #c8e3f6;"
        time_box[4].style = "background-color: #c8e3f6;"
        time_box[5].style = "background-color: #c8e3f6;"
        time_title[3].style = "color: #4690db"
        time_title[4].style = "color: #4690db"
        time_title[5].style = "color: #4690db"
        time_display_area[3].style = "color: #4690db"
        time_display_area[4].style = "color: #4690db"
        time_display_area[5].style = "color: #4690db"
        times_up_state = 0

        alarm_audio.pause();
        alarm_audio.currentTime = 0;
    }
}
var countdown_dot = document.getElementById("countdown-dot")
function dot_transform_countdown(t){
    if(t == 0 || t == time_countdown_initial){
        //剛好y分鐘整解度歸0
        countdown_dot.style = "transform: rotate(0deg)"
    }
    else{
        var d = 1-(time_countdown/time_countdown_initial) * -360
        countdown_dot.style = "transform: rotate(" + d + "deg)"
    }
    
}

//countdown time set
var countdown_set_btn = document.getElementById("countdown-set-btn")
var countdown_time = document.getElementById("countdown-time")
var countdown_time_state = 1 //0:none 1:display
countdown_set_btn.addEventListener("click", set_time)
function set_time(){
    if(countdown_time_state == 0){
        countdown_time.style = "display: block"
        countdown_time_state = 1
    }
    else{
        countdown_time.style = "display: none"
        countdown_time_state = 0
    }
}
//填入數字
var select_menu = document.querySelectorAll("select")
var set_time_btn = document.getElementById("set-time")
for(var i = 10; i > 0; i--){
    var option = "<option value=" + i + ">" + i + "</option>"
    select_menu[0].firstElementChild.insertAdjacentHTML("afterend", option)
}
for(var i = 59; i > 0; i--){
    var option = "<option value=" + i + ">" + i + "</option>"
    select_menu[1].firstElementChild.insertAdjacentHTML("afterend", option)
}
for(var i = 59; i > 0; i--){
    var option = "<option value=" + i + ">" + i + "</option>"
    select_menu[2].firstElementChild.insertAdjacentHTML("afterend", option)
}
set_time_btn.addEventListener("click", function(){
    if(select_menu[0].value==0 && select_menu[1].value==0 && select_menu[2].value==0){
        alert("時間不可為0")
    }
    else{
        var t_s = select_menu[0].value*36000 + select_menu[1].value * 600 + select_menu[2].value*10
        time_countdown = t_s
        time_last_countdown = t_s
        time_countdown_initial = t_s
        //console.log(t_s)

        countdown_reset_func()
        //time_transform_countdown(t_s)
        set_time()
        //time_box_to_blue()
        //dot_transform_countdown(0)
        countdown_play_icon.src = "../static/img/icon/baseline_play_arrow_white_48dp.png"
        countdown_play_state = 0
    }
})
//audio
var alarm_audio = new Audio("../static/audio/alarm.mp3")

//group select
var select_team_btn = document.getElementById("select-team")
var group_set = document.getElementById("group-set")
var group_set_state = 0 //0:none 1:display
select_team_btn.addEventListener("click", set_group)
function set_group(){
    if(group_set_state == 0){
        group_set.style = "display: block"
        group_set_state = 1
    }
    else{
        group_set.style = "display: none"
        group_set_state = 0
    }
}
window.addEventListener("scroll", function(){
    group_set.style = "display: none"
    group_set_state = 0
})