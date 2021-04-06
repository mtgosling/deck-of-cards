import '../styles/card.scss';

const Card = ({ card, flipped }) => {
    const imgPath = flipped ? 'cards/back.png' : `cards/${ card.value }_of_${ card.suit }.png`;
    // This uses stock playing card images made available by google, you can find them in public/cards

    return (
        <div className="card-wrapper">
            <div className="card">
                <div className="card-inner">
                    <img src={imgPath} alt={`${ card.value } of ${ card.suit }`} />
                </div>
            </div>
        </div>
    )
}

export default Card;
