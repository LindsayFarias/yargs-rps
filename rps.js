const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

class Game {
    constructor(comMove ,humanMove){
        this.comRPS = comMove;
        this.humanRPS = humanMove;
        this.results = '';
    }

    determineWinner(){
        if (this.humanRPS == this.comRPS){
            this.results = 'Everbody'
        } else if ((this.humanRPS == 'rock' && this.comRPS == 'scissors') ||
            (this.humanRPS == 'paper' && this.comRPS == 'rock') ||
            (this.humanRPS == 'scissors' && this.comRPS == 'paper')){
                this.results = 'Player'
        } else {
                this.results = 'Computer'
        }
        return this.results;
    }
}

class ComputerChoice{
    constructor(){
        this.choice = '';
    }

    choiceSelector (){
        let rpsArray = ['rock', 'paper', 'scissors'];
        let rndm = Math.floor(Math.random() * 3);
        this.choice = rpsArray[rndm];
        return this.choice;
    }
}

const lowerCaseHumanRPS = (argv.move).toLowerCase()
const computerChoice = new ComputerChoice();
computerChoice.choiceSelector();
const comRPS =  computerChoice.choice;
const game = new Game (comRPS, lowerCaseHumanRPS)
game.determineWinner();
const winner = game.results;

console.log('Playing a game of Roshambo against the computer')
console.log(`Player plays ${argv.move}!`)
console.log(`Computer plays ${comRPS}!`)
console.log(`~${winner} wins.~`)