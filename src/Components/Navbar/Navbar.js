import React from 'react'
import "./Navbar.scss"
import { DarkMoonLogo, logoLight } from '../../Reusable/Reusable'
import { MoonNav } from '../Styled/Styled';

export default function Navbar(props) {
  const dark = props.dark;
  const setDark = props.setDark;

  const clickHandler = () => {
    setDark(!dark);
  }

  return (
    <MoonNav dark={dark} className='navbar-container'>
      <nav>
        <a href="#home">
          <img src={!dark ? 
            DarkMoonLogo : 
            logoLight
            } alt="" />
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
            : process.env.PUBLIC_URL + "/images/Dark/lightMoon2.svg"
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
          <img src={!dark ? process.env.PUBLIC_URL + "/images/NavbarImages/shopping-cart.svg"
          : process.env.PUBLIC_URL + "/images/Dark/cartLight.svg"}  alt="" />
          <img src={!dark ? process.env.PUBLIC_URL + "/images/NavbarImages/user.svg" 
          : process.env.PUBLIC_URL + "/images/Dark/searchlight.svg" } alt="" />
          <img src={!dark ? process.env.PUBLIC_URL + "/images/NavbarImages/search.svg" 
          : process.env.PUBLIC_URL + "/images/Dark/userlight.svg" } alt="" />
        </div>
      </nav>
    </MoonNav>
  )
}
