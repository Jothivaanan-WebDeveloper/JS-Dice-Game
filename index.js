let randomNumber1,randomNumber2;

const playerOne = () => {
    randomNumber1  = Math.ceil(Math.random()*6);
    document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
}

const playerTwo = () => {
    randomNumber2  = Math.ceil(Math.random()*6);
    document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);
    displayWinner();
}

const displayWinner = () => {
    console.log(randomNumber1,randomNumber2);
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerText = "⛳ Player one won!"
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerText = "⛳ Player two won!"
    }
    else {
        document.querySelector("h1").innerText = "Match Draw!"
    }
}