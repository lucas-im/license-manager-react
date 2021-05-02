import React, {Component} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {extendLicenseDuration, terminateLicense} from "./MainPageActions"
import {Button, ButtonGroup} from "react-bootstrap"

class ClientTable extends Component {

    onExtendLicenseDurationClick = () => {
        const {clients} = this.props;
        this.props.extendLicenseDuration(clients.client_id);
    }

    onTerminateLicenseClick = () => {
        const {clients} = this.props;
        this.props.terminateLicense(clients.client_id);
    }

    render() {
        const {clients} = this.props
        return (
            <tr>
                <td>
                    {clients.client_id}
                </td>
                <td>
                    {clients.name}
                </td>
                <td>
                    {clients.phone}
                </td>
                <td>
                    {clients.start_date}
                </td>
                <td>
                    {clients.expiry_date}
                </td>
                <td>
                    <ButtonGroup>
                        <Button onClick={this.onExtendLicenseDurationClick} size={'sm'}>
                            Add/Modify
                        </Button>
                        <Button onClick={this.onTerminateLicenseClick} variant={'danger'} size={'sm'}>
                            Terminate
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>
        )
    }
}

ClientTable.propTypes = {
    clients: PropTypes.object
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {extendLicenseDuration, terminateLicense})(
    withRouter(ClientTable)
)
