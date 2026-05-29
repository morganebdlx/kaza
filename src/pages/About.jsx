import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import collapses from '../data/about.json';
import bannerImageAbout from '../assets/banner-image-about.png';
import styles from '../styles/About.module.scss';


function About() {
  // Banner et Dropdown de la page About et données en JSON dans about.json
  return <div className={styles.about}>
      <Banner image={bannerImageAbout} />
      <div className={styles.collapses}>
        {collapses.map((item) => (
          <Collapse key={item.id} title={item.title} content={item.content}
          collapseClassName={styles.collapse} titleClassName={styles.collapseTitle}/>
        ))}
      </div>
  </div>
}

export default About
