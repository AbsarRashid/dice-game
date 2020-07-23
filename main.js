
function rolldice(){
    var randmnum1 = Math.random();
    var diceselect1 = Math.floor(randmnum1 * 6) + 1;    
    document.querySelector(".img1").src = `images/dice${diceselect1}.png`;
    var randmnum2 = Math.random();
    var diceselect2 = Math.floor(randmnum2 * 6) + 1;
    document.querySelector(".img2").src = `images/dice${diceselect2}.png`;

    console.log(`images/dice${diceselect2}.png`);
    if (diceselect1 > diceselect2){
        document.querySelector("h1").textContent="Player 1 Wins";
    }
    else if (diceselect1 < diceselect2){
        document.querySelector("h1").textContent = "Player 2 Wins";
    }
    else{
        document.querySelector("h1").textContent = "Tie.";
    }
}

