import {
    Button,
    Container,
    Table,
    InputGroup,
    FormControl,
    Row,
} from 'react-bootstrap'
import React, { Component } from 'react'
import { connect, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { checkServerConnection, getUserInfo, logout } from './LandingActions'
import ClientTable from './ClientTable'

class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cleints: [],
            // phoneNumber: null,
            // name: null,
            // isWindowTooSmall: window.matchMedia('(min-width: 1080px)').matches
        }

        // this.onQueryByPhoneClicked = this.onQueryByPhoneClicked.bind(this)
        // this.onQueryByNameClicked = this.onQueryByNameClicked.bind(this)

    }

    componentDidMount() {
        if (!this.props.auth.isLoggedIn) {
            this.props.history.push('/login')
        }
        const media = window.matchMedia('(min-width: 1080px')
        media.addEventListener('change', e => this.setState({ isWindowTooSmall: e.matches }))
    }

    render() {

        const { clients } = this.props.clients
        const noResult = <td className={'text-center'} colSpan={6} >No Result.</td>
        let items = []
        if (clients !== null) {
            if (clients.length === 0) {
                items = noResult
            }
            else {
                items = clients.map(client => {
                    return <ClientTable clients={client} />
                })
            }
        }

        return (
            <>
                <Container fluid='false' className='p-2 bg-light border.' >
                    <div className='header'>
                        <h4 className='p-2'>{this.props.auth.name}</h4>
                        <div className='header-right'>
                            <Button variant="primary" className='p-2 m-2' onClick={() => {
                                logout()
                                this.props.history.push('/login')
                            }}>Logout</Button>
                        </div>
                    </div>
                    <InputGroup className='margin-bottom'>
                        <InputGroup.Prepend>
                            <InputGroup.Text id='basic-addon1'>Search By Phone</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={this.state.phoneNumber}
                            onChange={e => this.setState({ phoneNumber: e.target.value })}
                            placeholder='ex) 010123d45678'
                        />
                        <InputGroup.Append><Button size={'sm'} onClick={this.onQueryByPhoneClicked}>Search</Button></InputGroup.Append>

                    </InputGroup>


                    <h5 className='p-2'>List of Customers</h5>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Client No.</th>
                                <th>Client Name</th>
                                <th>Phone No.</th>
                                <th>Valid From</th>
                                <th>Valid Until</th>
                                <th>License Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </Table>
                </Container>
            </>
        )
    }
}



Landing.propTypes = {
    logout: PropTypes.func.isRequired,
    clients: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    clients: state.clients,
    user: state.user,
    auth: state.auth
});

export default connect(mapStateToProps, { checkServerConnection, logout })(withRouter(Landing))