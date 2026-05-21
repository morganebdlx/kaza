import styles from '../styles/Card.module.scss';

function Card({ cover, title }) {
  // affichage de l'image de couverture et du titre de l'annonce
  return <div className={styles.card}>
      <div className={styles.cardItem}>
          <img src={cover} alt={title} className={styles.cardItem} />
          <p className={styles.title}>{title}</p>
      </div>
  </div>
}

export default Card
