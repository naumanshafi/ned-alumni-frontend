import React from 'react';
import '../../assets/css/pages/media.css';

const Media = () => {
  const galleryItems = [
    {
      id: 1,
      image: "/images/event1.jpg",
      title: "Annual Gala 2023",
      date: "November 15, 2023"
    },
    {
      id: 2,
      image: "/images/event2.jpg",
      title: "Tech Conference",
      date: "September 20, 2023"
    },
    {
      id: 3,
      image: "/images/event3.jpg",
      title: "Alumni Meet",
      date: "August 5, 2023"
    },
    // Add more items as needed
  ];

  return (
    <div className="page-container media-page">
      <div className="page-header">
        <h1>Media Gallery</h1>
        <p>Capturing moments from our events and gatherings</p>
      </div>
      <div className="page-content">
        <div className="gallery-filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Events</button>
          <button className="filter-btn">Conferences</button>
          <button className="filter-btn">Meetings</button>
        </div>
        
        <section className="media-gallery">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image">
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h3>{item.title}</h3>
                    <p>{item.date}</p>
                    <button className="view-btn">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        
        <div className="load-more">
          <button className="load-more-btn">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default Media; 