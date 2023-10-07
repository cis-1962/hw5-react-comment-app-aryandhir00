import React, { useState } from 'react';
import PostList from './PostList';
import './Post.css';

interface Post {
    name: string;
    text: string;
    replies: Post[];
    depth: number;
  }

/* eslint-disable react/prop-types, @typescript-eslint/no-redeclare */
function Post({name, text, depth} : {name: string, text: string, depth: number}) {
  const [votes, setVotes] = useState(0);
  const [replyName, setReplyName] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replies, setReplies] = useState<Post[]>([]);
  const addVotes = () => {
    setVotes(votes+1);
  };
  const subtractVotes = () => {
    setVotes(votes-1);
  };
  const addReply = () => {
    if (replyText !== '' && replyName !== '' && depth < 1) {
      const newReply: Post = {
        name: replyName, 
        text: replyText,
        replies: [],
        depth: depth + 1, 
      };

      setReplies((oldReplies) => [...oldReplies, newReply]);
    }
    setReplyName('');
    setReplyText('');
  };
  return (
    <div style={{ marginLeft: `${depth + 30}px` }} className="post-container">
      <div className="name-box">
        <p className="post-name">Name: {name}</p>
      </div>
      <div className="text-box">
        <p className="post-text">Text: {text}</p>
      </div>
      <div className="vote-buttons">
        <button type="button" onClick={addVotes} className="vote-button">
          Upvote
        </button>
        <span className="vote-count">{votes}</span>
        <button type="button" onClick={subtractVotes} className="vote-button">
          Downvote
        </button>
      </div>
      <div className="reply-box">
        <input
          type="text"
          placeholder="Enter your name"
          value={replyName}
          onChange={(e) => setReplyName(e.target.value)}
          className="text-input"
        />
        <input
          type="text"
          placeholder="Enter your reply here"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          className="text-input"
        />
        <button type="submit" onClick={addReply} className="reply-button">
          Reply
        </button>
      </div>
      <div>
        {replies.map((reply, index) => (
          /* eslint-disable react/no-array-index-key */
          <Post name={reply.name} text={reply.text} depth={reply.depth} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Post;