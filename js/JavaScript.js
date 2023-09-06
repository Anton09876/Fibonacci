'use strict'


function GetFibonacciNumber(){
    const FibonacciMemberNumber = document.getElementById("FibonacciMemberNumber").value; // получил значение из поля input

    return Number(FibonacciMemberNumber);
}

function CalculateFibonacciNumber(number) {
    //случаи где не нужны расчеты
    if (number == 0) return 0;
    else if (number == 1) return 1;
    //случаи где нужно высчитывать
    {
        // начальные значения для 0 и 1 члена
        let f0 = 0; 
        let f1 = 1;
        // 
        let result = 0; 
        for (let i = 2; i <= number; i++) {
            result = f0 + f1 // n-ый член
            f0 = f1;
            f1 = result;
        }
        return result;
    }
}
function WriteFibonacciNumber() {
    let result = CalculateFibonacciNumber(GetFibonacciNumber());
    let resultElement = document.getElementById('result');
    resultElement.innerHTML = result;
}
/*function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () =>  alert("Вы согласились."),
    () =>  alert("Вы отменили выполнение.")
);*/