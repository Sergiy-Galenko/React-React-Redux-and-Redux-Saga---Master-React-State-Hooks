import React from 'react';
import Deck from './Deck';
import { Box } from '@mui/material';

type Card = {
  suit: string;
  rank: string;
};

interface DealerProps {
  hand: Card[];
  score: number;
}

const Dealer: React.FC<DealerProps> = ({ hand, score }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Рука дилера</h2>
      <Deck cards={hand.map((card, index) => (index === 0 ? card : { suit: 'hidden', rank: 'hidden' }))} />
      <p>Рахунок: {score}</p>
    </Box>
  );
};

export default Dealer;
