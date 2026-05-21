import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-white.png';
import styles from '../styles/Footer.module.scss';



function Footer() {
  return <footer className={styles.footer}>
      <NavLink to="/">
        <img src={logo} alt="Kaza" className={styles.logo} />
      </NavLink>
      <p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
  </footer>
}

export default Footer
