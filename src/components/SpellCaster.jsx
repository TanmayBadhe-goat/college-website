import React, { useState } from 'react';
import { motion } from 'framer-motion';

const spells = {
  'lumos': {
    name: 'Lumos',
    effect: 'Brightens the magical aura',
    action: () => {
      document.documentElement.style.setProperty('--accent-light', '#FFD700');
      document.documentElement.style.setProperty('--accent-color', '#FFD700');
    },
    emoji: '💡'
  },
  'alohomora': {
    name: 'Alohomora',
    effect: 'Unlocks the Restricted Section',
    action: () => {
      alert('🔓 The Restricted Section is now unlocked! Access forbidden knowledge...');
    },
    emoji: '🔓'
  },
  'expelliarmus': {
    name: 'Expelliarmus',
    effect: 'Disarms all distractions',
    action: () => {
      document.body.style.filter = 'grayscale(0%)';
      alert('⚔️ All distractions have been disarmed! Focus mode activated.');
    },
    emoji: '⚔️'
  },
  'accio': {
    name: 'Accio',
    effect: 'Summons information',
    action: () => {
      alert('📜 Information summoned! Check your nearest notice board.');
    },
    emoji: '📜'
  },
  'riddikulus': {
    name: 'Riddikulus',
    effect: 'Transforms fears into laughter',
    action: () => {
      document.body.style.transform = 'scaleX(-1)';
      setTimeout(() => {
        document.body.style.transform = 'scaleX(1)';
      }, 2000);
    },
    emoji: '😂'
  },
  'expecto patronum': {
    name: 'Expecto Patronum',
    effect: 'Summons your guardian spirit',
    action: () => {
      alert('🦌 Your Patronus has been summoned! You are protected.');
    },
    emoji: '🦌'
  }
};

const SpellCaster = () => {
  const [input, setInput] = useState('');
  const [castSpell, setCastSpell] = useState(null);
  const [particles, setParticles] = useState([]);

  const handleSpellCast = (e) => {
    e.preventDefault();
    const spell = spells[input.toLowerCase().trim()];
    
    if (spell) {
      setCastSpell(spell);
      spell.action();
      
      // Create particle effect
      const newParticles = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        angle: (i / 12) * Math.PI * 2,
        distance: 100 + Math.random() * 50,
      }));
      setParticles(newParticles);

      setTimeout(() => {
        setCastSpell(null);
        setInput('');
      }, 2000);
    } else {
      alert('❌ That spell is not in the Hogwarts curriculum. Try: lumos, alohomora, expelliarmus, accio, riddikulus, or expecto patronum');
    }
  };

  return (
    <div className="spell-caster-container" style={{ margin: '2rem 0' }}>
      <form onSubmit={handleSpellCast} className="parchment-card" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>✨ Cast a Spell ✨</h3>
        <p style={{ textAlign: 'center', fontSize: '0.9rem', marginBottom: '1rem', fontStyle: 'italic' }}>
          Whisper an ancient incantation to unlock magical features...
        </p>
        
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a spell..."
            style={{
              flex: 1,
              padding: '0.75rem',
              border: '2px solid var(--accent-color)',
              borderRadius: '4px',
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: 'var(--text-color)',
            }}
          />
          <button 
            type="submit"
            className="btn btn-primary"
            style={{ padding: '0.75rem 1.5rem' }}
          >
            Cast 🪄
          </button>
        </div>

        {castSpell && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{
              marginTop: '1rem',
              padding: '1rem',
              backgroundColor: 'rgba(212, 175, 55, 0.1)',
              border: '2px solid var(--accent-color)',
              borderRadius: '4px',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{castSpell.emoji}</p>
            <p style={{ fontWeight: 'bold' }}>{castSpell.name}</p>
            <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>{castSpell.effect}</p>
          </motion.div>
        )}

        {/* Particle Effect */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1,
              scale: 1
            }}
            animate={{
              x: Math.cos(particle.angle) * particle.distance,
              y: Math.sin(particle.angle) * particle.distance,
              opacity: 0,
              scale: 0,
            }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              pointerEvents: 'none',
              fontSize: '1.5rem',
              zIndex: 999,
            }}
          >
            ✨
          </motion.div>
        ))}
      </form>

      <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-light)' }}>
        <p>Try spells like: <strong>lumos</strong>, <strong>alohomora</strong>, <strong>expelliarmus</strong></p>
      </div>
    </div>
  );
};

export default SpellCaster;
