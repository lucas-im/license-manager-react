import React, {Component} from "react";
import MainPage from "./MainPage/MainPage";
import Root from './Root';
import {ToastContainer} from 'react-toastify';
import axios from "axios";

export default class App extends Component {
    render() {
        return (
            <>
                <Root>
                    <ToastContainer hideProgressBar={true} newestOnTop={true}/>
                    <MainPage/>
                </Root>
            </>
        );
    }
}