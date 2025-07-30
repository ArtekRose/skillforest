import React, { useState, useEffect } from 'react';
import { Calendar, Activity, Brain, Heart, Zap, TrendingUp, BookOpen, Sparkles, ChevronRight, Plus, X, BarChart3, Target, Compass, Moon, Sun, Lock, Unlock } from 'lucide-react';
import { TarotRuneSelector } from './components/TarotRuneSelector';
import { ChallengeBoard } from './components/ChallengeBoard';
import { TarotCard } from './data/tarotDeck';
import { Rune } from './data/runeDeck';
import { getCurrentZodiacSign } from './data/zodiacSigns';
import { generateThemeFromSelections, ThemeColors } from './utils/goldenRatio';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sessions, setSessions] = useState([]);
  const [showAddSession, setShowAddSession] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [lockedTarotCards, setLockedTarotCards] = useState<TarotCard[]>([]);
  const [lockedRunes, setLockedRunes] = useState<Rune[]>([]);
  const [currentZodiacSign, setCurrentZodiacSign] = useState(getCurrentZodiacSign());
  const [theme, setTheme] = useState<ThemeColors>({
    primary: '#8B5CF6',
    secondary: '#F59E0B',
    accent: '#0EA5E9',
    background: '#1F2937',
    text: '#F9FAFB',
    gradient: 'from-purple-500 via-pink-500 to-indigo-500'
  });

  const [userProfile, setUserProfile] = useState({
    geneKey: 45,
    hexagram: 1,
    fasciaHealth: 65,
    strengthLevel: 70,
    mobilityScore: 75,
    eqScore: 68,
    sqScore: 72
  });

  // Load saved selections from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('tarotRuneSelections');
    if (saved) {
      const { tarotCards, runes, zodiacSign, timestamp } = JSON.parse(saved);
      const savedDate = new Date(timestamp);
      const currentDate = new Date();
      
      // Check if we're still in the same zodiac sign
      if (zodiacSign === currentZodiacSign.id) {
        setLockedTarotCards(tarotCards || []);
        setLockedRunes(runes || []);
      } else {
        // Clear selections if zodiac sign has changed
        localStorage.removeItem('tarotRuneSelections');
        setLockedTarotCards([]);
        setLockedRunes([]);
      }
    }
  }, [currentZodiacSign.id]);

  // Update theme when selections change
  useEffect(() => {
    const newTheme = generateThemeFromSelections(lockedTarotCards, lockedRunes);
    setTheme(newTheme);
  }, [lockedTarotCards, lockedRunes]);

  // Check for zodiac sign changes
  useEffect(() => {
    const checkZodiacSign = () => {
      const newZodiacSign = getCurrentZodiacSign();
      if (newZodiacSign.id !== currentZodiacSign.id) {
        setCurrentZodiacSign(newZodiacSign);
        // Clear locked selections when zodiac sign changes
        setLockedTarotCards([]);
        setLockedRunes([]);
        localStorage.removeItem('tarotRuneSelections');
      }
    };

    // Check every hour for zodiac sign changes
    const interval = setInterval(checkZodiacSign, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, [currentZodiacSign.id]);

  const handleSelectionsLocked = (tarotCards: TarotCard[], runes: Rune[]) => {
    setLockedTarotCards(tarotCards);
    setLockedRunes(runes);
    
    // Save to localStorage
    localStorage.setItem('tarotRuneSelections', JSON.stringify({
      tarotCards,
      runes,
      zodiacSign: currentZodiacSign.id,
      timestamp: new Date().toISOString()
    }));
  };

  // Sample data for recommendations
  const recommendations = {
    fascia: [
      { title: "Myofascial Release Flow", duration: "15 min", intensity: "Low", description: "Gentle rolling and stretching to release tension" },
      { title: "Dynamic Fascia Mobility", duration: "20 min", intensity: "Medium", description: "Movement patterns to improve fascial elasticity" }
    ],
    strength: [
      { title: "Functional Strength Circuit", duration: "30 min", intensity: "High", description: "Compound movements for full-body strength" },
      { title: "Core Stabilization", duration: "25 min", intensity: "Medium", description: "Deep core work for better posture and stability" }
    ],
    eq: [
      { title: "Shadow Work Meditation", duration: "20 min", type: "Depth Psychology", description: "Explore unconscious patterns through guided imagery" },
      { title: "Emotional Alchemy Practice", duration: "15 min", type: "Gene Keys", description: "Transform reactive patterns into wisdom" }
    ],
    sq: [
      { title: "I-Ching Contemplation", duration: "30 min", hexagram: userProfile.hexagram, description: "Deep dive into your current hexagram's wisdom" },
      { title: "Gene Key Activation", duration: "25 min", geneKey: userProfile.geneKey, description: "Embodiment practice for your Gene Key gift" }
    ]
  };

  const sessionTypes = [
    { id: 'fascia', name: 'Fascia Work', icon: '🌊', color: 'bg-blue-500' },
    { id: 'strength', name: 'Strength Training', icon: '💪', color: 'bg-red-500' },
    { id: 'mobility', name: 'Mobility Flow', icon: '🤸', color: 'bg-green-500' },
    { id: 'meditation', name: 'Meditation', icon: '🧘', color: 'bg-purple-500' },
    { id: 'shadow', name: 'Shadow Work', icon: '🌑', color: 'bg-gray-600' },
    { id: 'contemplation', name: 'I-Ching Study', icon: '☯️', color: 'bg-indigo-500' }
  ];

  const addSession = (session) => {
    const newSession = {
      ...session,
      id: Date.now(),
      date: new Date().toISOString()
    };
    setSessions([newSession, ...sessions]);
    setShowAddSession(false);
    
    // Update scores based on session type
    const updates = { ...userProfile };
    if (session.type === 'fascia') updates.fasciaHealth = Math.min(100, updates.fasciaHealth + 2);
    if (session.type === 'strength') updates.strengthLevel = Math.min(100, updates.strengthLevel + 2);
    if (session.type === 'mobility') updates.mobilityScore = Math.min(100, updates.mobilityScore + 2);
    if (session.type === 'meditation' || session.type === 'shadow') updates.eqScore = Math.min(100, updates.eqScore + 1);
    if (session.type === 'contemplation') updates.sqScore = Math.min(100, updates.sqScore + 1);
    setUserProfile(updates);
  };

  const SessionForm = () => {
    const [formData, setFormData] = useState({
      type: 'fascia',
      duration: 30,
      intensity: 5,
      notes: ''
    });

    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${darkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-md`}>
        <div className={`w-full max-w-md rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} p-6 shadow-2xl transform transition-all duration-300 scale-95 hover:scale-100`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Log Session</h3>
            <button onClick={() => setShowAddSession(false)} className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Session Type</label>
              <div className="grid grid-cols-2 gap-2">
                {sessionTypes.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setFormData({...formData, type: type.id})}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      formData.type === type.id 
                        ? 'border-purple-500 bg-purple-500/20' 
                        : darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <span className="text-2xl mr-2">{type.icon}</span>
                    <span className="text-sm">{type.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Duration (minutes)</label>
              <input
                type="number"
                value={formData.duration}
                onChange={(e) => setFormData({...formData, duration: parseInt(e.target.value)})}
                className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'} border focus:border-purple-500 focus:outline-none transition-colors`}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Intensity (1-10)</label>
              <input
                type="range"
                min="1"
                max="10"
                value={formData.intensity}
                onChange={(e) => setFormData({...formData, intensity: parseInt(e.target.value)})}
                className="w-full accent-purple-500"
              />
              <div className="flex justify-between text-xs mt-1">
                <span>Light</span>
                <span className="font-bold text-purple-400">{formData.intensity}</span>
                <span>Intense</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Notes</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'} border focus:border-purple-500 focus:outline-none transition-colors`}
                rows="3"
                placeholder="How did it feel? Any insights?"
              />
            </div>
            
            <button
              onClick={() => addSession(formData)}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Log Session
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Dashboard = () => (
    <div className="space-y-6 animate-fadeIn">
      {/* Zodiac Sign Display */}
      <div className={`p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold flex items-center">
            <Compass className="w-6 h-6 mr-2" style={{ color: currentZodiacSign.color }} />
            Current Vedic Zodiac
          </h3>
          <div className="text-right">
            <p className="text-sm opacity-70">{currentZodiacSign.sanskritName}</p>
            <p className="font-semibold" style={{ color: currentZodiacSign.color }}>
              {currentZodiacSign.name}
            </p>
          </div>
        </div>
        <p className="text-gray-300 text-sm">{currentZodiacSign.description}</p>
      </div>

      {/* Health Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transform hover:scale-105 transition-all duration-300`}>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium opacity-70">Fascia Health</h4>
            <Zap className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-3xl font-bold text-blue-400">{userProfile.fasciaHealth}%</div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
            <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full transition-all duration-500" style={{width: `${userProfile.fasciaHealth}%`}}></div>
          </div>
        </div>
        
        <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transform hover:scale-105 transition-all duration-300`}>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium opacity-70">Strength Level</h4>
            <Activity className="w-5 h-5 text-red-400" />
          </div>
          <div className="text-3xl font-bold text-red-400">{userProfile.strengthLevel}%</div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
            <div className="bg-gradient-to-r from-red-400 to-orange-400 h-2 rounded-full transition-all duration-500" style={{width: `${userProfile.strengthLevel}%`}}></div>
          </div>
        </div>
        
        <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transform hover:scale-105 transition-all duration-300`}>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium opacity-70">EQ Score</h4>
            <Heart className="w-5 h-5 text-purple-400" />
          </div>
          <div className="text-3xl font-bold text-purple-400">{userProfile.eqScore}</div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-500" style={{width: `${userProfile.eqScore}%`}}></div>
          </div>
        </div>
        
        <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transform hover:scale-105 transition-all duration-300`}>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium opacity-70">SQ Score</h4>
            <Sparkles className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="text-3xl font-bold text-indigo-400">{userProfile.sqScore}</div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
            <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-2 rounded-full transition-all duration-500" style={{width: `${userProfile.sqScore}%`}}></div>
          </div>
        </div>
      </div>
      
      <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-purple-400" />
          Recent Sessions
        </h3>
        <div className="space-y-3">
          {sessions.slice(0, 5).map(session => {
            const type = sessionTypes.find(t => t.id === session.type);
            return (
              <div key={session.id} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-200'} hover:bg-gray-700 transition-colors`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{type?.icon}</span>
                    <div>
                      <p className="font-medium">{type?.name}</p>
                      <p className="text-sm opacity-70">{session.duration} min • Intensity {session.intensity}/10</p>
                    </div>
                  </div>
                  <p className="text-sm opacity-50">{new Date(session.date).toLocaleDateString()}</p>
                </div>
              </div>
            );
          })}
          {sessions.length === 0 && (
            <p className="text-center py-8 opacity-50">No sessions logged yet. Start tracking your journey!</p>
          )}
        </div>
      </div>
    </div>
  );

  const Recommendations = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Personalized Training Recommendations</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-blue-400" />
              Fascia Training
            </h4>
            <div className="grid gap-3">
              {recommendations.fascia.map((rec, i) => (
                <div key={i} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-200'} hover:bg-gray-700 transition-all cursor-pointer group`}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h5 className="font-medium group-hover:text-blue-400 transition-colors">{rec.title}</h5>
                      <p className="text-sm opacity-70 mt-1">{rec.description}</p>
                      <div className="flex space-x-4 mt-2 text-xs">
                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" />{rec.duration}</span>
                        <span className="flex items-center"><Activity className="w-3 h-3 mr-1" />{rec.intensity}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              EQ Development (Depth Psychology & Gene Keys)
            </h4>
            <div className="grid gap-3">
              {recommendations.eq.map((rec, i) => (
                <div key={i} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-200'} hover:bg-gray-700 transition-all cursor-pointer group`}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h5 className="font-medium group-hover:text-purple-400 transition-colors">{rec.title}</h5>
                      <p className="text-sm opacity-70 mt-1">{rec.description}</p>
                      <div className="flex space-x-4 mt-2 text-xs">
                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" />{rec.duration}</span>
                        <span className="flex items-center"><BookOpen className="w-3 h-3 mr-1" />{rec.type}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <Compass className="w-5 h-5 mr-2 text-indigo-400" />
              SQ Development (I-Ching & Spiritual Practice)
            </h4>
            <div className="grid gap-3">
              {recommendations.sq.map((rec, i) => (
                <div key={i} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-200'} hover:bg-gray-700 transition-all cursor-pointer group`}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h5 className="font-medium group-hover:text-indigo-400 transition-colors">{rec.title}</h5>
                      <p className="text-sm opacity-70 mt-1">{rec.description}</p>
                      <div className="flex space-x-4 mt-2 text-xs">
                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" />{rec.duration}</span>
                        {rec.hexagram && <span className="flex items-center">Hexagram {rec.hexagram}</span>}
                        {rec.geneKey && <span className="flex items-center">Gene Key {rec.geneKey}</span>}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Progress = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <BarChart3 className="w-6 h-6 mr-2 text-purple-400" />
          Your Journey Progress
        </h3>
        
        <div className="space-y-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Physical Development</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Fascia Health</span>
                  <span className="text-sm font-medium text-blue-400">{userProfile.fasciaHealth}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-3 rounded-full transition-all duration-500" style={{width: `${userProfile.fasciaHealth}%`}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Strength</span>
                  <span className="text-sm font-medium text-red-400">{userProfile.strengthLevel}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-red-400 to-orange-400 h-3 rounded-full transition-all duration-500" style={{width: `${userProfile.strengthLevel}%`}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Mobility</span>
                  <span className="text-sm font-medium text-green-400">{userProfile.mobilityScore}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-3 rounded-full transition-all duration-500" style={{width: `${userProfile.mobilityScore}%`}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Consciousness Development</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Emotional Intelligence (EQ)</span>
                  <span className="text-sm font-medium text-purple-400">{userProfile.eqScore}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full transition-all duration-500" style={{width: `${userProfile.eqScore}%`}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Spiritual Intelligence (SQ)</span>
                  <span className="text-sm font-medium text-indigo-400">{userProfile.sqScore}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-indigo-400 to-blue-400 h-3 rounded-full transition-all duration-500" style={{width: `${userProfile.sqScore}%`}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/20' : 'bg-purple-100'} border border-purple-500/30`}>
            <h5 className="font-semibold mb-2 text-purple-300">Your Spiritual Profile</h5>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="opacity-70">Current I-Ching Hexagram:</span>
                <p className="font-medium text-lg">#{userProfile.hexagram} - Creative Heaven</p>
              </div>
              <div>
                <span className="opacity-70">Your Gene Key:</span>
                <p className="font-medium text-lg">#{userProfile.geneKey} - Synergy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Archetypes = () => (
    <div className="space-y-6 animate-fadeIn">
      <TarotRuneSelector
        onSelectionsLocked={handleSelectionsLocked}
        lockedTarotCards={lockedTarotCards}
        lockedRunes={lockedRunes}
        currentZodiacSign={currentZodiacSign.id}
      />
    </div>
  );

  const Challenges = () => (
    <div className="space-y-6 animate-fadeIn">
      <ChallengeBoard
        tarotCards={lockedTarotCards}
        runes={lockedRunes}
      />
    </div>
  );

  return (
    <div 
      className={`min-h-screen transition-colors duration-300`}
      style={{
        backgroundColor: theme.background,
        color: theme.text
      }}
    >
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Holistic Life Tracker
            </h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          
          <nav className="flex space-x-2 mb-6 overflow-x-auto">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: Target },
              { id: 'archetypes', label: 'Archetypes', icon: Sparkles },
              { id: 'challenges', label: 'Challenges', icon: BookOpen },
              { id: 'recommendations', label: 'Recommendations', icon: Heart },
              { id: 'progress', label: 'Progress', icon: TrendingUp }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105' 
                    : darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </header>
        
        <main>
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'archetypes' && <Archetypes />}
          {activeTab === 'challenges' && <Challenges />}
          {activeTab === 'recommendations' && <Recommendations />}
          {activeTab === 'progress' && <Progress />}
        </main>
        
        <button
          onClick={() => setShowAddSession(true)}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl hover:shadow-purple-500/25 transform hover:scale-110 transition-all duration-300"
        >
          <Plus className="w-6 h-6" />
        </button>
        
        {showAddSession && <SessionForm />}
      </div>
    </div>
  );
};

export default App;
