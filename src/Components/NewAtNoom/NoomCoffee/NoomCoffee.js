import React from 'react'
import "./NoomCoffee.scss"
import coffeeData from '../CoffeeMap'

export default function NoomCoffee() {
  console.log(coffeeData)
  return (
    <div className='noom-container'>
      {coffeeData.map((data) => (
        <div className="card" key={data.price}>
          <div className="card-image">
            <img src={data.image} alt="" />
            {data.originText ? <p className='originText'>{data.originText}</p> : null}
          </div>
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
