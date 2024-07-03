import React, { useState } from 'react';
import Settings from './Settings';
import Store from './Store';

type MenuProps = {
  onStart: (user: string, balance: number, isDemo: boolean) => void;
  bet: number;
  setBet: (bet: number) => void;
  balance: number;
  setBalance: (balance: number) => void;
  onSettings: () => void;
};

const Menu: React.FC<MenuProps> = ({ onStart, bet, setBet, balance, setBalance, onSettings }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [user, setUser] = useState('');
  const [isDemo, setIsDemo] = useState(true);

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  const handleOpenStore = () => {
    setIsStoreOpen(true);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  const handleCloseStore = () => {
    setIsStoreOpen(false);
  };

  const handleStartGame = () => {
    onStart(user, balance, isDemo);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <input
        type="text"
        placeholder="Ім'я користувача"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <div style={{ marginBottom: '20px' }}>
        <label>
          Баланс
          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(parseInt(e.target.value))}
            min={1}
            max={1000}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label>
          Демо баланс
          <input
            type="checkbox"
            checked={isDemo}
            onChange={() => setIsDemo(!isDemo)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <button onClick={handleStartGame} style={{ marginRight: '10px' }}>ПОЧАТИ ГРУ</button>
      <button onClick={handleOpenSettings} style={{ marginRight: '10px' }}>НАЛАШТУВАННЯ</button>
      <button onClick={handleOpenStore}>МАГАЗИН</button>
      {isSettingsOpen && <Settings onClose={handleCloseSettings} onAddTokens={(amount) => setBalance(balance + amount)} />}
      {isStoreOpen && <Store onClose={handleCloseStore} />}
    </div>
  );
};

export default Menu;
