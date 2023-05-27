import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './app.tsx'
import List from '@pages/list/list.tsx';
import Card from '@pages/card/card.tsx';

import './main.scss'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/search',
                element: <List/>
            },
            {
                path: '/repository/:id',
                element: <Card/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)