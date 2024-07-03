import React, { useState, useEffect } from 'react';
import Deck from './Deck';
import Result from './Result';
import { Card, createDeck, shuffleDeck, calculateScore, dealCard } from '../utils/cardUtils';

type GameProps = {
  user: string;
  balance: number;
  setBalance: (balance: number) => void;
  isDemo: boolean;
  bet: number;
  setBet: (bet: number) => void;
};

const Game: React.FC<GameProps> = ({ user, balance, setBalance, isDemo, bet, setBet }) => {
  const [deck, setDeck] = useState<Card[]>([]);
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [dealerHand, setDealerHand] = useState<Card[]>([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [gameState, setGameState] = useState<'playing' | 'result'>('playing');
  const [result, setResult] = useState<'win' | 'lose' | 'draw' | ''>('');
  const [wins, setWins] = useState(0);
  const [buttonColor, setButtonColor] = useState('blue');

  useEffect(() => {
    setDeck(shuffleDeck(createDeck()));
  }, []);

  const handleDeal = () => {
    if (balance < bet) {
      alert('Недостатньо коштів для цієї ставки!');
      return;
    }
    setBalance(balance - bet);

    setDeck(shuffleDeck(createDeck()));

    let newPlayerHand: Card[] = [];
    let newDealerHand: Card[] = [];

    newPlayerHand = dealCard(newPlayerHand, setPlayerHand, deck, setDeck);
    newDealerHand = dealCard(newDealerHand, setDealerHand, deck, setDeck);
    newPlayerHand = dealCard(newPlayerHand, setPlayerHand, deck, setDeck);
    newDealerHand = dealCard(newDealerHand, setDealerHand, deck, setDeck);

    setPlayerHand(newPlayerHand);
    setDealerHand(newDealerHand);

    setPlayerScore(calculateScore(newPlayerHand));
    setDealerScore(calculateScore(newDealerHand));

    setGameState('playing');
  };

  const handleHit = () => {
    const newPlayerHand = dealCard(playerHand, setPlayerHand, deck, setDeck);
    const newPlayerScore = calculateScore(newPlayerHand);
    setPlayerScore(newPlayerScore);

    if (newPlayerScore > 21) {
      setResult('lose');
      setGameState('result');
    }
  };

  const handleStand = () => {
    let newDealerHand = [...dealerHand];
    let newDealerScore = calculateScore(newDealerHand);

    while (newDealerScore < 17) {
      newDealerHand = dealCard(newDealerHand, setDealerHand, deck, setDeck);
      newDealerScore = calculateScore(newDealerHand);
    }

    setDealerHand(newDealerHand);
    setDealerScore(newDealerScore);

    if (newDealerScore > 21 || playerScore > newDealerScore) {
      setResult('win');
      setBalance(balance + bet * 2);
      setWins(wins + 1);
    } else if (playerScore < newDealerScore) {
      setResult('lose');
    } else {
      setResult('draw');
      setBalance(balance + bet);
    }

    setGameState('result');
  };

  const handleRestart = () => {
    setDeck(shuffleDeck(createDeck()));
    setPlayerHand([]);
    setDealerHand([]);
    setPlayerScore(0);
    setDealerScore(0);
    setResult('');
    setGameState('playing');
  };

  return (
    <div>
      {gameState === 'playing' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>Гра Блекджек</h1>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Я</h2>
            <Deck cards={playerHand} />
            <p>Рахунок: {playerScore}</p>
            <button onClick={handleHit} style={{ backgroundColor: buttonColor, color: 'white' }}>Взяти карту</button>
            <button onClick={handleStand} style={{ backgroundColor: buttonColor, color: 'white', marginLeft: '10px' }}>Зупинитися</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Рука дилера</h2>
            <Deck cards={dealerHand.map((card, index) => (index === 0 ? card : { suit: 'hidden', rank: 'hidden' }))} />
            <p>Рахунок: {dealerScore}</p>
          </div>
          <p>Баланс: ${balance}</p>
        </div>
      )}
      {gameState === 'result' && <Result result={result} onRestart={handleRestart} />}
    </div>
  );
};

export default Game;
