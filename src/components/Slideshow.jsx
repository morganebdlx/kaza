import styles from '../styles/Slideshow.module.scss';
import { useState } from 'react';

function Slideshow({ images }) {

  const [currentIndex, setCurrentIndex] = useState(0); // on commence à O  pour la 1ére image

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1); // si on est à la première image, on revient à la dernière, sinon on passe à l'image précédente
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1); // si on est à la dernière image, on revient à la première, sinon on passe à l'image suivante
  };

  return <div className={styles.slideshow}>
            {/* affichage de l'image courante  */}
            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className={styles.image} />
            {/* affichage des flèches de navigation seulement si il y a plus d'une image dans le slideshow */}
            {images.length > 1 && <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prevImage}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="47" height="80">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>}
            {/* affichage de la flèche de navigation droite seulement si il y a plus d'une image dans le slideshow */}
            {images.length > 1 && <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={nextImage}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="47" height="80">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>}
            {/* compteur pour afficher le numéro de l'image courante et le nombre total d'images */}
            {images.length > 1 && <span className={styles.counter}>{currentIndex + 1} / {images.length}</span>}
        </div>
}

export default Slideshow
