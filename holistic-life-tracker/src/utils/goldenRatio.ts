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