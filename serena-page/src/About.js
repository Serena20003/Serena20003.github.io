import AboutWaterfall from './Components/AboutWaterfall';

const About = () => {
  const skillGroups = [
    {
      label: 'Frontend + mobile',
      items: ['React', 'React Native', 'TypeScript', 'Swift'],
    },
    {
      label: 'Backend + data',
      items: ['Express', 'Supabase', 'Python', 'SQL'],
    },
    {
      label: 'Design + research',
      items: ['Figma', 'Usability testing', 'Interaction design'],
    },
    {
      label: 'Geospatial',
      items: ['GIS', 'Spatial analysis', 'Mapillary API'],
    },
  ];

  return (
    <section className="site-section" id="About">
      <div className="section-kicker">Who I am</div>
      <div className="title section-title">About</div>
      <div className="about-grid">
        {/* <div className="about-panel"> */}
          <p className="body">
            I like work that sits between product thinking and implementation:
            translating messy needs into clean flows, then building the systems
            that make those flows real. I like being the bridge because I care about interfaces that feel considerate, teams that bond, and technical decisions that make future work easier
            rather than harder.
          </p>
        {/* </div> */}
      </div>

      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div className="skills-group-card" key={group.label}>
            <div className="skills-group-title">{group.label}</div>
            <div className="skills-container">
              {group.items.map((item) => (
                <div key={item} className="skill-badge">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="about-box">
        <div className="about-box-title">What I enjoy life with</div>
        <div className="body">
          A few snapshots from the communities in my life that shape how I think and view the world.
        </div>
        <div className="body">
          I spend time in creative, research, and community spaces,
            including digital art, spatial research, HackSC leadership, music,
            and fencing.
        </div>
        <AboutWaterfall
          items={[
            {
              title: 'Spatial Sciences Institute Researcher',
              image: '/other_things_images/ssi.webp',
            },
            { title: 'Guitarist — Band Kori', image: '/other_things_images/guitar.webp' },
            { title: 'Fencer — Trojan Fencing', image: '/other_things_images/fencing.webp' },
            {
              title: 'Web + Earth Desk Contributor',
              image: '/other_things_images/annenberg.png',
            },
            { title: 'Ex-Executive Director — HackSC', image: '/other_things_images/hacksc.webp' },
          ]}
        />
      </div>
    </section>
  );
};

export default About;
