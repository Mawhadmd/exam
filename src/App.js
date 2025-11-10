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
    <div className='bg-blue-600 rounded-full size-96 blur-[350px] opacity-20  top-1/2 absolute bottom-2/4 left-1/3 animate-pulse'></div>
    <div className='bg-red-600 rounded-full size-96 blur-[220px] opacity-20 top-1 absolute bottom-2/9 left-2/3 animate-pulse'></div>
    <BrowserRouter>
    <Navbar/>
      <div className='flex-col flex justify-center items-center min-h-dvh text-text bg-background'>

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
