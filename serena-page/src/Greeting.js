import pdf from './Components/Assets/Serena_Li_resume_26S.pdf';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Greeting = () => {
  const scrollToFeatured = (event) => {
    event.preventDefault();
    document.getElementById('Experiences')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="site-section hero" id="Home">
      <Container>
        <Row className="align-items-center">
          <Col sm={6} md={7}>
            <div className="eyebrow">Los Angeles · USC MS/BS Computer Science · 2026</div>
            <h1 className="hero-title">Serena Li</h1>
            <p className="hero-headline">
              Product-minded software engineer focused on frontend, mobile, and
              user-facing systems.
            </p>
            <div className="body hero-copy">
              I build interfaces that feel polished for users and practical for
              teams to ship. My recent work spans React Native, full-stack MVP
              delivery, geospatial tooling, and research-backed product design.
            </div>

            <div className="hero-meta">
              <div className="hero-meta-pill">React Native + TypeScript</div>
              <div className="hero-meta-pill">Frontend + product systems</div>
              <div className="hero-meta-pill">GIS + research depth</div>
            </div>

            <div className="hero-actions">
              <button
                className="cta cta-primary"
                onClick={() => {
                  window.open(pdf, '_blank');
                }}
              >
                View Resume
              </button>
              <a
                className="cta cta-tertiary"
                href="/iml300"
                target="_blank"
                rel="noreferrer"
              >
                Digital Art Portfolio
              </a>
            </div>
          </Col>
          <Col sm={6} md={5} className="d-flex justify-content-center">
            <Image
              fluid
              src="/portrait.webp"
              className="hero-portrait"
              alt="Serena Li portrait"
              loading="eager"
              decoding="async"
            />
          </Col>
        </Row>
      </Container>
      <div className="arrow-down">
        <a href="/" onClick={scrollToFeatured}>
          Get to know my experiences! ↓
        </a>
      </div>
    </section>
  );
};

export default Greeting;
