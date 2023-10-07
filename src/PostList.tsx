import React, {useState} from 'react';
import Post from './Post';

function PostList({ posts }: {posts: { name: string; text: string; depth: number}[]}) {
    return (
      <div>
        {posts.map((post, index) => (
           /* eslint-disable react/no-array-index-key */
          <Post name={post.name} text={post.text} depth = {post.depth}key={index}/>
        ))}
      </div>
    );
  }
  
  export default PostList;