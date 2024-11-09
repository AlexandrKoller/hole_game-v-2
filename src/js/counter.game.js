export default class Counter {
    constructor(element, game) {
        this.element = element
        this.game = game
        this.hitScore = element.querySelector('.hit')
        this.lostScore = element.querySelector('.lost')
    }
    hit() {
        if (++this.hitScore.textContent === 10) {
            alert('Win!');
            this.hitScore.textContent = 0;
            this.lostScore.textContent = 0;
            }
    }
    lost() {
        this.lostScore.textContent++
        if (this.lostScore.textContent == 5) {
            alert('Game over');
            this.hitScore.textContent = 0;
            this.lostScore.textContent = 0;
            this.clearTime()
            this.game.removeGoblin()
        }
    }
    timeSet() {
        this.timer = setInterval(() => {
            this.game.moveGoblin()
            this.lost()}, 1000)
        
    }
    clearTime() {
        clearInterval(this.timer)
    }
}