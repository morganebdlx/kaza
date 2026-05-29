import styles from '../styles/Card.module.scss';
import { Link } from 'react-router-dom';

function Card({ id, cover, title }) {
  // affichage de l'image de couverture et du titre de l'annonce
  return <>
  <Link to={`/logement/${id}`} className={styles.link}>
  <div className={styles.card}>
      <div className={styles.cardItem}>
          <img src={cover} alt={title} className={styles.cardItem} />
          <p className={styles.title}>{title}</p>
      </div>
  </div>
  </Link>
</>
}

export default Card
