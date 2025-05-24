import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} />
         </Routes>
         <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;


