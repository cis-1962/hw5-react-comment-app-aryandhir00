import React, { useState } from 'react';
import Reply from './Reply';
import ReplyList from './ReplyList';

/* eslint-disable react/prop-types */
function Post({ addPost }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [replies, setReplies] = useState<{ name: string; text: string }[]>([]);
  const handleAddReply = () => {
      setReplies([...replies, { name, text }]);
    //   setName('');
    //   setText('');
    // }
  };
  return (
    <div>
      
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Enter your post here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        


      <ReplyList replies={replies} />
    </div>
  );
}

export default Post;