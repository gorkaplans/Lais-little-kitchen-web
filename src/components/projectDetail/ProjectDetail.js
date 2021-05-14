import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import marked from 'marked'



import { client } from '../../client'
import Button from '../button'


import './ProjectDetail.scss'




const ProjectDetail = () => {
    const [receta, setReceta] = useState({})
    const [image, setImage] = useState('')
    const [ingredientes, setIngredientes] = useState(['2', '3'])
    const [description, setDescription] = useState('')


    let { id } = useParams()
    
    const formatDescription = marked(description)  


    async function getSingleReceta(idReceta) {
        const entry = await client.getEntry(idReceta)
        setReceta(entry.fields)
        setImage(entry.fields.image.fields.file.url)
        setIngredientes(entry.fields.ingredientes)
        setDescription(entry.fields.preparacion)
    }

    useEffect(() => {
        getSingleReceta(id)
    }, [])

    console.log(receta)

    return (
        <div className="section">
            <div className="container container-detail">
                <div className="detail-hero">
                    <h1 className="heading">{receta.name}</h1>
                    <img className="detail-img" src={image}></img>
                </div>
                <div className="description-container">
                    <span>
                        <h1 className="heading2-blue title-index"> Ingredientes</h1>
                        {<ul className="text-blue ingredients-wrapper">

                            {ingredientes.map((ingrediente, i) =>
                                <>
                                    <li className="ingredient-item">· {ingrediente}</li>
                                </>
                            )}
                        </ul>}
                        <span className="index-item-wrapper">
                            <h1 className="heading3-blue title-index"> Dificultad</h1>
                            <p className="text-blue">{receta.dificult}</p>
                        </span>
                        <span>
                            <h1 className="heading3-blue title-index"> Tiempo</h1>
                            <p className="text-blue">{receta.time}</p>
                        </span>
                    </span>
                    <span>
                        <h1 className="heading2-blue title-index">Preparación</h1>
                        <p className="text-blue description-text" dangerouslySetInnerHTML={{__html: formatDescription}}></p>
                    </span>
                </div>
                <Button text="Ver mas recetas"></Button>
            </div>
        </div>

    )
}
export default ProjectDetail;
