import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import type { CustomModalProps } from './customModal.types.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Actionbutton from '../actionbutton/ActionButton.tsx';
import './custommodal.css';


const CustomModal = ({ title, paragraph }: CustomModalProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      

      <Actionbutton text="Open Modal" className='my-custom-btn' onClick={handleShow} />

      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>{paragraph}</Modal.Body>
        <Modal.Footer>
          <Actionbutton text="Close" variant='secondary' onClick={handleClose} />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomModal;
