import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Recetas from './pages/Recetas'
import Contact from './pages/Contact'
import RecetaDetail from './pages/RecetaDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/Recetas" exact>
                <Recetas />
            </Route>
            <Route path="/Contact" exact>
                <Contact />
            </Route>
            <Route path="/About" exact>
                <About />
            </Route>
            <Route path="/Recetas/:id">
              <RecetaDetail />
         </Route>
        </Switch>  
    </Router>
    </div>
  );
}

export default App;
