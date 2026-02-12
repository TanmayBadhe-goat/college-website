/**
 * Admission Component - Hogwarts Enrollment
 * Magical acceptance letter request form
 */
import React, { useState } from 'react';

function Admission() {
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    owlAddress: '',
    dateOfBirth: '',
    bloodStatus: '',
    preferredHouse: '',
    wandCore: '',
    magicalAbility: '',
    patronus: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Your magical name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Muggle email is required (for backup)';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.owlAddress.trim()) {
      newErrors.owlAddress = 'Owl delivery address is required';
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }

    if (!formData.bloodStatus) {
      newErrors.bloodStatus = 'Please select your magical heritage';
    }

    if (!formData.magicalAbility.trim()) {
      newErrors.magicalAbility = 'Please describe any magical incidents';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must accept the Statute of Secrecy';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      alert('Please complete all required fields on your enrollment scroll.');
    } else {
      setErrors({});
      setIsSubmitted(true);
      alert('🦉 Your acceptance letter request has been sent via Owl Post!\n\nExpect your Hogwarts letter delivered by owl within 7 magical days.');
      
      setFormData({
        fullName: '',
        email: '',
        owlAddress: '',
        dateOfBirth: '',
        bloodStatus: '',
        preferredHouse: '',
        wandCore: '',
        magicalAbility: '',
        patronus: '',
        agreeTerms: false
      });
    }
  };

  return (
    <div className="admission">
      {/* Page Header */}
      <section className="page-header">
        <h1 className="page-title">Hogwarts Enrollment</h1>
        <p className="page-subtitle">Request Your Acceptance Letter</p>
      </section>

      {/* Admission Info Section */}
      <section className="admission-info">
        <div className="section-container">
          <div className="info-grid">
            <div className="info-card">
              <span className="info-icon">📜</span>
              <h3>Important Dates</h3>
              <ul>
                <li>Letters Sent: July 24th</li>
                <li>Diagon Alley Shopping: August</li>
                <li>Hogwarts Express: September 1st</li>
                <li>Sorting Ceremony: Evening of Sept 1st</li>
              </ul>
            </div>
            <div className="info-card">
              <span className="info-icon">⚡</span>
              <h3>Eligibility</h3>
              <ul>
                <li>Must show signs of magic by age 11</li>
                <li>Recorded in the Quill of Acceptance</li>
                <li>Name written in Book of Admittance</li>
                <li>All magical folk welcome</li>
              </ul>
            </div>
            <div className="info-card">
              <span className="info-icon">🧳</span>
              <h3>Required Equipment</h3>
              <ul>
                <li>Wand (Ollivanders recommended)</li>
                <li>Cauldron (pewter, standard size 2)</li>
                <li>Set of dress robes</li>
                <li>Spellbooks (list provided)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="form-section">
        <div className="section-container">
          <h2 className="section-title">Enrollment Scroll</h2>
          <p className="section-subtitle">Fill in your details with magical precision</p>

          {isSubmitted && (
            <div className="success-message">
              🦉 Your owl has been dispatched! Watch the skies for your acceptance letter!
            </div>
          )}

          <form className="admission-form" onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="form-section-title">Personal Information</div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Magical Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={errors.fullName ? 'error' : ''}
                />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Muggle Email (backup) *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="yourname@owl.post"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="owlAddress">Owl Delivery Address *</label>
                <input
                  type="text"
                  id="owlAddress"
                  name="owlAddress"
                  value={formData.owlAddress}
                  onChange={handleChange}
                  placeholder="Where should owl deliver your letter?"
                  className={errors.owlAddress ? 'error' : ''}
                />
                {errors.owlAddress && <span className="error-message">{errors.owlAddress}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="dateOfBirth">Date of Birth *</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className={errors.dateOfBirth ? 'error' : ''}
                />
                {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="bloodStatus">Magical Heritage *</label>
                <select
                  id="bloodStatus"
                  name="bloodStatus"
                  value={formData.bloodStatus}
                  onChange={handleChange}
                  className={errors.bloodStatus ? 'error' : ''}
                >
                  <option value="">Select Heritage</option>
                  <option value="pureblood">Pure-blood</option>
                  <option value="halfblood">Half-blood</option>
                  <option value="muggleborn">Muggle-born</option>
                  <option value="squib">Squib (hopeful)</option>
                </select>
                {errors.bloodStatus && <span className="error-message">{errors.bloodStatus}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="preferredHouse">Preferred House (optional)</label>
                <select
                  id="preferredHouse"
                  name="preferredHouse"
                  value={formData.preferredHouse}
                  onChange={handleChange}
                >
                  <option value="">Let the Sorting Hat decide</option>
                  <option value="gryffindor">Gryffindor 🦁</option>
                  <option value="slytherin">Slytherin 🐍</option>
                  <option value="ravenclaw">Ravenclaw 🦅</option>
                  <option value="hufflepuff">Hufflepuff 🦡</option>
                </select>
              </div>
            </div>

            {/* Magical Background */}
            <div className="form-section-title">Magical Background</div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="wandCore">Preferred Wand Core (optional)</label>
                <select
                  id="wandCore"
                  name="wandCore"
                  value={formData.wandCore}
                  onChange={handleChange}
                >
                  <option value="">The wand chooses the wizard</option>
                  <option value="phoenix">Phoenix Feather</option>
                  <option value="dragon">Dragon Heartstring</option>
                  <option value="unicorn">Unicorn Hair</option>
                  <option value="veela">Veela Hair</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="patronus">Expected Patronus (optional)</label>
                <input
                  type="text"
                  id="patronus"
                  name="patronus"
                  value={formData.patronus}
                  onChange={handleChange}
                  placeholder="e.g., Stag, Otter, Phoenix..."
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="magicalAbility">Describe any magical incidents *</label>
              <textarea
                id="magicalAbility"
                name="magicalAbility"
                value={formData.magicalAbility}
                onChange={handleChange}
                placeholder="Have you made anything strange happen when angry or scared? Floating objects? Talking to snakes? Accidental apparition?"
                rows="3"
                className={errors.magicalAbility ? 'error' : ''}
              ></textarea>
              {errors.magicalAbility && <span className="error-message">{errors.magicalAbility}</span>}
            </div>

            {/* Terms and Submit */}
            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                />
                <span>I solemnly swear to uphold the International Statute of Secrecy and not reveal the wizarding world to Muggles *</span>
              </label>
              {errors.agreeTerms && <span className="error-message">{errors.agreeTerms}</span>}
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              🦉 Send Request via Owl Post
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Admission;
