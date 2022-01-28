function playGame() {
    var startBet = prompt("how many dollars you have to bet");
    var startBestNum = parseInt(startBet);
    console.log(startBestNum)
    if(startBestNum<=0) {
        alert("Starting bet must be greater than zero.")
    } else {
        var gameMoney = startBestNum;
        var moneyToPlay = "";
        if(gameMoney>0) {
            return Math.floor(Math.random() * gameMoney) + 1;
        }
    }
}