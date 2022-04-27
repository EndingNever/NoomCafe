import React from 'react';
import { NoomFooterLogo } from '../../Reusable/Reusable';
import { Container } from '../Styled/Styled';
import "./NoomFooter.scss"

const NoomFooter = () => {
  return (
    <Container className='noomFooter-container'>
      <div className="footer-col-container">
        <div className="footer-col"><img src={NoomFooterLogo} alt="" /></div>
        <div className="footer-col">
          <h2>Address</h2>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
        <div className="footer-col">
          <h2>Brew Guides</h2>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
        <div className="footer-col">
          <h2>Connect</h2>
          <p>1</p>
          <p>1</p>
        </div>
      </div>
    </Container>
  );
}

export default NoomFooter;
