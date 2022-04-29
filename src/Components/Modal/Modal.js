import React from 'react'
import { ModalButtons, ModalButtonsWhite } from '../Styled/Styled';
import "./Modal.scss"

export default function Modal(props) {
  const modal = props.modal;
  const setModal = props.setModal;
  const modalHandler = props.modalHandler;

  return (
    <div className="modal-container">
      <div className='modal-container-top'>
        <div className="modal-top">
          <input type="text" />
          search
        </div>
      </div>
      <div className="modal-container-bottom">
        <div className="modal-bottom">
          <p>I'm Looking For...</p>
          <div className="looking-for">
            <ModalButtons className='button'>
              <p>Coffee</p>
            </ModalButtons>
            <ModalButtons className='button'>
              <p>Brew Guides</p>
            </ModalButtons>
            <ModalButtons className='button'>
              <p>Store Hours</p>
            </ModalButtons>
            <ModalButtons className='button'>
              <p>Chemex</p>
            </ModalButtons>
          </div>
          <p className='recent'>Recently Searched...</p>
          <div className="looking-for">
            <ModalButtons className='button button-dark'>
              French Press
            </ModalButtons>
            <ModalButtons className='button button-dark'>
              Rwanda
            </ModalButtons>
            <ModalButtons className='button button-dark'>
              Fellow
            </ModalButtons>
          </div>
        </div>
      </div>
    </div>
  )
}
