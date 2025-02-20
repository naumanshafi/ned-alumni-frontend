import React from 'react';
import '../../assets/css/pages/nedats.css';

const Nedats = () => {
  const values = [
    {
      icon: "/images/icons/innovation.svg",
      title: "Innovation",
      description: "Driving technological advancement and creative solutions in our community."
    },
    {
      icon: "/images/icons/integrity.svg",
      title: "Integrity",
      description: "Maintaining the highest standards of professional and ethical conduct."
    },
    {
      icon: "/images/icons/collaboration.svg",
      title: "Collaboration",
      description: "Fostering partnerships and teamwork across our global alumni network."
    },
    {
      icon: "/images/icons/excellence.svg",
      title: "Excellence",
      description: "Pursuing the highest standards in everything we do."
    }
  ];

  const stats = [
    { number: "800+", label: "Active Members" },
    { number: "50+", label: "Annual Events" },
    { number: "25+", label: "Countries" },
    { number: "30+", label: "Years of Impact" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Empowering NED Alumni Across America</h1>
          <p>Building bridges between professionals, fostering innovation, and creating lasting impact.</p>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>To create a vibrant community of NED University alumni in America, fostering professional growth, innovation, and meaningful contributions to society through collaboration and knowledge sharing.</p>
            </div>
            <div className="mission-image">
              <img src="/images/about/mission.jpg" alt="NEDAC Mission" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <img src={value.icon} alt={value.title} />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-content">
            <h2>Our Vision</h2>
            <p>To be the premier platform for NED alumni in America, driving innovation, professional excellence, and positive social impact through our collective expertise and resources.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Leadership Team</h2>
          <p className="team-intro">Meet the dedicated individuals guiding our organization towards excellence.</p>
          <div className="team-grid">
            {/* Add team members here */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Join Our Community</h2>
          <p>Be part of a growing network of professionals making a difference.</p>
          <button className="cta-button">Become a Member</button>
        </div>
      </section>
    </div>
  );
};

export default Nedats; 