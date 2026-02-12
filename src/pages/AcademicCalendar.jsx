/**
 * Academic Calendar - Hogwarts School Year
 * Magical events, exams, and important dates
 */
function AcademicCalendar() {
  const events = [
    { month: 'September', events: [
      { date: '1st', event: '🚂 Hogwarts Express Departs', type: 'major' },
      { date: '1st', event: '🎩 Sorting Ceremony', type: 'major' },
      { date: '2nd', event: '📚 Classes Begin', type: 'academic' }
    ]},
    { month: 'October', events: [
      { date: '31st', event: '🎃 Halloween Feast', type: 'celebration' },
      { date: 'TBD', event: '🏟️ First Quidditch Match', type: 'quidditch' }
    ]},
    { month: 'November', events: [
      { date: 'Weekends', event: '🏠 Hogsmeade Visits Begin (3rd years+)', type: 'social' },
      { date: 'TBD', event: '🏟️ Quidditch Matches Continue', type: 'quidditch' }
    ]},
    { month: 'December', events: [
      { date: 'Mid-Dec', event: '❄️ Christmas Holidays Begin', type: 'holiday' },
      { date: '25th', event: '🎄 Christmas Feast', type: 'celebration' }
    ]},
    { month: 'January', events: [
      { date: 'Early Jan', event: '📚 Classes Resume', type: 'academic' }
    ]},
    { month: 'February', events: [
      { date: '14th', event: '💝 Valentine\'s Day (unofficial)', type: 'social' },
      { date: 'TBD', event: '🏟️ Quidditch Matches', type: 'quidditch' }
    ]},
    { month: 'April', events: [
      { date: 'Mid-April', event: '🐣 Easter Holidays', type: 'holiday' }
    ]},
    { month: 'May', events: [
      { date: 'TBD', event: '🏆 Quidditch Cup Final', type: 'quidditch' }
    ]},
    { month: 'June', events: [
      { date: 'First Week', event: '📝 O.W.L. Examinations (5th Years)', type: 'exam' },
      { date: 'First Week', event: '📝 N.E.W.T. Examinations (7th Years)', type: 'exam' },
      { date: 'Second Week', event: '📝 End of Year Exams (All Years)', type: 'exam' },
      { date: 'Late June', event: '🏆 House Cup Ceremony', type: 'major' },
      { date: 'Late June', event: '🚂 Hogwarts Express Returns', type: 'major' }
    ]}
  ];

  return (
    <div className="academic-calendar-page">
      <section className="page-header">
        <h1 className="page-title">Academic Calendar</h1>
        <p className="page-subtitle">The Hogwarts School Year</p>
      </section>

      <section className="container">
        <div style={{ 
          marginBottom: '2rem',
          padding: '1.5rem',
          background: 'rgba(212, 175, 55, 0.1)',
          borderRadius: '12px',
          border: '2px solid var(--accent-dark)',
          textAlign: 'center'
        }}>
          <p style={{ fontStyle: 'italic' }}>
            "Hogwarts will always be there to welcome you home." - J.K. Rowling
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {events.map((monthData, index) => (
            <div key={index} className="card">
              <h3 style={{ 
                color: 'var(--accent-color)', 
                borderBottom: '2px solid var(--accent-dark)',
                paddingBottom: '0.5rem',
                marginBottom: '1rem'
              }}>
                📅 {monthData.month}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {monthData.events.map((event, idx) => (
                  <li key={idx} style={{ 
                    padding: '0.5rem 0',
                    borderBottom: idx < monthData.events.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none'
                  }}>
                    <strong style={{ color: 'var(--secondary-color)' }}>{event.date}:</strong>
                    <br />
                    {event.event}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>📌 Important Notes</h3>
          <ul>
            <li>⏰ Curfew: 9 PM for all students (prefects may patrol until 10 PM)</li>
            <li>🏠 Hogsmeade visits require signed permission from parent/guardian</li>
            <li>📝 O.W.L.s and N.E.W.T.s are overseen by the Wizarding Examinations Authority</li>
            <li>🏟️ Quidditch match dates subject to weather and Professor McGonagall's approval</li>
            <li>🎄 Students may remain at Hogwarts during Christmas with permission</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AcademicCalendar;
