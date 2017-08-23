import axios from 'axios';
import { LOGIN_USER } from './types';


//user login
export function loginUser(user) {
  return function(dispatch) {
    axios.post('/api/login', user)
      .then((res) => {
        dispatch({ type: LOGIN_USER, payload: res.data })
      })
      .catch((err) => {
        dispatch({type: 'LOGIN_REJECTED', payload: err})
      })
  }
}
