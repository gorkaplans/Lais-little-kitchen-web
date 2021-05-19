
import Header from '../components/header';
import Hero from '../components/hero';
import Projects from '../components/projects'
import Footer from '../components/footer';
import Button from '../components/button';

const Home = () => {


return (
    <>
    <Header></Header>
    <Hero 
      text='De la ley a la sartén'
      text2='BIENVENIDOS'
      image='https://uploads-ssl.webflow.com/608851f5a265f957720336c3/60a53e87f5f1fff5fbc451ea_608fe3bb429581388fcb57b2_Hero-background%20copy%20copy.jpg'>
    </Hero>
    <Projects
    size="4">
    </Projects>
    <Button text='Ver todas las recetas'></Button>
    <Footer></Footer>  
    </>  
  );
}
 
export default Home;