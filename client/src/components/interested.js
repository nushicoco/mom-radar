/**
 * Created by einavcarmon on 15/04/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';


import { fetchProfile } from '../actions/index'


class Interested extends Component{
    componentWillMount(){
        fetchProfile("coco@gmail.com");
        console.log("Interested:componentWillMount");
    }

    calcAge(date) {

        return 34;
    }

    render () {
        console.log("Interested:render");
        if (this.props.profile && this.props.profile.results){
            var user = this.props.profile.results[0];
            console.log(`user=${user}`);
            return (
                <div>
                    <div className="interested-profile-image" style={{backgroundImage:"url('" + user.picture.large + "')"}} />
                    {/*<img src="https://unsplash.it/350" />*/}
                    <h1> {user.name.first}, {this.calcAge.call(this, user.bod)}</h1>
                </div>)
        } else {
            return <div>Loading..</div>
        }
    }


}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchProfile}, dispatch);
}

function mapStateToProps({profile}){
    return {profile}
}

export default connect(mapStateToProps, mapDispatchToProps)(Interested);

