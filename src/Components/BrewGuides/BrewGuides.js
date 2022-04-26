import React from 'react'
import { Container, Header } from '../Styled/Styled'
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
          <img src={brewGuideChemex} alt="" />
        </div>
        <div className="guide-right">
          {brewGuidePhotos.map((photo) => (
            <div className="guides-card" style={{
              backgroundPosition: "50% 20%",
              background:`linear-gradient(0deg, rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.39)), url(${photo.image})`
            }}
              key={photo.id}>
            </div>
          ))}
          {/* <div className="guides-card">2</div>
          <div className="guides-card">3</div>
          <div className="guides-card">4</div> */}
        </div>
      </div>
    </Container>
  )
}
