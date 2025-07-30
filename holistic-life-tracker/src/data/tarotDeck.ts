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
  {
    id: 'high-priestess',
    name: 'The High Priestess',
    archetype: 'Intuition & Mystery',
    element: 'water',
    color: '#0EA5E9',
    challenge: 'Listen to your inner voice. What wisdom is waiting to be heard?',
    description: 'The High Priestess represents deep intuition, hidden knowledge, and the mysteries of the unconscious.',
    keywords: ['intuition', 'mystery', 'wisdom', 'secrets', 'inner knowing'],
    meditation: 'Enter the temple of your heart. What secrets does your soul want to reveal?'
  },
  {
    id: 'empress',
    name: 'The Empress',
    archetype: 'Fertility & Nurturing',
    element: 'earth',
    color: '#8FBC8F',
    challenge: 'Nurture your creative projects and relationships. What needs your loving attention?',
    description: 'The Empress represents abundance, creativity, and the nurturing power of the divine feminine.',
    keywords: ['fertility', 'nurturing', 'abundance', 'creativity', 'beauty'],
    meditation: 'Feel the earth beneath you. You are a creator. What are you bringing to life?'
  },
  {
    id: 'emperor',
    name: 'The Emperor',
    archetype: 'Authority & Structure',
    element: 'fire',
    color: '#A0522D',
    challenge: 'Establish healthy boundaries and structure. Where do you need to take charge?',
    description: 'The Emperor represents authority, leadership, and the power to create order from chaos.',
    keywords: ['authority', 'structure', 'leadership', 'stability', 'control'],
    meditation: 'Stand in your power. You are the ruler of your domain. What structures serve your highest good?'
  },
  {
    id: 'hierophant',
    name: 'The Hierophant',
    archetype: 'Tradition & Spirituality',
    element: 'earth',
    color: '#8B5CF6',
    challenge: 'Connect with your spiritual tradition. What wisdom do you seek?',
    description: 'The Hierophant represents spiritual guidance, tradition, and the bridge between heaven and earth.',
    keywords: ['tradition', 'spirituality', 'guidance', 'education', 'conformity'],
    meditation: 'Open to divine guidance. What spiritual truth is calling to you?'
  },
  {
    id: 'lovers',
    name: 'The Lovers',
    archetype: 'Choice & Harmony',
    element: 'air',
    color: '#F59E0B',
    challenge: 'Make choices aligned with your heart. What decision honors your true self?',
    description: 'The Lovers represent choice, harmony, and the integration of opposites.',
    keywords: ['choice', 'harmony', 'love', 'partnership', 'alignment'],
    meditation: 'Feel the harmony within. What choice brings you closer to your authentic self?'
  },
  {
    id: 'chariot',
    name: 'The Chariot',
    archetype: 'Willpower & Victory',
    element: 'water',
    color: '#3B82F6',
    challenge: 'Harness your willpower to overcome obstacles. What victory are you pursuing?',
    description: 'The Chariot represents determination, control, and the triumph of will over circumstance.',
    keywords: ['willpower', 'victory', 'control', 'determination', 'success'],
    meditation: 'Feel your inner strength. You have the power to overcome any obstacle. What are you determined to achieve?'
  },
  {
    id: 'strength',
    name: 'Strength',
    archetype: 'Inner Power & Courage',
    element: 'fire',
    color: '#DC2626',
    challenge: 'Find your inner strength. What fear can you face with courage?',
    description: 'Strength represents inner power, courage, and the gentle mastery of the wild within.',
    keywords: ['inner strength', 'courage', 'patience', 'compassion', 'mastery'],
    meditation: 'Feel your inner lion. You are stronger than you know. What fear can you tame with love?'
  },
  {
    id: 'hermit',
    name: 'The Hermit',
    archetype: 'Solitude & Wisdom',
    element: 'earth',
    color: '#A0522D',
    challenge: 'Seek wisdom in solitude. What truth are you discovering within?',
    description: 'The Hermit represents inner wisdom, solitude, and the light that guides others.',
    keywords: ['solitude', 'wisdom', 'guidance', 'introspection', 'enlightenment'],
    meditation: 'Go within. Your inner light guides the way. What wisdom are you uncovering?'
  },
  {
    id: 'wheel',
    name: 'Wheel of Fortune',
    archetype: 'Change & Cycles',
    element: 'fire',
    color: '#FFD700',
    challenge: 'Embrace the cycles of change. What transformation is unfolding?',
    description: 'The Wheel of Fortune represents the cycles of life, change, and the turning of fate.',
    keywords: ['change', 'cycles', 'fate', 'opportunity', 'transformation'],
    meditation: 'Feel the wheel turning. Change is constant. What new cycle are you entering?'
  },
  {
    id: 'justice',
    name: 'Justice',
    archetype: 'Balance & Truth',
    element: 'air',
    color: '#8B5CF6',
    challenge: 'Seek balance and truth. What needs to be brought into harmony?',
    description: 'Justice represents fairness, truth, and the balance of cause and effect.',
    keywords: ['balance', 'truth', 'fairness', 'cause', 'effect'],
    meditation: 'Feel the scales of justice. Truth brings balance. What needs to be set right?'
  },
  {
    id: 'hanged-man',
    name: 'The Hanged Man',
    archetype: 'Surrender & Perspective',
    element: 'water',
    color: '#0EA5E9',
    challenge: 'Surrender to a new perspective. What are you willing to let go of?',
    description: 'The Hanged Man represents surrender, sacrifice, and seeing things from a new angle.',
    keywords: ['surrender', 'sacrifice', 'perspective', 'suspension', 'enlightenment'],
    meditation: 'Hang in stillness. A new perspective awaits. What are you willing to sacrifice for wisdom?'
  },
  {
    id: 'death',
    name: 'Death',
    archetype: 'Transformation & Endings',
    element: 'water',
    color: '#374151',
    challenge: 'Embrace transformation. What needs to die for new life to emerge?',
    description: 'Death represents transformation, endings, and the natural cycle of change.',
    keywords: ['transformation', 'endings', 'change', 'rebirth', 'letting go'],
    meditation: 'Feel the cycle of death and rebirth. What transformation is calling to you?'
  },
  {
    id: 'temperance',
    name: 'Temperance',
    archetype: 'Balance & Moderation',
    element: 'fire',
    color: '#F59E0B',
    challenge: 'Find balance and moderation. What extremes can you harmonize?',
    description: 'Temperance represents balance, moderation, and the alchemy of opposites.',
    keywords: ['balance', 'moderation', 'harmony', 'alchemy', 'patience'],
    meditation: 'Feel the flow of harmony. Balance brings peace. What opposites can you unite?'
  },
  {
    id: 'devil',
    name: 'The Devil',
    archetype: 'Shadow & Attachment',
    element: 'fire',
    color: '#DC2626',
    challenge: 'Face your shadows and attachments. What are you chained to?',
    description: 'The Devil represents shadow work, attachment, and the illusions that bind us.',
    keywords: ['shadow', 'attachment', 'illusion', 'bondage', 'temptation'],
    meditation: 'Look at your chains. They are illusions. What are you ready to release?'
  },
  {
    id: 'tower',
    name: 'The Tower',
    archetype: 'Sudden Change & Revelation',
    element: 'fire',
    color: '#DC2626',
    challenge: 'Embrace sudden change and revelation. What false structures are crumbling?',
    description: 'The Tower represents sudden change, revelation, and the destruction of false beliefs.',
    keywords: ['sudden change', 'revelation', 'destruction', 'truth', 'awakening'],
    meditation: 'Feel the tower falling. Truth shatters illusion. What revelation is breaking through?'
  },
  {
    id: 'star',
    name: 'The Star',
    archetype: 'Hope & Inspiration',
    element: 'air',
    color: '#0EA5E9',
    challenge: 'Hold onto hope and inspiration. What dream are you following?',
    description: 'The Star represents hope, inspiration, and the light that guides us through darkness.',
    keywords: ['hope', 'inspiration', 'guidance', 'faith', 'healing'],
    meditation: 'Look to the stars. Hope is eternal. What dream lights your way?'
  },
  {
    id: 'moon',
    name: 'The Moon',
    archetype: 'Intuition & Illusion',
    element: 'water',
    color: '#8B5CF6',
    challenge: 'Trust your intuition through illusion. What truth lies beneath the surface?',
    description: 'The Moon represents intuition, illusion, and the mysteries of the unconscious mind.',
    keywords: ['intuition', 'illusion', 'mystery', 'dreams', 'unconscious'],
    meditation: 'Dive into the depths. Truth lies beneath illusion. What mystery calls to you?'
  },
  {
    id: 'sun',
    name: 'The Sun',
    archetype: 'Joy & Vitality',
    element: 'fire',
    color: '#FFD700',
    challenge: 'Embrace joy and vitality. What brings you pure happiness?',
    description: 'The Sun represents joy, vitality, and the radiance of authentic self-expression.',
    keywords: ['joy', 'vitality', 'success', 'happiness', 'authenticity'],
    meditation: 'Feel the sun within. You are radiant. What brings you pure joy?'
  },
  {
    id: 'judgement',
    name: 'Judgement',
    archetype: 'Awakening & Calling',
    element: 'fire',
    color: '#FFD700',
    challenge: 'Answer your higher calling. What awakening is calling to you?',
    description: 'Judgement represents awakening, calling, and the resurrection of the authentic self.',
    keywords: ['awakening', 'calling', 'resurrection', 'transformation', 'purpose'],
    meditation: 'Hear the call. You are being summoned to your higher purpose. What awakening awaits?'
  },
  {
    id: 'world',
    name: 'The World',
    archetype: 'Completion & Integration',
    element: 'earth',
    color: '#8FBC8F',
    challenge: 'Celebrate completion and integration. What cycle are you completing?',
    description: 'The World represents completion, integration, and the wholeness of the journey.',
    keywords: ['completion', 'integration', 'wholeness', 'achievement', 'harmony'],
    meditation: 'Feel the wholeness within. You are complete. What cycle are you celebrating?'
  }
];