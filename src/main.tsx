import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'

import './main.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import List from "@pages/list/list.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/search',
                element: <List/>
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)