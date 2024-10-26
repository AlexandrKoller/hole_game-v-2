import Game from "./class.game"
import Counter from "./counter.game"
import Cliker from "./cliker.game"
document.addEventListener('DOMContentLoaded', () => {
    const newGame = new Game(document.querySelector('.hole-game'))
    const newCounter = new Counter(document.querySelector('.status'), newGame)
    new Cliker(document.querySelector('.hole-game'), newGame, newCounter)
    newGame.createGame()
    newGame.setGoblin()
    newCounter.timeSet()
})