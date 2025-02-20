import React, { useState } from "react";
import eventData from "../../data/events.json";
import "../../assets/css/event.css";

const Event = () => {
    const [currentEventIndex, setCurrentEventIndex] = useState(0);

    const handleNextEvent = () => {
        setCurrentEventIndex((prevIndex) => 
            prevIndex === eventData.events.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevEvent = () => {
        setCurrentEventIndex((prevIndex) => 
            prevIndex === 0 ? eventData.events.length - 1 : prevIndex - 1
        );
    };

    const isFirstEvent = currentEventIndex === 0;
    const isLastEvent = currentEventIndex === eventData.events.length - 1;

    return (
        <div className="content-events-container">
            <div className="content-section">
                <div className="content-wrapper">
                    <span className="content-title">{eventData.featuredContent.title}</span>
                    <span className="content-description">
                        {eventData.featuredContent.description}
                    </span>
                </div>
                <div className="content-image">
                    <img src={eventData.featuredContent.image} 
                         alt="Featured Content" />
                </div>
            </div>
    
            <div className="events-section">
                <span className="events-title">Upcoming Events :</span>
                <div className="event-card">
                    <div className="event-details">
                        <span className="event-name">
                            {eventData.events[currentEventIndex].name}
                        </span>
                        <span className="event-description">
                            {eventData.events[currentEventIndex].description}
                        </span>
                        <div className="event-location-date">
                            <span className="event-location">
                                {eventData.events[currentEventIndex].location}
                            </span>
                            <div className="event-date">
                                <img src="/images/calendar-icon.svg" 
                                     alt="Event Date" 
                                     className="event-calendar-icon" />
                                <span className="event-date-text">
                                    {eventData.events[currentEventIndex].date}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="event-view-more">
                        <span className="view-more-text">View More...</span>
                    </div>
                </div>
                <div className="event-navigation">
                    <img src="/images/arrow-left.svg" 
                         alt="Previous Event" 
                         className={`event-arrow-left ${isFirstEvent ? 'inactive' : 'active'}`}
                         onClick={handlePrevEvent} />
                    <img src="/images/arrow-right.svg" 
                         alt="Next Event" 
                         className={`event-arrow-right ${isLastEvent ? 'inactive' : 'active'}`}
                         onClick={handleNextEvent} />
                </div>
            </div>
        </div>
    );
};  

export default Event;