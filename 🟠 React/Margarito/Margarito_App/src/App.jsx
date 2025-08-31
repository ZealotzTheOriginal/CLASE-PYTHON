import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Party from './pages/Party'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/party' element={<Party />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
