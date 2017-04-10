/**
 * Created by einavcarmon on 09/04/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component
{
    constructor() {
        super();
        this.state = {userName:"coco2"};
    }
    update (e) {
        this.setState({
            userName:this.userName.refs.input.value
        });
    }

    render () {
        // console.log ("props.userName",this.props);

        return (
            <div>
                <h1>Name is {this.state.userName}</h1>
                <MySecondInput ref={ component => this.userName = component} update={this.update.bind(this)}/>
                <Button>Save</Button>
            </div>)
    }
}

class MySecondInput extends Component {
    render(){
        return (<input ref="input" onChange={this.props.update}/>)
    }
}

const MyInput = (props) =>
    <input onChange={props.update}/>

const Button = (props) =>
    <button onChange={props.update}>{props.children}</button>


// function mapStateToProps(state) {
//     return {
//         userName: state.userName
//     }
// }

Profile.propTypes = {
    userName:React.PropTypes.string,

    // Custom validations your component requires
    email(props, propName, component){
        if (!(propName in props)){
            return new Error(`missing ${propName}`)
        }
    }
}

Profile.defualtProps = {
    userName: "Default user name"
}

// export default connect(mapStateToProps)(Profile);

export default Profile
