/**
 * Career Page - Wizarding Careers
 * Magical career paths and Ministry positions
 */
function Career() {
  const careers = [
    {
      icon: '🛡️',
      title: 'Auror',
      department: 'Ministry of Magic',
      description: 'Dark wizard catchers. Requires NEWT in Defense Against Dark Arts, Potions, Charms, and Transfiguration.',
      requirements: ['5 N.E.W.T.s minimum', '3 years training', 'Clean record']
    },
    {
      icon: '🏥',
      title: 'Healer',
      department: "St Mungo's Hospital",
      description: 'Magical medical professionals treating spell damage, creature injuries, and magical maladies.',
      requirements: ['N.E.W.T. in Potions, Herbology, Charms', 'Transfiguration helpful']
    },
    {
      icon: '🐉',
      title: 'Magizoologist',
      department: 'Department for Regulation of Magical Creatures',
      description: 'Study, care for, and protect magical creatures around the world.',
      requirements: ['N.E.W.T. in Care of Magical Creatures', 'Fieldwork experience']
    },
    {
      icon: '⚗️',
      title: 'Potioneer',
      department: 'Various',
      description: 'Research and develop new potions for medical, commercial, or experimental purposes.',
      requirements: ['Outstanding in Potions', 'Herbology knowledge']
    },
    {
      icon: '🏦',
      title: 'Curse Breaker',
      department: 'Gringotts Wizarding Bank',
      description: 'Work with ancient artifacts and tombs, breaking protective enchantments.',
      requirements: ['Arithmancy', 'Ancient Runes', 'Defense Against Dark Arts']
    },
    {
      icon: '📰',
      title: 'Magical Journalist',
      department: 'Daily Prophet / The Quibbler',
      description: 'Report on wizarding news, events, and investigations.',
      requirements: ['Strong writing skills', 'Quick Quotes Quill proficiency']
    }
  ];

  return (
    <div className="career-page">
      <section className="page-header">
        <h1 className="page-title">Wizarding Careers</h1>
        <p className="page-subtitle">Your Magical Future Awaits</p>
      </section>

      <section className="container">
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          "It's our choices that show what we truly are, far more than our abilities." - Albus Dumbledore
        </p>

        <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {careers.map((career, index) => (
            <div key={index} className="card">
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '0.5rem' }}>{career.icon}</span>
              <h3>{career.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                {career.department}
              </p>
              <p style={{ marginBottom: '1rem' }}>{career.description}</p>
              <div style={{ fontSize: '0.9rem' }}>
                <strong>Requirements:</strong>
                <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
                  {career.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          marginTop: '3rem', 
          padding: '2rem', 
          background: 'rgba(212, 175, 55, 0.1)', 
          borderRadius: '12px', 
          border: '2px solid var(--accent-dark)'
        }}>
          <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>🎯 Career Counseling</h3>
          <p style={{ marginBottom: '1rem' }}>
            Fifth-year students will have career advice sessions with their Head of House to discuss 
            N.E.W.T. subject choices and future career paths.
          </p>
          <ul>
            <li>📋 Career pamphlets available from your Head of House</li>
            <li>🎤 Guest speakers from various magical professions</li>
            <li>💼 Work experience opportunities during summer holidays</li>
            <li>🤝 Connections with the Department of Magical Employment</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Career;
