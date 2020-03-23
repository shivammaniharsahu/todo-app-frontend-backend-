import React, { Component } from 'react'
import * as actions from '../../store/actions'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class Logout extends Component {
    componentDidMount(){
        console.log("hummm.....2");
        this.props.logout();
    }
    render() {
        console.log("hummm.....1");
        return (
            <h1>Kake....</h1>
            // <Redirect to="/login" />
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => {dispatch(actions.logout())}
    }
}
export default connect(null, mapDispatchToProps)(Logout)
