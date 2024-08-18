import React from 'react';
import './Navbar.css';

function Navbar(props) {
    // const [isDarkMode, setIsDarkMode] = useState(false);

    // const handleIconClick = () => {
    //     setIsDarkMode(!isDarkMode);
    // };

    const width = {
        width: '20%'
    }
    const background = {
        backgroundColor : 'white'
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top shadow-sm p-3 mb-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href='#'>Talha Academy</a>
                    <button className="navbar-toggler" style={width} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" style={background} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Portfolio</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Courses
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">NBF Books</a></li>
                                    <li><a class="dropdown-item" href="#">English Tenses</a></li>
                                    <li><a class="dropdown-item" href="#">Frontend Development</a></li>
                                    <li><a class="dropdown-item" href="#">Youtube Essentials</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
