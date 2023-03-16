var waste1 = document.getElementById("waste1")
var waste2 = document.getElementById("waste2")
var whale1 = document.getElementById("whale1")
var whale2 = document.getElementById("whale2")
var whale3 = document.getElementById("whale3")
var whale4 = document.getElementById("whale4")
var random_obj_btn = document.getElementById("random-obj-btn")

var random_btn_state = 0 //0可以按 1按了不能執行 確保不重複連續點按鈕

random_obj_btn.addEventListener("click", function(){
    if(random_btn_state == 0){
        random_btn_state = 1
        random_animation()
        display()
    }
})

//random
var waste1_color, waste2_color
var whale
function random(){
    //waste
    waste1_color = get_random(1, 4)
    while(1){
        waste2_color = get_random(1, 4)
        if(waste2_color != waste1_color){
            break
        }
    }
    //whale
    whale = get_random(1, 4)
    //console.log(waste1_color, waste2_color, whale)
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
        waste1_color = get_random(1, 4)
        waste2_color = get_random(1, 4)
        whale = get_random(1, 4)
        display()
        t++
        if(t >= 10){
            random()
            display()
            //console.log(t)
            clearInterval(time)
            random_btn_state = 0
        }
    }, 50)
}

//display
function display(){
    //waste
    switch(waste1_color){
        case 1:
            waste1.style.backgroundColor = "#bd3b36"
            break
        case 2:
            waste1.style.backgroundColor = "#FAFAFA"
            break
        case 3:
            waste1.style.backgroundColor = "#222222"
            break
        case 4:
            waste1.style.backgroundColor = "#4690db"
            break
        default:
            break
    }
    switch(waste2_color){
        case 1:
            waste2.style.backgroundColor = "#bd3b36"
            break
        case 2:
            waste2.style.backgroundColor = "#FAFAFA"
            break
        case 3:
            waste2.style.backgroundColor = "#222222"
            break
        case 4:
            waste2.style.backgroundColor = "#4690db"
            break
        default:
            break
    }
    //whale
    whale1.style.backgroundColor = "#f1f1f1"
    whale2.style.backgroundColor = "#f1f1f1"
    whale3.style.backgroundColor = "#f1f1f1"
    whale4.style.backgroundColor = "#f1f1f1"
    switch(waste2_color){
        case 1:
            whale1.style.backgroundColor = "#4690db"
            break
        case 2:
            whale2.style.backgroundColor = "#4690db"
            break
        case 3:
            whale3.style.backgroundColor = "#4690db"
            break
        case 4:
            whale4.style.backgroundColor = "#4690db"
            break
        default:
            break
    }
    //random_btn_state = 0
}