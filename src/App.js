import React, { Component } from 'react'
import Landing from './components/landing/Landing'
import Login from './components/login/Login'
import Root from './Root'
import { ToastContainer } from 'react-toastify'
import { Route } from 'react-router-dom';

export default class App extends Component {
    render() {
        const user = JSON.parse(sessionStorage.getItem('user'))
        return (
            <>
                <Root>
                    <ToastContainer hideProgressBar={true} newestOnTop={true} />
                    {/* <Route exact path='/' render={() => {
                        return user ? <Landing /> : <Login />
                    }} /> */}
                    <Route exact path='/' component={Landing} />
                    <Route path='/login' component={Login} />
                </Root>
            </>
        );
    }
}