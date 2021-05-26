// Principapl objects
// var income = new Object(),
//     nameIncome = '',
//     cuantityIncome, dateIncome;
// var exit = new Object(),
//     nameExit = '',
//     cuantityExit, dateExit;
// // Object with arrays wich are going to store the objets of each past income and exit 
// var netIncome = new Object(),
//     logNetIncome = new Array,
//     logNegativeNetIncome = new Array;

// Functions

function createNewIncomes(nameIncome, cuantityIncome, dateIncome) {
    var income = {
        NameIncome: nameIncome,
        CuantityIncome: cuantityIncome,
        DateIncome: dateIncome
    }
    return income;
}

function createNewExits(nameExit, cuantityExit, dateExit) {

}

function addNewIncomes(nameIncome, cuantityIncome, dateIncome) {

}

function addNewExits(nameExit, cuantityExit, dateExit) {

}

function logIncome(arrayLogIncome) {

}

function logIncome(arrayLogExits) {

}

function dateOfCreation() {
    var dOC = new Date();
    var date = dOC.getFullYear() + '-' + dOC.getMonth() + '-' + dOC.getDay();

    return date;
}

// Todo: Print graph to give a better way to analize the net income
// function printGrapg(arrayLogIncome, arrayLogExits) {}

// Buttons functionality

const btnNewExpenses = document.querySelector('#nameExpense+button');
//Todo: fix the error wich shows every time the button #nameExpense+button shows an error in
// console for not being click what it's press

btnNewExpenses.addEventListener('click', (e) => {
    e.preventDefault();
    var inputCuantityExpense = document.querySelector('#cuantityExpense').value;
    var inputNameExpense = document.querySelector('#nameExpense').value;
    var dateNewExpense = dateOfCreation();
    const nNI = createNewIncomes(inputNameExpense, inputCuantityExpense, dateNewExpense);
    console.log(nNI);
});