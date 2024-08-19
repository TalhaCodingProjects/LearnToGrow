import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import './components/Navbar.css';
import Call from './components/Call';
import Banner from './components/Banner';
import Selection from './components/Selection';
import Footer from './components/Footer';
import Teacher from './components/Teacher';
import Featured from './components/Featured';

function App() {

    return (
        <>
            <Navbar navLink="https://youtube.com/@knowledgewithfunstar"  />
            <Banner/>
            <Selection/>
            <Call/>
            <Featured/>
            <Teacher/>
            <Footer/>
        </>
    );
}

export default App;
