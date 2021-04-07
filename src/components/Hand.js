import CardList from "./CardList";
import '../styles/hand.scss';
import Alert from 'react-bootstrap/Alert';

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

            <Alert variant={'warning'} className={`hand-alert ${hand.length ? 'hidden' : 'visible' }`}>
                Your hand is empty, draw a card!
            </Alert>
            <span className={`${!hand.length ? 'hidden' : 'visible' }`}>
                <CardList cards={hand} />
            </span>
        </div>
    )
}

export default Hand;
