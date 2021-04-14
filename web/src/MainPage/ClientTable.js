import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {extendLicenseDuration, terminateLicense} from "./MainPageActions";
import {Button} from "react-bootstrap";

class ClientTable extends Component {

    onExtendLicenseDurationClick = () => {
        const {clients} = this.props;
        // this.props.extendLicenseDuration(clients.id);
    }

    onTerminateLicenseClick = () => {
        const {clients} = this.props;
        // this.props.terminateLicense(clients.id);
    }

    render() {
        const {clients} = this.props;
        return (
            <tr>
                <td>
                    {/*{clients.id}*/}
                </td>
                <td>
                    {/*{clients.name}*/}
                </td>
                <td>
                    {/*{clients.phone}*/}
                </td>
            </tr>
        );
    }
}

ClientTable.propTypes = {
    clients: PropTypes.object
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {extendLicenseDuration, terminateLicense})(
    withRouter(ClientTable)
);
