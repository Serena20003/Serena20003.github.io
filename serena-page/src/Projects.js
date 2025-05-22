import Card from './Components/Card'
import projects from './Components/Assets/projects.json'
const Projects = () => {
    return ( 
        <>
        <div className='title' id="Projects">Projects</div>
        <div className='cardGallery'>
        {projects.map((proj) => <Card type='proj' data={proj}/>)}
        </div>
        </>
    );
}
 
export default Projects;