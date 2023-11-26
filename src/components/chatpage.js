import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, deleteMessage, likeMessage } from '../actions/chataction.js';

const ChatPage = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      dispatch(sendMessage({ id: Date.now(), text: newMessage, liked: false }));
      setNewMessage('');
    }}
    return (
    <div>
      <h1>Chat Page</h1>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <p>{message.text}</p>
            <button onClick={() => dispatch(deleteMessage(message.id))}>Delete</button>
            <button onClick={() => dispatch(likeMessage(message.id))}>
              {message.liked ? 'Unlike' : 'Like'}
            </button>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
