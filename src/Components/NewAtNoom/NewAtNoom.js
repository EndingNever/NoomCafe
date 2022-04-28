import React from 'react'
import "./NewAtNoom.scss"
import Noom from './NoomCoffee/NoomCoffee'
import { Button, Header } from '../Styled/Styled'

export default function NewAtNoom( props ) {
  const dark = props.dark;
  
  return (
    <div className='newNoom-container' id="newAtNoom">
      <Header>
      <h1>New at Noom</h1>
      </Header>
      <div className='morning-routine-text'>
        <p>
          looking for a new morning routine; shop for the latest items and get a jump start on your morning!
        </p>
      </div>
      <Noom dark={dark}/>
      <Button>
        <p>
          View More
        </p>
        <img src="/images/NewatNoom/Arrow.svg" alt="" />
      </Button>
    </div>
  )
}
