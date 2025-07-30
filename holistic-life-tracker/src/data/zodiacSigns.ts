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
  {
    id: 'taurus',
    name: 'Taurus',
    sanskritName: 'Vrishabha',
    element: 'earth',
    startDate: '04-20',
    endDate: '05-20',
    color: '#8FBC8F',
    description: 'The Bull represents stability, determination, and the power of the earth.',
    keywords: ['stability', 'determination', 'patience', 'reliability', 'strength']
  },
  {
    id: 'gemini',
    name: 'Gemini',
    sanskritName: 'Mithuna',
    element: 'air',
    startDate: '05-21',
    endDate: '06-20',
    color: '#0EA5E9',
    description: 'The Twins represent communication, adaptability, and the duality of mind.',
    keywords: ['communication', 'adaptability', 'curiosity', 'versatility', 'intellect']
  },
  {
    id: 'cancer',
    name: 'Cancer',
    sanskritName: 'Karka',
    element: 'water',
    startDate: '06-21',
    endDate: '07-22',
    color: '#0EA5E9',
    description: 'The Crab represents intuition, nurturing, and the protective shell of home.',
    keywords: ['intuition', 'nurturing', 'protection', 'emotion', 'home']
  },
  {
    id: 'leo',
    name: 'Leo',
    sanskritName: 'Simha',
    element: 'fire',
    startDate: '07-23',
    endDate: '08-22',
    color: '#FFD700',
    description: 'The Lion represents creativity, leadership, and the radiant power of the sun.',
    keywords: ['creativity', 'leadership', 'confidence', 'generosity', 'passion']
  },
  {
    id: 'virgo',
    name: 'Virgo',
    sanskritName: 'Kanya',
    element: 'earth',
    startDate: '08-23',
    endDate: '09-22',
    color: '#8FBC8F',
    description: 'The Virgin represents precision, service, and the analytical mind.',
    keywords: ['precision', 'service', 'analysis', 'practicality', 'perfection']
  },
  {
    id: 'libra',
    name: 'Libra',
    sanskritName: 'Tula',
    element: 'air',
    startDate: '09-23',
    endDate: '10-22',
    color: '#8B5CF6',
    description: 'The Scales represent balance, harmony, and the pursuit of justice.',
    keywords: ['balance', 'harmony', 'justice', 'partnership', 'diplomacy']
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    sanskritName: 'Vrishchika',
    element: 'water',
    startDate: '10-23',
    endDate: '11-21',
    color: '#8B5CF6',
    description: 'The Scorpion represents transformation, intensity, and the depths of mystery.',
    keywords: ['transformation', 'intensity', 'mystery', 'passion', 'power']
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    sanskritName: 'Dhanu',
    element: 'fire',
    startDate: '11-22',
    endDate: '12-21',
    color: '#F59E0B',
    description: 'The Archer represents expansion, wisdom, and the quest for truth.',
    keywords: ['expansion', 'wisdom', 'adventure', 'optimism', 'philosophy']
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    sanskritName: 'Makara',
    element: 'earth',
    startDate: '12-22',
    endDate: '01-19',
    color: '#A0522D',
    description: 'The Goat represents ambition, discipline, and the climb to success.',
    keywords: ['ambition', 'discipline', 'responsibility', 'perseverance', 'authority']
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    sanskritName: 'Kumbha',
    element: 'air',
    startDate: '01-20',
    endDate: '02-18',
    color: '#3B82F6',
    description: 'The Water Bearer represents innovation, humanitarianism, and the flow of ideas.',
    keywords: ['innovation', 'humanitarianism', 'originality', 'independence', 'vision']
  },
  {
    id: 'pisces',
    name: 'Pisces',
    sanskritName: 'Meena',
    element: 'water',
    startDate: '02-19',
    endDate: '03-20',
    color: '#0EA5E9',
    description: 'The Fish represents intuition, compassion, and the connection to the divine.',
    keywords: ['intuition', 'compassion', 'spirituality', 'imagination', 'empathy']
  }
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