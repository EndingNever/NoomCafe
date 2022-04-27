import React from 'react'
import "./Navbar.scss"
import { DarkMoonLogo } from '../../Reusable/Reusable'

export default function Navbar(props) {
  const dark = props.dark;
  const setDark = props.setDark;

  const clickHandler = () => {
    setDark(!dark);
  }

  return (
    <div className='navbar-container'>
      <nav>
        <a href="#home">
          <img src={DarkMoonLogo} alt="" />
        </a>
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
          <img
            className='moonLogo'
            onClick={clickHandler}
            src={!dark ? process.env.PUBLIC_URL + "/images/NavbarImages/Moon-Dark.svg" 
            : "/images/Dark/lightMoon2.svg"
          }
            alt="Dark Moon Logo" />
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
