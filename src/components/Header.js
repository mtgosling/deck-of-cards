import '../styles/header.scss';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from "react-bootstrap/Button";

const Header = ({ title, author, reset, flipCards, flippedText }) => {
    return (
        <div className="header">
            <Jumbotron>
                <h1>Deck of Cards</h1>
                <p>
                    This app allows you to shuffle a deck of cards and deal them into a hand
                </p>
                <p className="header-author">
                    Martyn Taylor Gosling
                </p>
            </Jumbotron>
            <div className="controls container">
                <Button
                    onClick={reset}
                    variant={"outline-secondary"}
                >
                    Reset the Deck
                </Button>
                <Button
                    onClick={flipCards}
                    variant={"outline-secondary"}
                >
                    {flippedText}
                </Button>
            </div>
        </div>
    )
}

export default Header;
