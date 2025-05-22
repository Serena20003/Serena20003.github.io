import * as React from 'react';
import pdf from './Components/Assets/Serena_Li_resume_25S.pdf';
const Greeting = () => {
    return (
        <>
        <div className='title'>Hi!</div>
        <div className='title'>I'm <span className="name">SERENA LI</span></div>
        <br/>
        <div className="body">
            MS <span class="pink-ink">Computer Science</span><br/>
            BSc <span class="pink-ink">Computer Science</span><br/>
            Previous Minors: <span class="pink-ink">iOS Development</span> + <span class="pink-ink">GIS and Sustainability Sciences</span> + <span class="pink-ink">Digital Studies</span><br/>
            <span class="pink-ink">USC</span> 26'
        </div>
        <br/>
        <dvi className="body">
            Quick external links:
        </dvi>
        <div class="cta" onClick={() => {window.open(pdf, '_blank')}}>
            Current resume
        </div>
        <div class="cta" onClick={() => {window.open("/iml300", '_blank')}}>
            Digital Art Portfolio
        </div>
        <div class="arrow-down"><a href='#Experiences'>Get to know my experiences! ↓</a></div>
        </>
    );
}
 
export default Greeting;