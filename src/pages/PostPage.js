import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Comment from './components/Comment';
import './components/styles.css';

export default () => {
  const [comments, setComments] = useState();
  const [post, setPost] = useState();
  const { postId } = useParams();

  useEffect(async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments');
    setComments(data);
  }, []);

  useEffect(async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
    setPost(data);
  }, []);

  return (
    <div>
      <div>
        <div className='card'>
          <div className='card-header postPageHeader'>
            <h5 className=''>{post?.title}</h5>
          </div>
          <div className='card-body'>
            <p className='card-text'>{post?.body}</p>
          </div>
        </div>
      </div>
      <p className='answer'>Answers</p>
      <div>
        {console.log(comments)}
        {comments ? (
          comments.map(comment => (
            <Comment comment={comment} key={comment.id} />
          ))
        ) : (<>Várás van</>)}
      </div>
    </div>

  );
}
;
