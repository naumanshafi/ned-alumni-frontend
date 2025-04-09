import React, { useState, useEffect } from "react";
import eventData from "../../data/events.json";
import "../../assets/css/event.css";

const Event = () => {
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleNextEvent = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentEventIndex((prevIndex) => 
            prevIndex === eventData.events.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => setIsAnimating(false), 500);
    };

    const handlePrevEvent = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentEventIndex((prevIndex) => 
            prevIndex === 0 ? eventData.events.length - 1 : prevIndex - 1
        );
        setTimeout(() => setIsAnimating(false), 500);
    };

    // Auto-advance the carousel every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextEvent();
        }, 8000);
        
        return () => clearInterval(interval);
    }, []);

    // Sample event images for now
    const eventImages = [
        "/images/ned_welcome.jpg",
        "/images/network.png",
        "/images/impact.png"
    ];

    return (
        <div className="events-carousel-section">
            <div className="events-carousel-container">
                <h2 className="events-carousel-title">Events <span>(Past and Upcoming)</span></h2>
                
                <div className="event-carousel-slide">
                    <div className="event-carousel-image">
                        <img 
                            src={eventImages[currentEventIndex % eventImages.length]} 
                            alt={eventData.events[currentEventIndex].name} 
                        />
                    </div>
                    <div className="event-carousel-content">
                        <h3 className="event-carousel-name">{eventData.events[currentEventIndex].name}</h3>
                        <p className="event-carousel-description">{eventData.events[currentEventIndex].description}</p>
                        <div className="event-carousel-details">
                            <div className="event-carousel-location">
                                <i className="location-icon"></i>
                                <span>{eventData.events[currentEventIndex].location}</span>
                            </div>
                            <div className="event-carousel-date">
                                <i className="calendar-icon"></i>
                                <span>{eventData.events[currentEventIndex].date}</span>
                            </div>
                        </div>
                        <div className="event-carousel-cta">
                            <button className="event-carousel-button">
                                SEE PICTURES
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: '8px' }}>
                                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="event-carousel-navigation">
                    <button 
                        className="event-carousel-nav-button prev" 
                        onClick={handlePrevEvent}
                        aria-label="Previous event"
                        disabled={isAnimating}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="#890c25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className="event-carousel-indicators">
                        {eventData.events.map((_, index) => (
                            <button 
                                key={index} 
                                className={`event-carousel-indicator ${index === currentEventIndex ? 'active' : ''}`}
                                onClick={() => {
                                    if (!isAnimating) {
                                        setIsAnimating(true);
                                        setCurrentEventIndex(index);
                                        setTimeout(() => setIsAnimating(false), 500);
                                    }
                                }}
                                aria-label={`Go to event ${index + 1}`}
                                aria-current={index === currentEventIndex ? "true" : "false"}
                            />
                        ))}
                    </div>
                    <button 
                        className="event-carousel-nav-button next" 
                        onClick={handleNextEvent}
                        aria-label="Next event"
                        disabled={isAnimating}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 6L15 12L9 18" stroke="#890c25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};  

export default Event;