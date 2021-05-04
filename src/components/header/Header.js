import React from 'react'; 
import { Link } from 'react-router-dom';

import'./Header.scss'




const Header = () => {
    
    return (
    <section className="section">
        <div className="container">
            <Link className="heading2-red" to='/'>Lai's little kitchen</Link>
            <div className="nav-menu">
                <Link className="text-blue nav-item" to='/About'>Sobre mi</Link>
                <Link className="text-blue nav-item" to='/Recetas'>Recetas</Link>
                <Link className="text-blue nav-item" to='/Contact'>Contacto</Link>
            </div>
        </div>
    </section>
    
    ) } 


    <Link className="logo" to='/'></Link>


  

  
  export default Header;