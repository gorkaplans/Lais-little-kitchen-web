import React from 'react'; 
import { Link } from 'react-router-dom';

import'./Button.scss'




const Button = ({text}) => {
    
    return (
        <div className="button-container">
                    <Link className="heading2-red button-more" to='/Recetas'>{text}</Link>
        </div>
    
    ) } 

export default Button;
