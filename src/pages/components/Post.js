import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Modal from './UserModal';

export default ({ post }) => {
  const { userId, id, title, body } = post;
  const [user, setUser] = useState();
  const [modalShow, setModalShow] = useState(false);

  useEffect(async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/' + userId);
    setUser(data);
  }, []);

  const path = '/postpage/' + id;
  return (
    <div>
      <div className='card'>
        <div onClick={() => setModalShow(true)} className='card-header'>
          <p>{user?.username}</p>
        </div>
        <Link to={path}>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{body}</p>
          </div>
        </Link>

      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        name={user?.name}
        email={user?.email}
        street={user?.address.street}
        suite={user?.address.suite}
        zipcode={user?.address.zipcode}
        city={user?.address.city}
        phone={user?.phone}
        website={user?.website}
        companyName={user?.company.name}
        companyCatchPhrase={user?.company.catchPhrase}
        companybs={user?.company.bs}
      />
    </div>

  );
}
;
