import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Users from './components/Users'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Config from './pages/Config'
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import './App.css'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/users/:id' element={<Users />} />
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='profile' element={<Profile />} />
        <Route path='config' element={<Config />} />
      </Route>
      <Route path='*' element={<h2>404 · Page not found</h2>}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/profile/:username" element={ <PrivateRoute> <Profile /> </PrivateRoute> }/>
    </Routes>
    </>
  )
}

export default App
