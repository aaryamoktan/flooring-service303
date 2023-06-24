import './App.scss';
import Nevbar from './Content/Nevbar/Nevbar';
import Home from './Content/Home/Home';
import Contact from './Content/Contact/Contact';
import About from './Content/About/About';
import Protfilio from './Content/Protfilio/Protfilio';
import Footer from './Content/footer/Footer';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Nevbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/protfilio" element={<Protfilio/>}/>
     </Routes>
     <Footer/>
    </div></BrowserRouter>
  );
}

export default App;
