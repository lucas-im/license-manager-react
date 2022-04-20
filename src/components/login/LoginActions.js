import axios from 'axios'
import { toast } from 'react-toastify'
import { LOGIN_SUCCESS, LOGOUT } from '../../Types'
const baseUrl = 'http://127.0.0.1:3030/users/'

export const checkServerConnection = () => {
    axios.get(baseUrl)
        .then(response => console.log(`backend server connection status: ${response.statusText}`))
        .catch(error => {
            if (error.message === 'Network Error') toast.error(`Failed to connect database server.${error}`)
        })
}

export const login = (email, password) => dispatch => {
    axios.post(baseUrl + 'login', {
        email: email,
        password: password
    }).then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        sessionStorage.setItem('user', JSON.stringify(res.data))
    }).catch(err => {
        toast.error(`Failed to login.${err}`)
    })
}

export const logout = () => dispatch => {
    sessionStorage.removeItem('user')
    dispatch({
        type: LOGOUT,
    })
}