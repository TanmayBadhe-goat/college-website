/**
 * Student Portal - Wizard Student Portal
 * House points, spell progress, and magical grades
 */
function StudentPortal() {
  const housePoints = [
    { house: 'Gryffindor', points: 472, icon: '🦁', color: '#740001' },
    { house: 'Slytherin', points: 456, icon: '🐍', color: '#1A472A' },
    { house: 'Ravenclaw', points: 443, icon: '🦅', color: '#0E1A40' },
    { house: 'Hufflepuff', points: 428, icon: '🦡', color: '#FFD800' }
  ];

  const portalFeatures = [
    {
      icon: '🧙',
      title: 'Wizard Profile',
      description: 'View your house, wand details, and magical achievements.'
    },
    {
      icon: '📊',
      title: 'O.W.L. Results',
      description: 'Check your Ordinary Wizarding Level examination grades.'
    },
    {
      icon: '📅',
      title: 'Class Schedule',
      description: 'View your timetable including moving staircases routes.'
    },
    {
      icon: '✨',
      title: 'Spell Progress',
      description: 'Track mastery of spells across all subjects.'
    },
    {
      icon: '🏆',
      title: 'House Points',
      description: 'Monitor your contributions to the House Cup.'
    },
    {
      icon: '🧪',
      title: 'Potion Recipes',
      description: 'Access your saved potion recipes and brewing notes.'
    }
  ];

  return (
    <div className="student-portal-page">
      <section className="page-header">
        <h1 className="page-title">Wizard Portal</h1>
        <p className="page-subtitle">Access Your Magical Records</p>
      </section>

      <section className="container">
        {/* House Cup Standings */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', textAlign: 'center' }}>
            🏆 House Cup Standings
          </h2>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {housePoints.map((house, index) => (
              <div key={index} className="card" style={{ textAlign: 'center', borderTop: `4px solid ${house.color}` }}>
                <span style={{ fontSize: '3rem' }}>{house.icon}</span>
                <h3 style={{ margin: '0.5rem 0' }}>{house.house}</h3>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
                  {house.points}
                </p>
                <p style={{ fontSize: '0.9rem' }}>points</p>
              </div>
            ))}
          </div>
        </div>

        {/* Portal Features */}
        <h2 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>Portal Features</h2>
        <div className="card-grid">
          {portalFeatures.map((feature, index) => (
            <div key={index} className="card">
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Demo Notice */}
        <div style={{ 
          marginTop: '3rem', 
          padding: '1.5rem', 
          background: 'rgba(212, 175, 55, 0.1)', 
          borderRadius: '12px', 
          border: '2px solid var(--accent-dark)',
          textAlign: 'center'
        }}>
          <p style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>
            🪄 This is a demo portal. The Trace prevents actual magical operations through Muggle technology.
          </p>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            For full access, please use an enchanted quill at the actual Hogwarts castle.
          </p>
        </div>
      </section>
    </div>
  );
}

export default StudentPortal;
