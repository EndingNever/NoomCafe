import React from 'react'
import "./OurStory.scss"
import { Button, Container } from '../Styled/Styled'

export default function OurStory(props) {
  const dark = props.dark;
  
  return (
    <Container dark={dark} className='ourstory-container' id="ourstory">
      <div className="ourstory-text">
        <h1>Our Story....</h1>
        <p>
          Passion is what drives our purpose. We’ve been purchasing coffee directly from the farmers who grow it since 2007, when we were just a tiny, one cafe operation.
        </p>
        <p>
          We’ve always roasted our coffees in small batches, and taste every roast because we’re obsessed with quality. We’re also a pioneer of the West Coast style of light roasting that continues to illuminate the spectrum of what coffee can be.
        </p>
        <Button dark={dark} className='ourstory-button'>
          <p>Learn More</p>
        </Button>
      </div>
      <div className="ourstory-photo">
        <img src="./story.png" alt="" />
      </div>
    </Container>
  )
}
