import React, { useState } from 'react';

type MenuProps = {
  onStart: () => void;
  bet: number;
  setBet: (bet: number) => void;
  balance: number;
  onSettings: () => void;
};

const Menu: React.FC<MenuProps> = ({ onStart, bet, setBet, balance, onSettings }) => {
  const [showRules, setShowRules] = useState(false);

  const handleShowRules = () => {
    setShowRules(true);
  };

  const handleCloseRules = () => {
    setShowRules(false);
  };

  return (
    <div className="menu">
      <h1>Гра Блекджек</h1>
      <div>
        <label>
          Ставка:
          <input
            type="number"
            value={bet}
            onChange={(e) => setBet(parseInt(e.target.value))}
            min="1"
            max={balance}
          />
        </label>
      </div>
      <button onClick={onStart}>Почати гру</button>
      <button onClick={handleShowRules}>Правила гри</button>
      <button onClick={onSettings}>Налаштування</button>

      {showRules && (
        <>
          <div className="modal-overlay" onClick={handleCloseRules}></div>
          <div className="modal">
            <h2>Правила гри в Блекджек</h2>
            <p>Блекджек - це карткова гра, метою якої є набрати 21 очко або максимально наблизитися до цього числа, не перевищуючи його.</p>
            <ul>
              <li>Карти від 2 до 10 мають номінальну вартість.</li>
              <li>Валет, дама та король варті 10 очок.</li>
              <li>Туз може бути вартим 1 або 11 очок, в залежності від того, що вигідніше для гравця.</li>
              <li>Гра починається з того, що гравець та дилер отримують по дві карти.</li>
              <li>Гравець може брати додаткові карти, щоб збільшити свою суму очок (натисканням кнопки "Взяти карту").</li>
              <li>Гравець може зупинитися, якщо вважає, що сума його очок достатня (натисканням кнопки "Зупинитися").</li>
              <li>Якщо сума очок гравця перевищує 21, він програє.</li>
              <li>Після того, як гравець зупинився, дилер бере додаткові карти до тих пір, поки його сума очок не стане 17 або більше.</li>
              <li>Перемагає той, у кого сума очок ближче до 21, але не перевищує його.</li>
            </ul>
            <button onClick={handleCloseRules}>Закрити</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
