import React from 'react'
import "./Hero.scss"

export default function Hero() {
  return (
    <div className='hero-container'>
      <img src={process.env.PUBLIC_URL + "/images/Hero/hero-logo.svg"} alt="" />
      <div className="shop-hours">
        <h1>Today's shop hours</h1>
        <h2>6:30 am - 8 pm</h2>
      </div>
    </div>
  )
}
