import Home from './components/Home.js';
import './App.css';
import Welcome from './components/Welcome.js';
import Card from './components/Card.js';
import Connections from './components/connections.js';
import Footer from './components/footer.js';
import About from './Pages/about.js';
import Contact from './Pages/contact.js';
import Fungicides from './Pages/Fungicides.js';
import Insecticides from './Pages/Insecticides.js';
import Herbicides from './Pages/Herbicides.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
<BrowserRouter>
    
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/Fungicides" element={<Fungicides/>}></Route>
    <Route path="/Insecticides" element={<Insecticides/>}></Route>
    <Route path="/Herbicides" element={<Herbicides/>}></Route>
   </Routes>
   
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
