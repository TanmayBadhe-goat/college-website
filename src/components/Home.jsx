/*home */
import React from 'react';

function Home({ setCurrentPage }) {
  // Feature cards data - Magical subjects
  const features = [
    {
      gif: '/1.gif',
      title: 'Defense Against Dark Arts',
      description: 'Master protective spells and counter-curses from expert wizards.'
    },
    {
      gif: '/2.gif',
      title: 'Potions & Alchemy',
      description: 'Brew powerful elixirs under the guidance of skilled potion masters.'
    },
    {
      gif: '/3.gif',
      title: 'Transfiguration',
      description: 'Transform objects and master the art of magical metamorphosis.'
    },
    {
      gif: '/4.gif',
      title: 'Charms & Enchantments',
      description: 'Learn spells that make everyday magic extraordinary.'
    },
    {
      gif: '/5.gif',
      title: 'Magical Creatures',
      description: 'Study and care for fantastic beasts from around the world.'
    },
    {
      gif: '/6.gif',
      title: 'Divination & Prophecy',
      description: 'Unlock the mysteries of the future through ancient arts.'
    }
  ];

  // Statistics data - Magical achievements
  const stats = [
    { number: '1000+', label: 'Years of Magic' },
    { number: '50,000+', label: 'Wizards Trained' },
    { number: '100+', label: 'Master Wizards' },
    { number: '4', label: 'Noble Houses' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Hogwarts School of Witchcraft & Wizardry</h1>
          <p className="hero-subtitle">
            "Draco Dormiens Nunquam Titillandus" - Never Tickle a Sleeping Dragon
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => setCurrentPage('departments')}>Explore Houses</button>
            <button className="btn btn-secondary" onClick={() => setCurrentPage('about')}>Our Legacy</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <h2 className="section-title">Master the Magical Arts</h2>
          <p className="section-subtitle">
            Discover the ancient wisdom that has shaped the greatest witches and wizards
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-gif">
                  <img src={feature.gif} alt={feature.title} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Begin Your Magical Journey?</h2>
          <p className="cta-text">
            Join the ranks of legendary witches and wizards. Your acceptance letter awaits!
          </p>
          <button className="btn btn-primary btn-large" onClick={() => setCurrentPage('admission')}>Request Your Letter</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
