import axios from 'axios'
import { toast } from 'react-toastify'
import { LOGIN_SUCCESS, LOGOUT } from '../../Types'

const baseUrl = 'http://127.0.0.1:3030/'

export const checkServerConnection = () => {
    axios.get(baseUrl)
        .then(response => console.log(`backend server connection status: ${response.statusText}`))
        .catch(error => {
            if (error.message === 'Network Error') toast.error(`Failed to connect database server.${error}`)
        })
}

export const getUserInfo = () => dispatch => {
    const user = JSON.parse(sessionStorage.getItem('user'))

    if (user) {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: user,
            isLoggedIn: true
        })
    }
}

export const logout = () => dispatch => {
    console.log('logout')
    sessionStorage.removeItem('user')
    dispatch({
        type: LOGOUT,
    })
}