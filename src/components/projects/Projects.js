import React, {useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom';
import {  client } from '../../client'

import ProjectThumbnail from '../projectThumbnail'

import'./Projects.scss'




const Projects = ({}) => {
    const[recetas, setRecetas] = useState([])

    useEffect(() => {
        client.getEntries()
        .then((respone) => {
            setRecetas(respone.items)
        })
        .catch(console.error)

        
    }, ([]));

    console.log(recetas)
    

    return (
    <section className="section">
        <div className="container title-projects">
            <h1 className="heading2-red">Alguna recetas...</h1>
            <p className="text-red">Aquí puedes ver algunas de mis recetas, por si la quieres seguir paso a paso!</p>
        </div>
 {       <div className="container projects-wrapper">
            {recetas.map((receta, index) => 
            <>
            <div className="project-preview">
                <h1 className="heading3-red">{receta.fields.name}</h1>
                <Link to='/About'>
                <p className="text-red">Ver receta</p>
                <img className="image-preview" src={receta.fields.image.fields.file.url}></img>
                </Link>
            </div>
            </>
            )}
        </div> }
    </section>
    
    ) } 


  

  
  export default Projects;




  