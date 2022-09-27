import { NavLink } from 'react-router-dom';
import styles from './Header.css';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Connect from '../Connect/Connect';

export default function Header() {
  return (
    <header className={styles.Header}>
      <h2> Header</h2>
      <ul>
        <li>
          <NavLink to={<About />} />
        </li>
      </ul>
    </header>
  );
}
