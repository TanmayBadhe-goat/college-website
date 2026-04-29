import React, { useState, useEffect } from 'react';

const MagicCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return newTrail.slice(-8);
      });
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) => prev.slice(1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        .magic-cursor-dot {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          width: 8px;
          height: 8px;
          background: var(--accent-color, #D4AF37);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease, width 0.2s, height 0.2s;
          box-shadow: 0 0 10px var(--accent-color, #D4AF37),
                      0 0 20px var(--accent-color, #D4AF37);
        }
        .magic-cursor-dot.clicking {
          width: 12px;
          height: 12px;
        }
        .magic-cursor-ring {
          position: fixed;
          pointer-events: none;
          z-index: 9998;
          width: 36px;
          height: 36px;
          border: 2px solid var(--accent-color, #D4AF37);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.2s, height 0.2s, border-color 0.2s;
          opacity: 0.5;
        }
        .magic-cursor-ring.clicking {
          width: 28px;
          height: 28px;
          opacity: 0.8;
        }
        .magic-cursor-trail {
          position: fixed;
          pointer-events: none;
          z-index: 9997;
          width: 4px;
          height: 4px;
          background: var(--accent-color, #D4AF37);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.3;
          transition: opacity 0.3s ease;
        }
        @media (max-width: 768px) {
          .magic-cursor-dot,
          .magic-cursor-ring,
          .magic-cursor-trail {
            display: none;
          }
        }
      `}</style>

      <div
        className={`magic-cursor-dot ${isClicking ? 'clicking' : ''}`}
        style={{ left: position.x, top: position.y }}
      />
      <div
        className={`magic-cursor-ring ${isClicking ? 'clicking' : ''}`}
        style={{ left: position.x, top: position.y }}
      />
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="magic-cursor-trail"
          style={{
            left: point.x,
            top: point.y,
            opacity: (index + 1) / trail.length * 0.3,
          }}
        />
      ))}
    </>
  );
};

export default MagicCursor;
