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

const fallback = './no-image-pizza.svg'

function Card({ card }: CardProps) {
  {
    console.log(card.alt)
  }
  return (
    <div
      className="rounded-lg hover:shadow-2xl transition-shadow ease-in-out
                  transform hover: -translate-y-1 hover:scale-105 duration-500
    "
    >
      <section id="card-section" className="shadow-lg flex flex-col">
        <img
          className="object-cover w-full h-48 pb-2 rounded-md"
          src={new URL(`${card.image || fallback}`, import.meta.url).href}
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
