import React from 'react';
import Card from './Card';

type DeckProps = {
  cards: { suit: string; rank: string }[];
};

const Deck: React.FC<DeckProps> = ({ cards }) => {
  return (
    <div className="deck">
      {cards.map((card, index) => (
        <Card key={index} suit={card.suit} rank={card.rank} />
      ))}
    </div>
  );
};

export default Deck;
