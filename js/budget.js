document.getElementById("calculate-players-coast").addEventListener("click", function () {


    const selectedPlayer = document.getElementById("selected-v");
    const ul = document.querySelectorAll('li').length;
    const convertUl = parseInt(ul);
    const playerCoastInputField = document.getElementById("coast-per-player")
    const playersCost = playerCoastInputField.value;
    const convertplayerCost = parseFloat(playersCost);
    const selectedPlayersCoast = convertUl * convertplayerCost;
    const totalSelectedPlayersExpenses = document.getElementById("toal-players-balance");
    totalSelectedPlayersExpenses.innerText = selectedPlayersCoast;
    //set total coast now on this input field
})

document.getElementById("calculate-total-coast").addEventListener("click", function () {

    const totalExpensesString = getInnerText("toal-players-balance");
    const convertTotalExpenses = parseFloat(totalExpensesString);
    console.log(convertTotalExpenses);

    //manager coast
    // const managerCoast = document.getElementById("manager-coast");
    // const managerCoastString = managerCoast.value;
    // const convertmanagerCoast = parseFloat(managerCoastString);
    const payForManager = getInnerValue("manager-coast");
    console.log(payForManager);


    //coach coast

    const payforCoach = getInnerValue("coach-coast");
    console.log(payforCoach);

    // total coast
    totalMatchCoast(convertTotalExpenses, payForManager, payforCoach);
})