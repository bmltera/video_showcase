import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// const router = createBrowserRouter({[
//     {
//         path: "/",
//         element:<App/>,
//     }

//     ]);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
