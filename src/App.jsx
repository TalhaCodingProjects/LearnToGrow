import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import './components/Navbar.css';
import Call from './components/Call';
import Banner from './components/Banner';
import Selection from './components/Selection';
// import Option from './components/Option';

function App() {

    return (
        <>
            <Navbar navLink="https://youtube.com/@knowledgewithfunstar"  />
            <Banner/>
            <Selection/>
            <Call/>
        </>
    );
}

export default App;
