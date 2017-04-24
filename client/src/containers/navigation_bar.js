/**
 * Created by einavcarmon on 12/04/2017.
 */
import React, { Component } from 'react';
//import {Link} from 'react-router-dom'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import '../../public/lib/ie.css';
// import '../../public/lib/styles.css';

class NavigationBar extends Component
{
    constructor(props) {
        super();
    }
    // update (e) {
    //     this.setState({
    //         userName:this.userName.refs.input.value
    //     });
    // }

    // componentWillMount(){
    //     console.log("componentWillMount")
    //     fetch(`/users`, {
    //         accept: 'application/json'
    //     }).then(response => response.json())
    //         .then(({results:userName}) => {});
    // }

    // componentWillUnMount(){
    //     This is the destructor
    //      console.log("componentWillUnMount")
    //
    // }

    // componentDidMount(){
    //     console.log("componentDidMount")
    // }
    //
    // componentWillReceiveProps(nexProps){}
    // shouldComponentUpdate(nextProps,nextState){}
    // componentDidUpdate(prevProps,prevState){}
    
    render () {
        console.log ("render");

        // let userName = this.state.userName;

        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">MomSpot</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="/profile">Profile Page</NavItem>
                            <NavItem eventKey={2} href="#">Link</NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Link Right</NavItem>
                            <NavItem eventKey={2} href="#">Link Right</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );

    }
}

// function mapStateToProps(state) {
//     return {
//         userName: state.userName
//     }
// }

NavigationBar.propTypes = {
    userName:React.PropTypes.string,

    // Custom validations your component requires
    // email(props, propName, component){
    //     if (!(propName in props)){
    //         return new Error(`missing ${propName}`)
    //     }
    // }
}

NavigationBar.defualtProps = {
    userName: "Default user name"
}

// export default connect(mapStateToProps)(Profile);

export default NavigationBar
