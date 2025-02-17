import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/common/navbar';
import Footer from './components/common/footer';
import Home from './components/common/home';
import './App.css';

const App = () => {
    return (
        <div className="main">
            <Navbar />
            <Home/>
            <Footer />
        </div>
    );
};

export default App;
