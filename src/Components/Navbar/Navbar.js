import React from 'react'
import "./Navbar.scss"

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <nav>
        <img src={process.env.PUBLIC_URL + "/images/NavbarImages/NoomCafeHeader.svg"} alt="" />
        <ul className='navbar-items'>
          <li>
            Shop
          </li>
          <li>
            About
          </li>
          <img src={process.env.PUBLIC_URL + "/images/NavbarImages/Moon-Dark.svg"} alt="" />
          <li>
            Learn
          </li>
          <li>
            Connect
          </li>
        </ul>
        <div className='navbar-icons'>
          <img src={process.env.PUBLIC_URL + "/images/NavbarImages/shopping-cart.svg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/NavbarImages/user.svg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/NavbarImages/search.svg"} alt="" />
        </div>
      </nav>
    </div>
  )
}
