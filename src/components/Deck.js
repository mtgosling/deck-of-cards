import CardList from "./CardList";
import '../styles/deck.scss';

const Deck = ({ deck, flipped, shuffleDeck }) => {
    return (
        <div className="deck">
            <div className="deck-header">
                <h3 className="header-title">The Deck</h3>
                <div className="header-info">
                    <span>Cards in deck: {deck.length}</span>
                </div>
                <div className="header-controls">
                    <button
                        disabled={deck.length < 52} // disables the shuffle feature when the deck is not complete
                        className={`btn btn-primary ${deck.length < 52 ? 'disabled': ''}`}
                        onClick={shuffleDeck}
                    >
                        Shuffle the deck
                    </button>
                </div>
            </div>

            <CardList cards={deck} flipped={flipped} />
        </div>
    )
}

export default Deck;
