// 1.add event handler in button first one for player1
document.getElementById("select-player-1").addEventListener("click", function () {



    const selectedPlayer = setSelectedPlayerName("player1-name");

    disable("select-player-1");


})


// player-2
document.getElementById("select-player-2").addEventListener("click", function () {
    setSelectedPlayerName("player2-name");
    disable("select-player-2");
})

// player-3
document.getElementById("select-player-3").addEventListener("click", function () {
    setSelectedPlayerName("player3-name");
    disable("select-player-3");
})

// player-4
document.getElementById("select-player-4").addEventListener("click", function () {
    setSelectedPlayerName("player4-name");
    disable("select-player-4");

})
//player-5
document.getElementById("select-player-5").addEventListener("click", function () {
    setSelectedPlayerName("player5-name");
    disable("select-player-5");
})
//player-6
document.getElementById("select-player-6").addEventListener("click", function () {
    setSelectedPlayerName("player6-name");
    disable("select-player-6");
})