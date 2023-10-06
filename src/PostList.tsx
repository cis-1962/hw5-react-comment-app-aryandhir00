import React, {useState} from 'react';
import Post from './Post';

function PostList({ posts }: {posts: { name: string; text: string; replies: string[]}[]}) {
    return (
      <div>
        {posts.map((post, index) => (
           /* eslint-disable react/no-array-index-key */
          <Post key={index} addPost={post}/>
        ))}
      </div>
    );
  }
  
  export default PostList;