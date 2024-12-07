import "./App.css";
import Header from "../Header/Header.jsx";
import Card from "../Card/Card.jsx";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([
    { color: "red", clicks: 0 },
    { color: "orange", clicks: 0 },
    { color: "yellow", clicks: 0 },
    { color: "green", clicks: 0 },
    { color: "blue", clicks: 0 },
    { color: "pink", clicks: 0 },
    { color: "purple", clicks: 0 },
    { color: "black", clicks: 0 },
    { color: "brown", clicks: 0 },
    { color: "white", clicks: 0 },
  ]);
  const [score, setScore] = useState(0);

  function shuffleCards(cards) {
    const copy = cards.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    return copy;
  }

  function resetClicks(cards) {
    return cards.map((card) => {
      return { ...card, clicks: 0 };
    });
  }

  function incrementClicks(cards, color) {
    return cards.map((card) => {
      return card.color == color
        ? { color: card.color, clicks: card.clicks + 1 }
        : card;
    });
  }

  function resetGame() {
    setCards(resetClicks(shuffleCards(cards)));
    setScore(0);
  }

  function handleCardClick(color, clicks) {
    if (clicks == 0) {
      setCards(shuffleCards(incrementClicks(cards, color)));
      setScore(score + 1);
    } else {
      resetGame();
    }
  }

  return (
    <div className="app">
      <Header handleClick={resetGame} score={score} />
      <div className="card-container">
        {cards.map((card) => (
          <Card
            key={card.color}
            color={card.color}
            clicks={card.clicks}
            handleClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
