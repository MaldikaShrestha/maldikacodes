function calculation() {
var firstNumber=parseInt(prompt("Enter the first number:"));
var operator=prompt("Enter the operator(+,-,*,/):");
var secondNumber=parseInt(prompt("Enter the second number:"));
var result;
switch(operator){
    case '+':
        result=firstNumber+secondNumber;
        break;
    case '-':
        result=firstNumber-secondNumber;
        break;
    case '*':
        result=firstNumber*secondNumber;
        break;
    case '/':
        result=firstNumber/secondNumber;
        break;
}
alert(`The result of the operation on given number ${firstNumber} ${operator} ${secondNumber} is:${result}`);
}
calculation();
