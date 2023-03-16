/*//宣告xhr物件
var xhr = new XMLHttpRequest()
//定義連線方式
xhr.open('GET', '/test', true)
//送出請求
xhr.send()
//成功則執行function
xhr.onload = reqOnload//function不用括號 否則會執行
//失敗則執行function
xhr.error = reqError



function reqOnload(){
    console.log(xhr.response)
}
function reqError(){
    console.log("error")
}*/
