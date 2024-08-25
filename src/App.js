
import './App.css';
import Navbar from './Components/Hearder/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import SinUp from './Components/sinUpPage/SinUp';
import Login from './Components/sinUpPage/Login';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path='/' element={<HomePage />}/>
          <Route path='/Home' element={<HomePage />}/>
          <Route path='/Sinup' element={<SinUp />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/About' element={<About />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
