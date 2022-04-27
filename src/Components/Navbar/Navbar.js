import React from 'react'
import "./Navbar.scss"
import { DarkMoonLogo } from '../../Reusable/Reusable'

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <nav>
        <img src={DarkMoonLogo} alt="" />
        <ul className='navbar-items'>
          <li>
            <a href="#newAtNoom">
              Shop
            </a>
          </li>
          <li>
            <a href="#ourstory">
              About
            </a>
          </li>
          <img src={process.env.PUBLIC_URL + "/images/NavbarImages/Moon-Dark.svg"} alt="" />
          <li>
            <a href="#brewGuides">
              Learn
            </a>
          </li>
          <li>
            <a href="#connect">
              Connect
            </a>
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
