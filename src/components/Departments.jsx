/**
 * Departments Component (Hogwarts Houses)
 * Displays the four noble houses and magical facilities
 */
import React from 'react';

function Departments() {
  // Hogwarts Houses data
  const houses = [
    {
      id: 1,
      name: 'Gryffindor',
      icon: '🦁',
      colors: 'Scarlet & Gold',
      founder: 'Godric Gryffindor',
      description: 'Gryffindor is home to the bold and fearless. If you run toward danger instead of away from it… welcome home.They value courage, bravery, nerve, and chivalry. Gryffindors dont wait for someone else to act they lead from the front.',
      traits: ['Courage', 'Bravery', 'Determination', 'Chivalry'],
      ghost: 'Nearly Headless Nick',
      commonRoom: 'Gryffindor Tower',
      element: 'Fire'
    },
    {
      id: 2,
      name: 'Slytherin',
      icon: '🐍',
      colors: 'Green & Silver',
      founder: 'Salazar Slytherin',
      description: 'Slytherins are strategic, focused, and determined to achieve their goals. They believe success isnt accidental its planned.Ambition, cunning, leadership, and resourcefulness define this house. They dont just dream big they execute bigger.',
      traits: ['Ambition', 'Cunning', 'Leadership', 'Resourcefulness'],
      ghost: 'The Bloody Baron',
      commonRoom: 'Slytherin Dungeon',
      element: 'Water'
    },
    {
      id: 3,
      name: 'Ravenclaw',
      icon: '🦅',
      colors: 'Blue & Bronze',
      founder: 'Rowena Ravenclaw',
      description: 'If your brain never switches off and curiosity is your superpower Ravenclaw might already be whispering your name.This house values intelligence, creativity, wisdom, and originality. They see the world differently and thats their magic.',
      traits: ['Intelligence', 'Creativity', 'Wisdom', 'Wit'],
      ghost: 'The Grey Lady',
      commonRoom: 'Ravenclaw Tower',
      element: 'Air'
    },
    {
      id: 4,
      name: 'Hufflepuff',
      icon: '🦡',
      colors: 'Yellow & Black',
      founder: 'Helga Hufflepuff',
      description: 'Hufflepuffs are the backbone of Hogwarts. Loyal, patient, hardworking they dont seek attention, but they always show up.This house believes in fairness, friendship, and effort over ego.',
      traits: ['Loyalty', 'Patience', 'Hard Work', 'Fair Play'],
      ghost: 'The Fat Friar',
      commonRoom: 'Hufflepuff Basement',
      element: 'Earth'
    }
  ];

  return (
    <div className="departments">
      {/* Page Header */}
      <section className="page-header">
        <h1 className="page-title">The Four Houses</h1>
        <p className="page-subtitle">"The Sorting Hat shall place you where you belong"</p>
      </section>

      {/* Houses Grid */}
      <section className="departments-section">
        <div className="section-container">
          <div className="departments-grid">
            {houses.map((house) => (
              <div key={house.id} className="department-card">
                {/* House Icon */}
                <div className="dept-icon">{house.icon}</div>
                
                {/* House Name */}
                <h3 className="dept-name">{house.name}</h3>
                
                {/* House Description */}
                <p className="dept-description">{house.description}</p>
                
                {/* House Traits */}
                <div className="dept-courses">
                  <h4>House Traits:</h4>
                  <div className="course-tags">
                    {house.traits.map((trait, index) => (
                      <span key={index} className="course-tag">{trait}</span>
                    ))}
                  </div>
                </div>
                
                {/* House Details */}
                <div className="dept-details">
                  <div className="detail-item">
                    <span className="detail-label">Colors:</span>
                    <span className="detail-value">{house.colors}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Ghost:</span>
                    <span className="detail-value">{house.ghost}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Element:</span>
                    <span className="detail-value">{house.element}</span>
                  </div>
                </div>
                
                {/* Common Room Info */}
                <button className="btn btn-outline" onClick={() => alert(`🏠 ${house.name} Common Room\n\n📍 Location: ${house.commonRoom}\n👻 House Ghost: ${house.ghost}\n🎨 Colors: ${house.colors}\n🌟 Founder: ${house.founder}`)}>
                  Visit Common Room
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Magical Facilities Section */}
      <section className="facilities-section">
        <div className="section-container">
          <h2 className="section-title">Magical Facilities</h2>
          <div className="facilities-grid">
            <div className="facility-item">
              <span className="facility-icon">🏟️</span>
              <h4>Quidditch Pitch</h4>
              <p>Professional broomstick arena where house rivalries get intense. Warning: Falling from broomsticks may occur.</p>
            </div>
            <div className="facility-item">
              <span className="facility-icon">📚</span>
              <h4>The Library</h4>
              <p>Home to thousands of magical books from beginner spells to forbidden knowledge</p>
            </div>
            <div className="facility-item">
              <span className="facility-icon">🧪</span>
              <h4>Potions Dungeon</h4>
              <p>Fully equipped brewing labs where precision matters. One wrong ingredient? Boom.</p>
            </div>
            <div className="facility-item">
              <span className="facility-icon">🌿</span>
              <h4>Greenhouses</h4>
              <p>Magical herbology gardens filled with rare and sometimes screaming plants.</p>
            </div>
            <div className="facility-item">
              <span className="facility-icon">🔭</span>
              <h4>Astronomy Tower</h4>
              <p>Star-gazing observatory used for celestial studies and late-night deep thinking.</p>
            </div>
            <div className="facility-item">
              <span className="facility-icon">🍽️</span>
              <h4>Great Hall</h4>
              <p>Enchanted ceiling. Four house tables. Unlimited food. Probably the most loved facility on campus.</p>
            </div>
            <div className="facility-item">
              <span className="facility-icon">🏥</span>
              <h4>Hospital Wing</h4>
              <p>Magical healing ward for spell accidents, broom crashes, and experimental potion disasters.</p>
            </div>
            <div className="facility-item">
              <span className="facility-icon">🚂</span>
              <h4>Hogwarts Express</h4>
              <p>The legendary journey from Platform 9¾ because every magical journey deserves a dramatic beginning.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Departments;
