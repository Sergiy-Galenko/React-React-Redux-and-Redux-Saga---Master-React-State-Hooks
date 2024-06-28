import React from 'react';

type CardProps = {
  suit: string;
  rank: string;
};

const Card: React.FC<CardProps> = ({ suit, rank }) => {
  const cardName = suit === 'hidden' ? 'hidden.png' : `${suit.charAt(0)}${rank}.png`;
  const cardPath = `/cards/${cardName}`;

  return (
    <div className="card">
      <img src={cardPath} alt={`${rank} of ${suit}`} />
    </div>
  );
};

export default Card;
