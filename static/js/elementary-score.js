var select_menu = document.querySelectorAll("select")
//0/1/2是倒數計時的選單 3-13是計分的
var score_each = [10, 5, 16, 12, 4, 2, 6, 3, -1, 3, 15] //3-13共11個
// -1 表示計分方法比較特別 不是個數 需要分開討論
function count_score(){
    var total_score = 0
    for(i=3; i<=13; i++){
        if(i == 11){
            if(select_menu[11].value == "complete"){
                total_score = total_score + 19
            }
            else if(select_menu[11].value == "part"){
                total_score = total_score + 8
            }
        }
        else{
            total_score = total_score + (select_menu[i].value) * score_each[i-3]
        }
    }
    return total_score
}

//var score_btn = document.getElementById("score-count-btn")
var score_display = document.getElementById("score-total-display")
/*score_btn.addEventListener("click", function(){
    score_display_func()
})*/
function score_display_func(){
    var score = count_score()
    //console.log(score)
    score_display.innerText = String(score) + "分"
}

var score_select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for(i=0; i<11; i++){
    var id = "score-select" + String(i+1)
    score_select[i] = document.getElementById(id)
}
score_select[0].addEventListener("change", score_display_func)
score_select[1].addEventListener("change", score_display_func)
score_select[2].addEventListener("change", score_display_func)
score_select[3].addEventListener("change", score_display_func)
score_select[4].addEventListener("change", score_display_func)
score_select[5].addEventListener("change", score_display_func)
score_select[6].addEventListener("change", score_display_func)
score_select[7].addEventListener("change", score_display_func)
score_select[8].addEventListener("change", score_display_func)
score_select[9].addEventListener("change", score_display_func)
score_select[10].addEventListener("change", score_display_func)