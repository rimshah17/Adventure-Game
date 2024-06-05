#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"
class AdvantureGame {
  name: string;
  score: number = 0;
  health: number = 100;
  drink = 0;
  constructor(name: string) {
    this.name = name;
  }
  increaseScore() {
    let score = this.score += 10
    this.score = score
  }
  decreaseHealth() {
    let health = this.health - 25
    this.health = health
  }
  increaseHealth() {
    this.health = 100
  }
  increaseDrink() {
    let drink = this.drink += 1
    this.drink = drink
  }
}
console.log(chalk.yellow("Welcome to advanture game"))
let get_player_name: { playerName: string } = await inquirer.prompt({ name: "playerName", message: chalk.bold("Enter your name"), type: "input" })
let get_oponent_name: { get_oponent: string } = await inquirer.prompt({ name: "get_oponent", message: chalk.bold("Select your oponent"), type: "list", choices: [chalk.bold("Skeleton"), chalk.bold("Alien"), chalk.bold("Zombie"), "Quit"] })

let player: AdvantureGame = new AdvantureGame(chalk.bold(get_player_name.playerName))
let oponent: AdvantureGame = new AdvantureGame(get_oponent_name.get_oponent)
let skelaton = async (): Promise<void> => {
  let ask: { opt: string } = await inquirer.prompt({ name: "opt", message: chalk.bold("What would you like to do"), type: "list", choices: [chalk.bold("Attack"), chalk.bold("Drink Portion"), chalk.bold("Run for life")] })
  let attack = (): void => {
    let randomNum: number = Math.floor(Math.random() * 2)
    if (randomNum > 0) {
      player.decreaseHealth()
      oponent.increaseScore()
      console.log(`name:${chalk.yellow(player.name)} score:${chalk.yellow(player.score)} health:${chalk.yellow(player.health)} drink:${chalk.yellow(player.drink)}`)
      console.log(`oponent:${chalk.yellow(oponent.name)} score:${chalk.yellow(oponent.score)} health:${chalk.yellow(oponent.health)} `)
      if (player.health <= 0) {
        console.log(chalk.red(`You lose, Better luck next time`))
        process.exit()

      }
    }
    else {
      oponent.decreaseHealth()
      player.increaseScore()
      console.log(`name:${chalk.yellow(player.name)} score:${chalk.yellow(player.score)} health:${chalk.yellow(player.health)} drink:${chalk.yellow(player.drink)}`)
      console.log(`oponent:${chalk.yellow(oponent.name)} score:${chalk.yellow(oponent.score)} health:${chalk.yellow(oponent.health)}`)
      if (oponent.health <= 0) {
        console.log(chalk.green(`congratularions You win`))
        process.exit()

      }

    }
  }
  let drinkPortion = (): void => {
    player.increaseHealth()
    player.increaseDrink()
    console.log(chalk.green(`You drink health ${player.health}`))
  }
  let runForLife = (): void => {
    console.log(chalk.red("You lose, Better luck next time"))
    process.exit()
  }
  switch (ask.opt) {
    case chalk.bold("Attack"):
      attack()
      break
    case chalk.bold("Drink Portion"):
      drinkPortion()
      break
    case chalk.bold("Run for life"):
      runForLife()
      break
    default:
      break;
  }
}
let alien = async (): Promise<void> => {
  let ask: { opt: string } = await inquirer.prompt({ name: "opt", message: chalk.bold("What would you like to do"), type: "list", choices: [chalk.bold("Attack"), chalk.bold("Drink Portion"), chalk.bold("Run for life")] })
  let attack = (): void => {
    let randomNum: number = Math.floor(Math.random() * 2)
    if (randomNum > 0) {
      player.decreaseHealth()
      oponent.increaseScore()
      console.log(`name:${chalk.yellow(player.name)} score:${chalk.yellow(player.score)} health:${chalk.yellow(player.health)} drink:${chalk.yellow(player.drink)}`)
      console.log(`oponent:${chalk.yellow(oponent.name)} score:${chalk.yellow(oponent.score)} health:${chalk.yellow(oponent.health)} `)
      if (player.health <= 0) {
        console.log(chalk.red(`You lose, Better luck next time`))
        process.exit()

      }
    }
    else {
      oponent.decreaseHealth()
      player.increaseScore()
      console.log(`name:${chalk.yellow(player.name)} score:${chalk.yellow(player.score)} health:${chalk.yellow(player.health)} drink:${chalk.yellow(player.drink)}`)
      console.log(`oponent:${chalk.yellow(oponent.name)} score:${chalk.yellow(oponent.score)} health:${chalk.yellow(oponent.health)}`)
      if (oponent.health <= 0) {
        console.log(chalk.green(`congratularions You win`))
        process.exit()

      }

    }
  }
  let drinkPortion = (): void => {
    player.increaseHealth()
    player.increaseDrink()
    console.log(chalk.green(`You drink health ${player.health}`))
  }
  let runForLife = (): void => {
    console.log(chalk.red("You lose, Better luck next time"))
    process.exit()
  }
  switch (ask.opt) {
    case chalk.bold("Attack"):
      attack()
      break
    case chalk.bold("Drink Portion"):
      drinkPortion()
      break
    case chalk.bold("Run for life"):
      runForLife()
      break
    default:
      break;
  }
}
let zombie = async (): Promise<void> => {
  let ask: { opt: string } = await inquirer.prompt({ name: "opt", message: chalk.bold("What would you like to do"), type: "list", choices: [chalk.bold("Attack"), chalk.bold("Drink Portion"), chalk.bold("Run for life")] })
  let attack = (): void => {
    let randomNum: number = Math.floor(Math.random() * 2)
    if (randomNum > 0) {
      player.decreaseHealth()
      oponent.increaseScore()
      console.log(`name:${chalk.yellow(player.name)} score:${chalk.yellow(player.score)} health:${chalk.yellow(player.health)} drink:${chalk.yellow(player.drink)}`)
      console.log(`oponent:${chalk.yellow(oponent.name)} score:${chalk.yellow(oponent.score)} health:${chalk.yellow(oponent.health)} `)
      if (player.health <= 0) {
        console.log(chalk.red(`You lose, Better luck next time`))
        process.exit()

      }
    }
    else {
      oponent.decreaseHealth()
      player.increaseScore()
      console.log(`name:${chalk.yellow(player.name)} score:${chalk.yellow(player.score)} health:${chalk.yellow(player.health)} drink:${chalk.yellow(player.drink)}`)
      console.log(`oponent:${chalk.yellow(oponent.name)} score:${chalk.yellow(oponent.score)} health:${chalk.yellow(oponent.health)}`)
      if (oponent.health <= 0) {
        console.log(chalk.green(`congratularions You win`))
        process.exit()

      }

    }
  }
  let drinkPortion = (): void => {
    player.increaseHealth()
    player.increaseDrink()
    console.log(chalk.green(`You drink health ${player.health}`))
  }
  let runForLife = (): void => {
    console.log(chalk.red("You lose, Better luck next time"))
    process.exit()
  }
  switch (ask.opt) {
    case chalk.bold("Attack"):
      attack()
      break
    case chalk.bold("Drink Portion"):
      drinkPortion()
      break
    case chalk.bold("Run for life"):
      runForLife()
      break
    default:
      break;
  }
}
let main = async (): Promise<void> => {
  let flage = true
  while (flage) {
    switch (get_oponent_name.get_oponent) {
      case chalk.bold("Skeleton"):
        await skelaton()
        break;
      case chalk.bold("Alien"):
        await alien()
        break
      case chalk.bold("Zombie"):
        await zombie()
      case "Quit":
        flage = false
        break
      default:
        break;
    }
  }
}
main()