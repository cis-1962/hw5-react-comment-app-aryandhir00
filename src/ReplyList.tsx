import React, {useState} from 'react';
import Reply from './Reply';

function ReplyList({ replies }: {replies: { name: string; text: string }[]}) {
    return (
      <div>
        {replies.map((reply, index) => (
           /* eslint-disable react/no-array-index-key */
          <Reply key={index} addReply={reply}/>
        ))}
      </div>
    );
  }
  
  export default ReplyList;