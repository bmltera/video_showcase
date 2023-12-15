import { useState } from 'react';
import styles from './App.module.scss';
import { Menu, Grid } from 'semantic-ui-react';
import Navbar from './tools/navbar';
import Booking from './pages/Booking';
import Home from './pages/Home';

import "./styles.css"



function App() {
    let Component = <Home/>
    switch(window.location.pathname){
        case "/":
            Component = <Home/>
            break
        case "/booking":
            Component = <Booking/>
            break
        case "/gallery":
            break
        case "/blog":
            break
    }
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Navbar />
            {Component}
            <Grid columns={2} relaxed="very" stackable></Grid>
            <nav></nav></div>

    );
}

export default App;
