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
      text2='Si quieres hacer alguna colaboracions, rcomendarme alguna receta o simplemente decirme hola, puedes escribirme a este correo y te respondere encantada :)'
      text='hi@laislittlekitchen.com'>
    </Hero>
  </div> 
  <Footer></Footer>
  </div>
</>  
  );
}
 
export default Contact;