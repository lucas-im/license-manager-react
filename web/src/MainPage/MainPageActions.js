import axios from 'axios';
import {toast} from 'react-toastify';
import {
    QUERY_BY_PHONE,
    QUERY_BY_NAME,
    EXTEND_LICENSE_DURATION,
    TERMINATE_LICENSE
} from "./MainPageTypes";

export const checkServerConnection = () => {
    console.log('serverconnection got throught!');
    axios.get('http://127.0.0.1:8000/api')
        .catch(error => {
            if (error.message === 'Network Error') toast.error(`Failed to connect database server.${error}`);
        })
}

export const queryByPhone = phoneNumber => dispatch => {
    console.log(phoneNumber)
    axios.post(`http://127.0.0.1:8000/api/clients/${phoneNumber}`)
        .then(response => {
            console.log('fetch successful.-delete later')
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
    axios.get(`http://127.0.0.1:8000/api/clients/${name}`)
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
    axios.patch(`http://127.0.0.1:8000/api/licenses/${id}`)
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
    axios.patch(`http://127.0.0.1:8000/api/licenses/${id}`)
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