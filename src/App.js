import Layout from './components/Layout/Layout';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Path from './pages/Path';
import Courses from './pages/Courses';
import NotFound from './pages/NotFound';
import Skills from './pages/Skills';
import CourseDetail from './components/Courses/CourseDetail';
import Links from './pages/Links';
import ComingSoon from './pages/ComingSoon';

function App() {

  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/about_me/path' exact>
            <Path />
          </Route>
          <Route path='/about_me/courses' exact>
            <Courses />
          </Route>
          <Route path='/about_me/courses/:key'>
            <CourseDetail />
          </Route>
          <Route path='/about_me/skills'>
            <Skills />
          </Route>
          <Route path='/about_me/links'>
            <Links />
          </Route>
          <Route path='/about_me/coming_soon'>
            <ComingSoon />
          </Route>
          <Route path='/about_me' exact>
            <div className='App'>
              <img src='' alt='A picture of me NOT ADDED YET' />
              <p>
                My name is Ryan McCormick and I am a senior with development interests:
              </p>
              <ul>
                <li><p>Backend Development</p></li>
                <li><p>Software Engineering</p></li>
                <li><p>Full Stack Development</p></li>
              </ul>
              <p>
                Check the navigation tabs for more to see.
              </p>
            </div>
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
