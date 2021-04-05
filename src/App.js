import './App.scss';
import Deck from "./components/Deck";
import Hand from "./components/Hand";
import { useState, useEffect } from 'react';

function App() {
    const [deck, setDeck] = useState([]);
    const [hand, setHand] = useState([]);
    const [flipped, setFlipped] = useState(true);
    const [flippedText, setFlippedText] = useState('Reveal Deck')
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace']

    /**
     * Generate the initial ordered deck
     * Aces high.
     */
    const generateDeck = () => {
        let generatedDeck = [];
        let count = 1;

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                const card = {
                    id: count,
                    suit: suits[i],
                    value: values[j],
                }

                generatedDeck.push(card);
                count++;
            }
        }

        setDeck(generatedDeck);
    }

    /**
     * Shuffles the deck of cards.
     *
     * NB. This may not be the most efficient method of shuffling cards, it can be improved upon in the future.
     */
    const shuffleDeck = () => {
        let shuffledDeck = [];
        let originalDeck = deck;

        for (let i = originalDeck.length; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            shuffledDeck.push(originalDeck[j]);
            originalDeck.splice(j, 1);
        }

        setDeck(shuffledDeck);
    }

    /**
     * Deals a card from the deck.
     *
     * It also removes the dealt card from the deck.
     */
    const dealCard = () => {
        const topCard = deck[0];
        let tempDeck = deck;
        let tempHand = hand;

        tempHand.push(topCard);

        const removeIndex = tempDeck.map((card) => { return card.id; }).indexOf(topCard.id);
        tempDeck.splice(removeIndex, 1);

        setDeck([...tempDeck]);
        setHand([...tempHand]);
    }

    /**
     * Flip the deck over, revealing/hiding the cards.
     *
     * The deck starts ordered and hidden.
     */
    const flipCards = () => {
        const text = flipped ? 'Hide Deck' : 'Reveal Deck';

        setFlippedText(text);
        setFlipped(!flipped);
    }

    /**
     * Reset the app to its initial state.
     */
    const reset = () => {
        setDeck([]);
        setHand([]);
        setFlipped(true);
        setFlippedText('Reveal Deck');
        generateDeck();
    }

    useEffect(() => {
        if (deck.length === 0 && hand.length === 0) {
            generateDeck();
        }
    });

    return (
        <div className="App">
            <h1>Deck of Cards</h1>
            <h3>Martyn Taylor Gosling</h3>
            <div className="controls">
                <button
                    onClick={shuffleDeck}
                    disabled={deck.length < 52} // disables the shuffle feature when the deck is not complete
                    className={`btn ${deck.length < 52 ? 'disabled': ''}`}
                >
                    Shuffle the Deck
                </button>
                <button
                    onClick={dealCard}
                    disabled={!deck.length} // disables Deal a Card when the deck is empty
                    className={`btn ${!deck.length ? 'disabled': ''}`}
                >
                    Deal a Card
                </button>
                <button
                    onClick={reset}
                    className="btn"
                >
                    Reset the Deck
                </button>
                <button
                    onClick={flipCards}
                    className="btn"
                >
                    {flippedText}
                </button>
            </div>
            <Hand hand={hand} />
            <Deck deck={deck} flipped={flipped} />
        </div>
    );
}

export default App;
