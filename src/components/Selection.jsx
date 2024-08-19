import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './Selection.css'
import Selec from './Selec';
import English from './English';
import Frontend from './Frontend';
import Office from './Office';
import Nazra from './Nazra';
import Wordpress from './Wordpress';
function Selection() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: (
          <React.Fragment>
              <Frontend/>
          </React.Fragment>
        ),
      },
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
        },
        {
          path: '/Nazra',
          element: (
            <React.Fragment>
                <Nazra/>
            </React.Fragment>
          ),
        },
        {
          path: '/Wordpress',
          element: (
            <React.Fragment>
                <Wordpress/>
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