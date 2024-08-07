#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let Total_Balance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.cyan("Please Enter your PIN Number"),
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.bgGreenBright("correct PIN number"));
    let operation = await inquirer.prompt([
        {
            name: "Operations",
            message: chalk.cyan("Select the operation you want to perform"),
            type: "list",
            choices: ["withdraw", "check_balance", "fast cash", "cash deposit"],
        },
    ]);
    if (operation.Operations === "withdraw") {
        let amount_for_withdrawal = await inquirer.prompt([
            {
                name: "withdraw",
                message: chalk.cyan("Please enter the amunt you want to withdraw"),
                type: "number",
            },
        ]);
        if (amount_for_withdrawal.withdraw <= Total_Balance &&
            amount_for_withdrawal.withdraw > 0) {
            console.log(chalk.magentaBright(`Successfully withdraw the amount of : ${chalk.yellowBright(amount_for_withdrawal.withdraw)} $`));
            console.log(chalk.magentaBright(`The remaining balance is : ${chalk.yellowBright(Total_Balance - amount_for_withdrawal.withdraw)}$`));
        }
        else {
            console.log(chalk.red("Insufficient Balance"));
        }
    }
    else if (operation.Operations === "check_balance") {
        console.log(chalk.magentaBright(`The balance of your account is : ${chalk.yellowBright(Total_Balance)}$`));
    }
    else if (operation.Operations === "fast cash") {
        let fast_cash = await inquirer.prompt([
            {
                name: "fast_cash1",
                message: chalk.cyan("Please select your fast cash amount"),
                type: "list",
                choices: ["500", "1000", "3000", "5000", "8000"],
            },
        ]);
        fast_cash.fast_cash1 <= Total_Balance && fast_cash.fast_cash1 > 0;
        console.log(chalk.magentaBright(`Successfully withdraw the amount of : ${chalk.yellowBright(fast_cash.fast_cash1)} $`));
        console.log(chalk.magentaBright(`The remaining balance is : ${chalk.yellowBright(Total_Balance - fast_cash.fast_cash1)}$`));
    }
    else if (operation.Operations === "cash deposit") {
        let deposit_amount = await inquirer.prompt([
            {
                name: "deposit",
                message: chalk.cyan("Please enter the amount you want to deposit"),
                type: "number",
            },
        ]);
        console.log(Total_Balance + deposit_amount.deposit);
    }
}
else {
    console.log(chalk.bgRedBright("Incorrect PIN Number"));
}
