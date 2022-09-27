import { BrowserRouter as Router, 
  Routes, 
  Route,  } from 'react-router-dom';
import Layout from './Layouts/Layout';
import About from './About/About';
import Projects from './Projects/Projects';
import Connect from './Connect/Connect';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<About />} />
          <Route element={<Projects />} />
          <Route element={<Connect />} />
        </Route>
      </Routes>
    </Router>
  );
}
