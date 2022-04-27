import React from 'react'
import { Button, Container, Header } from '../Styled/Styled'
import "./Newsletter.scss"

export default function Newsletter() {
  return (
    <Container className='newsletter-container'>
      <Header>
        <h1>Sign up for our newsletter</h1>
      </Header>
      <p>Want to stay in the know of our latest news</p>
      <div className="newsletter-input">
        <input type="text" />
        <Button>
          <p> Sign Up</p>
        </Button>
      </div>
    </Container>
  )
}
