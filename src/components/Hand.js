import CardList from "./CardList";
import '../styles/hand.scss';

const Hand = ({ hand, dealCard }) => {
    return (
        <div className="hand">
            <div className="hand-header">
                <h3 className="header-title">Your Hand</h3>
                <div className="header-info">
                    <span>Cards in hand: {hand.length}</span>
                </div>
                <div className="header-controls">
                    <button
                        disabled={hand.length >= 52} // disables the shuffle feature when the deck is not complete
                        className={`btn btn-primary ${hand.length >= 52 ? 'disabled': ''}`}
                        onClick={dealCard}
                    >
                        Draw a card
                    </button>
                </div>
            </div>

            <p className={`${hand.length ? 'hidden' : 'visible' }`}>Your hand is empty, draw a card!</p>
            <span className={`${!hand.length ? 'hidden' : 'visible' }`}>
                <CardList cards={hand} />
            </span>
        </div>
    )
}

export default Hand;
