// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './views/header/Header';
import Home from './views/components/Home';
import About from './views/components/About';
import Destinations from './views/components/Destination';
import Contact from './views/components/Contact_us';
import Community from './views/components/Community';
import BookEvent from './views/components/Book_an_event';
import Footer from './views/footer/footer';
import Pages from "./views/components/Pages/Villa"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/book-event" element={<BookEvent />} />
        <Route path="/villas" element={<Pages />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
