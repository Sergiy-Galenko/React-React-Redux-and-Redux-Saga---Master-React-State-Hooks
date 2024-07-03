import React, { useState } from 'react';

type StoreProps = {
  onClose: () => void;
};

const Store: React.FC<StoreProps> = ({ onClose }) => {
  const [balance, setBalance] = useState(1000);
  const [buttonColor, setButtonColor] = useState('blue');

  const handlePurchase = (cost: number, color: string) => {
    if (balance >= cost) {
      setBalance(balance - cost);
      setButtonColor(color);
      alert('Purchase successful!');
    } else {
      alert('Not enough balance!');
    }
  };

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', border: '1px solid black' }}>
      <h2>Магазин</h2>
      <p>Баланс: {balance}</p>
      <button onClick={() => handlePurchase(100, 'red')} style={{ backgroundColor: 'red', color: 'white' }}>Red Button - 100</button>
      <button onClick={() => handlePurchase(200, 'green')} style={{ backgroundColor: 'green', color: 'white', marginLeft: '10px' }}>Green Button - 200</button>
      <button onClick={() => handlePurchase(300, 'purple')} style={{ backgroundColor: 'purple', color: 'white', marginLeft: '10px' }}>Purple Button - 300</button>
      <button onClick={onClose} style={{ display: 'block', marginTop: '20px' }}>Close</button>
    </div>
  );
};

export default Store;
