import React from 'react'
import { BrewGuideCards, Container, GuideOverlay, Header } from '../Styled/Styled'
import "./BrewGuides.scss"
import { brewGuideChemex, brewGuidePhotos } from '../../Reusable/Reusable'

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
          <img className='chemex-hero-image' src={brewGuideChemex} alt="" />
          <GuideOverlay>
            <h1>Chemex</h1>
            <h2>Start Guide {'>'}</h2>
          </GuideOverlay>
        </div>
        <div className="guide-right">
          {brewGuidePhotos.map((photo) => (
            <BrewGuideCards className="guides-card" photo={photo.image}></BrewGuideCards>
          ))}
          {/* <div className="guides-card">2</div>
          <div className="guides-card">3</div>
          <div className="guides-card">4</div> */}
        </div>
      </div>
    </Container>
  )
}
