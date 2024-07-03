import React, { useState } from 'react';
import Menu from './components/Menu';
import Game from './components/Game';

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [user, setUser] = useState('');
  const [balance, setBalance] = useState(1000);
  const [isDemo, setIsDemo] = useState(true);
  const [bet, setBet] = useState(100);

  const handleStartGame = (username: string, userBalance: number, demoMode: boolean) => {
    setUser(username);
    setBalance(userBalance);
    setIsDemo(demoMode);
    setGameStarted(true);
  };

  return (
    <div>
      {!gameStarted ? (
        <Menu
          onStart={handleStartGame}
          bet={bet}
          setBet={setBet}
          balance={balance}
          setBalance={setBalance}
          onSettings={() => {}}
        />
      ) : (
        <Game
          user={user}
          balance={balance}
          setBalance={setBalance}
          isDemo={isDemo}
          bet={bet}
          setBet={setBet}
        />
      )}
    </div>
  );
};

export default App;
