import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import collapses from '../data/about.json';

function About() {
  // Banner et Dropdown de la page About et données en JSON dans about.json
  return <div>
      <Banner page="banner-image-about.png" />
      <div className="collapses">
        {collapses.map((item) => (
          <Collapse key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
  </div>
}

export default About
