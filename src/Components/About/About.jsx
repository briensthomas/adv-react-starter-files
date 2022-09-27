import { Link, Outlet } from 'react-router-dom';
import styles from './About.css';

export default function About() {
  return (
    <div className={styles.About}>
      <h2>
        About Page
      </h2>
      <nav className={styles.nav}>
        <Link to="">Pets</Link>
        <Link to="hiking">Hiking</Link>
        <Link to="other">Other</Link>
      </nav>
      <Outlet />
    </div>
  );
}
