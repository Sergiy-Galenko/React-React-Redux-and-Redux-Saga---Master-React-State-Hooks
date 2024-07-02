import React from 'react';
import { Button, Box } from '@mui/material';

interface ResultProps {
  result: 'win' | 'lose' | 'draw' | '';
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ result, onRestart }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Результат гри: {result === 'win' ? 'Ви виграли!' : result === 'lose' ? 'Ви програли' : 'Нічия'}</h2>
      <Button onClick={onRestart} variant="contained">Почати спочатку</Button>
    </Box>
  );
};

export default Result;
