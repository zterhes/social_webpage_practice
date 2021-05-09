import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './styles.css';

export default (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body>
        <div className='modalHeader'>
          <h1>{props.name}</h1>
        </div>
        <div className='row'>
          <div className='col'>
            <p>{props.street} {props.suite}</p>
            <p>{props.zipcode} {props.city}</p>
          </div>
          <div className='col'>
            <p class='text-right'>{props.email}</p>
            <p class='text-right'>tel.:{props.phone}</p>
            <p class='text-right'>{props.website}</p>
          </div>
        </div>
        <div className='text-center'>
          <h5>{props.companyName}</h5>
          <p>{props.companyCatchPhrase}</p>
          <p>{props.companybs}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
;
