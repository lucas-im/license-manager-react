import axios from 'axios'
import {toast} from 'react-toastify'
import {
    QUERY_BY_PHONE,
    QUERY_BY_NAME,
    EXTEND_LICENSE_DURATION,
    TERMINATE_LICENSE
} from "./MainPageTypes"

export const checkServerConnection = () => {
    axios.get('http://127.0.0.1:8000/api')
        .then(response => console.log(`backend server connection status: ${response.statusText}`))
        .catch(error => {
            if (error.message === 'Network Error') toast.error(`Failed to connect database server.${error}`)
        })
}

export const queryByPhone = phoneNumber => dispatch => {
    console.log(phoneNumber)
    axios.get(`http://127.0.0.1:8000/api/phone/${phoneNumber}`)
        .then(response => {
            dispatch({
                type: QUERY_BY_PHONE,
                payload: response.data
            })
        })
        .catch(error => {
            toast.error(`Could not find data that matches your criteria.${error}`)
        })
}

export const queryByName = name => dispatch => {
    console.log(name);
    axios.get(`http://127.0.0.1:8000/api/name/${name}`)
        .then(response => {
            dispatch({
                type: QUERY_BY_NAME,
                payload: response.data
            })
        })
        .catch(error => {
            toast.error(`Could not find data that matches your criteria.${error}`)
        })
}

export const extendLicenseDuration = id => dispatch => {
    console.log(id)
    axios.patch(`http://127.0.0.1:8000/api/id/${id}`)
        .then(response => {
            dispatch({
                type: EXTEND_LICENSE_DURATION,
                payload: response.data
            })
        })
        .catch(error => {
            toast.error(`Failed to extend license duration.${error}`)
        })
}

export const terminateLicense = id => dispatch => {
    console.log(id)
    axios.delete(`http://127.0.0.1:8000/api/id/${id}`)
        .then(response => {
            dispatch({
                type: TERMINATE_LICENSE,
                payload: response.data
            })
        })
        .catch(error => {
            toast.error(`Failed to terminate license.${error}`)
        })
}