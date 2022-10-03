import React from 'react';
// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import { CTA, Brand, Navbar } from './components';
// import {Route, Switch} from 'react-router-dom'
import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
// import FormBasic from './containers/forms/FormBasic';
// import FormBasic from './containers/forms/FormBasic';
import FormBasic from './containers/forms/FormBasic';
import { Navbar } from './components';
import { Footer } from './containers';
import Courses from './containers/courses/Courses';

function App() {
  return (
    <div>
      <Navbar />
      <br />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<FormBasic />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
