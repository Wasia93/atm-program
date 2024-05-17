import inquirer from "inquirer";
console.log("WELCOME TO ABC BANK");
let myBalance = 600000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your 4 digits pin number",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin)
    console.log("Correct pin code!!!");
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check balance"]
    }
]);
console.log(operationAns);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]);
    myBalance -= amountAns.amount;
    console.log(`"Your remaining balance is": ${myBalance}`);
}
if (operationAns.operation === "check balance") {
    console.log(`"Your balance is:" ${myBalance}`);
}
else {
    console.log("Incorrect pin number");
}
