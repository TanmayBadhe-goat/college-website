import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const houses = [
  { name: 'Gryffindor', color: '#740001', accent: '#D3A625', trait: 'Brave' },
  { name: 'Slytherin', color: '#1A472A', accent: '#5D5D5D', trait: 'Ambitious' },
  { name: 'Ravenclaw', color: '#0E1A40', accent: '#946B2D', trait: 'Wise' },
  { name: 'Hufflepuff', color: '#FFD800', accent: '#000000', trait: 'Loyal' }
];

const SortingHat = ({ onSort, onResetTheme }) => {
  const [isSorting, setIsSorting] = useState(false);
  const [sortedHouse, setSortedHouse] = useState(null);

  const startSorting = () => {
    setIsSorting(true);
    setTimeout(() => {
      const randomHouse = houses[Math.floor(Math.random() * houses.length)];
      setSortedHouse(randomHouse);
      setIsSorting(false);
      if (onSort) onSort(randomHouse);
    }, 3000);
  };

  return (
    <div className="sorting-hat-container parchment-card" style={{ maxWidth: '600px', margin: '2rem auto', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '1rem' }}>The Sorting Ceremony</h2>
      
      <AnimatePresence mode="wait">
        {!isSorting && !sortedHouse && (
          <motion.div
            key="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'white' }}>
              "There's nothing hidden in your head the Sorting Hat can't see..."
            </p>
            <button className="btn btn-primary btn-large" onClick={startSorting}>
              Put on the Hat
            </button>
          </motion.div>
        )}

        {isSorting && (
          <motion.div
            key="sorting"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: [0, -5, 5, -5, 5, 0] }}
            transition={{ rotate: { repeat: Infinity, duration: 0.5 } }}
            exit={{ scale: 1.2, opacity: 0 }}
          >
            <div style={{ fontSize: '3rem' }}>🧙‍♂️</div>
            <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>Hmm... let me see...</p>
          </motion.div>
        )}

        {sortedHouse && !isSorting && (
          <motion.div
            key="result"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 12 }}
          >
            <h3 style={{ color: sortedHouse.color, fontSize: '2.5rem', margin: '1rem 0' }}>
              {sortedHouse.name}!
            </h3>
            <p style={{ fontSize: '1.1rem' }}>
              Better be... <strong>{sortedHouse.name}</strong>! <br/>
              Known for being <em>{sortedHouse.trait}</em>.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <button className="btn btn-secondary" onClick={() => { setSortedHouse(null); }}>
                Sort Again
              </button>
              {onResetTheme && (
                <button className="btn btn-outline" onClick={onResetTheme}>
                  Reset Theme
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SortingHat;
