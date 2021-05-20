
import './App.css';
import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';
import { useState } from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/project" exact>
              <ProjectPage />
            </Route>
            <Route path="/skills" exact>
              <SkillsPage />
            </Route>
            <Route path="/experience" exact>
              <ExperiencePage />
            </Route>
            <Route path="/education" exact>
              <EducationPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>  
          
        </div>
      </div>
    </div>
  );
}

export default App;
