import React, { useState } from 'react';

type MenuProps = {
  onStart: (user: string, balance: number, isDemo: boolean) => void;
  bet: number;
  setBet: React.Dispatch<React.SetStateAction<number>>;
  balance: number;
  onSettings: () => void;
};

const Menu: React.FC<MenuProps> = ({ onStart, bet, setBet, balance, onSettings }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [user, setUser] = useState('');
  const [demoBalance, setDemoBalance] = useState(balance);
  const [isDemo, setIsDemo] = useState(true);

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  const handleStartGame = () => {
    onStart(user, demoBalance, isDemo);
  };

  return (
    <div className="centered-container" style={{ width: '300px', padding: '20px', backgroundColor: '#333', color: 'white', borderRadius: '10px' }}>
      <h1>Гра Блекджек</h1>
      <input
        type="text"
        placeholder="Ім'я користувача"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '5px', border: 'none' }}
      />
      <div style={{ marginBottom: '10px', width: '100%' }}>
        <label>Баланс</label>
        <input
          type="number"
          value={demoBalance}
          onChange={(e) => setDemoBalance(parseInt(e.target.value))}
          style={{ padding: '10px', width: '100%', borderRadius: '5px', border: 'none', backgroundColor: '#444', color: 'white' }}
        />
      </div>
      <div style={{ marginBottom: '10px', width: '100%' }}>
        <label>Демо баланс</label>
        <input
          type="checkbox"
          checked={isDemo}
          onChange={(e) => setIsDemo(e.target.checked)}
          style={{ marginLeft: '10px' }}
        />
      </div>
      <div style={{ marginBottom: '10px', width: '100%' }}>
        <label>Ставка</label>
        <input
          type="number"
          value={bet}
          onChange={(e) => setBet(parseInt(e.target.value))}
          style={{ padding: '10px', width: '100%', borderRadius: '5px', border: 'none', backgroundColor: '#444', color: 'white' }}
        />
      </div>
      <button onClick={handleStartGame} style={{ padding: '10px 20px', marginBottom: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>ПОЧАТИ ГРУ</button>
      <button onClick={onSettings} style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>НАЛАШТУВАННЯ</button>
    </div>
  );
};

export default Menu;
