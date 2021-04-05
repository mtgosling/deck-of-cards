import Card from "./Card";
import '../styles/card-list.scss';

const CardList = ({ cards, flipped }) => {
    return (
        <div className="cards">
            {cards.map((card) => (
                <Card key={card.id} card={card} flipped={flipped} />
            ))}
        </div>
    )
}

export default CardList;
