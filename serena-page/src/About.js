import * as React from 'react';
const About = () => {
    return (
        <>
        <div className='title' id="About">About</div>
        <div className='body'>
        <p>I'm Serena, a junior studying CS at USC. </p>
        <p>I have done API integration for React Native apps with TypeScript to better user experience, created digital art projects that bring people together using Javascript, managed web dev project for Blu Bathworks, and more!</p>
        <p>Check out my <a href="#Experiences">experiences</a> and <a href="#Projects">projects</a>!</p>
        <p>Outside of academics, I am active in my community. I have been involved as a</p>
        <ul>
            <li>Web + Earth Desk Contributor at Annenberg Media</li>
            <li>Learning Assistant for iOS Development (ITP342)</li>
            <li>Co-President of HackSC</li>
            <li>Guitarist in Band Kori</li>
            <li>Fencer at Trojan Fencing</li>
        </ul>
        </div>
        </>
    );
}
 
export default About;