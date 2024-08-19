import React from 'react'
import './Teacher.css'
function Teacher() {
    return (
        <>
            <h1 className='text-center Teachers'>Teachers Info</h1>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class='card shadow container big-cark text-black text mb-3'>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://github.com/TalhaCodingProjects/Personal-Portfolio-Page/blob/main/Screenshot%202024-07-10%20191227.png?raw=true" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title card-tit">Malik Talha Awan</h5>
                                        <p class="card-text">Three years of experience in ✨<code><strong>Graphic Design</strong> </code> (<code>2021 - 2024</code>) specializing in YouTube thumbnails, banners, and logos. Additionally, I have three years of <br /><code><strong>📹 Video Editing </strong></code> experience using various software, including <code>Canva, CapCut, Clipchamp,</code> and advanced editors like <code><strong>Filmora 8 and 13.</strong></code> <br />I also have one year of experience in <code>Frontend Development,</code> creating websites using <code>HTML, CSS, Tailwind, JavaScript, React, and Bootstrap.</code>  I hold certifications from  <code>Coursera</code> , <code>DigiSkills</code>, <code>Virtual University</code>, and <code>Microsoft</code> ."</p>
                                        <p className="card-text"><small className={`text-body-secondary text-black`}><strong>Founder and the main Teacher 🔥</strong></small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary"><mark>Frontend Developer</mark> <mark>Graphic Designer</mark> <mark>Video Editor</mark> <mark>MS Specialist</mark> <mark>Wordpress Developer</mark> <mark>Youtuber</mark></small>

                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class='card container shadow big-cark text-black text mb-3'>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://github.com/TalhaCodingProjects/Personal-Portfolio-Page/blob/main/Screenshot%202024-07-10%20191041.png?raw=true" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title card-tit">Abdullah Jutt</h5>
                                        <p class="card-text">A wide experience in <code>Graphic Designing.</code>He will teach you the fundamentals of Graphic Designing. How to start as a beginner, which app is good to use, how many softwares and apps are free, you will learn all these topics in depth with this guy. <br /><code>Video Editing</code> 2-years experiece in video editing with Canva and Clipchamp. Now, learning <code>Frontend Development</code>. So, I hope you will learn from his teaching and lectures. Stay safe and happy 😁</p>
                                        <p className="card-text"><small className={`text-body-secondary text-black`}><strong>Specified for Graphic Designing</strong></small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary"><mark>Graphic Designer</mark> <mark>Video Editor</mark>  <mark>Youtuber</mark></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Teacher