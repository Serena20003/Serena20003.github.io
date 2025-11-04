import pdf from './Components/Assets/Serena_Li_resume_26S.pdf';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Greeting = () => {
        return (
                <section className="site-section hero" id="Home">
                <Container>
            <Row className="align-items-center">
                <Col md={7}>
                    <div className='title'>Hi! I'm </div>
                    <div className='title'><span className="name">SERENA LI</span></div>
                    <div className="body">
                        MS <span className="pink-ink">Computer Science</span> · BSc <span className="pink-ink">Computer Science</span>
                        <br/>
                        Concentrations: <span className="pink-ink">GIS & Sustainability</span>, <span className="pink-ink">iOS Development</span>, <span className="pink-ink">Digital Studies</span>
                        <br/>
                        <span className="pink-ink">USC</span> 26'
                    </div>

                    <div style={{marginTop:16, display:'flex', gap:12, flexWrap:'wrap'}}>
                        <div className="cta" onClick={() => {window.open(pdf, '_blank')}}>Current resume</div>
                        <div className="cta" onClick={() => {window.open("/iml300", '_blank')}}>Digital Art Portfolio</div>
                    </div>
                </Col>
                <Col md={5} className="d-none d-md-flex justify-content-center">
                    <Image fluid src="/portrait.jpeg" className="hero-portrait" />
                </Col>
                        </Row>
                    </Container>
                <div className="arrow-down"><a href='#Experiences' className='arrow-down'>Get to know my experiences! ↓</a></div>
                </section>
    );
}
 
export default Greeting;