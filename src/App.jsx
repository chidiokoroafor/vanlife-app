import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import './server.js'
import VanDetail from './pages/VanDetail.jsx'
import Layout from './components/Layout.jsx'
import Dashboard from './pages/host/Dashboard.jsx'
import Income from './pages/host/Income.jsx'
import Reviews from './pages/host/Reviews.jsx'
import HostLayout from './components/HostLayout.jsx'
import HostVans from './pages/host/HostVans.jsx'
import HostVanDetail from './pages/host/HostVanDetail.jsx'
import HostVanDetailDetails from './pages/host/vans/HostVanDetailDetails.jsx'
import HostVanDetailPricing from './pages/host/vans/HostVanDetailPricing.jsx'
import HostVanDetailPhotos from './pages/host/vans/HostVanDetailPhotos.jsx'

function App() {

  return (
    <div >
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='host' element={<HostLayout />} >
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='vans' element={<HostVans />} />
              <Route path='vans/:id' element={<HostVanDetail />} >
                <Route index element={<HostVanDetailDetails />} />
                <Route path='pricing' element={<HostVanDetailPricing />} />
                <Route path='photos' element={<HostVanDetailPhotos />} />
              </Route>
              <Route path='reviews' element={<Reviews />} />
              </Route>
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanDetail />} />
          </Route>

        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
