import React, { useState, useEffect } from 'react';
import { X, Lock, Unlock, Sparkles, BookOpen, Heart, Zap, Target } from 'lucide-react';
import { tarotDeck, TarotCard } from '../data/tarotDeck';
import { runeDeck, Rune } from '../data/runeDeck';
import { getCurrentZodiacSign } from '../data/zodiacSigns';
import { generateZodiacSeed, generateGoldenRatioSequence } from '../utils/goldenRatio';

interface TarotRuneSelectorProps {
  onSelectionsLocked: (tarotCards: TarotCard[], runes: Rune[]) => void;
  lockedTarotCards: TarotCard[];
  lockedRunes: Rune[];
  currentZodiacSign: string;
}

export const TarotRuneSelector: React.FC<TarotRuneSelectorProps> = ({
  onSelectionsLocked,
  lockedTarotCards,
  lockedRunes,
  currentZodiacSign
}) => {
  const [selectedTarotCards, setSelectedTarotCards] = useState<TarotCard[]>(lockedTarotCards);
  const [selectedRunes, setSelectedRunes] = useState<Rune[]>(lockedRunes);
  const [availableTarotCards, setAvailableTarotCards] = useState<TarotCard[]>([]);
  const [availableRunes, setAvailableRunes] = useState<Rune[]>([]);
  const [isLocked, setIsLocked] = useState(lockedTarotCards.length > 0 || lockedRunes.length > 0);

  useEffect(() => {
    if (isLocked) return;

    // Generate random selections using golden ratio
    const zodiacSign = getCurrentZodiacSign();
    const seed = generateZodiacSeed(zodiacSign.id, new Date());
    
    // Generate 6 random tarot cards
    const tarotIndices = generateGoldenRatioSequence(seed, 6, tarotDeck.length);
    const randomTarotCards = tarotIndices.map(index => tarotDeck[index]);
    setAvailableTarotCards(randomTarotCards);

    // Generate 6 random runes
    const runeIndices = generateGoldenRatioSequence(seed + 1000, 6, runeDeck.length);
    const randomRunes = runeIndices.map(index => runeDeck[index]);
    setAvailableRunes(randomRunes);
  }, [isLocked]);

  const handleTarotCardToggle = (card: TarotCard) => {
    if (isLocked) return;
    
    setSelectedTarotCards(prev => {
      const isSelected = prev.find(c => c.id === card.id);
      if (isSelected) {
        return prev.filter(c => c.id !== card.id);
      } else if (prev.length < 3) {
        return [...prev, card];
      }
      return prev;
    });
  };

  const handleRuneToggle = (rune: Rune) => {
    if (isLocked) return;
    
    setSelectedRunes(prev => {
      const isSelected = prev.find(r => r.id === rune.id);
      if (isSelected) {
        return prev.filter(r => r.id !== rune.id);
      } else if (prev.length < 3) {
        return [...prev, rune];
      }
      return prev;
    });
  };

  const handleLockSelections = () => {
    if (selectedTarotCards.length === 0 && selectedRunes.length === 0) {
      alert('Please select at least one tarot card or rune before locking.');
      return;
    }
    
    setIsLocked(true);
    onSelectionsLocked(selectedTarotCards, selectedRunes);
  };

  const handleUnlockSelections = () => {
    setIsLocked(false);
    setSelectedTarotCards([]);
    setSelectedRunes([]);
  };

  const CardDisplay = ({ card, isSelected, onClick }: { card: TarotCard; isSelected: boolean; onClick: () => void }) => (
    <div
      className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
        isSelected 
          ? 'border-tarot-gold bg-tarot-gold/20 shadow-lg' 
          : 'border-gray-600 hover:border-gray-500 bg-gray-800/50'
      }`}
      onClick={onClick}
    >
      <div className="text-center">
        <div className="text-2xl mb-2">🃏</div>
        <h3 className="font-semibold text-sm mb-1">{card.name}</h3>
        <p className="text-xs opacity-70 mb-2">{card.archetype}</p>
        <div className="flex flex-wrap gap-1 justify-center">
          {card.keywords.slice(0, 3).map((keyword, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-gray-700 rounded-full">
              {keyword}
            </span>
          ))}
        </div>
      </div>
      {isSelected && (
        <div className="absolute top-2 right-2 text-tarot-gold">
          <Lock className="w-4 h-4" />
        </div>
      )}
    </div>
  );

  const RuneDisplay = ({ rune, isSelected, onClick }: { rune: Rune; isSelected: boolean; onClick: () => void }) => (
    <div
      className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
        isSelected 
          ? 'border-rune-green bg-rune-green/20 shadow-lg' 
          : 'border-gray-600 hover:border-gray-500 bg-gray-800/50'
      }`}
      onClick={onClick}
    >
      <div className="text-center">
        <div className="text-3xl mb-2" style={{ color: rune.color }}>{rune.symbol}</div>
        <h3 className="font-semibold text-sm mb-1">{rune.name}</h3>
        <p className="text-xs opacity-70 mb-2">{rune.archetype}</p>
        <div className="flex flex-wrap gap-1 justify-center">
          {rune.keywords.slice(0, 3).map((keyword, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-gray-700 rounded-full">
              {keyword}
            </span>
          ))}
        </div>
      </div>
      {isSelected && (
        <div className="absolute top-2 right-2 text-rune-green">
          <Lock className="w-4 h-4" />
        </div>
      )}
    </div>
  );

  if (isLocked) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Your Locked Selections
          </h2>
          <button
            onClick={handleUnlockSelections}
            className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            <Unlock className="w-4 h-4 mr-2" />
            Unlock
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-tarot-gold" />
              Tarot Cards ({selectedTarotCards.length}/3)
            </h3>
            <div className="space-y-3">
              {selectedTarotCards.map(card => (
                <CardDisplay key={card.id} card={card} isSelected={true} onClick={() => {}} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-rune-green" />
              Runes ({selectedRunes.length}/3)
            </h3>
            <div className="space-y-3">
              {selectedRunes.map(rune => (
                <RuneDisplay key={rune.id} rune={rune} isSelected={true} onClick={() => {}} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
          Choose Your Archetypes
        </h2>
        <p className="text-gray-400 mb-4">
          Current Vedic Zodiac: {getCurrentZodiacSign().name} ({getCurrentZodiacSign().sanskritName})
        </p>
        <p className="text-sm text-gray-500">
          Select up to 3 tarot cards and 3 runes. These will be locked until the next zodiac sign.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-tarot-gold" />
            Tarot Cards ({selectedTarotCards.length}/3)
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {availableTarotCards.map(card => (
              <CardDisplay
                key={card.id}
                card={card}
                isSelected={selectedTarotCards.some(c => c.id === card.id)}
                onClick={() => handleTarotCardToggle(card)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-rune-green" />
            Runes ({selectedRunes.length}/3)
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {availableRunes.map(rune => (
              <RuneDisplay
                key={rune.id}
                rune={rune}
                isSelected={selectedRunes.some(r => r.id === rune.id)}
                onClick={() => handleRuneToggle(rune)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleLockSelections}
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center"
        >
          <Lock className="w-5 h-5 mr-2" />
          Lock Selections
        </button>
      </div>
    </div>
  );
};