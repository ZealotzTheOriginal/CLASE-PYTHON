import { Link } from "react-router-dom"
import LoginButton from "./LoginButton"

export default function Navbar() {
    return (
        <>
        <LoginButton />
        <nav>
            <Link to='/'>Home</Link> ·
            <Link to='/about'> About</Link> ·
            <Link to='/contact'> Contact</Link> ·
            <Link to='/login'> Login</Link> ·cd blog-router
            <Link to='/users/non-valid-user'> Users</Link>
        </nav>
        </>
    )
}