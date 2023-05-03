export default function Avatar() {
  const buildings = {
    name: 'BuildingsBackground',
    image: '/src/public/images/BuildingsBackground.svg',
    height: '8vh',
    width: '100%'
  }

  const avatar = {
    name: 'Pizzatown Delivery',
    image: '/src/public/images/avatar.svg',
    height: '4rem',
    width: '3rem'
  }

  return (
    <div
      className="
        bg-contain bg-center bg-repeat-x 
        flex justify-start items-center
      "
      style={{
        backgroundImage: `url(${buildings.image})`,
        height: buildings.height,
        width: buildings.width
      }}
    >
      <div
        className="
          flex justify-center
          bg-center bg-no-repeat bg-contain
          ml-2 mt-4

          "
        style={{
          backgroundImage: `url(${avatar.image})`,
          height: avatar.height,
          width: avatar.width
        }}
      />
    </div>
  )
}