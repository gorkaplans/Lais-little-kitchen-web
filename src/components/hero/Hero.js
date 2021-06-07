import React from 'react'; 

import'./Hero.scss'




const Hero = ({text, text2, image}) => {
    
    return (
    <section className="section">
        <div className="container hero">
            <p className="text-blue">{text2}</p>
            <h1 className="heading title-hero">{text}</h1>
        </div>
        <img className="image-hero" alt="kitchen" src={image}></img>
    </section>
    
    ) } 

export default Hero;
