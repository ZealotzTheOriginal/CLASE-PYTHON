import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Section from "../components/Section"
import Main from "../components/Main"

export default function Home() {
    return (
        <>
        <Navbar />
        <h1>👿 HOME</h1>
        <p>Welcome To Home...</p>
        <Main><Section></Section></Main>
        <Footer/>
        </>
    )
}