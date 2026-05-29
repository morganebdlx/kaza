import styles from '../styles/Collapse.module.scss'
import { useState } from 'react';


function Collapse({ title, content, collapseClassName, titleClassName }) {
  // ouverture et fermeture de la section
  const [isOpen, setIsOpen] = useState(false);

  // ouverture du dropdown
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // affichage du titre et du contenu de la section
  return <div className={`${styles.collapse} ${collapseClassName || ''}`}>
  {/* className pour pouvoir ajouter une classe spécifique à chaque dropdown */}
      <div className={`${styles.title} ${titleClassName || ''}`} onClick={toggleCollapse}>
        <span>{title}</span>
         <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ><polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      {isOpen && <div className={styles.content}>{content}</div>}
  </div>
}

export default Collapse
