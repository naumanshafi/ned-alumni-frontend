import React from 'react';
import '../../assets/css/pages/programs.css';

const Programs = () => {
  return (
    <div className="page-container programs-page">
      <div className="page-header">
        <h1>Programs</h1>
      </div>
      <div className="page-content">
        <section className="upcoming-events">
          <h2>Upcoming Events</h2>
          {/* Add your upcoming events content */}
        </section>
        
        <section className="past-events">
          <h2>Past Events</h2>
          {/* Add your past events content */}
        </section>
      </div>
    </div>
  );
};

export default Programs; 