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
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import "./styles.css"




function App() {
    let Component = <Home />
    switch (window.location.pathname) {
        case "/":
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
                <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/booking' element={<Booking />} />
                    <Route path='/Gallery' element={<Gallery />} />
                </Routes>
            </Router>
            </div>
        </div>



    );
}

export default App;
