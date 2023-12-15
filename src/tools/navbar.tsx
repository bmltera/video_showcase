export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="site-title">RED STUDIO</a>
        <ul>
            <li className="active">
                <a href="/booking">Booking</a>
            </li>
            <li>
                <a href="/gallery">Gallery</a>
            </li>
            <li>
                <a href="/blog">Blog</a>
            </li>
        </ul>
    </nav>
}   