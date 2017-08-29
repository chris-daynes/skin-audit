import axios from 'axios';
import { LOGIN_USER, FETCH_USER, LOGOUT_USER } from './types';


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

//get the logged in user
export const fetchUser = () =>  async dispatch => {
    const res = await axios.get('/api/current_user') 
    dispatch({ type: FETCH_USER, payload: res.data})
  }

//logout user
export const logoutUser = () => async dispatch => {
  const res = await axios.get('/api/logout')
  dispatch({ type: LOGOUT_USER, payload: res.data});
}
  
