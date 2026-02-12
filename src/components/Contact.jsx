/**
 * Contact Component - Hogwarts Contact
 * Magical ways to reach Hogwarts
 */
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
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

    if (!formData.name.trim()) {
      newErrors.name = 'Your name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      alert('Please fill in all required fields on your magical parchment.');
    } else {
      setErrors({});
      setIsSubmitted(true);
      alert('🦉 Your owl has been sent! Expect a response within 3-5 owl flights.');
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  // Magical contact methods
  const contactInfo = [
    {
      icon: '🦉',
      title: 'Owl Post',
      details: ['Hogwarts Castle, Scotland', 'Any owl will find us']
    },
    {
      icon: '🔥',
      title: 'Floo Network',
      details: ['Address: "HOGWARTS"', 'Speak clearly into flames']
    },
    {
      icon: '🚂',
      title: 'Hogwarts Express',
      details: ['Platform 9¾', "King's Cross Station, London"]
    },
    {
      icon: '🧹',
      title: 'By Broomstick',
      details: ['Follow the enchanted path', 'Mind the Whomping Willow']
    }
  ];

  return (
    <div className="contact">
      {/* Page Header */}
      <section className="page-header">
        <h1 className="page-title">Contact Hogwarts</h1>
        <p className="page-subtitle">Multiple Magical Ways to Reach Us</p>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="section-container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <span className="contact-icon">{info.icon}</span>
                <h3 className="contact-title">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="contact-detail">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="contact-form-section">
        <div className="section-container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2 className="form-title">Send an Owl</h2>
              <p className="form-subtitle">
                Prefer Muggle technology? Send your message here and our trained owls will deliver it.
              </p>

              {isSubmitted && (
                <div className="success-message">
                  🦉 Message sent successfully! An owl is on its way!
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Owl Return Address (Email) *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@owlpost.magic"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your inquiry about?"
                    className={errors.subject ? 'error' : ''}
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message on this enchanted parchment..."
                    rows="5"
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary">
                  🦉 Send via Owl Post
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="map-container">
              <h2 className="map-title">Find Hogwarts</h2>
              <div className="map-placeholder">
                <div className="map-content">
                  <span className="map-icon">🗺️</span>
                  <p>Marauder's Map</p>
                  <p className="map-address">"I solemnly swear that I am up to no good"</p>
                </div>
              </div>
              <div className="directions-box">
                <h4>How to Reach Hogwarts</h4>
                <ul>
                  <li>🚂 Hogwarts Express from Platform 9¾</li>
                  <li>🧹 Approved broomstick flight paths</li>
                  <li>🔮 Portkey (Ministry approved only)</li>
                  <li>🦅 Thestral-drawn carriages (if you can see them)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How do I get my acceptance letter?</h4>
              <p>Letters are automatically sent to magical children by owl on their 11th birthday. No address is needed - owls always know.</p>
            </div>
            <div className="faq-item">
              <h4>Can Muggles visit Hogwarts?</h4>
              <p>Unfortunately, Muggle-repelling charms make Hogwarts appear as dangerous ruins. Only magical folk can see the castle.</p>
            </div>
            <div className="faq-item">
              <h4>What if my owl gets lost?</h4>
              <p>Hogwarts owls are highly trained. If delivery fails, try the Floo Network or contact the Ministry of Magic.</p>
            </div>
            <div className="faq-item">
              <h4>Can I bring my pet dragon?</h4>
              <p>Dragons are NOT permitted. Students may bring an owl, cat, or toad. Special permission needed for other creatures.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
