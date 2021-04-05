import CardList from "./CardList";
import '../styles/deck.scss';

const Deck = ({ deck, flipped }) => {
    return (
        <div className="deck">
            <h3>The Deck</h3>
            <CardList cards={deck} flipped={flipped} />
        </div>
    )
}

export default Deck;
