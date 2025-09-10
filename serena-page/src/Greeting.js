import pdf from './Components/Assets/Serena_Li_resume_26S.pdf';
const Greeting = () => {
    return (
        <>
        <div className='title'>Hi!</div>
        <div className='title'>I'm <span className="name">SERENA LI</span></div>
        <br/>
        <div className="body">
            MS <span className="pink-ink">Computer Science</span><br/>
            BSc <span className="pink-ink">Computer Science</span><br/>
            Minors: <span className="pink-ink">iOS Development</span> + <span className="pink-ink">GIS and Sustainability Sciences</span> + <span className="pink-ink">Digital Studies</span><br/>
            <span className="pink-ink">USC</span> 26'
        </div>
        <br/>
        <dvi className="body">
            Quick external links:
        </dvi>
        <div className="cta" onClick={() => {window.open(pdf, '_blank')}}>
            Current resume
        </div>
        <div className="cta" onClick={() => {window.open("/iml300", '_blank')}}>
            Digital Art Portfolio
        </div>
        <div className="arrow-down"><a href='#Experiences' className='arrow-down'>Get to know my experiences! ↓</a></div>
        </>
    );
}
 
export default Greeting;