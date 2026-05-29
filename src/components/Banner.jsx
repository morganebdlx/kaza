import styles from '../styles/Banner.module.scss';

function Banner({ image, text }) {
  return <div className={styles.banner}>
      <img src={image} alt="Paysage" className={styles.image} />
      <div className={styles.overlay}></div>
      {text && <h1 className={styles.title}>{text}</h1>}
      {/* texte seulement si props remplie, sinon pas de titre */}
  </div>
}

export default Banner
