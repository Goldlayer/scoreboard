let homeScore = 0
let guestScore = 0
document.getElementById("homescore").innerHTML = homeScore
document.getElementById("guestscore").innerHTML = guestScore

let countHome = 0
let countGuest = 0


function plusOneHome(){
    countHome += 1
    let newScoreHome = homeScore + countHome
    document.getElementById("homescore").innerHTML = newScoreHome
}

function plusTwoHome(){
    countHome += 2
    let newScoreHome = homeScore + countHome
    document.getElementById("homescore").innerHTML = newScoreHome
}

function plusThreeHome(){
    countHome += 3
    let newScoreHome = homeScore + countHome
    document.getElementById("homescore").innerHTML = newScoreHome
}

function plusOneGuest(){
    countGuest += 1
    let newScoreGuest = guestScore + countGuest
    document.getElementById("guestscore").innerHTML = newScoreGuest
}

function plusTwoGuest(){
    countGuest += 2
    let newScoreGuest = guestScore + countGuest
    document.getElementById("guestscore").innerHTML = newScoreGuest
}

function plusThreeGuest(){
    countGuest += 3
    let newScoreGuest = guestScore + countGuest
    document.getElementById("guestscore").innerHTML = newScoreGuest
}

function reset(){
    countHome = 0
    countGuest = 0
    homeScore = 0
    guestScore = 0
    document.getElementById("homescore").innerHTML = homeScore
    document.getElementById("guestscore").innerHTML = guestScore
}