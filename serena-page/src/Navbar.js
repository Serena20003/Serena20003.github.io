import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
    const [selected, setSelected] = useState("none");
    const navBarSelections = ["Experiences", "Projects", "About", "Contact"];
    function backToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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

    // <Navbar expand="lg" id="navbar">
    //   <Container>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <div className="logo" onClick={backToTop}>SL</div>
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         {navBarSelections.map((nbs) => 
    //             nbs === selected ? <Nav.Link className="navClicked" key={nbs} id={"nav_" + nbs} href={"#" + nbs} onClick={() => {navClicked(nbs)}}>{nbs}</Nav.Link>
    //         : <Nav.Link className="navNotClicked" key={nbs} id={"nav_" + nbs} href={"#" + nbs} onClick={() => {navClicked(nbs)}}>{nbs}</Nav.Link>
    //         )
    //         }
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    );
}
 
export default NavBar;