import React from 'react'
import './Footer.css'
function Footer(props) {
    return (
        <>
            <footer className={`footer bg-${props.mode} text-black`}>
                <div className="footer__addr">
                    <h1 className="footer__logo"><img src="https://github.com/TalhaCodingProjects/Talha-Malik-Portfolio/blob/main/tahla.png?raw=true" alt="" /></h1>

                    <h2>Contact</h2>

                    <address>
                        <code><mark><strong>✉️ Email:</strong></mark> talhamalik1122st@gmail.com</code><br/>
                        <code><mark><strong>📞 Phone Number:</strong></mark> +92 313 5291256</code><br/>

                            <a className={`footer__btn text-black}`} href="mailto:example@gmail.com">Email Us</a>
                    </address>
                </div>

                <ul className="footer__nav">
                    <li className="nav__item">
                        <h2 className="nav__title">Our Courses</h2>

                        <ul className="nav__ul">
                            <li>
                                <a target='_blank' href="https://youtube.com/@knowledgewithfunstar">Frontend Development</a>
                            </li>

                            <li>
                                <a target='_blank' href="https://youtube.com/@knowledgewithfunstar">Canva Complete Course</a>
                            </li>

                            <li>
                                <a target='_blank' href="https://youtube.com/@knowledgewithfunstar">Video Editing Course</a>
                            </li>

                            <li>
                                <a target='_blank' href="https://youtube.com/@knowledgewithfunstar">MS 365 Course</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav__item nav__item--extra">
                        <h2 className="nav__title">Our Lectures</h2>

                        <ul className="nav__ul nav__ul--extra">
                            <li>
                                <a target='_blank' href="https://youtube.com/@knowledgewithfunstar">English Tenses</a>
                            </li>

                            <li>
                                <a target='_blank' href="https://youtube.com/@knowledgewithfunstar">English Grammar</a>
                            </li>

                            <li>
                                <a target='_blank' href="https://youtube.com/@knowledgewithfunstar">NBF Books</a>
                            </li>

                            <li>
                                <a target='_blank' href="https://youtube.com/@knowledgewithfunstar">Urdu Grammar</a>
                            </li>

                        </ul>
                    </li>

                    <li className="nav__item">
                        <h2 className="nav__title">Online Classes</h2>

                        <ul className="nav__ul">
                            <li>
                                <a href="/Nazra">Nazra Quran</a>
                            </li>

                            <li>
                                <a href="/Wordpress">Wordpress Course</a>
                            </li>

                            <li>
                                <a href="/English">English Course</a>
                            </li>

                            <br />
                            <br />
                            <hr />
                            <li>
                                <a href="/"><code><strong>Home</strong></code></a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className="legal">
                    <p>&copy; 2024 TalhaAcademy. All rights reserved.</p>

                    <div className="legal__links">
                        <span>Developed by <span className="heart">♥</span> Talha Malik</span>
                    </div>
                </div>
            </footer>
            {/* <div className={` footer text-center bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <div className="row align-items-start">
                    <div className="col col-1">
                        <div classNameName="logo">
                            <img src="https://github.com/TalhaCodingProjects/Talha-Malik-Portfolio/blob/main/tahla.png?raw=true" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div classNameName="col-content">
                            <div classNameName="col-heading"><h1><strong>Our Courses</strong></h1></div>
                            <div classNameName="col-text">
                                <ul>
                                    <li>HTML Course</li>
                                    <li>CSS Course</li>
                                    <li>JS Course</li>
                                    <li>React Course</li>
                                    <li>Canva Course</li>
                                    <li>MS 365 Course</li>
                                    <li>Video Editing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        One of three columns
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Footer