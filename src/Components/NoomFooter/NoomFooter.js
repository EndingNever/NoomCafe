import React from 'react';
import { logoLight, NoomFooterDark, NoomFooterLogo } from '../../Reusable/Reusable';
import { Container } from '../Styled/Styled';
import "./NoomFooter.scss"

const NoomFooter = (props) => {
  const dark = props.dark;
  return (
    <Container className='noomFooter-container'>
      <div className="footer-col-container">
        <div className="footer-col footer-col-1"><img src={dark ? process.env.PUBLIC_URL + NoomFooterDark : process.env.PUBLIC_URL + NoomFooterLogo} alt="" /></div>
        <div className="footer-col">
          <h2>Address</h2>
          <p>700 Van Ness Ave, Fresno, CA 93721</p>
          <p>P: 866.442.0472</p>
          <p>E: info@bitwiseindustries.com</p>
        </div>
        <div className="footer-col">
          <h2>Brew Guides</h2>
          <p>Chemex</p>
          <p>Aeropress</p>
          <p>French press</p>
          <p>More...</p>
        </div>
        <div className="footer-col">
          <h2>Connect with us</h2>
          <div className="footer-col-icons">
            {dark ?
              <>
                <img src={process.env.PUBLIC_URL + "/images/Dark/instadark.svg"} alt="" />
                <img src={process.env.PUBLIC_URL + "/images/Dark/twitterdark.svg"} alt="" />
                <img src={process.env.PUBLIC_URL + "/images/Dark/snapdark.svg"} alt="" />
                <img src={process.env.PUBLIC_URL + "/images/Dark/facedark.svg"} alt="" />
              </> :
              <>
                <img src={process.env.PUBLIC_URL + "/images/instagram.svg"} alt="" />
                <img src={process.env.PUBLIC_URL + "/images/twitter.svg"} alt="" />
                <img src={process.env.PUBLIC_URL + "/images/snapchat-ghost.svg"} alt="" />
                <img src={process.env.PUBLIC_URL + "/images/facebook.svg"} alt="" />
              </>
            }
          </div>
        </div>
      </div>
    </Container>
  );
}

export default NoomFooter;
