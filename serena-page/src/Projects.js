import Card from './Components/Card';
import { projectItems } from './workData';

const Projects = () => {
  return (
    <section className="site-section" id="Projects">
      <div className="section-kicker">Range and initiative</div>
      <div className="title section-title">Projects</div>
      <p className="section-intro body">
        Opportunities where I developed my research, design, creative coding, and systems work skills.
      </p>
      <div className="myCardGallery">
        {projectItems.map((proj) => (
          <Card type="proj" data={proj} key={proj.name} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
