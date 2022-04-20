import {
    Button,
    Container,
    Table,
    InputGroup,
    FormControl,
    Row,
} from 'react-bootstrap'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { login } from './LoginActions'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            user: null,
            auth: null
        };
        this.loginClicked = this.loginClicked.bind(this)
    }

    componentDidMount() {
        if (this.props.auth.isLoggedIn) {
            this.props.history.push('/')
        }
    }

    loginClicked() {
        const res = this.props.login(this.state.email, this.state.password)
        console.log(res)
    }

    render() {
        return (
            <>
                <div className='login-container'>
                    <div className='login-title-container'>
                        <h3 className='login-title'>SolarBilling</h3>
                    </div>
                    <InputGroup className='login-input-group'>
                        <InputGroup.Prepend>
                            <InputGroup.Text className='login-text'>Email</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                    </InputGroup>
                    <InputGroup className='login-input-group'>
                        <InputGroup.Prepend>
                            <InputGroup.Text className='login-text'>Password</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type='password' onKeyDown={e => { if (e.code === 'Enter') { this.loginClicked() } }} value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                        <InputGroup.Append> <Button className='login-btn' onClick={this.loginClicked}>Login</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </>
        )
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    user: state.user,
    auth: state.auth
})

export default connect(mapStateToProps, { login })(withRouter(Login))