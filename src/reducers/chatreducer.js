const initialState = {
    messages: [],
  };
  
  const chatReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEND_MESSAGE':
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
  
      case 'DELETE_MESSAGE':
        return {
          ...state,
          messages: state.messages.filter((msg) => msg.id !== action.payload),
        };
  
      case 'LIKE_MESSAGE':
        return {
          ...state,
          messages: state.messages.map((msg) =>
            msg.id === action.payload ? { ...msg, liked: !msg.liked } : msg
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default chatReducer;
  