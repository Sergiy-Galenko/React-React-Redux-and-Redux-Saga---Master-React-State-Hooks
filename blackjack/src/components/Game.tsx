import React, { useState, useEffect } from 'react';
import Deck from './Deck';
import Result from './Result';
import Settings from './Settings';

type Card = {
  suit: string;
  rank: string;
};

type GameProps = {
  user: string;
  balance: number;
  isDemo: boolean;
  bet: number;
  setBet: React.Dispatch<React.SetStateAction<number>>;
};

const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '1'];

const createDeck = (): Card[] => {
  const deck: Card[] = [];
  suits.forEach(suit => {
    ranks.forEach(rank => {
      deck.push({ suit, rank });
    });
  });
  return deck;
};

const shuffleDeck = (deck: Card[]): Card[] => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

const getCardValue = (card: Card): number => {
  if (['11', '12', '13'].includes(card.rank)) {
    return 10;
  }
  if (card.rank === '1') {
    return 11;
  }
  return parseInt(card.rank);
};

const calculateScore = (hand: Card[]): number => {
  let score = hand.reduce((total, card) => total + getCardValue(card), 0);
  let aces = hand.filter(card => card.rank === '1').length;
  while (score > 21 && aces > 0) {
    score -= 10;
    aces -= 1;
  }
  return score;
};

const Game: React.FC<GameProps> = ({ user, balance, isDemo, bet, setBet }) => {
  const [deck, setDeck] = useState<Card[]>([]);
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [dealerHand, setDealerHand] = useState<Card[]>([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [gameState, setGameState] = useState<'playing' | 'result'>('playing');
  const [result, setResult] = useState<'win' | 'lose' | 'draw' | ''>('');
  const [currentBalance, setCurrentBalance] = useState(balance);
  const [wins, setWins] = useState(0);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    setDeck(shuffleDeck(createDeck()));
  }, []);

  const dealCard = (hand: Card[], setHand: React.Dispatch<React.SetStateAction<Card[]>>): Card[] => {
    const newDeck = [...deck];
    const card = newDeck.pop() as Card;
    const newHand = [...hand, card];
    setHand(newHand);
    setDeck(newDeck);
    return newHand;
  };

  const handleDeal = () => {
    if (currentBalance < bet) {
      alert('Недостатньо коштів для цієї ставки!');
      return;
    }
    setCurrentBalance(currentBalance - bet);

    setDeck(shuffleDeck(createDeck()));

    let newPlayerHand: Card[] = [];
    let newDealerHand: Card[] = [];

    newPlayerHand = dealCard(newPlayerHand, setPlayerHand);
    newDealerHand = dealCard(newDealerHand, setDealerHand);
    newPlayerHand = dealCard(newPlayerHand, setPlayerHand);
    newDealerHand = dealCard(newDealerHand, setDealerHand);

    setPlayerHand(newPlayerHand);
    setDealerHand(newDealerHand);

    setPlayerScore(calculateScore(newPlayerHand));
    setDealerScore(calculateScore(newDealerHand));

    setGameState('playing');
  };

  const handleHit = () => {
    const newPlayerHand = dealCard(playerHand, setPlayerHand);
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
      newDealerHand = dealCard(newDealerHand, setDealerHand);
      newDealerScore = calculateScore(newDealerHand);
    }

    setDealerHand(newDealerHand);
    setDealerScore(newDealerScore);

    if (newDealerScore > 21 || playerScore > newDealerScore) {
      setResult('win');
      setCurrentBalance(currentBalance + bet * 2);
      setWins(wins + 1);
    } else if (playerScore < newDealerScore) {
      setResult('lose');
    } else {
      setResult('draw');
      setCurrentBalance(currentBalance + bet);
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

  const handleShowSettings = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  const handleAddTokens = (amount: number) => {
    setCurrentBalance(currentBalance + amount);
  };

  return (
    <div>
      {gameState === 'playing' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>Гра Блекджек</h1>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>{user}</h2>
            <Deck cards={playerHand} />
            <p>Рахунок: {playerScore}</p>
            <button onClick={handleHit}>Взяти карту</button>
            <button onClick={handleStand}>Зупинитися</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Рука дилера</h2>
            <Deck cards={dealerHand.map((card, index) => (index === 0 ? card : { suit: 'hidden', rank: 'hidden' }))} />
            <p>Рахунок: {dealerScore}</p>
          </div>
          <p>Баланс: ${currentBalance}</p>
        </div>
      )}
      {gameState === 'result' && <Result result={result} onRestart={handleRestart} />}
      {showSettings && <Settings onClose={handleCloseSettings} onAddTokens={handleAddTokens} />}
      <div className="stats">
        <p>Перемоги: {wins}</p>
      </div>
    </div>
  );
};

export default Game;
