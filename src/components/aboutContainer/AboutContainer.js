import React from 'react'; 


import'./AboutContainer.scss'




const AboutContainer = ({image}) => {
    
    return (
    <section className="section">
        <div className="container">
            <div className="text-about-wrapper">
                <span>
                    <p className="text-blue p-about">¡Hola!</p>
                
                    <p className="text-blue p-about">Mi nombre es Laia, Lai para los amigos. </p>
            
                    <p className="text-blue p-about">¿Queréis conocer un poquito más de mí? Durante el día me dedico a las leyes, pero en cuanto llego a casa cambio la ley por la sartén, y a cocinar!!</p>
                   
                    <p className="text-blue p-about">Si os tengo que ser sincera, soy incapaz de recordar en qué momento empezó a gustarme la cocina, yo creo que desde bien pequeña. Recuerdo una vez cuando tenia 6 o 7 años que en un espectáculo infantil me sacaron al escenario y me dijeron si sabia hacer una tortilla, y yo ni corta ni perezosa casqué el huevo y la hice, ahí, delante de todo el mundo!!  </p>

                    <p className="text-blue p-about">Siempre me ha gustado probar cosas nuevas, me encanta mezclar sabores y probar y probar hasta encontrar la receta perfecta. A veces sale bien y otras mal, y aunque me enfade conmigo misma cuando no me salen las cosas (soy bastante perfeccionista), vuelvo a intentarlo hasta que consigo sacarla.</p>

                    <p className="text-blue p-about">A parte de la cocina tengo tres vicios, los zapatos (ni os imagináis cuantos pares tengo), la playa y viajar. Tampoco le hago un feo a ir a comer a un buen restaurante o tomarme una cañita en el bar. </p>

                    <p className="text-blue p-about">No me enrollo más, si queréis acompañarme en esta bonita aventura que es la cocina sed tod@s bienvenid@s!! Aquí me tenéis para lo que necesitéis. </p>

                    <p className="text-blue p-about">A COCINAR!!!</p>

                    
                </span>

                     <img className="image-about" src={image} alt='lais about'></img>
            </div>

        </div>
    </section>
    
    ) } 

export default AboutContainer;
