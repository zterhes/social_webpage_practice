import React from 'react';

export default ({ comment }) => {
  const { id, name, email, body } = comment;
  return (
    <div>
      <div className='card'>
        <div className='card-body'>
          <p className='card-text'>{body}</p>
        </div>
        <div class='card-footer text-muted'>
          <p>answered by <span>{name}</span></p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}
;
