import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero';
import AboutContainer from '../components/aboutContainer'

const About = () => {


return (
  <>
    <Header></Header>
    <Hero 
      text='¿Quién soy?'
      text2='MÁS SOBRE MÍ'>
    </Hero>
    <AboutContainer
      image='https://uploads-ssl.webflow.com/608851f5a265f957720336c3/60be4e8a1643e12d1b29f4d6_lais_about.jpg'>

    </AboutContainer>
    <Footer></Footer>
  </>  
  );
}
 
export default About;