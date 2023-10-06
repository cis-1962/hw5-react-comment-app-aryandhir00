import React, {useState} from 'react';

/* eslint-disable react/prop-types */
function Reply ({ addReply }) {
  const [name, setName] = useState('');
  const [reply, setReply] = useState('');
  const [upVotes, setUpVotes] = useState(0);
  const increment = () => {
    setUpVotes(upVotes + 1);
  }
  const decrement = () => {
    setUpVotes(upVotes - 1);
  }

  const handleSubmit = (e) => {
    /* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
    e.preventDefault();
    if (name && reply) {
      /* eslint-disable @typescript-eslint/no-unsafe-call */
      addReply({ name, reply });
      setName('');
      setReply('');
      setUpVotes(0);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Write reply"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <button type="submit">
          Create Post
        </button>
        <button type="button" onClick={increment}>
          Increment 
        </button>
        Upvotes: {upVotes}
        <button type="button" onClick={decrement}>
          Decrement
        </button>
      </form>
    </div>
  );
}


export default Reply;  
