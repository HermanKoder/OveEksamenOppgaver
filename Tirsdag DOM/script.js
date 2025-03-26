var trykkMegEl = document.getElementById("trykkMeg")
var trykkMegVerdiEl = document.getElementById("trykkMegVerdi")
var trykkMegVerdiInputEl = document.getElementById("trykkMegVerdiInput")


trykkMegEl.addEventListener("click", trykkMegJS)
function trykkMegJS() {
    trykkMegVerdiEl.innerText = trykkMegVerdiInputEl.value
    trykkMegVerdiInputEl.value = ""
    console.log("det funker")
}


function printConsoleJS() {
    console.log("Hei Verden")
}

var blackWhiteModeEl = document.getElementById("blackWhiteMode")
blackWhiteModeEl.addEventListener("click", changeMode)
function changeMode() {
    if (document.body.style.backgroundColor === "white")
    {document.body.style.backgroundColor = "black"}
    else {
        document.body.style.backgroundColor = "black"
        document.body.style.backgroundColor = "white"
    }
}