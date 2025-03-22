import React, { useState, useEffect } from 'react';
import boardData from '../../data/nedats_board.json';
import '../../assets/css/pages/boardMembersGrid.css';
import BoardMembers from './BoardMembers';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


const BoardMembersGrid = () => {
  const [boardMembers, setBoardMembers] = useState([]);
  const [period, setPeriod] = useState({});
  const [description, setDescription] = useState('');
  
  useEffect(() => {
    // Load data from the JSON file
    setBoardMembers(boardData.board);
    setPeriod(boardData.board_period);
    setDescription(boardData.description);
  }, []);

  return (
    <div className="board-members-container">
      <Routes>
        <Route path="/bod" element={<BoardMembers />} />
      </Routes>
      <div className="board-header">
        <div className="subtitle">BOARD OF DIRECTORS</div>
        <h1 className="main-title">Leadership Matters</h1>
        <div className="title-underline"></div>
      </div>

      <div className="board-description">
        <p>{description}</p>
      </div>

{/*       <div className="scroll-hint">
        {period.start_date && period.end_date ? (
          <p>&gt;&gt; Scroll to the bottom to see past board members, election {period.start_date.split(' ')[1]}-{period.end_date.split(' ')[1]} results and announcement video &lt;&lt;</p>
        ) : (
          <p>&gt;&gt; Scroll to the bottom to see past board members, election results and announcement video &lt;&lt;</p>
        )}
      </div>
 */}
      <div className="board-members-grid">
        {boardMembers.map((member, index) => (
          <div key={index} className={`member-card ${member.name === "Vacant" ? "vacant-card" : ""}`}>
            <div className="member-photos">
              {member.image ? (
                <img src={member.image} alt={member.name} />
              ) : (
                <div className="avatar-placeholder">
                  {member.name === "Vacant" ? "V" : member.name.charAt(0)}
                </div>
              )}
            </div>
            <div className="member-details">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-title">{member.title.toUpperCase()}</p>
              {member.batch && <p className="member-batch">Graduated: {member.batch} <br></br>{member.discipline}</p>}
              {member.name !== "Vacant" ? (
                <button className="contact-button">
                  <Link to="/bod">Click Here for more</Link>
                </button>
              ) : (
                <p className="vacant-message">{member.bio}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMembersGrid; 