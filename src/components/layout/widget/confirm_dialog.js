import React, { useState } from 'react'
import Modal from 'react-modal'
Modal.setAppElement('#modal-zone')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const openModal = (callback) => {
  callback(true);
}

const afterOpenModal = () => {

}

const closeModal = (callback) => {

}

const ConfirmDialog = ({ question = '', callbackYes = () => { }, callbackNo = () => { }, isOpenedModal = false }) => {
  const [modalIsOpen, setIsOpened] = useState(false)

  if (modalIsOpen !== isOpenedModal) {
    setIsOpened(isOpenedModal)
  }

  return <Modal
    isOpen={modalIsOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Confirm Option"
  >
    <div className='confirm-dialog'>
      <h1>{question}</h1>
      <button onClick={() => { callbackYes(); }} className='yes-button'>Yes</button>
      <button onClick={() => { callbackNo(); }} className='no-button'>No</button>
    </div>

  </Modal >
}

export default ConfirmDialog