import AboutWaterfall from "./Components/AboutWaterfall";
const About = () => {
    const skills = ["React", "TypeScript", "Figma", "API Integration", "Frontend", "Communication", "Leadership"];
    return (
        <section className="site-section" id="About">
        <div className='title'>About</div>
        <div className='body'>
            <p>I'm Serena, a senior studying Computer Science at USC. I focus on building delightful interfaces and mobile experiences that are accessible and user-centered.</p>

            <p>I have implemented API integrations for React Native apps using TypeScript, created interactive digital art projects with JavaScript, and led web development efforts for small teams.</p>

            <p>Explore my <a href="#Experiences">experiences</a> and <a href="#Projects">projects</a> to see highlights and case studies.</p>

            <div className="skills-container" aria-hidden>
                {skills.map((s, i) => <div key={i} className="skill-badge">{s}</div>)}
            </div>

                <div className='about-box'>
                    <div>You seem interested in the other things I do?</div>
                    <AboutWaterfall
                        items={[
                            { title: 'Spatial Sciences Institute Researcher', image: '/other_things_images/ssi.JPEG' },
                            { title: 'Guitarist — Band Kori', image: '/other_things_images/guitar.JPG' },
                            { title: 'Fencer — Trojan Fencing', image: '/other_things_images/fencing.png' },
                            { title: 'Web + Earth Desk Contributor', image: '/other_things_images/annenberg.png' },
                            { title: 'Ex-Executive Director — HackSC', image: '/other_things_images/hacksc.PNG' },
                        ]}
                    />
                </div>
        </div>
        </section>
    );
}

export default About;