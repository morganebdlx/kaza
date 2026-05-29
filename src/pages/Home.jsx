import Banner from '../components/Banner';
import CardList from '../components/CardList';
import bannerImage from '../assets/banner-image.png';

function Home() {
  return (
    <div>
      <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
      <CardList />
    </div>
  )
}

export default Home
