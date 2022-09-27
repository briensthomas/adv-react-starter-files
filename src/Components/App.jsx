import { BrowserRouter as Router, 
  Routes, 
  Route,  } from 'react-router-dom';
import Layout from './Page-Layouts/Layout';
import About from './About/About';
import Projects from './Projects/Projects';
import Connect from './Connect/Connect';
import Pets from './About/Pets';
import Hiking from './About/Hiking';
import Other from './About/Other';
import Dashboard from './Dashboard/Dashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="about" element={<About />} >
            <Route index element={<Pets />} />
            <Route path="hiking" element={<Hiking />} />
            <Route path="other" element={<Other />} />
          </Route>
          
          <Route path="projects" element={<Projects />} />
          <Route path="connect" element={<Connect />} />
        </Route>


      </Routes>
    </Router>
  );
}
