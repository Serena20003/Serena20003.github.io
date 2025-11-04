import { useState, useEffect } from 'react';

const NavBar = () => {
    const [selected, setSelected] = useState("none");
    const navBarSelections = ["Experiences", "Projects", "About", "Contact"];

    function backToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        setSelected('Home');
    }

    function navClicked(nbs)
    {
        setSelected(nbs);
        // the anchor href will handle scrolling
    }

    useEffect(() => {
        // Update active nav item based on which section is mostly in view
        const sections = navBarSelections.map((s) => document.getElementById(s)).filter(Boolean);
        if (!sections.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    setSelected(id);
                }
            });
        }, { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 });

        sections.forEach((sec) => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    return (
        <header id="navbar">
            <div className="logo" onClick={backToTop}>SL</div>
            <nav>
                {navBarSelections.map((nbs) => (
                    <a
                        key={nbs}
                        id={"nav_" + nbs}
                        href={"#" + nbs}
                        className={nbs === selected ? 'navClicked' : 'navNotClicked'}
                        onClick={() => {navClicked(nbs)}}
                        aria-current={nbs === selected ? 'page' : undefined}
                    >
                        {nbs}
                    </a>
                ))}
            </nav>
        </header>
    );
}

export default NavBar;