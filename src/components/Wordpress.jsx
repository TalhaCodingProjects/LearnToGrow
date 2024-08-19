import React from 'react'

function Wordpress() {
    return (
        <>
            <div className="mx-2 selection shadow-sm p-3 mb-5 rounded">
                <div className="SeleContent mx-1 my-3">
                    <img className='shadow' src="https://www.seoclerk.com/pics/000/872/094/3b1d7e4ae14bd472645a004040bca8c5.jpg" alt="" />
                    <div className="SeleText">
                        <h1 className='SelecHeading2'>Wordpress Course</h1>
                        <p>A WordPress course teaches how to create and manage websites using the WordPress platform. It covers essential skills like installing WordPress, choosing themes, customizing designs, and adding plugins for extended functionality. The course also explores content management, SEO basics, and website security. Suitable for beginners and aspiring web developers, this course helps you build professional websites without needing to learn complex coding, making it an ideal choice for personal or business projects.</p>
                    </div>
                </div>
                <div className="price container">
                    <p className=' text-end'><span className='text-secondary'>Price = </span><a href='/Contact'>$54.07</a></p>
                </div>
            </div>
        </>
    )
}

export default Wordpress