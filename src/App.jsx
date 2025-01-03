import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <div className="w-full min-h-screen bg-primary">
      
      <BrowserRouter>
        <header className="py-8">
        <nav className="w-[90%] mx-auto flex justify-between">
            <Link to={"/"} className="font-bold text-3xl text-Text">#VANLIFE</Link>
            <ul className="flex gap-4 text-Text2">
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="vans">Vans</Link>
                </li>
            </ul>
        </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

        </Routes>
         <footer className="bg-Footer py-6">
                <p className="text-Text2 text-center">&copy; 2025 #VANLIFE</p>
            </footer>
      </BrowserRouter>
    </div>
  )
}

export default App
