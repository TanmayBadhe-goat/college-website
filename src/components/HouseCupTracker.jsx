import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HouseCupTracker = () => {
  const [points, setPoints] = useState({
    Gryffindor: 450,
    Slytherin: 420,
    Ravenclaw: 480,
    Hufflepuff: 390,
  });

  const [lastUpdate, setLastUpdate] = useState(null);

  const houses = [
    { name: 'Ravenclaw', color: '#0E1A40', accent: '#946B2D', icon: '🦅' },
    { name: 'Gryffindor', color: '#740001', accent: '#D3A625', icon: '🦁' },
    { name: 'Slytherin', color: '#1A472A', accent: '#5D5D5D', icon: '🐍' },
    { name: 'Hufflepuff', color: '#FFD800', accent: '#000000', icon: '🦡' },
  ];

  const sortedHouses = [...houses].sort((a, b) => points[b.name] - points[a.name]);
  const maxPoints = Math.max(...Object.values(points));

  const addPoints = (houseName, amount) => {
    setPoints(prev => ({
      ...prev,
      [houseName]: prev[houseName] + amount
    }));
    setLastUpdate(houseName);
    setTimeout(() => setLastUpdate(null), 2000);
  };

  return (
    <div className="house-cup-tracker parchment-card" style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>🏆 House Cup Standings 🏆</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {sortedHouses.map((house, index) => {
          const percentage = (points[house.name] / maxPoints) * 100;
          const isLeading = index === 0;
          
          return (
            <motion.div
              key={house.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                padding: '1rem',
                border: isLeading ? `3px solid ${house.accent}` : '1px solid var(--accent-dark)',
                borderRadius: '8px',
                backgroundColor: isLeading ? `${house.color}15` : 'transparent',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{house.icon}</span>
                  <span style={{ fontWeight: 'bold', color: house.color }}>{house.name}</span>
                  {isLeading && <span style={{ fontSize: '1.2rem' }}>👑</span>}
                </div>
                <motion.span
                  key={points[house.name]}
                  initial={{ scale: 1.3 }}
                  animate={{ scale: 1 }}
                  style={{ 
                    fontWeight: 'bold', 
                    fontSize: '1.2rem',
                    color: house.accent 
                  }}
                >
                  {points[house.name]} pts
                </motion.span>
              </div>

              {/* Progress Bar */}
              <div style={{
                width: '100%',
                height: '20px',
                backgroundColor: 'rgba(0,0,0,0.2)',
                borderRadius: '10px',
                overflow: 'hidden',
                marginBottom: '0.5rem',
              }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  style={{
                    height: '100%',
                    backgroundColor: house.color,
                    boxShadow: `0 0 10px ${house.accent}`,
                  }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => addPoints(house.name, 10)}
                  style={{
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.8rem',
                    backgroundColor: house.accent,
                    color: house.color,
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  +10 pts
                </button>
                <button
                  onClick={() => addPoints(house.name, 50)}
                  style={{
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.8rem',
                    backgroundColor: house.accent,
                    color: house.color,
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  +50 pts
                </button>
              </div>

              {lastUpdate === house.name && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '0.9rem',
                    color: house.accent,
                    fontStyle: 'italic',
                  }}
                >
                  ✨ Points awarded!
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', fontStyle: 'italic' }}>
        <p>Click buttons to award house points for exceptional magical achievements!</p>
      </div>
    </div>
  );
};

export default HouseCupTracker;
