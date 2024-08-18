import React from 'react'
import './Banner.css'

function Banner() {

    return (
        <>
            <div class="banner">
                <div className="row">
                    <div className="col col-1">
                        <div className="heading">
                            <h1 className='BannerHeading'>Build Your Future With Us</h1>
                            <div><p class='para'>On this website, you'll have the opportunity to learn a wide range of skills and knowledge. You'll receive comprehensive support from NBF Books, which will help make your educational journey smoother and more efficient. In addition to that, you'll gain access to high-quality online classes in Frontend Development, taught by experienced and expert teachers who are dedicated to your success. Every project and learning material will be accompanied by detailed documentation, ensuring that you have thorough guidance and resources at every stage. This website is designed to provide everything you need to excel and advance in your learning journey. So, enjoy our courses and check the <strong><a href="https://youtube.com/@knowledgewithfunstar" target='_blank'>Demo</a></strong></p></div>
                        </div>
                    </div>
                    <div className="col col-2">
                        <img className='BannerImage' src="https://github.com/TalhaCodingProjects/Talha-Malik/blob/main/Untitled%20design.png?raw=true" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner