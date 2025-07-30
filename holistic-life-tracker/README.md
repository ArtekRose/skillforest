# Holistic Life Tracker

A comprehensive life tracking application that combines physical health monitoring with spiritual and archetypal development through tarot cards and runes. The app features dynamic theming based on selected archetypes and interactive challenges for personal growth.

## Features

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

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd holistic-life-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

## Usage Guide

### 1. Dashboard
- View your current Vedic zodiac sign
- Monitor health metrics (fascia, strength, EQ, SQ)
- See recent sessions and progress

### 2. Archetypes Tab
- **Select Tarot Cards**: Choose up to 3 cards from 6 randomly generated options
- **Select Runes**: Choose up to 3 runes from 6 randomly generated options
- **Lock Selections**: Once locked, selections remain until the next zodiac sign
- **Golden Ratio**: Selections are generated using the golden ratio for "divine" randomness

### 3. Challenges Tab
- **Active Challenges**: Complete challenges based on your selected archetypes
- **Add Notes**: Reflect on your experiences with each challenge
- **Track Progress**: Monitor completion rates and insights
- **Interactive**: Mark challenges complete and add personal reflections

### 4. Recommendations Tab
- **Personalized Training**: Get recommendations based on your profile
- **Fascia Training**: Movement and release techniques
- **EQ Development**: Shadow work and emotional intelligence practices
- **SQ Development**: I-Ching and spiritual practices

### 5. Progress Tab
- **Visual Progress**: See your development across all areas
- **Spiritual Profile**: View your I-Ching hexagram and Gene Key
- **Trends**: Track improvements over time

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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on the repository.

---

**Note**: This application is designed for personal development and spiritual growth. The tarot and rune interpretations are for educational and self-reflection purposes.
