import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import CarDetails from './components/CarDetails';
import Contact from './pages/Contact';
import About from './pages/About';
function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar/>
      <div className='flex-col flex justify-center items-center min-h-[calc(100vh-60px)] text-text bg-background'>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/car/:id' element={<CarDetails />} />
        <Route path='*' element={<div>404 Not Found</div>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
    </BrowserRouter >
    </>
  );
}

export default App;
