export type Card = {
    suit: string;
    rank: string;
  };
  
  const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '1'];
  
  export const createDeck = (): Card[] => {
    const deck: Card[] = [];
    suits.forEach(suit => {
      ranks.forEach(rank => {
        deck.push({ suit, rank });
      });
    });
    return deck;
  };
  
  export const shuffleDeck = (deck: Card[]): Card[] => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  };
  
  export const getCardValue = (card: Card): number => {
    if (['11', '12', '13'].includes(card.rank)) {
      return 10;
    }
    if (card.rank === '1') {
      return 11;
    }
    return parseInt(card.rank);
  };
  
  export const calculateScore = (hand: Card[]): number => {
    let score = hand.reduce((total, card) => total + getCardValue(card), 0);
    let aces = hand.filter(card => card.rank === '1').length;
    while (score > 21 && aces > 0) {
      score -= 10;
      aces -= 1;
    }
    return score;
  };
  
  export const dealCard = (
    hand: Card[],
    setHand: React.Dispatch<React.SetStateAction<Card[]>>,
    deck: Card[],
    setDeck: React.Dispatch<React.SetStateAction<Card[]>>
  ): Card[] => {
    const newDeck = [...deck];
    const card = newDeck.pop() as Card;
    const newHand = [...hand, card];
    setHand(newHand);
    setDeck(newDeck);
    return newHand;
  };
  