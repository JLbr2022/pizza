import './card.css'

export interface CardContent {
  id: number
  title: string
  ingredients: string
  price: number
  image: string
}

interface CardProps {
  card: CardContent
}

const fallback = '/src/public/images/pz_Tomate.jpg'

function Card({ card }: CardProps) {
  return (
    <div className="hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <section className="card shadow-lg">
        <img
          className="object-cover w-full h-48"
          src={card.image || fallback}
          alt="Pizza con tomate"
        />
        <div className="text-center">
          <div className="card-title">{card.title}</div>
          <div className="card-description">{card.ingredients}</div>
          <div className="card-price">R$ {card.price}</div>
        </div>
      </section>
    </div>
  )
}

export default Card
