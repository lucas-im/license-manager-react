import {
    Button,
    Container,
    Table,
    InputGroup,
    FormControl,
} from 'react-bootstrap'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {checkServerConnection, queryByPhone, queryByName} from './MainPageActions'
import ClientTable from './ClientTable'

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: null,
            name: null,
            isWindowTooSmall: window.matchMedia('(min-width: 1080px)').matches
        }
        this.onQueryByPhoneClicked = this.onQueryByPhoneClicked.bind(this)
        this.onQueryByNameClicked = this.onQueryByNameClicked.bind(this)
    }

    componentDidMount() {
        checkServerConnection()
        const media = window.matchMedia('(min-width: 1080px')
        media.addEventListener('change', e => this.setState({isWindowTooSmall: e.matches}))
    }

    //TODO: Add 'enter' key listener on formControl
    //TODO: Set Container's minimum width to 1080px
    //TODO: Add 'Add Client' button next to 'List of Clients' header.
    //TODO: Add buttons to remove client next to client's name
    //TODO: If license is valid(expiry_date is prior than now)paint expiry_date block to red, otherwise paint green.
    //TODO: Make function to process datetime format between django and react.

    onQueryByPhoneClicked() {
        console.log(this.state.phoneNumber)
        this.props.queryByPhone(this.state.phoneNumber)
    }

    onQueryByNameClicked() {
        console.log(this.state.name)
        this.props.queryByName(this.state.name)
    }

    render() {
        const {clients} = this.props.clients
        const noResult = <td className={'text-center'} colSpan={6} >No Result.</td>
        let items = []
        if (clients !== null) {
            if(clients.length === 0) {
                items = noResult
            }
            else {
                items = clients.map(client => {
                    return <ClientTable clients={client}/>
                })
            }
        }

        return (
            <>
                <Container fluid='false' className='p-2 bg-light border.'>
                    <h4 className='p-2'>License Management</h4>
                    <InputGroup className='margin-bottom'>
                        <InputGroup.Prepend>
                            <InputGroup.Text id='basic-addon1'>Search By Phone</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={this.state.phoneNumber}
                                     onChange={e => this.setState({phoneNumber: e.target.value})}
                                     placeholder='ex) 01012345678'
                        />
                        <InputGroup.Prepend>
                            <Button size={'sm'} onClick={this.onQueryByPhoneClicked}>Search</Button>
                        </InputGroup.Prepend>
                        <InputGroup.Prepend>
                            <InputGroup.Text id='basic-addon1'>Search By Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={this.state.name} onChange={e => this.setState({name: e.target.value})}
                                     placeholder='ex) David Jones'/>
                        <InputGroup.Append>
                            <Button size={'sm'} onClick={this.onQueryByNameClicked}>Search</Button>
                        </InputGroup.Append>
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

MainPage.propTypes = {
    clients: PropTypes.object.isRequired,
    queryByPhone: PropTypes.func.isRequired,
    queryByName: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    clients: state.clients
});

export default connect(mapStateToProps, {checkServerConnection, queryByPhone, queryByName})(withRouter(MainPage))