import style from '../styles/CardList.module.scss'
import Card from './Card'
import annonces from '../data/annonces.json'

function CardList() {
  // map sur les annonces pour créer une card pour chaque annonce
  return <div className={style.container}>
          {annonces.map(annonce =>
          <Card key={annonce.id} cover={annonce.cover} title={annonce.title} />)}
        </div>
}

export default CardList
