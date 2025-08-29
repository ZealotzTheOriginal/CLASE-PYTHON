import { Outlet, Link } from "react-router-dom"

export default function Dashboard() {
    return (
        <>
        <h1>Dashboard</h1>
        <p>Welcome To Dashboard</p>
        <Outlet/>
        <button style={{margin:'8px'}}><Link to='/dashboard/profile'> Profile</Link></button>
        <button style={{margin:'8px'}}><Link to='/dashboard/config'> Config</Link></button>
        </>
    )
}