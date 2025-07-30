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