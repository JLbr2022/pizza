import React from 'react'

function BackgroundImage() {
  const buildings = {
    name: 'BuildingsBackground',
    image: '/src/public/images/BuildingsBackground.svg'
  }
  return (
    <div className="inset-0 w-full h-full object-top object-contain">
      <img src={buildings.image} alt={buildings.name} />
    </div>
  )
}

export default BackgroundImage
