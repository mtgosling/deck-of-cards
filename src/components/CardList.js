import Card from "./Card";
import '../styles/card-list.scss';

const CardList = ({ cards, flipped }) => {
    return (
        <div className="card-list">
            <div className="cards">
                {cards.map((card) => (
                    <Card key={card.id} card={card} flipped={flipped} />
                ))}
            </div>
        </div>
    )
}

export default CardList;
