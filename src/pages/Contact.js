import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero';

import './Contact.scss'

const Contact = () => {


return (
  <>
  <div className="all">
  <Header></Header>
  <div className="contact-margin">
  <Hero 
      text2='Si queréis preguntarme cualquier duda, hacer una colaboración conmigo, recomendarme alguna receta o simplemente decirme hola, podéis escribirme a este correo y os responderé encantada! :)'
      text='hi@laislittlekitchen.com'>
    </Hero>
  </div> 
  <Footer></Footer>
  </div>
</>  
  );
}
 
export default Contact;