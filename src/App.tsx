import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutClients from './components/AboutClients';
import Footer from './components/Footer';
import Home from './components/Home';
import OurStrength from './components/OurStrength';
import Services from './components/Services';
import Navbar from './components/Navbar';
import OurProjects from './components/OurProjects';
import OandM from './components/OandM';

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col">
        {/* Navbar shown only on certain pages */}
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <AboutClients />
              <Services />
              <OurStrength />
              <Footer />
            </>
          } />
          <Route path="/ourprojects" element={
            <>
              <Navbar />
              <OurProjects />
              <Footer />
            </>
          } />
          <Route path="/oandm" element={
            <>
              <Navbar />
              <OandM />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
