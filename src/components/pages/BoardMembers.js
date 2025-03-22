import React, { useState, useEffect } from 'react';
import boardData from '../../data/nedats_board.json';
import '../../assets/css/pages/boardMembers.css';

const BoardMembers = () => {
  const [boardMembers, setBoardMembers] = useState([]);
  const [period, setPeriod] = useState({});
  const [description, setDescription] = useState('');
  const [expandedBio, setExpandedBio] = useState({});
  
  useEffect(() => {
    // Load data from the JSON file
    setBoardMembers(boardData.board);
    setPeriod(boardData.board_period);
    setDescription(boardData.description);
  }, []);

  const toggleBio = (index) => {
    setExpandedBio(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="board-members-container">
      <div className="board-header">
        <div className="subtitle">BOARD OF DIRECTORS</div>
        <h1 className="main-title">Leadership Matters</h1>
        <div className="title-underline"></div>
      </div>

      <div className="board-description">
        <p>{description}</p>
      </div>

      <div className="scroll-hint">
        {period.start_date && period.end_date ? (
          <p>&gt;&gt; Scroll to the bottom to see past board members, election {period.start_date.split(' ')[1]}-{period.end_date.split(' ')[1]} results and announcement video &lt;&lt;</p>
        ) : (
          <p>&gt;&gt; Scroll to the bottom to see past board members, election results and announcement video &lt;&lt;</p>
        )}
      </div>

      <div className="board-members-list">
        {boardMembers.map((member, index) => (
          member.name !== "Vacant" && (
            <div key={index} className="member-profile">
              <div className="member-card">
                <div className="member-photo">
                  {member.image ? (
                    <img src={member.image} alt={member.name} />
                  ) : (
                    <div className="avatar-placeholder">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="member-details">
                  <div className="member-name-title">
                    <h3 className="member-name">{member.name} <span className="member-title">{member.title.toUpperCase()}</span></h3>
                    <p className="member-batch">Batch: {member.batch}</p>
                  </div>
                  <div className="member-bio">
                    <p className={expandedBio[index] ? "expanded" : "collapsed"}>
                      {member.bio}
                    </p>
                    <button className="toggle-bio" onClick={() => toggleBio(index)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {expandedBio[index] ? (
                          <polyline points="18 15 12 9 6 15"></polyline>
                        ) : (
                          <polyline points="6 9 12 15 18 9"></polyline>
                        )}
                      </svg>
                    </button>
                  </div>
                  <div className="member-contact">
                    <button className="contact-button">
                      {member.contact}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
      
      <div className="vacant-positions">
        <h3>Vacant Positions</h3>
        {boardMembers.filter(member => member.name === "Vacant").map((member, index) => (
          <div key={`vacant-${index}`} className="vacant-position">
            <h4>{member.title}</h4>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMembers; 