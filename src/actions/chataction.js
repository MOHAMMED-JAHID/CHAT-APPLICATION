export const sendMessage = (message) => ({
    type: 'SEND_MESSAGE',
    payload: message,
  });
  
  export const deleteMessage = (messageId) => ({
    type: 'DELETE_MESSAGE',
    payload: messageId,
  });
  
  export const likeMessage = (messageId) => ({
    type: 'LIKE_MESSAGE',
    payload: messageId,
  });
  