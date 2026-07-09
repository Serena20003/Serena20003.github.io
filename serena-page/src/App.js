import NavBar from './Navbar';
import Greeting from './Greeting';
import FeaturedWork from './FeaturedWork';
import Highlights from './Highlights';
import Experiences from './Experiences';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import WorkDetail from './WorkDetail';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <main>
      <Greeting />
      <FeaturedWork />
      <Highlights />
      <Experiences />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<WorkDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
