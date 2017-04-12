/**
 * Created by einavcarmon on 09/04/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchProfile } from '../actions/index'

class Profile extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            userName:props.userName,
            profile:{}
        };
        this.props.fetchProfile("einav@gmail.com")

    }
    update (e) {
        this.setState({
            userName:this.userName.refs.input.value
        });
    }

    componentWillMount(){
        // console.log("componentWillMount")
        // fetch(`/users`, {
        //     accept: 'application/json'
        // }).then(response => response.json())
        //     .then(({results:userName}) => {});
    }

    componentWillUnMount(){
        // This is the destructor
        console.log("componentWillUnMount")

    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentWillReceiveProps(nexProps){}
    // shouldComponentUpdate(nextProps,nextState){}
    componentDidUpdate(prevProps,prevState){}

    render () {
        console.log ("render");

        let userName = this.state.userName;

        return (
            <div>
                <h1>Name is {this.props.profile.userName} </h1>
                <MySecondInput val={this.state.profile.userName} ref={ component => this.userName = component} update={this.update.bind(this)}/>
                <Button>Save</Button>
            </div>)
    }
}

class MySecondInput extends Component {
    render(){
        return (<input ref="input" value={this.props.val} onChange={this.props.update}/>)
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchProfile}, dispatch);
}

function mapStateToProps({profile}){
    return {profile}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
