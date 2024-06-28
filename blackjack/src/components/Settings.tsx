import React, { useState } from 'react';
import QRCode from 'qrcode.react';

type SettingsProps = {
  onClose: () => void;
  onAddTokens: (amount: number) => void;
};

const Settings: React.FC<SettingsProps> = ({ onClose, onAddTokens }) => {
  const [tokens, setTokens] = useState(0);
  const [rate] = useState(7.6); // Курс токена, наприклад, 1 токен = 0.01$
  const walletAddress = "UQDH2tHVgYfe5VlVgNrvk3Ukd3zfIDbRUkq5QvY2TFxUACxa"; // Ваш гаманець

  const handleAddTokens = () => {
    const amount = tokens * rate;
    onAddTokens(amount);
    setTokens(0);
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal settings">
        <h2>Налаштування</h2>
        <div>
          <label>
            Поповнити рахунок в токенах:
            <input
              type="number"
              value={tokens}
              onChange={(e) => setTokens(parseInt(e.target.value))}
              min="1"
            />
          </label>
          <button onClick={handleAddTokens}>Поповнити</button>
        </div>
        <p>Курс токена: {rate}$</p>
        <div>
          <h3>Мій гаманець</h3>
          <QRCode value={`https://www.somecryptoexchange.com?address=${walletAddress}`} />
        </div>
        <button onClick={onClose}>Закрити</button>
      </div>
    </>
  );
};

export default Settings;