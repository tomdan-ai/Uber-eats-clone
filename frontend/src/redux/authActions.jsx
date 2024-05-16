// src/redux/authActions.js

export const signup = (userData) => {
  return { type: 'SIGNUP', payload: userData };
};

export const signin = (userData) => {
  return { type: 'SIGNIN', payload: userData };
};

export const signout = () => {
  return { type: 'SIGNOUT' };
};
