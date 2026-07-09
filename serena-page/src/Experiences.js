import Card from './Components/Card';
import { experienceItems } from './workData';

const Experiences = () => {
  return (
    <section className="site-section" id="Experiences">
      <div className="section-kicker">Professional work</div>
      <div className="title section-title">Experience</div>
      <p className="section-intro body">
        Roles where I shipped user-facing product work, collaborated closely
        with non-technical stakeholders, or improved operational systems with
        measurable impact.
      </p>
      <div className="myCardGallery">
        {experienceItems.map((exp) => (
          <Card type="exp" data={exp} key={exp.name} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
