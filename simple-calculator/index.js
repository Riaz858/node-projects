#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        message: (chalk.green("Enter First Number")),
        type: "number",
        name: "firstNumber",
    },
    {
        message: (chalk.green("Enter Second Number")),
        type: "number",
        name: "secondNumber",
    },
    {
        message: (chalk.magenta("Select one operator to perform action")),
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(chalk.yellowBright(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.yellowBright(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.yellowBright(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Division") {
    console.log(chalk.yellowBright(answer.firstNumber / answer.secondNumber));
}
else
    console.log(chalk.bgBlueBright("Please Select a Valid Operator"));
