import styles from '../styles/Banner.module.scss';
import bannerImage from '../assets/banner-image.png';

function Banner() {
  return <div className={styles.banner}>
      <img src={bannerImage} alt="Paysage" className={styles.image} />
      <div className={styles.overlay}></div>
      <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
  </div>
}

export default Banner
