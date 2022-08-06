import React from 'react';
import './index.css';

import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import About from './components/about/about';
import Experience from './components/Experience/experience';
import Services from './components/Services/services';
import Portfolio from './components/Portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />

    </>
  )
}

export default App