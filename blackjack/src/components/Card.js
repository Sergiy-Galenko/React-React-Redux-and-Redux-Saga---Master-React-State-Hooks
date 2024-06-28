import React from 'react';

const Card = ({ suit, rank }) => {
  const cardName = suit === 'hidden' ? 'hidden.png' : `${suit.charAt(0)}${rank}.png`;
  const cardPath = `/cards/${cardName}`;

  return (
    <div className="card">
      <img src={cardPath} alt={`${rank} of ${suit}`} />
    </div>
  );
};

export default Card;
