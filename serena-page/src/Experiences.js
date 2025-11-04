import Card from './Components/Card'
import experiences from './Components/Assets/experiences.json'

const Experiences = () => {
    return (
        <section className="site-section" id="Experiences">
        <div className='title'>Experiences</div>
        <div className='myCardGallery'>
        {experiences.map((exp) => <Card type='exp' data={exp} key={exp.name}/>) }
        </div>
        </section>
    );
}
 
export default Experiences;