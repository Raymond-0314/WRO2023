var random_obj_btn = document.getElementById("random-obj-btn")
var random_btn_state = 0 //0可以按 1按了不能執行 確保不重複連續點按鈕
random_obj_btn.addEventListener("click", function(){
    if(random_btn_state == 0){
        random_btn_state = 1
        random_animation()
        random()
    }
})

//random
var side_chose = [1, 2, 0, 0] //4格選擇:黑白空空
var side_chose_state = [0, 0, 0, 0] //side_chose是否被選走 0未選 1選走
var pacific = [-1, -1, -1, -1, -1] //use 1-4
var caribbean = [-1, -1, -1, -1, -1] //use 1-4
var pacific_black, pacific_white, caribbean_black, caribbean_white, broken_cable
function random(){
    side_chose_state = [0, 0, 0, 0]
    //pacific
    for(var i=0; i<4; i++){
        while(1){
            r = get_random(0, 3)
            if(side_chose_state[r] == 0){
                break
            }
        }
        if(side_chose[r] == 1){
            //黑
            pacific_black = i+1
        }
        else if(side_chose[r] == 2){
            //白
            pacific_white = i+1
        }
        else{
            //空
        }
        side_chose_state[r] = 1
    }
    //carribbean
    side_chose_state = [0, 0, 0, 0]
    for(var i=0; i<4; i++){
        while(1){
            r = get_random(0, 3)
            if(side_chose_state[r] == 0){
                break
            }
        }
        if(side_chose[r] == 1){
            //黑
            caribbean_black = i+1
        }
        else if(side_chose[r] == 2){
            //白
            caribbean_white = i+1
        }
        else{
            //空
        }
        side_chose_state[r] = 1
    }
    //broken cable
    broken_cable = get_random(1, 4)

    //console.log(pacific_black, pacific_white)
    //console.log(caribbean_black, caribbean_white)
    //console.log(broken_cable)
}

function get_random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    var rand = Math.floor(Math.random() * (max - min + 1) + min)
    return rand
}

//animation
function random_animation(){
    var t = 0
    time = setInterval(function(){
        pacific_black_dis.innerHTML = get_random(1, 9)
        pacific_white_dis.innerHTML = get_random(1, 9)
        caribbean_black_dis.innerHTML = get_random(1, 9)
        caribbean_white_dis.innerHTML = get_random(1, 9)
        broken_cable_dis.innerHTML = get_random(1, 9)
        t++
        if(t >= 10){
            display()
            //console.log(t)
            clearInterval(time)
        }
    }, 50)
}

//display
var pacific_black_dis = document.getElementById("pacific-black")
var pacific_white_dis = document.getElementById("pacific-white")
var caribbean_black_dis = document.getElementById("caribbean-black")
var caribbean_white_dis = document.getElementById("caribbean-white")
var broken_cable_dis = document.getElementById("broken-cable")
function display(){
    pacific_black_dis.innerHTML = pacific_black
    pacific_white_dis.innerHTML = pacific_white
    caribbean_black_dis.innerHTML = caribbean_black
    caribbean_white_dis.innerHTML = caribbean_white
    broken_cable_dis.innerHTML = broken_cable
    random_btn_state = 0
}