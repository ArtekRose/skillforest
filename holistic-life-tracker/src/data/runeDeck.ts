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
  {
    id: 'uruz',
    name: 'Uruz',
    symbol: 'ᚢ',
    archetype: 'Strength & Vitality',
    element: 'earth',
    color: '#A0522D',
    challenge: 'Connect with your primal strength. What wild energy calls to you?',
    description: 'Uruz represents strength, vitality, and the raw power of the wild ox.',
    keywords: ['strength', 'vitality', 'wildness', 'power', 'endurance'],
    meditation: 'Feel the strength of the wild ox within. You are powerful beyond measure. What primal energy awakens?'
  },
  {
    id: 'thurisaz',
    name: 'Thurisaz',
    symbol: 'ᚦ',
    archetype: 'Protection & Defense',
    element: 'fire',
    color: '#DC2626',
    challenge: 'Establish healthy boundaries. What are you protecting?',
    description: 'Thurisaz represents protection, defense, and the thorn that guards the rose.',
    keywords: ['protection', 'defense', 'boundaries', 'thorn', 'guardian'],
    meditation: 'Feel your protective energy. You are safe and defended. What boundaries serve your highest good?'
  },
  {
    id: 'ansuz',
    name: 'Ansuz',
    symbol: 'ᚨ',
    archetype: 'Communication & Wisdom',
    element: 'air',
    color: '#0EA5E9',
    challenge: 'Speak your truth with wisdom. What message needs to be heard?',
    description: 'Ansuz represents communication, wisdom, and the divine breath of inspiration.',
    keywords: ['communication', 'wisdom', 'inspiration', 'breath', 'divine'],
    meditation: 'Feel the breath of inspiration. Your words carry power. What truth wants to be spoken?'
  },
  {
    id: 'raidho',
    name: 'Raidho',
    symbol: 'ᚱ',
    archetype: 'Journey & Movement',
    element: 'air',
    color: '#3B82F6',
    challenge: 'Embrace your journey. What path are you traveling?',
    description: 'Raidho represents journey, movement, and the wheel that carries us forward.',
    keywords: ['journey', 'movement', 'travel', 'progress', 'wheel'],
    meditation: 'Feel the wheel turning. Your journey is sacred. What path are you following?'
  },
  {
    id: 'kenaz',
    name: 'Kenaz',
    symbol: 'ᚲ',
    archetype: 'Knowledge & Illumination',
    element: 'fire',
    color: '#F59E0B',
    challenge: 'Seek knowledge and illumination. What are you learning?',
    description: 'Kenaz represents knowledge, illumination, and the torch that lights the way.',
    keywords: ['knowledge', 'illumination', 'torch', 'learning', 'enlightenment'],
    meditation: 'Feel the torch of knowledge. You are illuminating the way. What wisdom are you seeking?'
  },
  {
    id: 'gebo',
    name: 'Gebo',
    symbol: 'ᚷ',
    archetype: 'Gift & Exchange',
    element: 'air',
    color: '#8B5CF6',
    challenge: 'Recognize the gifts of giving and receiving. What are you exchanging?',
    description: 'Gebo represents gift, exchange, and the sacred reciprocity of life.',
    keywords: ['gift', 'exchange', 'reciprocity', 'sacred', 'balance'],
    meditation: 'Feel the flow of giving and receiving. You are part of a sacred exchange. What gifts are you sharing?'
  },
  {
    id: 'wunjo',
    name: 'Wunjo',
    symbol: 'ᚹ',
    archetype: 'Joy & Harmony',
    element: 'air',
    color: '#F59E0B',
    challenge: 'Cultivate joy and harmony. What brings you happiness?',
    description: 'Wunjo represents joy, harmony, and the bliss of perfect alignment.',
    keywords: ['joy', 'harmony', 'bliss', 'alignment', 'happiness'],
    meditation: 'Feel the joy within. You are in perfect harmony. What brings you pure happiness?'
  },
  {
    id: 'hagalaz',
    name: 'Hagalaz',
    symbol: 'ᚺ',
    archetype: 'Disruption & Transformation',
    element: 'water',
    color: '#374151',
    challenge: 'Embrace necessary disruption. What transformation is calling?',
    description: 'Hagalaz represents disruption, transformation, and the hail that clears the way.',
    keywords: ['disruption', 'transformation', 'hail', 'clearing', 'change'],
    meditation: 'Feel the hail clearing your path. Disruption brings transformation. What change is necessary?'
  },
  {
    id: 'naudhiz',
    name: 'Naudhiz',
    symbol: 'ᚾ',
    archetype: 'Need & Necessity',
    element: 'earth',
    color: '#A0522D',
    challenge: 'Recognize your true needs. What is necessary for your growth?',
    description: 'Naudhiz represents need, necessity, and the constraints that shape us.',
    keywords: ['need', 'necessity', 'constraint', 'growth', 'requirement'],
    meditation: 'Feel your true needs. Necessity is the mother of invention. What do you truly need?'
  },
  {
    id: 'isa',
    name: 'Isa',
    symbol: 'ᛁ',
    archetype: 'Stillness & Ice',
    element: 'water',
    color: '#0EA5E9',
    challenge: 'Embrace stillness and patience. What needs to be frozen in time?',
    description: 'Isa represents stillness, ice, and the power of patient waiting.',
    keywords: ['stillness', 'ice', 'patience', 'waiting', 'freezing'],
    meditation: 'Feel the stillness of ice. Patience brings clarity. What needs to be frozen in time?'
  },
  {
    id: 'jera',
    name: 'Jera',
    symbol: 'ᛃ',
    archetype: 'Harvest & Cycles',
    element: 'earth',
    color: '#8FBC8F',
    challenge: 'Honor the cycles of harvest. What are you reaping?',
    description: 'Jera represents harvest, cycles, and the year that brings fruition.',
    keywords: ['harvest', 'cycles', 'year', 'fruition', 'reaping'],
    meditation: 'Feel the cycle of harvest. You reap what you sow. What are you harvesting?'
  },
  {
    id: 'eihwaz',
    name: 'Eihwaz',
    symbol: 'ᛇ',
    archetype: 'Endurance & Yew',
    element: 'earth',
    color: '#A0522D',
    challenge: 'Develop endurance and resilience. What are you enduring?',
    description: 'Eihwaz represents endurance, the yew tree, and the strength to persevere.',
    keywords: ['endurance', 'yew', 'perseverance', 'resilience', 'strength'],
    meditation: 'Feel the strength of the yew. You have the endurance to persevere. What are you building?'
  },
  {
    id: 'perthro',
    name: 'Perthro',
    symbol: 'ᛈ',
    archetype: 'Fate & Mystery',
    element: 'water',
    color: '#8B5CF6',
    challenge: 'Trust in fate and mystery. What destiny is unfolding?',
    description: 'Perthro represents fate, mystery, and the dice cup of destiny.',
    keywords: ['fate', 'mystery', 'destiny', 'chance', 'divination'],
    meditation: 'Feel the mystery of fate. Destiny unfolds as it will. What mystery calls to you?'
  },
  {
    id: 'algiz',
    name: 'Algiz',
    symbol: 'ᛉ',
    archetype: 'Protection & Connection',
    element: 'air',
    color: '#0EA5E9',
    challenge: 'Connect with divine protection. What are you connecting to?',
    description: 'Algiz represents protection, connection, and the elk\'s antlers reaching skyward.',
    keywords: ['protection', 'connection', 'elk', 'divine', 'reaching'],
    meditation: 'Feel the antlers reaching skyward. You are connected to divine protection. What are you reaching for?'
  },
  {
    id: 'sowilo',
    name: 'Sowilo',
    symbol: 'ᛊ',
    archetype: 'Sun & Victory',
    element: 'fire',
    color: '#FFD700',
    challenge: 'Embrace your inner sun. What victory are you achieving?',
    description: 'Sowilo represents the sun, victory, and the light that guides us to success.',
    keywords: ['sun', 'victory', 'light', 'success', 'guidance'],
    meditation: 'Feel the sun within. You are victorious. What light are you shining?'
  },
  {
    id: 'tiwaz',
    name: 'Tiwaz',
    symbol: 'ᛏ',
    archetype: 'Justice & Sacrifice',
    element: 'air',
    color: '#8B5CF6',
    challenge: 'Seek justice and truth. What sacrifice serves the greater good?',
    description: 'Tiwaz represents justice, sacrifice, and the god Tyr who gave his hand for order.',
    keywords: ['justice', 'sacrifice', 'truth', 'order', 'honor'],
    meditation: 'Feel the hand of justice. Truth requires sacrifice. What sacrifice serves the greater good?'
  },
  {
    id: 'berkano',
    name: 'Berkano',
    symbol: 'ᛒ',
    archetype: 'Growth & Birth',
    element: 'earth',
    color: '#8FBC8F',
    challenge: 'Nurture new growth. What are you birthing?',
    description: 'Berkano represents growth, birth, and the birch tree that grows quickly.',
    keywords: ['growth', 'birth', 'birch', 'nurturing', 'new life'],
    meditation: 'Feel the growth of the birch. You are birthing new life. What are you growing?'
  },
  {
    id: 'ehwaz',
    name: 'Ehwaz',
    symbol: 'ᛖ',
    archetype: 'Partnership & Movement',
    element: 'earth',
    color: '#A0522D',
    challenge: 'Honor your partnerships. What relationship moves you forward?',
    description: 'Ehwaz represents partnership, movement, and the horse that carries us together.',
    keywords: ['partnership', 'movement', 'horse', 'cooperation', 'progress'],
    meditation: 'Feel the partnership of the horse. You move forward together. What relationship serves you?'
  },
  {
    id: 'mannaz',
    name: 'Mannaz',
    symbol: 'ᛗ',
    archetype: 'Humanity & Community',
    element: 'air',
    color: '#0EA5E9',
    challenge: 'Connect with your humanity. What community supports you?',
    description: 'Mannaz represents humanity, community, and the interconnectedness of all people.',
    keywords: ['humanity', 'community', 'interconnection', 'support', 'cooperation'],
    meditation: 'Feel your connection to humanity. You are part of a greater whole. What community supports you?'
  },
  {
    id: 'laguz',
    name: 'Laguz',
    symbol: 'ᛚ',
    archetype: 'Intuition & Flow',
    element: 'water',
    color: '#0EA5E9',
    challenge: 'Trust your intuition and flow. What waters are you navigating?',
    description: 'Laguz represents intuition, flow, and the water that carries us to our destination.',
    keywords: ['intuition', 'flow', 'water', 'navigation', 'emotion'],
    meditation: 'Feel the flow of water. Your intuition guides you. What waters are you navigating?'
  },
  {
    id: 'ingwaz',
    name: 'Ingwaz',
    symbol: 'ᛜ',
    archetype: 'Fertility & Completion',
    element: 'earth',
    color: '#8FBC8F',
    challenge: 'Complete your creative cycle. What are you bringing to fruition?',
    description: 'Ingwaz represents fertility, completion, and the god Ing who brings the harvest.',
    keywords: ['fertility', 'completion', 'harvest', 'fruition', 'fulfillment'],
    meditation: 'Feel the fertility within. You are completing your cycle. What are you bringing to fruition?'
  },
  {
    id: 'dagaz',
    name: 'Dagaz',
    symbol: 'ᛞ',
    archetype: 'Transformation & Day',
    element: 'air',
    color: '#FFD700',
    challenge: 'Embrace transformation and new day. What dawn is breaking?',
    description: 'Dagaz represents transformation, the day, and the moment of breakthrough.',
    keywords: ['transformation', 'day', 'breakthrough', 'awakening', 'change'],
    meditation: 'Feel the dawn breaking. Transformation is at hand. What new day is dawning?'
  },
  {
    id: 'othala',
    name: 'Othala',
    symbol: 'ᛟ',
    archetype: 'Heritage & Home',
    element: 'earth',
    color: '#A0522D',
    challenge: 'Honor your heritage and home. What legacy are you building?',
    description: 'Othala represents heritage, home, and the ancestral land that sustains us.',
    keywords: ['heritage', 'home', 'ancestral', 'legacy', 'inheritance'],
    meditation: 'Feel your ancestral connection. You are building a legacy. What heritage honors you?'
  }
];