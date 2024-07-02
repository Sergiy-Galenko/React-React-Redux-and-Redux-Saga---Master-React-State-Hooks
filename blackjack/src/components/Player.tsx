import React from 'react';
import Deck from './Deck';
import { Button, Box } from '@mui/material';

type Card = {
  suit: string;
  rank: string;
};

interface PlayerProps {
  hand: Card[];
  score: number;
  onHit: () => void;
  onStand: () => void;
}

const Player: React.FC<PlayerProps> = ({ hand, score, onHit, onStand }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Я</h2>
      <Deck cards={hand} />
      <p>Рахунок: {score}</p>
      <Button onClick={onHit} variant="contained" sx={{ mb: 2 }}>Взяти карту</Button>
      <Button onClick={onStand} variant="contained">Зупинитися</Button>
    </Box>
  );
};

export default Player;
