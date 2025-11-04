import pdf from './Components/Assets/Serena_Li_resume_26S.pdf';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Greeting = () => {
    return (
        <>
        <Container>
            <Row>
                <Col>
                    <div className='title'>Hi!</div>
                    <div className='title'>I'm <span className="name">SERENA LI</span></div>
                    <br/>
                    <div className="body">
                        MS <span className="pink-ink">Computer Science</span><br/>
                        BSc <span className="pink-ink">Computer Science</span><br/>
                        Concentrations: <span className="pink-ink">GIS and Sustainability Sciences</span> + <span className="pink-ink">iOS Development</span> + <span className="pink-ink">Digital Studies</span><br/>
                        <span className="pink-ink">USC</span> 26'
                    </div>
                    <br/>
                    <div className="body">
                        Quick external links:
                    </div>
                    <div className="cta" onClick={() => {window.open(pdf, '_blank')}}>
                        Current resume
                    </div>
                    <div className="cta" onClick={() => {window.open("/iml300", '_blank')}}>
                        Digital Art Portfolio
                    </div>
                </Col>
                <Col sm={3} lg={4}>
                    <Image fluid src="/portrait.JPG" className="justify-content-center" />
                </Col>
            </Row>
        </Container>
        <div className="arrow-down"><a href='#Experiences' className='arrow-down'>Get to know my experiences! ↓</a></div>
        </>
    );
}
 
export default Greeting;