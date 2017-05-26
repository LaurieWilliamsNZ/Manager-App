import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payLoad: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payLoad: text
  };
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    console.log({email, password});
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({type: LOGIN_USER_SUCCESS, payLoad: user});
    });
  };
};