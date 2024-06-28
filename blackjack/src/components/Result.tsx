import React from 'react';

type ResultProps = {
  result: 'win' | 'lose' | 'draw' | '';
  onRestart: () => void;
};

const Result: React.FC<ResultProps> = ({ result, onRestart }) => {
  return (
    <div className="result">
      <h1>{result === 'win' ? 'Ви виграли!' : result === 'lose' ? 'Ви програли!' : 'Нічия!'}</h1>
      <p>{result === 'win' ? 'Вітаємо! Ви отримали додаткові кошти.' : result === 'lose' ? 'На жаль, ви програли свою ставку.' : 'Ставка повернена.'}</p>
      <button onClick={onRestart}>Перезапустити гру</button>
    </div>
  );
};

export default Result;
