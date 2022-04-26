import React from 'react'
import { Container, Header } from '../Styled/Styled'
import "./BrewGuides.scss"

export default function BrewGuides() {
  return (
    <Container className='brewGuides-container'>
      <Header>
        <h1>
          Brew Guides
        </h1>
      </Header>
      <div className="guides">
        <div className="chemex-hero">
          Chemex
        </div>
        <div className="guide-right">
          <div className="guides-card">1</div>
          <div className="guides-card">2</div>
          <div className="guides-card">3</div>
          <div className="guides-card">4</div>
        </div>
      </div>
    </Container>
  )
}
