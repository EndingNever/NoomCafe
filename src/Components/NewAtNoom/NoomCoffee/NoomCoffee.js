import React from 'react'
import "./NoomCoffee.scss"
import coffeeData from '../CoffeeMap'
import { NoomCard, OriginText } from '../../Styled/Styled'

export default function NoomCoffee(props) {
  const dark = props.dark;

  return (
    <div className='noom-container'>
      {coffeeData.map((data) => (
        <NoomCard dark={dark} className="card" key={data.price}>
          <div className="card-image">
            <img src={data.image} alt="" />
            {data.originText ? <OriginText
              dark={dark}
              className='originText'
              >{data.originText}
              </OriginText>
              : null }
          </div>
          <div className="card-text">
            <h3>{data.title}</h3>
            <h4>{data.notes}</h4>
            <h4 className='coffee-price'>{data.price}</h4>
          </div>
        </NoomCard>
      ))}
    </div>
  )
}
