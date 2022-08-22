

function setSelectedPlayerName(id) {
    const getText = getInnerText(id);

    const ul = document.querySelectorAll('li').length;

    if (ul < 5) {
        const creatLi = document.getElementById("selected-v");
        const li = document.createElement("li");
        li.innerText = getText;
        creatLi.appendChild(li);
    }
    else {
        alert("not more than 5");
    }


    return ul;
}
function getInnerText(id) {
    const player1Name = document.getElementById(id);
    // 2.get player1 name
    const getPlayer1Name = player1Name.innerText;
    return player1Name.innerText;
}