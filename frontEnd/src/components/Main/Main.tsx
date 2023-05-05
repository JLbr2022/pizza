import React from 'react'
import Card from './Card'
import Search from './Search'

function Main() {
  return (
    <main>
      <Search />
      <div
        className="grid 
                      xs:grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4 
                      xl:grid-cols-5 
                      gap-4 p-2
                      "
      >
        <div className="">
          <Card />
        </div>
        <div className="hidden sm:flex">
          <Card />
        </div>
        <div className="hidden sm:flex">
          <Card />
        </div>
        <div className="hidden sm:flex">
          <Card />
        </div>
        <div className="hidden md:flex">
          <Card />
        </div>
        <div className="hidden md:flex">
          <Card />
        </div>
        <div className="hidden lg:flex">
          <Card />
        </div>
        <div className="hidden lg:flex">
          <Card />
        </div>
        <div className="hidden xl:flex">
          <Card />
        </div>
        <div className="hidden xl:flex">
          <Card />
        </div>
      </div>
    </main>
  )
}

export default Main
