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
      image='https://uploads-ssl.webflow.com/608851f5a265f957720336c3/609c1750732c6910d73033e7_WhatsApp%20Image%202021-05-12%20at%2019.56.31.jpeg'>

    </AboutContainer>
    <Footer></Footer>
  </>  
  );
}
 
export default About;