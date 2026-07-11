import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import pdf from './Components/Assets/SerenaLi_resume_26_esri_uc.pdf';

const NavBar = () => {
  const [selected, setSelected] = useState('none');
  const location = useLocation();
  const navBarSelections = ['Experiences', 'Projects', 'About', 'Contact'];
  const isHomePage = location.pathname === '/';

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setSelected('Home');
  }

  function navClicked(selection) {
    setSelected(selection);
  }

  function scrollToSection(event, selection) {
    event.preventDefault();
    navClicked(selection);
    document.getElementById(selection)?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    if (!isHomePage) {
      return undefined;
    }

    const sections = navBarSelections
      .map((section) => document.getElementById(section))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelected(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHomePage]);

  const detailLinks = [
    { label: 'Home', to: '/' },
    { label: 'Resume', href: pdf },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/-serena-li-/' },
  ];

  return (
    <header id="navbar">
      {isHomePage ? (
        <div className="logo" onClick={backToTop}>
          SL
        </div>
      ) : (
        <Link className="logo" to="/">
          SL
        </Link>
      )}
      <nav>
        {isHomePage
          ? navBarSelections.map((selection) => (
              <a
                key={selection}
                id={`nav_${selection}`}
                href="/"
                className={selection === selected ? 'navClicked' : 'navNotClicked'}
                onClick={(event) => {
                  scrollToSection(event, selection);
                }}
                aria-current={selection === selected ? 'page' : undefined}
              >
                {selection}
              </a>
            ))
          : detailLinks.map((item) =>
              item.to ? (
                <Link key={item.label} to={item.to} className="navNotClicked">
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="navNotClicked"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {item.label}
                </a>
              )
            )}
      </nav>
    </header>
  );
};

export default NavBar;