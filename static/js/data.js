var search = document.getElementById("search")
var input_area = document.getElementsByClassName("input-area")
var main = document.getElementById("main")
//console.log(input_area[0])
search.addEventListener("click", function(){
    main.innerHTML = ""
    get_key_word()
    data_request()
    //display_data()
})

var key_group/*國中國小*/, key_team/*團隊名*/, key_date, key_soft_hard
function get_key_word(){
    //console.log(input_area[0].value)
    key_group = input_area[0].value

    if(input_area[1].value == ""){
        key_team = "all"
    }
    else{
        key_team = input_area[1].value
    }

    key_date = input_area[2].value

    key_soft_hard = input_area[3].value


    //console.log(key_group)
}
function data_request(){
    var req = new XMLHttpRequest();
    req.open("GET", "http://wro2023.ap-northeast-1.elasticbeanstalk.com/get-data");
    
    req.onload = function(){
        //console.log(JSON.parse(req.responseText));
        display_data(JSON.parse(req.responseText))
    }
    req.send(null);
}

function display_data(data){
    //console.log(data)
    if(key_group == "junior"){
        //console.log(data["data-junior"])
        for(i=0; i<parseInt(data["junior-num"]); i++){
            if(data["data-junior"][i][1] == key_team || key_team == "all"){ //判斷團隊名稱
                day = get_day(data["data-junior"][i][9])
                if(day == key_date || key_date == "all"){ //判斷日期
                    if(data["data-junior"][i][3] == key_soft_hard || key_soft_hard == "all"){ //判斷記錄分類
                        //console.log(data["data-junior"][i])
                        console.log("----")
                        print(data["data-junior"][i])
                    }
                    
                }
            }
        }
        console.log("--")
    }
    else if(key_group == "elementary"){
        //console.log(data["data-elementary"])
        for(i=0; i<parseInt(data["elementary-num"]); i++){
            if(data["data-elementary"][i][1] == key_team || key_team == "all"){ //判斷團隊名稱
                day = get_day(data["data-elementary"][i][9])
                if(day == key_date || key_date == "all"){ //判斷日期
                    if(data["data-elementary"][i][3] == key_soft_hard || key_soft_hard == "all"){ //判斷記錄分類
                        //console.log(data["data-elementary"][i])

                        print(data["data-elementary"][i])
                    }
                    
                }
            }
        }
        console.log("--")
    }
    else{
        //console.log(data["data-junior"])
        //console.log(data["data-elementary"])
        for(i=0; i<parseInt(data["elementary-num"]); i++){
            if(data["data-elementary"][i][1] == key_team || key_team == "all"){ //判斷團隊名稱
                day = get_day(data["data-elementary"][i][9])
                if(day == key_date || key_date == "all"){ //判斷日期
                    if(data["data-elementary"][i][3] == key_soft_hard || key_soft_hard == "all"){ //判斷記錄分類
                        //console.log(data["data-elementary"][i])

                        print(data["data-elementary"][i])
                    }
                    
                }
            }
        }
        for(i=0; i<parseInt(data["junior-num"]); i++){
            if(data["data-junior"][i][1] == key_team || key_team == "all"){ //判斷團隊名稱
                day = get_day(data["data-junior"][i][9])
                if(day == key_date || key_date == "all"){ //判斷日期
                    if(data["data-junior"][i][3] == key_soft_hard || key_soft_hard == "all"){ //判斷記錄分類
                        //console.log(data["data-junior"][i])
                        console.log("----")
                        print(data["data-junior"][i])
                    }
                    
                }
            }
        }
        console.log("--")
    }
}

function get_day(date){
    year = date.slice(0, 4)
    month = date.slice(5, 7)
    day_ = date.slice(8, 10)

    var dt = new Date(parseInt(year), parseInt(month), parseInt(day_))
    var day = dt.getDay()
    var day_set = ["day7", "day1", "day2", "day3", "day4", "day5", "day6"] //星期日-六

    return day_set[day]
}
function print(single_data){
    old_html = main.innerHTML
    //console.log(main.innerHTML)

    var hard_soft, sr, new_html
    //英文轉換
    if(single_data[3] == "soft"){
        hard_soft = "程式測試"
    }
    else{
        hard_soft = "結構組裝"
    }

    if(single_data[4] == "no"){
        sr = "無特規"
    }
    else if(single_data[5] == "no"){
        sr = "解題失敗"
    }
    else{
        sr = "解題成功"
    }

    if(single_data[3] == "soft"){
        new_html = 
        "<div class=\"data-box\"><div class=\"first-line flex-row\"><p class=\"team\">" + single_data[1] +
        "</p><div class=\"hard/soft-and-time flex-row\"><p class=\"hard-soft\">" + hard_soft +
        "</p><p class=\"date\">" + single_data[9] +
        "</p></div></div><div class=\"data-area flex-row\"><div class=\"inner-box\" id=\"sr-box\"><div class=\"title\">特規</div><div class=\"data-num\">" + sr +
        "</div></div><div class=\"inner-box\" id=\"random-box\"><div class=\"title\">隨機</div><p class=\"data-num\">" + single_data[6] +
        "</p></div><div class=\"inner-box\" id=\"time-box\"><div class=\"title\">時間</div><p class=\"data-num\">" + single_data[7] +
        "</p></div><div class=\"inner-box\" id=\"score-box\"><div class=\"title\">分數</div><p class=\"data-num\">" + single_data[8] +
        " 分</p></div><div class=\"inner-box\" id=\"ps-box\"><div class=\"title\">備註</div><p class=\"data-num\">" + single_data[2] +
        "</p></div></div></div>"
    }
    else{
        new_html = 
        "<div class=\"data-box\"><div class=\"first-line flex-row\"><p class=\"team\">" + single_data[1] +
        "</p><div class=\"hard/soft-and-time flex-row\"><p class=\"hard-soft\">" + hard_soft +
        "</p><p class=\"date\">" + single_data[9] +
        "</p></div></div><div class=\"data-area flex-row\"><div class=\"inner-box\" id=\"sr-box\"><div class=\"title\">特規</div><div class=\"data-num\">" + "-" +
        "</div></div><div class=\"inner-box\" id=\"random-box\"><div class=\"title\">隨機</div><p class=\"data-num\">" + "-" +
        "</p></div><div class=\"inner-box\" id=\"time-box\"><div class=\"title\">時間</div><p class=\"data-num\">" + single_data[7] +
        "</p></div><div class=\"inner-box\" id=\"score-box\"><div class=\"title\">分數</div><p class=\"data-num\">" + "-" +
        "</p></div><div class=\"inner-box\" id=\"ps-box\"><div class=\"title\">備註</div><p class=\"data-num\">" + single_data[2] +
        "</p></div></div></div>"
    }

    

    main.innerHTML = old_html + new_html
}