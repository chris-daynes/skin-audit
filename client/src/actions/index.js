import axios from 'axios';
import { LOGIN_USER, FETCH_USER } from './types';


//user login
export function loginUser(user) {


  return function(dispatch) {
    console.log('in the action', user)
    axios.post('/api/login', user)
      .then((res) => {
        dispatch({ type: LOGIN_USER, payload: res.data })
      })
      .catch((err) => {
        dispatch({type: 'LOGIN_REJECTED', payload: err})
      })
  }
}

//get the logged in user
export const fetchUser = () =>  async dispatch => {
    const res = await axios.get('/api/current_user') 
    dispatch({ type: FETCH_USER, payload: res.data})
  }
  
