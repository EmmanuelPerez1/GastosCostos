function createNewIncomes(...values) {
    // if (nameIncome == '' || isNaN(cuantityIncome)) return false;
    // return createObject(nameIncome, cuantityIncome, dateIncome);
    for (const key in values) {
        if (key == "" || isNaN(key)) {
            return false
        }
        return createObject(values);
    }
}

function createNewExpense(...values) {
    // nameExpense, cuantityExpense, dateExpense
    // if (nameIncome == '' || isNaN(cuantityIncome)) return false;
    // var newExpanse = [nameExpense, cuantityExpense, dateExpense];
    for (const key in values) {
        if (key == "" || isNaN(key)) {
            return false
        }
        return createObject(values);
    }
}

function createObject(...value) {
    var newObject = new Object();
    for (const key of value) {
        newObject[key] = key;
    }
    console.log(newObject);
    return newObject;
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
    var date = dOC.getFullYear() + '-' + (dOC.getMonth() + 1) + '-' + dOC.getDate();

    return date;
}

// Todo: Print graph to give a better way to analize the net income
// function printGrapg(arrayLogIncome, arrayLogExits) {}

// Buttons functionality

const btnNewExpenses = document.querySelector('#nameExpense+button');
const btnNewIncomes = document.querySelector('#nameEntries+button');
//Todo: fix the error wich shows every time the button #nameExpense+button shows an error in
// console for not being click what it's press


btnNewExpenses.addEventListener('click', (e) => {
    e.preventDefault();
    var inputCuantityExpense = document.querySelector('#cuantityExpense').value;
    var inputNameExpense = document.querySelector('#nameExpense').value;
    var dateNewExpense = dateOfCreation();
    const nNI = createNewExpense(inputNameExpense, inputCuantityExpense, dateNewExpense);
    // console.log(nNI.value);
    for (const key in nNI) {
        console.log(key);
    }
});

btnNewIncomes.addEventListener('click', (e) => {
    e.preventDefault();
    var inputCuantityEntrie = document.querySelector('#cuantityEntrie').value;
    var inputNameEntrie = document.querySelector('#nameEntries').value;
    var dateNewEntrie = dateOfCreation();
    const nNE = createNewIncomes(inputNameEntrie, inputCuantityEntrie, dateNewEntrie);
    for (const key in nNE) {
        console.log(key);
    }
});