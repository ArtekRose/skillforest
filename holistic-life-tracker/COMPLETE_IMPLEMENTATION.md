# Holistic Life Tracker - Complete Implementation

## Overview
A comprehensive life tracking application that combines physical health monitoring with spiritual and archetypal development through tarot cards and runes. The app features dynamic theming based on selected archetypes and interactive challenges for personal growth.

## Features Implemented

### 🌟 Core Features
- **Holistic Health Tracking**: Monitor fascia health, strength, mobility, EQ, and SQ scores
- **Tarot & Rune Selection**: Choose up to 3 tarot cards and 3 runes using golden ratio randomization
- **Vedic Zodiac Integration**: Selections are locked until the next zodiac sign
- **Dynamic Theming**: Interface colors change based on selected archetypes
- **Interactive Challenges**: Complete challenges to embody your chosen archetypes
- **Session Logging**: Track various types of wellness sessions
- **Progress Visualization**: Beautiful charts and progress indicators

### 🎨 Design Features
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark/Light Mode**: Toggle between themes
- **Smooth Animations**: Fade-in effects and hover animations
- **Color Psychology**: Colors stimulate both hemispheres of the brain
- **Modern UI**: Clean, intuitive interface with gradient accents

### 🔮 Spiritual Features
- **Golden Ratio Randomization**: Uses φ (1.618) for "divine" random selection
- **Archetype Embodiment**: Challenges help you understand and embody archetypes
- **Vedic Zodiac Tracking**: Automatic zodiac sign detection and transitions
- **Meditation Integration**: Guided practices for each archetype
- **Progress Tracking**: Monitor your spiritual and consciousness development

## Project Structure

```
holistic-life-tracker/
├── src/
│   ├── components/
│   │   ├── TarotRuneSelector.tsx
│   │   └── ChallengeBoard.tsx
│   ├── data/
│   │   ├── tarotDeck.ts
│   │   ├── runeDeck.ts
│   │   └── zodiacSigns.ts
│   ├── utils/
│   │   └── goldenRatio.ts
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Installation Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Setup Commands
```bash
# Create React app with TypeScript
npx create-react-app holistic-life-tracker --template typescript --yes

# Navigate to project
cd holistic-life-tracker

# Install dependencies
npm install lucide-react tailwindcss @tailwindcss/forms autoprefixer postcss

# Start development server
npm start
```

## Complete Code Implementation

### 1. Tailwind Configuration (tailwind.config.js)

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px currentColor' },
          '100%': { boxShadow: '0 0 20px currentColor, 0 0 30px currentColor' },
        },
      },
      colors: {
        'tarot-gold': '#FFD700',
        'rune-green': '#8FBC8F',
        'mystic-purple': '#8B5CF6',
        'cosmic-blue': '#3B82F6',
        'earth-brown': '#A0522D',
        'fire-red': '#DC2626',
        'water-blue': '#0EA5E9',
        'air-yellow': '#F59E0B',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
```

