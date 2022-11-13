class WarCardGame{
    constructor(){
        this.player1;
        this.player2;
        this.cardDeck;
    }
    
    startGame(){
        this.player1 = new Player("Casey");
        this.player2 = new Player("Stephanie");
        this.cardDeck = new Deck();

        for(let i = 0; i < 26; i++){
            this.player1.addCard(this.cardDeck.dealCard());
            this.player2.addCard(this.cardDeck.dealCard());
        }

        let p1Card;
        let p2Card;
        let round = 1;

        while(this.player1.cards.length != 0 && this.player2.cards.length != 0){
            p1Card = this.player1.playCard();
            p2Card = this.player2.playCard();

            console.log(`Round ${round++}`);
            console.log(`Player 1 plays: ${p1Card.cardName}`);
            console.log(`Player 2 plays: ${p2Card.cardName}`);
            console.log(`--------------------------`)

            if (p1Card.value > p2Card.value){
                this.player1.score += 1;
                console.log("Player 1 Wins This Round!");
            }else if (p1Card.value < p2Card.value){
                this.player2.score += 1;
                console.log("Player 2 Wins This Round!");
            }else{
                console.log("It's A Draw!");
            }

            console.log('\n');
        }

        console.log(`Player 1 Score: ${this.player1.score}`);
        console.log(`Player 2 Score: ${this.player2.score}`);

        if(this.player1.score > this.player2.score){
            console.log("Player 1 Wins The Game");
        }else if(this.player1.score < this.player2.score){
            console.log("Player 2 Wins The Game");
        }else{
            console.log("Player 1 and Player 2 Draws");
        }
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
        this.cards = [];
    }

    addCard(cardToAdd){
        if(cardToAdd instanceof Card){
            this.cards.push(cardToAdd)
        }else{
            throw new Error("This object is not a card object");
        }  
    }

    playCard(){
        return this.cards.pop();
    }    
}

class Deck{
    constructor(){
        this.cards = [];

        let cardsequence = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

        for(let i = 0; i < 13; ++i){
            this.cards.push(new Card(cardsequence[i] + "S"));
            this.cards.push(new Card(cardsequence[i] + "C"));
            this.cards.push(new Card(cardsequence[i] + "H"));
            this.cards.push(new Card(cardsequence[i] + "D"));
        }
    }

    dealCard(){
        let randomindex = Math.floor(Math.random() * ((this.cards.length - 1) - 0 + 1)) + 0;

        let card = this.cards[randomindex];
        this.cards.splice(randomindex, 1);
        return card;
    }
}

class Card{
    constructor(cardName){
        this.cardName = cardName;
        this.value;

        switch(this.cardName.substring(0, this.cardName.length - 1))
        {
            case '2': this.value = 2; break;
            case '3': this.value = 3; break;
            case '4': this.value = 4; break;
            case '5': this.value = 5; break;
            case '6': this.value = 6; break;
            case '7': this.value = 7; break;
            case '8': this.value = 8; break;
            case '9': this.value = 9; break;
            case '10': this.value = 10; break;
            case 'J': this.value = 11; break;
            case 'Q': this.value = 12; break;
            case 'K': this.value = 13; break;
            case 'A': this.value = 14; break;
            default: this.value = 0;
        }
    }
}

let game = new WarCardGame();
game.startGame();