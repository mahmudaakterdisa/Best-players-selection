

function setSelectedPlayerName(id) {
    const getText = getInnerText(id);//mbp,messi

    const ol = document.querySelectorAll('li').length;

    if (ol < 5) {
        const creatLi = document.getElementById("selected-v");
        const li = document.createElement("li");
        li.innerText = getText;
        creatLi.appendChild(li);
    }
    else {
        alert("Please Choose only 5 Best Players");
    }



}
// get players name
function getInnerText(id) {
    const player1Name = document.getElementById(id);
    const getPlayer1Name = player1Name.innerText;
    return player1Name.innerText;
}

// return inner input value after convertion
function getInnerValue(id) {
    const managerCoast = document.getElementById(id);
    const managerCoastString = managerCoast.value;
    const convertmanagerCoast = parseFloat(managerCoastString);
    return convertmanagerCoast;
}

// this function calculate the the amount need to spend for match
function totalMatchCoast(value1, value2, value3) {


    const total = value1 + value2 + value3;
    const totalmatchCoast = document.getElementById("toal-match-coast")
    totalmatchCoast.innerText = total;


}

//this is for disable button after one click
function disable(element) {
    const selectedbutton = document.getElementById(element);
    selectedbutton.setAttribute("disabled", true);
    if ("disabled" == true) {
        return;
    }
}