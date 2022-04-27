import React from 'react'
import { Container, Header } from '../Styled/Styled'
import { catchUpPhotos } from '../../Reusable/Reusable'
import "./CatchUp.scss"

export default function CatchUp() {
  return (
    <Container className='catchUp-container' id='connect'>
      <Header>
        <h1>Catch up on our latest posts</h1>
      </Header>
      <div className="catchUp-photos-container">
        {catchUpPhotos.map((catchUp) => (
          <div className="catchUp-photo" id={catchUp.id}>
            <img src={catchUp.image} alt="" />
          </div>
        ))}
      </div>
    </Container>
  )
}
