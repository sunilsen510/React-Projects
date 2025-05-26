import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import './App.css'
import AboutPage from './Pages/AboutPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
         </Routes>
         <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;


