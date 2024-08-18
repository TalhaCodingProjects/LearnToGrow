import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './Selection.css'
import Selec from './Selec';
import English from './English';
import Frontend from './Frontend';
import Office from './Office';
function Selection() {
    const router = createBrowserRouter([
        {
          path: '/English',
          element: (
            <React.Fragment>
                <English/>
            </React.Fragment>
          ),
        },
        {
          path: '/Frontend',
          element: (
            <React.Fragment>
                <Frontend/>
            </React.Fragment>
          ),
        },
        {
          path: '/Office',
          element: (
            <React.Fragment>
                <Office/>
            </React.Fragment>
          ),
        }
      ]);
    
    return (
        <>
          <Selec/>  
          <RouterProvider router={router} />
        </>
    )
}

export default Selection