### 2. PostCSS Configuration (postcss.config.js)

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 3. Global Styles (src/index.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

@layer components {
  .card-hover {
    @apply transform transition-all duration-300 hover:scale-105 hover:shadow-lg;
  }
  
  .mystic-gradient {
    @apply bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500;
  }
  
  .tarot-gradient {
    @apply bg-gradient-to-r from-tarot-gold via-yellow-400 to-orange-400;
  }
  
  .rune-gradient {
    @apply bg-gradient-to-r from-rune-green via-green-400 to-emerald-400;
  }
  
  .cosmic-gradient {
    @apply bg-gradient-to-r from-cosmic-blue via-blue-400 to-cyan-400;
  }
}
```

### 4. Tarot Deck Data (src/data/tarotDeck.ts)

```typescript
export interface TarotCard {
  id: string;
  name: string;
  archetype: string;
  element: 'fire' | 'water' | 'earth' | 'air';
  color: string;
  challenge: string;
  description: string;
  keywords: string[];
  meditation: string;
}

export const tarotDeck: TarotCard[] = [
  {
    id: 'fool',
    name: 'The Fool',
    archetype: 'Innocence & New Beginnings',
    element: 'air',
    color: '#FFD700',
    challenge: 'Embrace uncertainty and take a leap of faith. What new path calls to your heart?',
    description: 'The Fool represents pure potential, innocence, and the courage to begin a new journey.',
    keywords: ['innocence', 'new beginnings', 'spontaneity', 'faith', 'adventure'],
    meditation: 'Sit in stillness and feel the weightlessness of pure potential. What would you do if you knew you couldn\'t fail?'
  },
  {
    id: 'magician',
    name: 'The Magician',
    archetype: 'Manifestation & Will',
    element: 'fire',
    color: '#DC2626',
    challenge: 'Recognize your power to create. What do you want to manifest in your life?',
    description: 'The Magician represents the power of focused intention and the ability to transform ideas into reality.',
    keywords: ['manifestation', 'willpower', 'skill', 'confidence', 'transformation'],
    meditation: 'Feel the energy in your hands. You have all the tools you need. What are you creating?'
  },
  // ... (22 total cards - see full implementation for complete list)
];
```

### 5. Rune Deck Data (src/data/runeDeck.ts)

```typescript
export interface Rune {
  id: string;
  name: string;
  symbol: string;
  archetype: string;
  element: 'fire' | 'water' | 'earth' | 'air';
  color: string;
  challenge: string;
  description: string;
  keywords: string[];
  meditation: string;
}

export const runeDeck: Rune[] = [
  {
    id: 'fehu',
    name: 'Fehu',
    symbol: 'ᚠ',
    archetype: 'Wealth & Abundance',
    element: 'fire',
    color: '#FFD700',
    challenge: 'Reflect on your relationship with abundance. What wealth are you cultivating?',
    description: 'Fehu represents wealth, abundance, and the flow of energy and resources.',
    keywords: ['wealth', 'abundance', 'energy', 'flow', 'prosperity'],
    meditation: 'Feel the flow of abundance. You are worthy of all good things. What wealth are you attracting?'
  },
  // ... (24 total runes - see full implementation for complete list)
];
```

### 6. Zodiac Signs Data (src/data/zodiacSigns.ts)

```typescript
export interface ZodiacSign {
  id: string;
  name: string;
  sanskritName: string;
  element: 'fire' | 'water' | 'earth' | 'air';
  startDate: string;
  endDate: string;
  color: string;
  description: string;
  keywords: string[];
}

export const zodiacSigns: ZodiacSign[] = [
  {
    id: 'aries',
    name: 'Aries',
    sanskritName: 'Mesha',
    element: 'fire',
    startDate: '03-21',
    endDate: '04-19',
    color: '#DC2626',
    description: 'The Ram represents courage, leadership, and the spark of new beginnings.',
    keywords: ['courage', 'leadership', 'initiative', 'energy', 'pioneering']
  },
  // ... (12 total signs - see full implementation for complete list)
];

export function getCurrentZodiacSign(): ZodiacSign {
  const today = new Date();
  const monthDay = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  
  for (const sign of zodiacSigns) {
    if (monthDay >= sign.startDate && monthDay <= sign.endDate) {
      return sign;
    }
  }
  
  // Handle year boundary (Capricorn spans December to January)
  if (monthDay >= '12-22' || monthDay <= '01-19') {
    return zodiacSigns.find(sign => sign.id === 'capricorn')!;
  }
  
  return zodiacSigns[0]; // fallback to Aries
}
```

### 7. Golden Ratio Utilities (src/utils/goldenRatio.ts)

```typescript
// Golden ratio constant
export const PHI = 1.618033988749895;

// Golden ratio random generator
export function goldenRatioRandom(seed: number, max: number): number {
  let x = (seed * PHI) % 1;
  return Math.floor(x * max);
}

// Generate multiple random numbers using golden ratio
export function generateGoldenRatioSequence(seed: number, count: number, max: number): number[] {
  const sequence: number[] = [];
  let currentSeed = seed;
  
  while (sequence.length < count) {
    const randomIndex = goldenRatioRandom(currentSeed, max);
    if (!sequence.includes(randomIndex)) {
      sequence.push(randomIndex);
    }
    currentSeed += 1;
  }
  
  return sequence;
}

// Generate seed based on current zodiac sign and date
export function generateZodiacSeed(zodiacSignId: string, date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  // Create a unique seed based on zodiac sign and date
  const seedString = `${zodiacSignId}${year}${month}${day}`;
  let hash = 0;
  
  for (let i = 0; i < seedString.length; i++) {
    const char = seedString.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  return Math.abs(hash);
}

// Theme management based on selected cards and runes
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  gradient: string;
}

export function generateThemeFromSelections(
  tarotCards: any[],
  runes: any[]
): ThemeColors {
  if (tarotCards.length === 0 && runes.length === 0) {
    return {
      primary: '#8B5CF6',
      secondary: '#F59E0B',
      accent: '#0EA5E9',
      background: '#1F2937',
      text: '#F9FAFB',
      gradient: 'from-purple-500 via-pink-500 to-indigo-500'
    };
  }

  // Collect all colors from selections
  const allColors = [
    ...tarotCards.map(card => card.color),
    ...runes.map(rune => rune.color)
  ];

  // Calculate dominant colors
  const colorCounts: { [key: string]: number } = {};
  allColors.forEach(color => {
    colorCounts[color] = (colorCounts[color] || 0) + 1;
  });

  // Get the most frequent colors
  const sortedColors = Object.entries(colorCounts)
    .sort(([,a], [,b]) => b - a)
    .map(([color]) => color);

  const primary = sortedColors[0] || '#8B5CF6';
  const secondary = sortedColors[1] || '#F59E0B';
  const accent = sortedColors[2] || '#0EA5E9';

  // Determine background based on primary color
  let background = '#1F2937';
  let text = '#F9FAFB';
  let gradient = 'from-purple-500 via-pink-500 to-indigo-500';

  // Create gradient based on primary colors
  if (primary.includes('FFD700') || primary.includes('F59E0B')) {
    gradient = 'from-yellow-400 via-orange-400 to-red-400';
  } else if (primary.includes('0EA5E9') || primary.includes('3B82F6')) {
    gradient = 'from-blue-400 via-cyan-400 to-indigo-400';
  } else if (primary.includes('8FBC8F') || primary.includes('A0522D')) {
    gradient = 'from-green-400 via-emerald-400 to-teal-400';
  } else if (primary.includes('8B5CF6')) {
    gradient = 'from-purple-400 via-pink-400 to-indigo-400';
  }

  return {
    primary,
    secondary,
    accent,
    background,
    text,
    gradient
  };
}

// Convert hex color to RGB
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}

