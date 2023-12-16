export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="site-title">BILL STUDIO</a>
        <ul>
            <li className="home">
                <a href="/">Home</a>
            </li>

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