import { useState } from 'react';
import styles from './App.module.scss';
import { Menu, Grid } from 'semantic-ui-react';
import Navbar from './tools/navbar';
import Booking from './pages/Booking';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import { useNavigate } from 'react-router-dom';
import ReactDOM from "react-dom";
import {BrowserRouter, Router, Route, Routes} from "react-router-dom"

import "./styles.css"




function App() {
    {/* @ts-expect-error Server Component */}
    let Component = <Home />
    switch (window.location.pathname) {
        case "/":
            {/* @ts-expect-error Server Component */}
            Component = <Home />
            break
        case "/booking":
            Component = <Booking />
            break
        case "/gallery":
            Component = <Gallery />
            break
        case "/blog":
            Component = <Blog />
            break
    }
    const [count, setCount] = useState(0);

    return (
        <div >
            <header><Navbar /></header>
            <div className = "main">
                <BrowserRouter>
                <Routes>
                    {/* @ts-expect-error Server Component */}
                    <Route path='/' element={<Home />} />
                    <Route path='/booking' element={<Booking />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='/blog' element={<Blog />} />
                </Routes>
            </BrowserRouter>
            </div>
        </div>



    );
}

export default App;
