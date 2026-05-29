import styles from '../styles/Logement.module.scss';
import annonces from '../data/annonces.json';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import { useParams, Navigate } from 'react-router-dom';

function Logement() {
  // récupération de l'id de l'annonce dans l'url et recherche de l'annonce correspondante dans le fichier json
  const { id } = useParams();
  const annonce = annonces.find((annonce) => annonce.id === id);

  // navigate pour rediriger vers la page 404 si l'annonce n'existe pas
  if (!annonce) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className={styles.logement}>
      <Slideshow images={annonce.pictures} />

      <div className={styles.infos}>
        <div className={styles.left}>
          <div className={styles.titre}>
            <h1>{annonce.title}</h1>
            <p>{annonce.location}</p>
          </div>
          <div className={styles.tags}>
            {annonce.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.host}>
            <p>{annonce.host.name}</p>
            <img src={annonce.host.picture} alt={annonce.host.name} className={styles.hostPicture} />
          </div>

          {/* Affichage des étoiles de la note de l'annonce */}
          <div className={styles.rating}>
            {/* .map pour afficher 5 étoiles, en comparant la note de l'annonce avec le numéro de
            l'étoile pour savoir si elle doit être remplie ou vide */}
            {[1, 2, 3, 4, 5].map((star) => (
              // Affichage d'une étoile remplie si la note de l'annonce est supérieure ou égale à l'étoile,
              // sinon affichage d'une étoile vide
              <span key={star} className={`${styles.star} ${star <= annonce.rating ? styles.starFilled : ''}`}>★</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.collapses}>
        <Collapse title="Description" content={annonce.description} />
        <Collapse title="Équipements" content={<ul>{annonce.equipments.map((equipement, index) =>
          <li key={index}>{equipement}</li>)}
        </ul>} />
      </div>
    </div>
  );
}

export default Logement;
