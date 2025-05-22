import * as React from 'react';
import { Background } from './Background';
import Navbar from './Navbar';
import Greeting from './Greeting';
import Experiences from './Experiences';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
      <>
      <Background />
      <Navbar/>
      <main>
      <Greeting />
      <Experiences />
      <Projects />
      <About />
      <Contact />
      </main>
      </> 
      }/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
