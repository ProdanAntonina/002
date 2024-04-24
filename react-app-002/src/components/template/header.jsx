import '../layouts/css/header.css'

import { Link } from "react-router-dom";
export default function Header(){
    return <>
        <hr id="header-hr"/>     
        <header className="header-logo-nav">
            <Link to="/"> <img id="logo-name"  alt="ZTS_logo"/></Link>

        <nav>
            <Link to="/About">About Us</Link>
            <Link to="/Products">Products</Link>
            <Link to="News">News</Link>
            <Link to="Gallery">Gallery</Link>
            <Link to="Account">Sign up</Link>
        </nav>
    </header>
    </>
}