import { FETCH_USER, LOGIN_USER, LOGOUT_USER } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_USER: {
      console.log('fetch user',action.payload)
      return action.payload || false;
    }
    case LOGIN_USER: {
      console.log('login user', action.payload)
      return action.payload || false
    }
    case LOGOUT_USER:  
      console.log('logout user', action.payload)
      return action.payload || false

    default: 
      return state
  }
}