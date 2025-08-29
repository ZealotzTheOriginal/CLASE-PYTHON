import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <>
        <nav className="NavbarPro">
            <img className="NavbarIMG" src="https://i.pinimg.com/736x/7b/53/7b/7b537badd795dcc738c93fd3e2915511.jpg" alt="" />
            <Link to='/'>Home</Link>
            <Link to='/about'> About</Link>
            <Link to='/contact'> Contact</Link>
        </nav>
        </>
    )
}