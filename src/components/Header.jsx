import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-red.png'
import styles from '../styles/Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img src={logo} alt="Kaza" className={styles.logo} />
      </NavLink>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.linkActive}` : styles.link
          }
          end
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.linkActive}` : styles.link
          }
        >
          À propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
