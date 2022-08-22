

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

function getInnerValue(id) {
    const managerCoast = document.getElementById(id);
    const managerCoastString = managerCoast.value;
    const convertmanagerCoast = parseFloat(managerCoastString);
    return convertmanagerCoast;
}

function totalMatchCoast(value1, value2, value3) {
    if (typeof (value1) == String || " " && typeof (value2) == String || " " && typeof (value3) == String || " ") {
        alert("enter a valid input");
    }
    else {
        const total = value1 + value2 + value3;
        const totalmatchCoast = document.getElementById("toal-match-coast")
        totalmatchCoast.innerText = total;
    }

}