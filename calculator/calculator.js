/**
 * Created by conghoan on 04/06/2016.
 */
var value1 = "";
var value2 = ""
var operator = "";
var m = 0;
var result = 0;
window.onload = function(){
    document.getElementById("result").value = 0;

}


function addOperator(key){
    if(value1 != ""){
        operator = key;
    }
}
function addKey(key){
    if(operator == ""){
        if(key == '.'){
            if(value1.indexOf(key) == -1){
                value1 += key;
            }
        } else if(key == "+/-"){
            value1 = eval("-1" * value1);
        }
        else{
            value1 += key;
        }
        document.getElementById("result").value = value1;
    }else{
        if(key == '.'){
            if(value2.indexOf(key) == -1){
                value2 += key;
            }
        }else if(key == "+/-"){
            value2 = eval("-1" * value2);
        }
        else{
            value2 += key;
        }
        document.getElementById("result").value = value2;
    }
}
function compute(){
    try {
        if(value1 != ""){
            result = eval(value1 + operator + value2);
            document.getElementById("result").value = result;
            value1 = "";
            value2 = "";
            operator = "";
        }

    }catch(compute){
        document.getElementById("result").value = "Có lỗi !";
    }
}
function clearDisplay(){
    result = 0;
    value1 = "";
    value2 = "";
    document.getElementById("result").value = result;
}
function memory(act){
    num = document.getElementById("result").value
    switch (act) {
        case "+":
            m = eval(m + "+" + num);
            break;
        case "-":
            m = eval(m + "-" + num);
            break;
        case "r":
            document.getElementById("result").value = m;
            break;
        case "c":
            m = 0;
            document.getElementById("result").value = 0;
            break;
    }
    value1 = "";
}