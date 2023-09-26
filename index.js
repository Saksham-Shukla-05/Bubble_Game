var time = 60
var score = 0
console.log(score)
var stime = document.getElementById("time")
var ctch = document.getElementById("catch")
var hitPnt = document.getElementById("hit-point")
var gameOver = document.getElementById("gameover")
var yScore = document.getElementById("your-Score")
var printScore = document.getElementById("play-again")
var wrong = document.getElementById("oops")
var hit
var bble = document.getElementById("bble")
var resart = document.getElementById("re-Y")
var doNotResart = document.getElementById("re-N")

function createBubble() {

    var make = ""

    for (let i = 0; i < 126; i++) {
        let rn = Math.floor(Math.random() * 10)
        make += `<div id="bble" class="bubble">${rn}</div>`
    }

    document.querySelector(".bottom").innerHTML = make
}

function createBubble1() {

    var make1 = ""
    var pdd = document.getElementById("catch")
    pdd.style.padding="5px"

    for (let i = 0; i < 247; i++) {
        let rn = Math.floor(Math.random() * 10)
        make1 += `<div id="bble" class="bubble1">${rn}</div>`
    }

    document.querySelector(".bottom").innerHTML = make1

}

function createBubble2() {

    var make2 = ""
    ctch.style.padding="10px"
    for (let i = 0; i < 307; i++) {
        let rn = Math.floor(Math.random() * 10)
        make2 += `<div id="bble" class="bubble2">${rn}</div>`
    }

    document.querySelector(".bottom").innerHTML = make2

}

function timeInterval() {
    stime.innerHTML = time
    time--

    if (time >= -1) {
        var timer = setTimeout(timeInterval, 1000)

        if (time < 3) {
            stime.style.color = "red"
        }
    }

    else {
        stime.innerHTML = ""
        clearTimeout(timer)
        ctch.style.display = "none"
        gameOver.style.display = "flex"
    }
}

function target() {
    hitPnt.innerHTML = Math.floor(Math.random() * 10)
    hit = hitPnt.textContent
}

function IncreaseScore() {
    var incScore = document.getElementById("score")
    score += 10
    incScore.innerHTML = score
    console.log(score);

    if (score >= 50 && score<=100) {
        console.log("Hello")
        createBubble1()
    }

    else if(score>=110){
        createBubble2()
    }
}

function DeacreaseScore() {
    var incScore = document.getElementById("score")
    score -= 10
    incScore.innerHTML = score
}

ctch.addEventListener("click", function (e) {
    var clickedNum = Number(e.target.textContent)

    if (hit == clickedNum) {
        console.log(hit);
        target()
        createBubble()
        IncreaseScore()
    }

    else {
        wrong.style.display = "flex"
        wrong.style.justifyContent = "center"
        wrong.style.alignItems = "center"

        ctch.style.pointerEvents = "none"
        createBubble()
        DeacreaseScore()
        target()




        setTimeout(() => {
            wrong.style.display = "none"
            ctch.style.pointerEvents = "auto"

        }, 800);
    }
})



createBubble()
timeInterval()
target()







resart.addEventListener("click", () => {

    ctch.style.display = "flex"
    stime.style.color="black"
    time = 60
    timeInterval()
    gameOver.style.display="none"

    ctch.addEventListener("click", function (e) {
        var clickedNum = Number(e.target.textContent)

        if (hit == clickedNum) {
            console.log(hit);
            function newScore() {
                var newScore = incScore
                newScore += 10
            }
            createBubble()
            target()
            newScore()

        }

    })

})


doNotResart.addEventListener("click", () => {

    yScore.style.display = "block"
    yScore.innerHTML = yScore.textContent + score
    printScore.style.display = "none"
    resart.style.display = "none"
    doNotResart.style.display = "none"

})


