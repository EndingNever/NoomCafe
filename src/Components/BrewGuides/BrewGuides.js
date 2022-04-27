import React from 'react'
import { BrewGuideCards, Container, GuideChemOverlay,GuideRightOverlay, Header } from '../Styled/Styled'
import { brewGuideChemex, brewGuidePhotos } from '../../Reusable/Reusable'
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
          <img className='chemex-hero-image' src={brewGuideChemex} alt="" />
          <GuideChemOverlay>
            <h1>Chemex</h1>
            <h2>Start Guide <span className='chemex-carrot'>{'>'}</span></h2>
          </GuideChemOverlay>
        </div>
        <div className="guide-right">
          {brewGuidePhotos.map((photo) => (
            <BrewGuideCards className="guides-card" photo={photo.image}>
              <GuideRightOverlay>
                <h1>{photo.overlayText}</h1>
                <h2>Start Guide <span className='chemex-carrot'>{'>'}</span></h2>
              </GuideRightOverlay>
            </BrewGuideCards>
          ))}
          {/* <div className="guides-card">2</div>
          <div className="guides-card">3</div>
          <div className="guides-card">4</div> */}
        </div>
      </div>
    </Container>
  )
}
