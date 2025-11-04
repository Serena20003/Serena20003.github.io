import { Background } from './Background';
import NavBar from './NavBar';
import Greeting from './Greeting';
import Experiences from './Experiences';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
      <>
      {/* <Background /> */}
      <NavBar/>
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
