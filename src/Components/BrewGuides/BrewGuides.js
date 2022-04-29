import React from 'react'
import { BrewGuideCards, Container, GuideChemOverlay, GuideRightOverlay, Header } from '../Styled/Styled'
import { brewGuideChemex, brewGuidePhotos } from '../../Reusable/Reusable'
import "./BrewGuides.scss"

export default function BrewGuides() {
  return (
    <Container className='brewGuides-container' id='brewGuides'>
      <Header>
        <h1>
          Brew Guides
        </h1>
      </Header>
      <div className="guides">
        <div className="chemex-hero">
          <img className='chemex-hero-image' src={process.env.PUBLIC_URL + brewGuideChemex} alt="" />
          <GuideChemOverlay>
            <h1>Chemex</h1>
            <h2>Start Guide <span className='chemex-carrot'>{'>'}</span></h2>
          </GuideChemOverlay>
        </div>
        <div className="guide-right">
          {brewGuidePhotos.map((photo) => (
            <BrewGuideCards key={photo.id} className="guides-card" photo={photo.image}>
              <GuideRightOverlay>
                <h1>{photo.overlayText}</h1>
                <h2>Start Guide <span className='chemex-carrot'>{'>'}</span></h2>
              </GuideRightOverlay>
            </BrewGuideCards>
          ))}
        </div>
      </div>
    </Container>
  )
}
