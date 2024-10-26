export default class Cliker {
    constructor(element, game, counter) {
        this.element = element;
        this.game = game
        this.counter = counter
        this.onGoblinClick = this.onGoblinClick.bind(this)
        this.element.addEventListener('click', this.onGoblinClick)
    }
    onGoblinClick(e) {
        if (e.target.className == 'goblin') {
            this.game.moveGoblin()
            this.counter.hit()
            this.counter.clearTime()
            this.counter.timeSet()
        }
    }
}