import React, { useState }from 'react'; 
import { Link } from 'react-router-dom';

import'./Header.scss'




const Header = () => {

    const[activo, setActivo]= useState(false)

    const handleMenuHam = () =>{
        setActivo(!activo)
        console.log('Hola Mundo')
    }
    
    return (
    <section className="section section-header">
       
            <Link className="heading2-red mobile-logo" to='/'>Lai's little kitchen</Link>
            <div className={(activo) ? "nav-menu activado" : "nav-menu descativado"}>
                    <Link className="text-blue nav-item" to='/About'>¡Hola!</Link>
                    <Link className="text-blue nav-item" to='/Recetas'>Recetas</Link>
                    <Link className="text-blue nav-item" to='/Contact'>Contacto</Link>
            </div>
            <button className="ham" type="button" onClick={handleMenuHam}> 
                <span className="br-1"></span>
                <span className="br-2"></span>
                <span className="br-3"></span>
            </button>
        
    </section>
    
    ) } 


    <Link className="logo" to='/'></Link>


  

  
  export default Header;