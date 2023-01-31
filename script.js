const day = document.getElementById("day")
const week = document.getElementById("week")
const month = document.getElementById("month")

let playH = document.getElementById("play-h")
let playP = document.getElementById("play-p")

let workH = document.getElementById("work-h")
let workP = document.getElementById("work-p")

let selfH = document.getElementById("self-h")
let selfP = document.getElementById("self-p")

let exerH = document.getElementById("exer-h")
let exerP = document.getElementById("exer-p")

let studyH = document.getElementById("study-h")
let studyP = document.getElementById("study-p")

let socialH = document.getElementById("social-h")
let socialP = document.getElementById("social-p")

let xReq = new XMLHttpRequest()
    xReq.open('GET', 'data.json')
    xReq.onload = function(){
        let xData = JSON.parse(xReq.responseText)
        workH.innerHTML = xData[0].timeframes.daily.current + " hrs"
        playH.innerHTML = xData[1].timeframes.daily.current + " hrs"
        studyH.innerHTML = xData[2].timeframes.daily.current + " hrs"
        exerH.innerHTML = xData[3].timeframes.daily.current + " hrs"
        socialH.innerHTML = xData[4].timeframes.daily.current + " hrs"
        selfH.innerHTML = xData[5].timeframes.daily.current + " hrs"

        workP.innerHTML = "Last day - " + xData[0].timeframes.daily.previous + " hrs"
        playP.innerHTML = "Last day - " + xData[1].timeframes.daily.previous + " hrs"
        studyP.innerHTML = "Last day - " + xData[2].timeframes.daily.previous + " hrs"
        exerP.innerHTML = "Last day - " + xData[3].timeframes.daily.previous + " hrs"
        socialP.innerHTML = "Last day - " + xData[4].timeframes.daily.previous + " hrs"
        selfP.innerHTML = "Last day - " + xData[5].timeframes.daily.previous + " hrs"
    }

    xReq.send()

day.addEventListener("click", function(){

    let xReq = new XMLHttpRequest()
    xReq.open('GET', 'data.json')
    xReq.onload = function(){
        let xData = JSON.parse(xReq.responseText)
        workH.innerHTML = xData[0].timeframes.daily.current + " hrs"
        playH.innerHTML = xData[1].timeframes.daily.current + " hrs"
        studyH.innerHTML = xData[2].timeframes.daily.current + " hrs"
        exerH.innerHTML = xData[3].timeframes.daily.current + " hrs"
        socialH.innerHTML = xData[4].timeframes.daily.current + " hrs"
        selfH.innerHTML = xData[5].timeframes.daily.current + " hrs"

        workP.innerHTML = "Last day - " + xData[0].timeframes.daily.previous + " hrs"
        playP.innerHTML = "Last day - " + xData[1].timeframes.daily.previous + " hrs"
        studyP.innerHTML = "Last day - " + xData[2].timeframes.daily.previous + " hrs"
        exerP.innerHTML = "Last day - " + xData[3].timeframes.daily.previous + " hrs"
        socialP.innerHTML = "Last day - " + xData[4].timeframes.daily.previous + " hrs"
        selfP.innerHTML = "Last day - " + xData[5].timeframes.daily.previous + " hrs"
    }

    xReq.send()
})

week.addEventListener("click", function(){

    let xReq = new XMLHttpRequest()
    xReq.open('GET', 'data.json')
    xReq.onload = function(){
        let xData = JSON.parse(xReq.responseText)
        workH.innerHTML = xData[0].timeframes.weekly.current + " hrs"
        playH.innerHTML = xData[1].timeframes.weekly.current + " hrs"
        studyH.innerHTML = xData[2].timeframes.weekly.current + " hrs"
        exerH.innerHTML = xData[3].timeframes.weekly.current + " hrs"
        socialH.innerHTML = xData[4].timeframes.weekly.current + " hrs"
        selfH.innerHTML = xData[5].timeframes.weekly.current + " hrs"

        workP.innerHTML = "Last Week - " + xData[0].timeframes.weekly.previous + " hrs"
        playP.innerHTML = "Last Week - " + xData[1].timeframes.weekly.previous + " hrs"
        studyP.innerHTML = "Last Week - " + xData[2].timeframes.weekly.previous + " hrs"
        exerP.innerHTML = "Last Week - " + xData[3].timeframes.weekly.previous + " hrs"
        socialP.innerHTML = "Last Week - " + xData[4].timeframes.weekly.previous + " hrs"
        selfP.innerHTML = "Last Week - " + xData[5].timeframes.weekly.previous + " hrs"
    }

    xReq.send()

})

month.addEventListener("click", function(){

    let xReq = new XMLHttpRequest()
    xReq.open('GET', 'data.json')
    xReq.onload = function(){
        let xData = JSON.parse(xReq.responseText)
        workH.innerHTML = xData[0].timeframes.monthly.current + " hrs"
        playH.innerHTML = xData[1].timeframes.monthly.current + " hrs"
        studyH.innerHTML = xData[2].timeframes.monthly.current + " hrs"
        exerH.innerHTML = xData[3].timeframes.monthly.current + " hrs"
        socialH.innerHTML = xData[4].timeframes.monthly.current + " hrs"
        selfH.innerHTML = xData[5].timeframes.monthly.current + " hrs"

        workP.innerHTML = "Last month - " + xData[0].timeframes.monthly.previous + " hrs"
        playP.innerHTML = "Last month - " + xData[1].timeframes.monthly.previous + " hrs"
        studyP.innerHTML = "Last month - " + xData[2].timeframes.monthly.previous + " hrs"
        exerP.innerHTML = "Last month - " + xData[3].timeframes.monthly.previous + " hrs"
        socialP.innerHTML = "Last month - " + xData[4].timeframes.monthly.previous + " hrs"
        selfP.innerHTML = "Last month - " + xData[5].timeframes.monthly.previous + " hrs"
    }

    xReq.send()

})