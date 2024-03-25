#! /usr/bin/env node 
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation you guessed a right number");
}
else {
    console.log("Sorry you guessed wrong number");
}
