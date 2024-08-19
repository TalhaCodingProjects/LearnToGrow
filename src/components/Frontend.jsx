import React from 'react'
import './Selection.css'

function Frontend() {
    return (
        <>
            <div className="mx-2 selection shadow-sm p-3 mb-5 rounded">
                <div className="SeleContent mx-1 my-3">
                    <a href="https://www.youtube.com/@Knowledgewithfunstar/playlists"><img className='shadow' src="https://github.com/TalhaCodingProjects/Talha-Malik-Portfolio/blob/main/Main%20Heading.png?raw=true" alt="" /></a>
                    <div className="SeleText">
                        <h1 className='SelecHeading2'>Frontend Development</h1>
                        <p>Frontend Development is a comprehensive course that covers the skills needed to design and develop the front part of a website. Starting from basics like HTML and CSS, it progresses to advanced topics like JavaScript, React, and responsive design. The course focuses on building user-friendly interfaces, optimizing performance, and following best coding practices. By the end, you'll be equipped to create professional, interactive websites that work seamlessly across devices.</p>
                    </div>
                </div>
                <div className="price container">
                    <p className=' text-end'><span className='text-secondary'>Price = </span><a href='mailto:talhamalik1122st@gmail.com'>$90.2</a></p>
                </div>
            </div>
        </>
    )
}

export default Frontend