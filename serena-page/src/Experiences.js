import * as React from 'react';
// import CardGallery from './Components/CardGallery';
import Card from './Components/Card'
// import {Exerience} from './Interfaces'
import experiences from './Components/Assets/experiences.json'

const Experiences = () => {
    return ( 
        <>
        <div className='title' id="Experiences">Experiences</div>
        <div className='cardGallery'>
        {experiences.map((exp) => <Card type='exp' data={exp}/>)}
        </div>
        </>
    );
}
 
export default Experiences;