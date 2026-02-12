/**
 * Library Page - Hogwarts Library
 * Magical books and restricted section
 */
function Library() {
  const sections = [
    {
      icon: '📚',
      title: 'General Collection',
      description: 'Thousands of magical textbooks, encyclopedias, and reference materials for all subjects.'
    },
    {
      icon: '🔒',
      title: 'Restricted Section',
      description: 'Advanced dark arts texts. Requires signed permission from a professor.'
    },
    {
      icon: '📜',
      title: 'Ancient Archives',
      description: 'Rare manuscripts, historical records, and founding documents of Hogwarts.'
    },
    {
      icon: '🔮',
      title: 'Divination Texts',
      description: 'Prophecies, dream interpretation guides, and crystal gazing manuals.'
    }
  ];

  return (
    <div className="library-page">
      <section className="page-header">
        <h1 className="page-title">The Hogwarts Library</h1>
        <p className="page-subtitle">Guarded by Madam Pince</p>
      </section>

      <section className="container">
        <p className="section-subtitle">
          "The library contains tens of thousands of books on thousands of shelves. 
          Highly valuable and potentially dangerous books are kept in the Restricted Section."
        </p>

        <div className="card-grid">
          {sections.map((section, index) => (
            <div key={index} className="card">
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>{section.icon}</span>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px', border: '2px solid var(--accent-dark)' }}>
          <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>📖 Library Rules</h3>
          <ul>
            <li>🤫 Absolute silence must be maintained</li>
            <li>📕 Books must be returned within two weeks</li>
            <li>🚫 No food, drinks, or spellcasting in the library</li>
            <li>⚠️ Restricted Section requires professor's signed note</li>
            <li>🕐 Library Hours: 8 AM - 8 PM (Extended during exams)</li>
          </ul>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>📖 Notable Magical Texts</h3>
          <ul>
            <li>✨ "The Standard Book of Spells" - Miranda Goshawk</li>
            <li>🧪 "Advanced Potion-Making" - Libatius Borage</li>
            <li>🐉 "Fantastic Beasts and Where to Find Them" - Newt Scamander</li>
            <li>⚔️ "The Dark Forces: A Guide to Self-Protection"</li>
            <li>🔮 "Unfogging the Future" - Cassandra Vablatsky</li>
            <li>🌿 "One Thousand Magical Herbs and Fungi" - Phyllida Spore</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Library;
