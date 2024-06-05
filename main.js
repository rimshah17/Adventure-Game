#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class AdvantureGame {
    name;
    score = 0;
    health = 100;
    drink = 0;
    constructor(name) {
        this.name = name;
    }
    increaseScore() {
        let score = this.score += 10;
        this.score = score;
    }
    decreaseHealth() {
        let health = this.health - 25;
        this.health = health;
    }
    increaseHealth() {
        this.health = 100;
    }
    increaseDrink() {
        let drink = this.drink += 1;
        this.drink = drink;
    }
}
console.log(chalk.yellow("Welcome to advanture game"));
let get_player_name = await inquirer.prompt({ name: "playerName", message: chalk.bold("Enter your name"), type: "input" });
let get_oponent_name = await inquirer.prompt({ name: "get_oponent", message: chalk.bold("Select your oponent"), type: "list", choices: [chalk.bold("Skeleton"), chalk.bold("Alien"), chalk.bold("Zombie"), "Quit"] });
let player = new AdvantureGame(chalk.bold(get_player_name.playerName));
let oponent = new AdvantureGame(get_oponent_name.get_oponent);
let skelaton = async () => {
    let ask = await inquirer.prompt({ name: "opt", message: chalk.bold("What would you like to do"), type: "list", choices: [chalk.bold("Attack"), chalk.bold("Drink Portion"), chalk.bold("Run for life")] });
    let attack = () => {
        let randomNum = Math.floor(Math.random() * 2);
        if (randomNum > 0) {
            player.decreaseHealth();
            oponent.increaseScore();
            console.log(`name:${chalk.yellow(player.name)} score:${chalk.yellow(player.score)} health:${chalk.yellow(player.health)} drink:${chalk.yellow(player.drink)}`);
            console.log(`oponent:${chalk.yellow(oponent.name)} score:${chalk.yellow(oponent.score)} health:${chalk.yellow(oponent.health)} `);
            if (player.health <= 0) {
                console.log(chalk.red(`You lose, Better luck next time`));
                process.exit();
            }
        }
        else {
            oponent.decreaseHealth();
            player.increaseScore();
            console.log(`name:${chalk.yellow(player.name)} score:${chalk.yellow(player.score)} health:${chalk.yellow(player.health)} drink:${chalk.yellow(player.drink)}`);
            console.log(`oponent:${chalk.yellow(oponent.name)} score:${chalk.yellow(oponent.score)} health:${chalk.yellow(oponent.health)}`);
            if (oponent.health <= 0) {
                console.log(chalk.green(`congratularions You win`));
                process.exit();
            }
        }
    };
    let drinkPortion = () => {
        player.increaseHealth();
        player.increaseDrink();
        console.log(chalk.green(`You drink health ${player.health}`));
    };
    let runForLife = () => {
        console.log(chalk.red("You lose, Better luck next time"));
        process.exit();
    };
    switch (ask.opt) {
        case chalk.bold("Attack"):
            attack();
            break;
        case chalk.bold("Drink Portion"):
            drinkPortion();
            break;
        case chalk.bold("Run for life"):
            runForLife();
            break;
        default:
            break;
    }
};
let alien = async () => {
    let ask = await inquirer.prompt({ name: "opt", message: chalk.bold("What would you like to do"), type: "list", choices: [chalk.bold("Attack"), chalk.bold("Drink Portion"), chalk.bold("Run for life")] });
    let attack = () => {
        let randomNum = Math.floor(Math.random() * 2);
        if (randomNum > 0) {
            player.decreaseHealth();
            oponent.increaseScore();
            console.log(`name:${chalk.yellow(player.name)} score:${chalk.yellow(player.score)} health:${chalk.yellow(player.health)} drink:${chalk.yellow(player.drink)}`);
            console.log(`oponent:${chalk.yellow(oponent.name)} score:${chalk.yellow(oponent.score)} health:${chalk.yellow(oponent.health)} `);
            if (player.health <= 0) {
                console.log(chalk.red(`You lose, Better luck next time`));
                process.exit();
            }
        }
        else {
            oponent.decreaseHealth();
            player.increaseScore();
            console.log(`name:${chalk.yellow(player.name)} score:${chalk.yellow(player.score)} health:${chalk.yellow(player.health)} drink:${chalk.yellow(player.drink)}`);
            console.log(`oponent:${chalk.yellow(oponent.name)} score:${chalk.yellow(oponent.score)} health:${chalk.yellow(oponent.health)}`);
            if (oponent.health <= 0) {
                console.log(chalk.green(`congratularions You win`));
                process.exit();
            }
        }
    };
    let drinkPortion = () => {
        player.increaseHealth();
        player.increaseDrink();
        console.log(chalk.green(`You drink health ${player.health}`));
    };
    let runForLife = () => {
        console.log(chalk.red("You lose, Better luck next time"));
        process.exit();
    };
    switch (ask.opt) {
        case chalk.bold("Attack"):
            attack();
            break;
        case chalk.bold("Drink Portion"):
            drinkPortion();
            break;
        case chalk.bold("Run for life"):
            runForLife();
            break;
        default:
            break;
    }
};
let zombie = async () => {
    let ask = await inquirer.prompt({ name: "opt", message: chalk.bold("What would you like to do"), type: "list", choices: [chalk.bold("Attack"), chalk.bold("Drink Portion"), chalk.bold("Run for life")] });
    let attack = () => {
        let randomNum = Math.floor(Math.random() * 2);
        if (randomNum > 0) {
            player.decreaseHealth();
            oponent.increaseScore();
            console.log(`name:${chalk.yellow(player.name)} score:${chalk.yellow(player.score)} health:${chalk.yellow(player.health)} drink:${chalk.yellow(player.drink)}`);
            console.log(`oponent:${chalk.yellow(oponent.name)} score:${chalk.yellow(oponent.score)} health:${chalk.yellow(oponent.health)} `);
            if (player.health <= 0) {
                console.log(chalk.red(`You lose, Better luck next time`));
                process.exit();
            }
        }
        else {
            oponent.decreaseHealth();
            player.increaseScore();
            console.log(`name:${chalk.yellow(player.name)} score:${chalk.yellow(player.score)} health:${chalk.yellow(player.health)} drink:${chalk.yellow(player.drink)}`);
            console.log(`oponent:${chalk.yellow(oponent.name)} score:${chalk.yellow(oponent.score)} health:${chalk.yellow(oponent.health)}`);
            if (oponent.health <= 0) {
                console.log(chalk.green(`congratularions You win`));
                process.exit();
            }
        }
    };
    let drinkPortion = () => {
        player.increaseHealth();
        player.increaseDrink();
        console.log(chalk.green(`You drink health ${player.health}`));
    };
    let runForLife = () => {
        console.log(chalk.red("You lose, Better luck next time"));
        process.exit();
    };
    switch (ask.opt) {
        case chalk.bold("Attack"):
            attack();
            break;
        case chalk.bold("Drink Portion"):
            drinkPortion();
            break;
        case chalk.bold("Run for life"):
            runForLife();
            break;
        default:
            break;
    }
};
let main = async () => {
    let flage = true;
    while (flage) {
        switch (get_oponent_name.get_oponent) {
            case chalk.bold("Skeleton"):
                await skelaton();
                break;
            case chalk.bold("Alien"):
                await alien();
                break;
            case chalk.bold("Zombie"):
                await zombie();
            case "Quit":
                flage = false;
                break;
            default:
                break;
        }
    }
};
main();
