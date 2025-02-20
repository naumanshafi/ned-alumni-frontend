import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/common/navbar';
import Footer from './components/common/footer';
import Home from './components/pages/home';
import Nedats from './components/pages/Nedats';
import Events from './components/pages/Events';
import Member from './components/pages/Member';
import Programs from './components/pages/Events';
import Media from './components/pages/Media';

import './App.css';

const App = () => {
    return (
        <Router>
            <div className="main">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/nedats" element={<Nedats />} />
                    <Route path="/Events" element={<Events />} />
                    <Route path="/member" element={<Member />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
