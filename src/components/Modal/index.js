import React, { useState } from 'react';
import ModalBoot from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';

import '../../styles/global';

import { Component, Button } from './styles';

export default function Modal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Component>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <ModalBoot show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>Modal heading</ModalTitle>
        </ModalHeader>
        <ModalBody>Woohoo, you are reading this text in a modal!</ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </ModalFooter>
      </ModalBoot>
    </Component>
  );
}
