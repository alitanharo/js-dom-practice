





//1///////


function calc() {
    let a = document.getElementById("num1").value
    let b = document.getElementById("num2").value
    var total = Number(a) + Number(b)
    document.getElementById("sum").value = total
    console.log(a);
    console.log(total);
    console.log(b);


}
//2////////

function showText() {

    document.getElementById("text").style.display = ""




}



///3////////////////////////////////

let list = document.querySelector("ul").textContent
function extractText() {




    document.getElementById("result").value = list;
    console.log(list);
}
///////////////////////////////////////////////////

////4///////////////////////////////////////////////

function addItem() {

    let newList = document.getElementById("newText").value
    document.getElementById("result").value = newList



}





function handleDelete(text) {


    const li = [...document.querySelectorAll("li")];
    li.forEach(elem => {
        if (elem.innerText == text) {
            elem.parentNode.removeChild(elem);
        }
    });





}

//5.///////////////////////////////////////


var sec = 0;
var min = 0;
var resBtn = document.getElementById("resBtn")
var startBtn = document.getElementById("startBtn")
var stopBtn = document.getElementById("stopBtn")
var secPlace = document.getElementById("sec")
var minPlace = document.getElementById("min")
var startSec;
var startMin;

function handlereset() {
    sec = 0
    min = 0
    secPlace.innerHTML = "00"
    minPlace.innerHTML = "00:"



}


function handlestart() {

    stopBtn.disabled = false;
    startBtn.disabled = true;
    startTimer()


}
function handlestop() {

    stopBtn.disabled = true;
    startBtn.disabled = false;
    stopTimer();



}



function startTimer() {


    startSec = setInterval(function () {
        sec++
        secPlace.innerHTML = sec

    }, 1000);
    startMin = setInterval(function () {
        min++
        minPlace.innerHTML = min + ":"
    }, 6000);




}

function stopTimer() {

    clearInterval(startSec);
    clearInterval(startMin);

}