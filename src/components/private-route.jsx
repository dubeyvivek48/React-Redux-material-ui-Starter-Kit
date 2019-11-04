import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect, Route} from 'react-router-dom';

class PrivateRoute extends Component {
    render() {
        const { loggedIn, children, ...rest }=this.props;
        console.log("loggedIn", loggedIn);
        return(
            <> {
                loggedIn
                  ? <>{children} </>
                  : <Redirect to='/sign-in'/>
            }</>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        loggedIn: state.loggedIn
    }
}
export default connect(mapStateToProps,null)(PrivateRoute);