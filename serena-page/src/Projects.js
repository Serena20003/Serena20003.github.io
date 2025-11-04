import Card from './Components/Card'
import projects from './Components/Assets/projects.json'
const Projects = () => {
    return (
        <section className="site-section" id="Projects">
        <div className='title'>Projects</div>
        <div className='myCardGallery'>
        {projects.map((proj) => <Card type='proj' data={proj} key={proj.name}/>) }
        </div>
        </section>
    );
}
 
export default Projects;