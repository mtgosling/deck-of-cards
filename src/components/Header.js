import '../styles/header.scss';

const Header = ({ title, author, reset, flipCards, flippedText }) => {
    return (
        <div className="header">
            <h1 className="header-title">{ title || "Deck of Cards" }</h1>
            <h3 className="header-author">Author: { author || "Martyn Taylor Gosling" }</h3>
            <div className="controls">
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
        </div>
    )
}

export default Header;
