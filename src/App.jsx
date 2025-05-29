import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import './App.css'
import AboutPage from './Pages/AboutPage';
import BlogListPage from './Pages/BlogListPage';
import BlogDetailsPage from './Pages/BlogDetailsPage';

function App() {
  const { i18n } = useTranslation();

    useEffect(() => {
      const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = dir;
      document.documentElement.lang = i18n.language;
    }, [i18n.language]);

  return (
    <>
      <BrowserRouter>
        <Header />
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path="/blogs" element={<BlogListPage />} />
            <Route path="/blogs/:id" element={<BlogDetailsPage />} />
            <Route path='/contact' element={<ContactPage />} />
         </Routes>
         <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;


