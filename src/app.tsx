import React, { useState } from 'react';
import Post from './Post';
import PostList from './PostList';


export default function App() {
  const [posts, setPosts] = useState<any[]>([]);
  const addPost = (post) => {
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    const newPosts = [...posts, post];
    /* eslint-disable @typescript-eslint/no-unsafe-return */
    setPosts(() => newPosts);
  };
  return (
    /* eslint-disable react/self-closing-comp */
    <div className="App">
      <h1>Aryan Dhir commenting platform!</h1>
      <button type="submit" onClick = {addPost}>
      Submit
      </button>
      <PostList posts={posts} />
      <Post addPost={addPost} />
    </div>
  );
}


