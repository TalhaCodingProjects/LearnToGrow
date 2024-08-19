import React from 'react'

function Selec() {
    const margin = {
        marginTop: '3rem'
    }
  return (
    <>
    <h1 className='text-center SelecHeading'>🎓What You Want To Learn </h1>
            <ul style={margin} class="nav mx-3 shadow-sm p-2 mb-5 rounded">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/Frontend">Frontend Development</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/WordPress">Wordpress Course</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/English">English Course</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"  href='/Office'>MS Office 365</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Nazra">Nazra Quran</a>
                </li>
            </ul>
    </>
  )
}

export default Selec