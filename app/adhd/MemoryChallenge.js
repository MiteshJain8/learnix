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

  const handleCardClick = (card) => {
    if (flippedCards.length === 2) {
      setFlippedCards([]);
    }
    setFlippedCards([...flippedCards, card]);

    if (flippedCards.length === 1 && flippedCards[0].content === card.content) {
      setMatchedCards([...matchedCards, flippedCards[0], card]);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Memory Challenge</h2>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card)}
            className={`p-4 border rounded-lg cursor-pointer ${
              flippedCards.includes(card) || matchedCards.includes(card)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200'
            }`}
          >
            {flippedCards.includes(card) || matchedCards.includes(card)
              ? card.content
              : '?'}
          </div>
        ))}
      </div>
    </div>
  );
}