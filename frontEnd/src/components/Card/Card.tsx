import './card.css'

export interface CardContent {
  id: number
  title: string
  ingredients: string
  price: number
  image: string
  alt: string
}

interface CardProps {
  card: CardContent
}

const fallback = '/src/public/images/pizzas/no-image-pizza.svg'

function Card({ card }: CardProps) {
  {
    console.log(card.alt)
  }
  return (
    <div
      className="hover:shadow-2xl transition-shadow ease-in-out
                  transform hover: -translate-y-1 hover:scale-105 duration-500
    "
    >
      <section className="shadow-lg flex flex-col">
        <img
          className="object-cover w-full h-48 pb-2"
          src={card.image || fallback}
          alt={card.alt}
        />
        <div className="card-container">
          <div className="card-title">{card.title}</div>
          <div className="card-description">{card.ingredients}</div>
          <div className="card-price">R$ {card.price}</div>
        </div>
      </section>
    </div>
  )
}

export default Card
