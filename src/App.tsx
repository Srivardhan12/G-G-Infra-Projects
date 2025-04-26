import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutClients from './components/AboutClients'
import Footer from './components/Footer'
import Home from './components/Home'
import OurStrength from './components/OurStrength'
import Services from './components/Services'
import Navbar from './components/Navbar'
import OurProjects from './components/OurProjects'
import OandM from './components/OandM'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className='w-full h-screen'>
            <Home />
            <AboutClients />
            <Services />
            <OurStrength />
            <Footer />
          </div>
        } />
        <Route path="/ourprojects" element={
          <div className='w-full h-screen'>
            <Navbar />
            <OurProjects />
            <Footer />
          </div>
        } />
        <Route path="/oandm" element={
          <div className='w-full h-screen'>
            <Navbar />
            <OandM />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
