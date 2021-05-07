import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';

import { client } from '../../client'


import'./ProjectDetail.scss'




const ProjectDetail = () => {
    const[receta, setReceta] = useState({})

    let { id } = useParams()

    async function getSingleReceta(idReceta) {
        const entry = await client.getEntry(idReceta)
        return setReceta(entry.fields)

    }

    useEffect(() => {
            getSingleReceta(id)
    }, [])


    console.log(receta)
    
    return (
        <div className="section">
            <div className="container">
                <h1 className="heading">{receta.name}</h1>
            </div>
        </div>
    
    ) } 
 export default ProjectDetail;
