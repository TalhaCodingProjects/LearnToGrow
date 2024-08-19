import React from 'react'
import './Feature.css'
function Featured() {
  return (
    <>
        <div className="feature my-4 shadow-sm p-3 mb-5 rounded">
            <h1 className='featureHead'>Featured Courses</h1>
            <div className="unorder d-flex justify-content-between">
                <ul>
                <h2>Web Development</h2>
                    <a href="mailto:talhamalik1122st@gmail.com"><li>Frontend Web Developlment</li></a>
                    <a href="mailto:talhamalik1122st@gmail.com"><li>Wordpress Course</li></a>
                </ul>
                <ul>
                <h2>Quran</h2>
                    <a href="mailto:talhamalik1122st@gmail.com"><li>Translation</li></a>
                    <a href="mailto:talhamalik1122st@gmail.com"><li>Nazra Quran</li></a>
                   <a href="mailto:talhamalik1122st@gmail.com"><li>Tafseer-e-Quran</li></a> 
                </ul>
                <ul>
                <h2>Language</h2>
                    <a href="mailto:talhamalik1122st@gmail.com"><li>English Course</li></a>
                    <a href="mailto:talhamalik1122st@gmail.com"><li>Arabic Course</li></a>
                </ul>
                <ul>
                <h2>MS Office</h2>
                    <a href="mailto:talhamalik1122st@gmail.com"><li>MS Office 365</li></a>
                    <a href="mailto:talhamalik1122st@gmail.com"><li>Data Entry in Excel</li></a>
                    <a href="mailto:talhamalik1122st@gmail.com"><li>Data Entry in Access</li></a>
                </ul>
                <ul>
                <h2>Designing and Editing</h2>
                    <a href="mailto:talhamalik1122st@gmail.com"><li>Canva Course</li></a>
                    <a href="mailto:talhamalik1122st@gmail.com"><li>Capcut Filmora Course</li></a>
                    <a href="mailto:talhamalik1122st@gmail.com"><li>Video Editing in Canva</li></a>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Featured