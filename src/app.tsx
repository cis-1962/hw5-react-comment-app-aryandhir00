import React, { useState } from 'react';
// import Post from './Post';
import PostList from './PostList';
import './App.css';

interface Post {
  name: string;
  text: string;
  depth: number;
}

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [depth, setDepth] = useState(0);
  const addPost = () => {
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    /* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, no-restricted-globals */
    console.log(name)
    console.log(text)
    if (name !== '' && text !== '') {
      // const newPosts = [...posts, {name, text}];
      // console.log({name, text});
      console.log(posts);
      setPosts((oldposts) => [...oldposts, {name, text, depth}]);
      console.log(posts);
      /* eslint-disable @typescript-eslint/no-unsafe-return */
    }
  
    /* eslint-disable @typescript-eslint/no-unsafe-return */
    setName('');
    setText('');
  };
  return (
    /* eslint-disable react/self-closing-comp */
    <div className="App">
      <h1>Aryan Dhir commenting platform!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your post here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" onClick = {(e) => {
        e.preventDefault();
        addPost();
      }}>
      Submit
      </button>
      <PostList posts={posts} />
    </div>
  );
}


