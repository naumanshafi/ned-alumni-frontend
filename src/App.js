import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/common/navbar';
import Footer from './components/common/footer';
import Home from './components/pages/home';
import Nedats from './components/pages/Nedats';
import Events from './components/pages/Events';
import UpcomingEvents from './components/pages/UpcomingEvents';
import PastEvents from './components/pages/PastEvents';
import Member from './components/pages/Member';
import Programs from './components/pages/Events';
import Media from './components/pages/Media';
import BoardMembers from './components/pages/BoardMembers';
import BoardMembersGrid from './components/pages/BoardMembersGrid';

import { AuthProvider } from './context/AuthContext';

import './App.css';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="main">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/nedats" element={<Nedats />} />
                        <Route path="/Events" element={<Events />} />
                        <Route path="/events/upcoming" element={<UpcomingEvents />} />
                        <Route path="/events/past" element={<PastEvents />} />
                        <Route path="/member" element={<Member />} />
                        <Route path="/programs" element={<Programs />} />
                        <Route path="/media" element={<Media />} />
                        <Route path="/board-members" element={<BoardMembersGrid />} />
                        <Route path='/bod' element={<BoardMembers />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
