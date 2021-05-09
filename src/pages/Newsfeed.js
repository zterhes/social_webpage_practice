import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './components/Post';

export default () => {
  const [posts, setPosts] = useState();
  useEffect(async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(data);
  }, []);

  return (
    <div>
      {posts ? (
        posts.map(post => (
          <Post post={post} key={post.id} />
        ))
      ) : (
        <>Wait for news</>
      )}
    </div>
  );
};
