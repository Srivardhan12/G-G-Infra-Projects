import './App.css'
import AboutClients from './components/AboutClients'
import Footer from './components/Footer'
import Home from './components/Home'
import OurStrength from './components/OurStrength'
import Services from './components/Services'

function App() {

  return (
    <>
      <div className='w-full h-screen'>
        <Home />
        <AboutClients />
        <Services />
        <OurStrength />
        <Footer />
      </div>
    </>
  )
}

export default App
