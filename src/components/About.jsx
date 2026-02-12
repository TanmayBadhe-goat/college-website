/**
 * About Component
 * Page describing Hogwarts history, founders, and magical legacy
 */
import React from 'react';

function About() {
  // House values representing each founder
  const values = [
    {
      icon: '💪',
      title: 'Courage',
      description: 'Bravery in the face of darkness. Standing up when its easier to step back. Because heroes arent born...they are trained.'
    },
    {
      icon: '🦅',
      title: 'Wisdom',
      description: 'Curiosity that never sleeps. The power of knowledge and the responsibility to use it wisely. Smart is cool. Always.'
    },
    {
      icon: '🤝',
      title: 'Loyalty',
      description: 'Hard work. Fair play. Real friendships. Because magic is stronger when we stand together.'
    },
    {
      icon: '🐍',
      title: 'Ambition',
      description: 'Big dreams. Bigger determination. Greatness doesnt apologize....it achieves.'
    }
  ];

  // The Four Founders
  const leadership = [
    {
      name: 'Godric Gryffindor',
      position: 'Where dwell the brave at heart.',
      image: '🦁'
    },
    {
      name: 'Rowena Ravenclaw',
      position: 'Wit beyond measure is mans greatest treasure.',
      image: '🦅'
    },
    {
      name: 'Helga Hufflepuff',
      position: 'Ill teach the lot, and treat them just the same.',
      image: '🦡'
    },
    {
      name: 'Salazar Slytherin',
      position: 'Greatness requires ambition.',
      image: '🐍'
    }
  ];

  return (
    <div className="about">
      {/* Page Header */}
      <section className="page-header">
        <h1 className="page-title">About Hogwarts</h1>
        <p className="page-subtitle">A Thousand Years of Magical Excellence</p>
      </section>

      {/* History Section */}
      <section className="about-section">
        <div className="section-container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Our Legendary History</h2>
              <p>
                Founded in 990 AD by four extraordinary witches and wizards, Hogwarts has been the heart of magical education for centuries.
                Godric Gryffindor, Rowena Ravenclaw, Helga Hufflepuff, and Salazar Slytherin believed that young magical minds deserved guidance, discipline, and a little bit of adventure.
              </p>
              <p>
               Hidden deep within the Scottish Highlands, protected by powerful enchantments, Hogwarts appears to Muggles as nothing more than ancient ruins. But for those who receive the letter… it becomes home.
              </p>
              <p>
                From Albus Dumbledore to Newt Scamander, generations of brilliant witches and wizards have walked these enchanted halls.
                And trust us… the castle still whispers their stories at night.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <img src="/7.gif" alt="Hogwarts" className="about-gif" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-section">
        <div className="section-container">
          <div className="mission-grid">
            <div className="mission-card">
              <h3>⚡ Our Mission</h3>
              <p>
               To nurture magical talent with discipline, creativity, and responsibility.
               We prepare witches and wizards not just to cast spells but to stand against darkness, protect the wizarding world, and maybe pass their exams without cheating.
              </p>
            </div>
            <div className="mission-card">
              <h3>🔮 Our Vision</h3>
              <p>
                To remain the worlds most prestigious magical institution, where students from all houses grow beyond rivalry, build lifelong bonds, and discover who they truly are.
                Because at Hogwarts… you dont just learn magic.
                You become it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="section-container">
          <h2 className="section-title">The Four Pillars of Magic</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <span className="value-icon">{value.icon}</span>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <div className="section-container">
          <h2 className="section-title">The Four Founders</h2>
          <p className="section-subtitle">The legendary witches and wizards who built Hogwarts</p>
          <div className="leadership-grid">
            {leadership.map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-image">{leader.image}</div>
                <h3 className="leader-name">{leader.name}</h3>
                <p className="leader-position">{leader.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
