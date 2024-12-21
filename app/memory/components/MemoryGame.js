'use client';

import { useState, useEffect } from 'react';

const cardsData = [
  { id: 1, image: "/images/memoryGame/card1.png" },
  { id: 2, image: "/images/memoryGame/card2.png" },
  { id: 3, image: "/images/memoryGame/card3.png" },
  { id: 4, image: "/images/memoryGame/card4.png" },
  { id: 5, image: "/images/memoryGame/card5.png" },
  { id: 6, image: "/images/memoryGame/card6.png" },
];

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    const shuffledCards = [...cardsData, ...cardsData].sort(() => 0.5 - Math.random());
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (index) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index) && !matchedCards.includes(index)) {
      setFlippedCards((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (cards[first].image === cards[second].image) {
        setMatchedCards((prev) => [...prev, first, second]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
      setMoves((prev) => prev + 1);
    }
  }, [flippedCards, cards]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-xl mx-auto">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => handleCardClick(index)}
          className={`w-20 h-28 sm:w-24 sm:h-32 md:w-28 md:h-36 rounded-lg cursor-pointer shadow-md flex items-center justify-center bg-gray-200 dark:bg-gray-700 ${
            flippedCards.includes(index) || matchedCards.includes(index) ? "bg-blue-500" : ""
          }`}
        >
          {(flippedCards.includes(index) || matchedCards.includes(index)) && (
            <img src={card.image} alt="card" className="w-full h-full object-cover rounded-lg" />
          )}
        </div>
      ))}
      <div className="col-span-2 sm:col-span-3 md:col-span-4 text-center mt-6">
        <p className="text-gray-600 dark:text-gray-300">Moves: {moves}</p>
        {matchedCards.length === cards.length && (
          <p className="text-green-600 dark:text-green-400 text-lg font-bold mt-4">Congratulations! You've matched all the cards!</p>
        )}
      </div>
    </div>
  );
}