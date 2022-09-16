import Layout from './components/Layout/Layout';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Path from './pages/Path';
import Courses from './pages/Courses';
import NotFound from './pages/NotFound';
import Skills from './pages/Skills';
import CourseDetail from './components/Courses/CourseDetail';

function App() {

  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/path' exact>
            <Path />
          </Route>
          <Route path='/courses' exact>
            <Courses />
          </Route>
          <Route path='/courses/:key'>
            <CourseDetail />
          </Route>
          <Route path='/skills'>
            <Skills />
          </Route>
          <Route path='/' exact>
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
