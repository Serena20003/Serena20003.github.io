import * as React from 'react'
import Card from './Card'
// import {Exerience, Project} from '../Interfaces'

const CardGallery = ({type}) => {
    const data = {
        name: "Mobile App Developer @ Hemut", 
        date: "Dec 2024 - Present", 
        tags: ["React Native", "Figma"], 
        summary: "Led the front-end development of mobile prototype centering assisting fleet drivers in routing, updating status, and vocal commands for fleet management startup", 
        description: "Created mobile prototype centering assisting fleet drivers in routing, updating status, and vocal commands for fleet management startup",
        image_path: "/logo_hemut.png"
    };
    return ( 
        <div className='cardGallery'>
        <Card data={data}/>
        <Card data={data}/>
        <Card data={data}/>
        </div>
     );
}

export default CardGallery;