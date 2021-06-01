const Incomes = [];
const Expenses = [];
//TODO: Add new global value for incomes and expenses.

function createNewIncomes(inputNameIncomes, inputCuantityIncomes, dateNewIncome) {
    if (inputNameIncomes == '' || isNaN(inputCuantityIncomes)) return false;
    return createObject([inputNameIncomes, inputCuantityIncomes, dateNewIncome]);
}

function createNewExpense(inputNameExpense, inputCuantityExpense, dateNewExpense) {
    if (inputNameExpense == '' || isNaN(inputCuantityExpense)) return false;
    return createObject([inputNameExpense, inputCuantityExpense, dateNewExpense]);
}

function createObject(...value) {
    var newObject = new Object();
    for (const key of value) {
        newObject[key] = key;
    }
    // console.log(newObject);
    return newObject;
}

function addNewIncomes(newIncome) {
    Incomes.push(newIncome);
    console.log(Incomes);
}

function addNewExits(newExits) {
    Expenses.push(newExits);
    console.log(Expenses);
}

function logIncome(newIncomes) {
    const Log = document.querySelector("#logentries");
    for (const key in newIncomes) {
        console.log(key);
        Log.insertAdjacentHTML("beforeend", '<p>' + key + '</p>');
    }
}

function logExit(newExit) {
    const Log = document.querySelector("#logexpenses");
    for (const key in newExit) {
        console.log(key);
        Log.insertAdjacentHTML("beforeend", '<p>' + key + '</p>');
    }
}

function newLog(newExit, container) {
    for (const key in newExit) {
        console.log(key);
        container.insertAdjacentHTML("beforeend", '<p>' + key + '</p>');
    }
}

// Functio that print every object inside the Array expanses or incomes
// function logExit(arrayLogExits) {
//     const Log = document.querySelector("#logexpenses");
//     for (let index = 0; index < arrayLogExits.length; index++) {
//         var i = arrayLogExits[index];
//         console.log(i);
//         for (const key in i) {
//             console.log(key);
//             Log.insertAdjacentHTML("beforeend", '<p>' + key + '</p>');
//         }
//     }
// }

function dateOfCreation() {
    var dOC = new Date();
    var date = dOC.getFullYear() + '-' + (dOC.getMonth() + 1) + '-' + dOC.getDate();

    return date;
}

// TODO:Print graph to give a better way to analize the net income
// function printGrapg(arrayLogIncome, arrayLogExits) {}

// Buttons functionality

const btnNewExpenses = document.querySelector('#nameExpense+button');
const btnNewIncomes = document.querySelector('#nameEntries+button');
//TODO: fix the error wich shows every time the button #nameExpense+button shows an error in
// console for not being click what it's press


btnNewExpenses.addEventListener('click', (e) => {
    e.preventDefault();
    var inputCuantityExpense = document.querySelector('#cuantityExpense').value;
    var inputNameExpense = document.querySelector('#nameExpense').value;
    var dateNewExpense = dateOfCreation();
    var LogContainer = document.querySelector('#logexpenses');
    // Create the new Expense
    const nNI = createNewExpense(inputNameExpense, inputCuantityExpense, dateNewExpense);
    for (const key in nNI) {
        console.log(key);
    }
    // Adds the new EXIT no the array of EXITS
    addNewExits(nNI);
    // logExit(nNI);
    newLog(nNI, LogContainer);
});

btnNewIncomes.addEventListener('click', (e) => {
    e.preventDefault();
    var inputCuantityEntrie = document.querySelector('#cuantityEntrie').value;
    var inputNameEntrie = document.querySelector('#nameEntries').value;
    var LogContainer = document.querySelector('#logentries');
    var dateNewEntrie = dateOfCreation();
    const nNE = createNewIncomes(inputNameEntrie, inputCuantityEntrie, dateNewEntrie);
    for (const key in nNE) {
        console.log(key);
    }
    // Adds the new Income no the array of Income
    addNewExits(nNE);
    // logIncome(nNE);
    newLog(nNE, LogContainer);
});