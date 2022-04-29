import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { DarkMoonLogo, logoLight } from '../../Reusable/Reusable'
import { MoonNav } from '../Styled/Styled';
import Modal from '../Modal/Modal';

export default function Navbar(props) {
  const dark = props.dark;
  const setDark = props.setDark;

  const clickHandler = () => {
    setDark(!dark);
  }

  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);

  }
  useEffect(() => {
    if (modal === true) {
      console.log(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset'
    }
  })

  return (
    <MoonNav dark={dark} className='navbar-container'>
      {modal ? <Modal
        modal={modal}
        setModal={setModal}
        modalHandler={modalHandler}
      /> : null}
      <nav>
        <a href="#home">
          <img src={!dark ?
            process.env.PUBLIC_URL + `${DarkMoonLogo}` :
            process.env.PUBLIC_URL + `${logoLight}`
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
            : process.env.PUBLIC_URL + "/images/Dark/cartLight.svg"} alt="" />
          <img src={!dark ? process.env.PUBLIC_URL + "/images/NavbarImages/user.svg"
            : process.env.PUBLIC_URL + "/images/Dark/userlight.svg"} alt="" />
          <img onClick={modalHandler} src={!dark ? process.env.PUBLIC_URL + "/images/NavbarImages/search.svg"
            : process.env.PUBLIC_URL + "/images/Dark/searchlight.svg"} alt="" />
        </div>
      </nav>
    </MoonNav>
  )
}
