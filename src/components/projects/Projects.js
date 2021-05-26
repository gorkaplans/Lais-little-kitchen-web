import React, {useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom';
import {  client } from '../../client'; 
import { useHistory } from "react-router-dom";


import'./Projects.scss'




const Projects = ({size, title}) => {
    const[recetas, setRecetas] = useState([])

    let history = useHistory();

    const handleOnClick = (id) =>{
      history.push(`Recetas/${id}`) 
    }    
    
    const handleOnClickCategory = (category) =>{
        client.getEntries({
            'fields.category': category,
            'content_type': 'recetas'

        })
        .then((respone) => {
            setRecetas(respone.items)
        })
        .catch(console.error)
    }    

    const handleOnClickAll = () =>{
        client.getEntries()
        .then((respone) => {
            setRecetas(respone.items)
        })
        .catch(console.error)
    }
     

    useEffect(() => {
     handleOnClickAll();
        
    }, []);


    console.log(recetas)
    
    return (
    <section className="section">
        <div className="container title-projects">
            <h1 className="heading2-red">{title}</h1>
            <div className="filter-wrapper">
                <p className="text-blue filter-item" onClick={() => handleOnClickCategory('Dulces & repostería')}>Dulces & repostería</p>
                <p className="text-blue filter-item" onClick={() => handleOnClickCategory('Pasta & arroz')}>Pasta & Arroz</p>
                <p className="text-blue filter-item" onClick={() => handleOnClickCategory('Verduras & legumbres')}>Verduras & legumbres</p>
                <p className="text-blue filter-item" onClick={() => handleOnClickCategory('Carnes & pescados')}>Carnes & pescados</p>
                <p className="text-blue filter-item" onClick={() => handleOnClickCategory('Masas & pan')}>Masas & pan</p>
                <p className="text-blue filter-item" onClick={() => handleOnClickAll()}>Todas</p>
            </div>
        </div>
 {       <div className="container projects-wrapper">
            {recetas.slice(0,size).map((receta, index) => 
            <>
            <div className="project-preview">
                <h1 className="heading2-red receta-title" onClick={() => handleOnClick(receta.sys.id)}>{receta.fields.name}</h1>
                <div className="div-link" onClick={() => handleOnClick(receta.sys.id)}>
                    <img className="image-preview" src={receta.fields.image.fields.file.url}></img>
                </div>
            </div>
            </>
            )}
        </div> }
    </section>
    
    ) } 


  

  
  export default Projects;




  