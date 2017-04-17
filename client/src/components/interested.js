/**
 * Created by einavcarmon on 15/04/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import { fetchProfile } from '../actions/index'

import ControlledCarousel from './controlled_carousel';


class Interested extends Component{

    constructor(props){
        super(props);
        this.state = {
            userName:props.userName,
            profile:{}
        };
        // needs the props in order to be bound to the right scope
        this.props.fetchProfile("einav@gmail.com")

    }

    componentWillMount(){
        // fetchProfile("coco@gmail.com");
        // console.log("Interested:componentWillMount");
    }

    calcAge(date) {

        return 34;
    }

    render () {
        console.log("Interested:render");
        if (this.props.profile && this.props.profile.results){
            var user = this.props.profile.results[0];
            console.log(`user=${user}`);
            let items = [
                {src:user.picture.large, text:"here", label:"Label", key:1},
                {src:"https://unsplash.it/350", text:"random1 here", label:"random Label1",key:2},
                {src:"https://unsplash.it/365", text:"random2 here", label:"random Label2",key:3}
            ];

            return (
                <div>
                    <div className="interested-actions">
                        <span className="fa-stack fa-2x">
                            <i className="fa fa-2x fa-circle-o fa-stack-2x skip" aria-hidden="true"></i>
                            <i className="fa fa-times fa-stack-1x skip" aria-hidden="true"></i>
                        </span>
                        <span className="fa-stack fa-2x">
                            <i className="fa fa-2x fa-circle-o fa-stack-2x love" aria-hidden="true"></i>
                            <i className="fa fa-heart fa-stack-1x love small-heart" aria-hidden="true"></i>
                        </span>
                    </div>
                    {/*<div className="interested-profile-image" style={{backgroundImage:"url('" + user.picture.large + "')"}} />*/}
                    {/*<img src="https://unsplash.it/350" />*/}
                    <ControlledCarousel items={items}></ControlledCarousel>
                    <h1> {user.name.first}, {this.calcAge.call(this, user.bod)}</h1>
                    <div>
                        <button className="btn btn1">
                            coco
                        </button>
                        <button className="btn btn2">
                            loco
                        </button>
                        <button className="btn btn3">
                            choco
                        </button></div>
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

