import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero';

import './Contact.scss'

const Contact = () => {


return (
  <>
  <div className="all">
  <Header></Header>
  <div className=" container contact-margin">
  <div className="container container-contact">
            <p className="text-blue">Si queréis preguntarme cualquier duda, hacer una colaboración conmigo, recomendarme alguna receta o simplemente decirme hola, podéis escribirme a este correo y os responderé encantada! :)</p>
            <a href="mailto:hi@laislittlekitchen" className="heading-contact">hi@laislittlekitchen.com</a>
            
            <p className="text-blue">O bien escribirme en Instagram</p>

            <a href="https://www.instagram.com/laislittlekitchen/?hl=es" target="_blank" className="heading-contact">@laislittlekitchen</a>

        </div>
  </div> 
  <Footer></Footer>
  </div>
</>  
  );
}
 
export default Contact;