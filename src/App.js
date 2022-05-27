import './App.css';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';

// Import the Route and Switch component from Router
import { Route, Routes } from "react-router-dom"

// Import Pages    
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {

  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://gk-react-express-portfolio.herokuapp.com/"

    
  return (
    <div className="App">
    
      {/* // Set up routes */}

      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects URL={URL}/>} />
          <Route path="/about" element={<About URL={URL}/>} />
        </Routes>
      <Footer />

    </div>
  );
}

export default App;
