/**
 * Created by einavcarmon on 09/04/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component
{
    render () {
        console.log ("props.userName",this.props.userName);

        return (
            <div>
                <h1>cococo</h1>
            </div>)
    }
}

function mapStateToProps(state) {
    return {
        userName: state.userName
    }
}

export default connect(mapStateToProps)(Profile);
