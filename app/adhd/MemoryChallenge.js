"use client";

import { useState } from 'react';

const cards = [
  { id: 1, content: 'A' },
  { id: 2, content: 'B' },
  { id: 3, content: 'C' },
  { id: 4, content: 'D' },
  { id: 5, content: 'A' },
  { id: 6, content: 'B' },
  { id: 7, content: 'C' },
  { id: 8, content: 'D' },
];

export default function MemoryChallenge() {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  const handleCardClick = (card) => {
    if (flippedCards.length === 2) {
      setFlippedCards([]);
    }
    setFlippedCards([...flippedCards, card]);
    setMoves(moves + 1);

    if (flippedCards.length === 1 && flippedCards[0].content === card.content) {
      setMatchedCards([...matchedCards, flippedCards[0], card]);
    }
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Memory Challenge</h2>
      <p className="mb-4">Match the pairs of cards with the fewest moves possible.</p>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card)}
            className={`memory-card ${
              flippedCards.includes(card) || matchedCards.includes(card)
                ? 'bg-[var(--highlight)] text-white'
                : 'bg-[var(--card-bg)] text-[var(--card-text)]'
            }`}
          >
            {flippedCards.includes(card) || matchedCards.includes(card)
              ? card.content
              : '?'}
          </div>
        ))}
      </div>
      <p className="mt-4 text-lg">Moves: <span className="font-bold">{moves}</span></p>
      {matchedCards.length === cards.length && <p className="mt-2 text-green-500 font-bold">Congratulations! You matched all the cards.</p>}
    </div>
  );
}