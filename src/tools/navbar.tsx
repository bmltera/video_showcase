import { Navigate, Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import React from "react";
import Booking from '../pages/Booking';
import {BrowserRouter, Router, Route, Routes} from "react-router-dom"

export default function Navbar(){

    const [goToGallery, setGoToGallery] = React.useState(false);
    const [goToBooking, setGoToBooking] = React.useState(false);
    const [goToBlog, setGoToBlog] = React.useState(false);

    if(goToGallery){
        return <Navigate to ="/gallery"/>;
    }
    if(goToBooking){
        return <Navigate to ="/booking"/>;
    }
    if(goToBlog){
        return <Navigate to ="/blog"/>;
    }

    return <nav className="nav">
        <Link to="/" className="site-title">BILL STUDIO</Link>
        <ul>
            <li className="/home">
            <Link to="/" className="headerText">Home</Link>
            </li>

            <li className="active">
               <Link to="/booking" className="headerText">Booking</Link>
            </li>
            <li>
                <Link to="/gallery" className="headerText">Gallery</Link>
            </li>
            <li>
            <Link to="/blog" className="headerText">Blog</Link>
            </li>
        </ul>
    </nav>
}   