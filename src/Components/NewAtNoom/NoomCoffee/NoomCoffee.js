import React from 'react'
import "./NoomCoffee.scss"
import coffeeData from '../CoffeeMap'

export default function NoomCoffee() {
  return (
    <div className='noom-container'>
      {coffeeData.map((data) => (
        <div className="card">
          <img src={data.image} alt="" />
            <div className="card-text">
              <h3>{data.title}</h3>
              <h4>{data.notes}</h4>
              <h4 className='coffee-price'>{data.price}</h4>
            </div>
        </div>
      ))}
    </div>
  )
}
