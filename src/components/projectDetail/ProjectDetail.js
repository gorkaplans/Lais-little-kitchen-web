import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';

import { client } from '../../client'


import'./ProjectDetail.scss'




const ProjectDetail = () => {
    const[receta, setReceta] = useState({})
    const[image, setImage] = useState('')
    const[ingredientes, setIngredientes] = useState(['2','3'])


    let { id } = useParams()

    async function getSingleReceta(idReceta) {
        const entry = await client.getEntry(idReceta)
        setReceta(entry.fields)
        setImage(entry.fields.image.fields.file.url)
        setIngredientes(entry.fields.ingredientes)
    }

    useEffect(() => {
            getSingleReceta(id)
    }, [])
    
    console.log(receta)

    return (
        <div className="section">
            <div className="container">
                <div className="detail-hero">
                    <h1 className="heading">{receta.name}</h1>
                    <div className="index-detail">
                        <span className="index-item-wrapper">
                            <h1 className="heading2-blue title-index"> Dificultad</h1>
                            <p className="text-blue">{receta.dificult}</p>
                            <h1 className="heading2-blue title-index"> Tiempo</h1>
                            <p className="text-blue">{receta.time}</p>
                        </span>
                         <span>
                            <h1 className="heading2-blue title-index"> Ingredientes</h1>
                            {<ul className="text-blue ingredients-wrapper"> 
                                
                                {ingredientes.map((ingrediente, i) =>
                                <>
                                <li className="ingredient-item">· {ingrediente}</li>
                                </>
                                )}
                             </ul>}
                        </span> 
                    </div>
                      <img className="detail-img" src={image}></img>
                </div>            
            </div>
        </div>
    
    ) } 
 export default ProjectDetail;
