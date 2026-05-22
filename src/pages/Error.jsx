import styles from '../styles/Error.module.scss';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Error() {
  return <>
  <Header />
  <div className={styles.error}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retour à la page d'accueil</Link>
  </div>
  <Footer />
</>
}

export default Error
