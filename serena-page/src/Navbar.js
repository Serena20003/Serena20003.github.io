import * as React from 'react';
import { useState } from 'react';
const Navbar = () => {
    const [selected, setSelected] = useState("none");
    const navBarSelections = ["Experiences", "Projects", "About", "Contact"];
    function backToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        window.location.href = "";
    }
    function navClicked(nbs)
    {
        setSelected(nbs);
        // setSelected(window.location.href.split('#')[1]);
    }
    return ( 
        <header id="navbar">
            <div className="logo" onClick={backToTop}>SL</div>
            <nav>
                {navBarSelections.map((nbs) => 
                    nbs === selected ? <a className="navClicked" key={nbs} id={"nav_" + nbs} href={"#" + nbs} onClick={() => {navClicked(nbs)}}>{nbs}</a>
                : <a className="navNotClicked" key={nbs} id={"nav_" + nbs} href={"#" + nbs} onClick={() => {navClicked(nbs)}}>{nbs}</a>
                )
                }
            </nav>
        </header>
    );
}
 
export default Navbar;