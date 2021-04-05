import CardList from "./CardList";
import '../styles/hand.scss';

const Hand = ({ hand }) => {
    return (
        <div className="hand">
            <h3>Your Hand</h3>
            <p className={`${hand.length ? 'hidden' : 'visible' }`}>Your hand is empty, draw a card!</p>
            <CardList cards={hand} />
        </div>
    )
}

export default Hand;
