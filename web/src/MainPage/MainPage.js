import {
    Card,
    Button,
    Alert,
    Col,
    Breadcrumb,
    Container,
    Form,
    Navbar,
    Nav,
    Row,
    Table,
    InputGroup,
    FormControl
} from 'react-bootstrap';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {checkServerConnection, queryByPhone, queryByName} from './MainPageActions';
import ClientTable from './ClientTable';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: null,
            name: null
        }
        this.onQueryByPhoneClicked = this.onQueryByPhoneClicked.bind(this);
        this.onQueryByNameClicked = this.onQueryByNameClicked.bind(this);
    }

    componentDidMount() {
        checkServerConnection();
    }

    onQueryByPhoneClicked() {
        console.log(this.state.phoneNumber);
        this.props.queryByPhone(this.state.phoneNumber);
    }

    onQueryByNameClicked() {
        console.log(this.state.name);
        this.props.queryByName(this.state.Name);
    }

    render() {
        const {clients} = this.props.clients;
        let items = {}
        if (clients !== null) {
            items = clients.map(client => {
                return <ClientTable clients={client}/>
            })
        }

        return (
            <>
                <Container className='p-2 bg-light border'>
                    <h4 className='p-2'>License Management</h4>
                    <InputGroup className='mb-3'>
                        <InputGroup.Append>
                            <InputGroup.Text id='basic-addon1'>Search By Phone</InputGroup.Text>
                        </InputGroup.Append>
                        <FormControl value={this.state.phoneNumber}
                                     onChange={e => this.setState({phoneNumber: e.target.value})}
                                     placeholder='ex) XXX-XXXX-XXXX'/>
                        <InputGroup.Prepend>
                            <Button onClick={this.onQueryByPhoneClicked}>Search</Button>
                        </InputGroup.Prepend>
                        <InputGroup.Append>
                            <InputGroup.Text id='basic-addon1'>Search By Name</InputGroup.Text>
                        </InputGroup.Append>
                        <FormControl value={this.state.name} onChange={e => this.setState({name: e.target.value})}
                                     placeholder='ex) David Jones'/>
                        <InputGroup.Prepend>
                            <Button onClick={this.onQueryByNameClicked}>Search</Button>
                        </InputGroup.Prepend>
                    </InputGroup>
                    <h5 className='p-2'>List of Customers</h5>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Valid From</th>
                            <th>Valid Until</th>
                            <th>Add License</th>
                            <th>Terminate License</th>
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
    clients: PropTypes.object,
}
const mapStateToProps = state => ({
    clients: state.clients
});

export default connect(mapStateToProps, {checkServerConnection, queryByPhone, queryByName})(withRouter(MainPage))