import React, { useState } from 'react';
import Game from './components/Game';
import Menu from './components/Menu';

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [user, setUser] = useState('');
  const [balance, setBalance] = useState(1000);
  const [isDemo, setIsDemo] = useState(true);
  const [bet, setBet] = useState(100);

  const handleStartGame = (user: string, balance: number, isDemo: boolean) => {
    setUser(user);
    setBalance(balance);
    setIsDemo(isDemo);
    setGameStarted(true);
  };

  return (
    <div className="centered-container">
      {!gameStarted ? (
        <Menu onStart={handleStartGame} bet={bet} setBet={setBet} balance={balance} onSettings={() => {}} />
      ) : (
        <Game user={user} balance={balance} isDemo={isDemo} bet={bet} setBet={setBet} />
      )}
    </div>
  );
};

export default App;
