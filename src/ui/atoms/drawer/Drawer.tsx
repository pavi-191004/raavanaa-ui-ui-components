import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import type { DrawerProps } from './Drawer.types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './drawer.css';
import ActionButton from '../actionButton/ActionButton.tsx';


const Drawer = ({ title, paragraph, children, placement, ...props }: Readonly<DrawerProps>) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
       <ActionButton text="Open Drawer" className='my-custom-btn' onClick={handleShow} />


      <Offcanvas className='drawer'  show={show} onHide={handleClose} placement='end'{...props}>
        <Offcanvas.Header className='drawer-header' closeButton>
          <Offcanvas.Title >{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='drawer-body'>
          {paragraph && <p>{paragraph}</p>}
          {children}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Drawer;


