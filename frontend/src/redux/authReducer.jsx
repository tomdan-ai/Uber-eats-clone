// src/redux/authReducer.js

const initialState = {
    user: null,
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGNUP':
      case 'SIGNIN':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
      case 'SIGNOUT':
        return {
          ...state,
          user: null,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  