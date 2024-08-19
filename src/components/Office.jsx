import React from 'react'

function Office() {
  return (
    <>
      <div className="mx-2 selection shadow-sm p-3 mb-5 rounded">
        <div className="SeleContent mx-1 my-3">
          <a href="https://www.youtube.com/@talhatechandai/playlists"><img className='shadow' src="https://i.ytimg.com/vi/OCQ_Zq0xFcc/maxresdefault.jpg" alt="" /></a>
          <div className="SeleText">
            <h1 className='SelecHeading2'>MS Office 365</h1>
            <p>
              An MS Office 365 course teaches how to effectively use Microsoft’s cloud-based suite, including Word, Excel, PowerPoint, and Outlook. The course covers essential skills like document creation, data analysis, presentations, and email management. It also explores advanced features like real-time collaboration and cloud storage. Designed for all skill levels, this course helps you improve productivity, streamline workflows, and utilize Office 365 tools efficiently in both personal and professional settings.</p>
          </div>
        </div>
          <div className="price container">
            <p className=' text-end'><span className='text-secondary'>Price = </span><a href='/Contact'>$36.05</a></p>
          </div>
      </div>
    </>
  )
}

export default Office