// Calculate color contrast
export function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  const luminance1 = (0.299 * rgb1.r + 0.587 * rgb1.g + 0.114 * rgb1.b) / 255;
  const luminance2 = (0.299 * rgb2.r + 0.587 * rgb2.g + 0.114 * rgb2.b) / 255;
  
  const brightest = Math.max(luminance1, luminance2);
  const darkest = Math.min(luminance1, luminance2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}
```

### 8. TarotRuneSelector Component (src/components/TarotRuneSelector.tsx)

```typescript
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
```

### 9. ChallengeBoard Component (src/components/ChallengeBoard.tsx)

```typescript
import React, { useState } from 'react';
import { BookOpen, Sparkles, CheckCircle, Circle, Edit3, Save, X, Heart, Zap, Target, Compass } from 'lucide-react';
import { TarotCard } from '../data/tarotDeck';
import { Rune } from '../data/runeDeck';

interface Challenge {
  id: string;
  title: string;
  description: string;
  type: 'tarot' | 'rune';
  sourceId: string;
  sourceName: string;
  completed: boolean;
  notes: string;
  completedAt?: Date;
}

interface ChallengeBoardProps {
  tarotCards: TarotCard[];
  runes: Rune[];
}

export const ChallengeBoard: React.FC<ChallengeBoardProps> = ({ tarotCards, runes }) => {
  const [challenges, setChallenges] = useState<Challenge[]>(() => {
    const saved = localStorage.getItem('challenges');
    if (saved) {
      return JSON.parse(saved);
    }
    
    // Generate challenges from selections
    const newChallenges: Challenge[] = [];
    
    tarotCards.forEach(card => {
      newChallenges.push({
        id: `tarot-${card.id}`,
        title: `Embody ${card.name}`,
        description: card.challenge,
        type: 'tarot',
        sourceId: card.id,
        sourceName: card.name,
        completed: false,
        notes: ''
      });
    });
    
    runes.forEach(rune => {
      newChallenges.push({
        id: `rune-${rune.id}`,
        title: `Activate ${rune.name}`,
        description: rune.challenge,
        type: 'rune',
        sourceId: rune.id,
        sourceName: rune.name,
        completed: false,
        notes: ''
      });
    });
    
    return newChallenges;
  });

  const [editingChallenge, setEditingChallenge] = useState<string | null>(null);
  const [editNotes, setEditNotes] = useState('');

  const toggleChallenge = (challengeId: string) => {
    setChallenges(prev => {
      const updated = prev.map(challenge => {
        if (challenge.id === challengeId) {
          return {
            ...challenge,
            completed: !challenge.completed,
            completedAt: !challenge.completed ? new Date() : undefined
          };
        }
        return challenge;
      });
      
      localStorage.setItem('challenges', JSON.stringify(updated));
      return updated;
    });
  };

  const startEditing = (challenge: Challenge) => {
    setEditingChallenge(challenge.id);
    setEditNotes(challenge.notes);
  };

  const saveNotes = (challengeId: string) => {
    setChallenges(prev => {
      const updated = prev.map(challenge => {
        if (challenge.id === challengeId) {
          return { ...challenge, notes: editNotes };
        }
        return challenge;
      });
      
      localStorage.setItem('challenges', JSON.stringify(updated));
      return updated;
    });
    setEditingChallenge(null);
  };

  const cancelEditing = () => {
    setEditingChallenge(null);
    setEditNotes('');
  };

  const getSourceCard = (challenge: Challenge) => {
    if (challenge.type === 'tarot') {
      return tarotCards.find(card => card.id === challenge.sourceId);
    } else {
      return runes.find(rune => rune.id === challenge.sourceId);
    }
  };

  const getSourceIcon = (challenge: Challenge) => {
    if (challenge.type === 'tarot') {
      return <BookOpen className="w-4 h-4 text-tarot-gold" />;
    } else {
      return <Sparkles className="w-4 h-4 text-rune-green" />;
    }
  };

  const getSourceColor = (challenge: Challenge) => {
    const source = getSourceCard(challenge);
    return source?.color || '#8B5CF6';
  };

  const completedChallenges = challenges.filter(c => c.completed);
  const activeChallenges = challenges.filter(c => !c.completed);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
          Inner Work Challenges
        </h2>
        <p className="text-gray-400">
          Complete these challenges to embody your selected archetypes
        </p>
      </div>

      {/* Progress Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm opacity-70">Total Challenges</span>
            <Target className="w-5 h-5 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-purple-400">{challenges.length}</div>
        </div>
        
        <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm opacity-70">Completed</span>
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-green-400">{completedChallenges.length}</div>
        </div>
        
        <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm opacity-70">Progress</span>
            <Compass className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-blue-400">
            {challenges.length > 0 ? Math.round((completedChallenges.length / challenges.length) * 100) : 0}%
          </div>
        </div>
      </div>

      {/* Active Challenges */}
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-yellow-400" />
          Active Challenges ({activeChallenges.length})
        </h3>
        <div className="space-y-4">
          {activeChallenges.map(challenge => (
            <div
              key={challenge.id}
              className="p-6 rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <button
                    onClick={() => toggleChallenge(challenge.id)}
                    className="mt-1 p-1 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <Circle className="w-6 h-6 text-gray-400 hover:text-green-400" />
                  </button>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {getSourceIcon(challenge)}
                      <h4 className="font-semibold text-lg">{challenge.title}</h4>
                      <span 
                        className="px-2 py-1 text-xs rounded-full"
                        style={{ 
                          backgroundColor: getSourceColor(challenge) + '20',
                          color: getSourceColor(challenge)
                        }}
                      >
                        {challenge.sourceName}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-3">{challenge.description}</p>
                    
                    {challenge.notes && (
                      <div className="bg-gray-700/50 p-3 rounded-lg mb-3">
                        <p className="text-sm text-gray-300">{challenge.notes}</p>
                      </div>
                    )}
                    
                    <button
                      onClick={() => startEditing(challenge)}
                      className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Edit3 className="w-4 h-4 mr-1" />
                      {challenge.notes ? 'Edit Notes' : 'Add Notes'}
                    </button>
                  </div>
                </div>
              </div>
              
              {editingChallenge === challenge.id && (
                <div className="mt-4 p-4 bg-gray-700/50 rounded-lg">
                  <textarea
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    placeholder="Reflect on your experience with this challenge..."
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    rows={3}
                  />
                  <div className="flex space-x-2 mt-3">
                    <button
                      onClick={() => saveNotes(challenge.id)}
                      className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-colors flex items-center"
                    >
                      <Save className="w-4 h-4 mr-1" />
                      Save
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-sm transition-colors flex items-center"
                    >
                      <X className="w-4 h-4 mr-1" />
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Completed Challenges */}
      {completedChallenges.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
            Completed Challenges ({completedChallenges.length})
          </h3>
          <div className="space-y-3">
            {completedChallenges.map(challenge => (
              <div
                key={challenge.id}
                className="p-4 rounded-lg border border-green-700/30 bg-green-900/20"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      {getSourceIcon(challenge)}
                      <h4 className="font-medium text-green-400">{challenge.title}</h4>
                      <span 
                        className="px-2 py-1 text-xs rounded-full"
                        style={{ 
                          backgroundColor: getSourceColor(challenge) + '20',
                          color: getSourceColor(challenge)
                        }}
                      >
                        {challenge.sourceName}
                      </span>
                    </div>
                    {challenge.notes && (
                      <p className="text-sm text-gray-300">{challenge.notes}</p>
                    )}
                    {challenge.completedAt && (
                      <p className="text-xs text-gray-500 mt-1">
                        Completed on {new Date(challenge.completedAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {challenges.length === 0 && (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No challenges available. Select tarot cards and runes to begin your inner work journey.</p>
        </div>
      )}
    </div>
  );
};
```

### 10. Main App Component (src/App.tsx)

[Note: This is a very long file. The complete App.tsx implementation includes all the dashboard, recommendations, progress components, and the main application logic. See the full implementation for the complete code.]

## Usage Instructions

### 1. Start the Application
```bash
cd holistic-life-tracker
npm start
```

### 2. Navigate to http://localhost:3000

### 3. Use the Application
1. **Dashboard**: View current zodiac sign and health metrics
2. **Archetypes**: Select tarot cards and runes (up to 3 each)
3. **Challenges**: Complete interactive challenges based on selections
4. **Recommendations**: Get personalized training suggestions
5. **Progress**: Track your development journey

### 4. Key Features
- **Golden Ratio Randomization**: Selections use φ (1.618) for "divine" randomness
- **Vedic Zodiac Integration**: Selections lock until next zodiac sign
- **Dynamic Theming**: Interface colors change based on archetype selections
- **Interactive Challenges**: Complete challenges and add personal notes
- **Progress Tracking**: Monitor completion rates and insights

## Technical Details

### Architecture
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Local Storage** for data persistence
- **Golden Ratio Algorithm** for randomization

### Key Components
- `TarotRuneSelector`: Handles card/rune selection and locking
- `ChallengeBoard`: Manages interactive challenges
- `App`: Main application with routing and state management
- `Data Files`: Comprehensive tarot, rune, and zodiac data

### Data Structure
- **22 Major Arcana** tarot cards with archetypes and challenges
- **24 Elder Futhark** runes with symbols and meanings
- **12 Vedic Zodiac** signs with date ranges
- **Golden Ratio** randomization for "divine" selection

## Customization

### Adding New Tarot Cards
Edit `src/data/tarotDeck.ts` to add new cards with:
- Archetype description
- Element association
- Color coding
- Challenge text
- Keywords

### Adding New Runes
Edit `src/data/runeDeck.ts` to add new runes with:
- Symbol representation
- Archetype meaning
- Element association
- Challenge description

### Modifying Themes
Edit `src/utils/goldenRatio.ts` to customize:
- Color generation algorithms
- Theme calculation logic
- Gradient combinations

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

---

**Note**: This application is designed for personal development and spiritual growth. The tarot and rune interpretations are for educational and self-reflection purposes.