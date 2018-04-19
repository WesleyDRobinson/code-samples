'use strict'
/*
* Completed 16 April 2018 in ~40 min live challenge for Samsara
* refactor and tests ~30 min afterwards
*
* We will be implementing a modified version of the real card game Set.
* Our version of Set involves a deck of 27 cards. Each Set card has a
* shape, shading and count. Possible values for each attribute are:
*
* shapes = ["oval", "squiggle", "diamond"]
* shadings = ["solid", "striped", "open"]
* counts = [1, 2, 3]
*
* 1. Create a SetCard class that models a Set card.
*   - must include a means of printing a SetCard as a string
*
* 2. Create a SetGame class.
*   - On initialization, generate a deck of Set cards that is stored within the class instance.
*   The order of the deck does not matter, as long as all 27 unique cards are present.
*
* 3. Edit SetGame to track the cards that are currently on the table using an instance variable "table"
*    and write a function deal(num_cards) in SetGame that deals num_cards random cards onto the table from the deck.
*
*/

const _ = require('lodash')

/*
* class SetCard
*
*   const setCard = new SetCard(shape, shading, count)
*/

class SetCard {
    constructor(...args) {
        this.shape = args[0]
        this.shading = args[1]
        this.count = args[2]
    }

    toString() {
        return JSON.stringify(this)
    }
}

/*
* class SetGame
*   const game = new SetGame()
*
*/


class SetGame {
    constructor() {
        this.shapes = ["oval", "squiggle", "diamond"]
        this.shadings = ["solid", "striped", "open"]
        this.counts = [1, 2, 3]
        this.deck = []
        this.table = []

        this.initializeGame()
    }

    initializeGame() {

        let deck = []
        this.shapes.forEach((shape) => {
            this.shadings.forEach((shading) => {
                this.counts.forEach((count) => {
                    let card = new SetCard(shape, shading, count)
                    deck.push(card)
                })
            })
        })

        // randomize deck order -- https://lodash.com/docs/4.17.5#shuffle
        this.deck = _.shuffle(deck)
    }

    dealCard(n) {
        // this.deck.pop() selects random card and removes it from deck
        while (n > 0) {
            this.table.push(this.deck.pop())
            n--
        }
    }
}

module.exports = {
    SetCard,
    SetGame
}
