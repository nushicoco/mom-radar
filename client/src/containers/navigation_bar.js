/**
 * Created by einavcarmon on 12/04/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        <header>
            <a href="#home" className="logo" data-scroll>Fixed Nav</a>
            <nav className="nav-collapse">
                <ul>
                    <li className="menu-item active"><a href="#home" data-scroll>Home</a></li>
                    <li className="menu-item"><a href="#about" data-scroll>About</a></li>
                    <li className="menu-item"><a href="#projects" data-scroll>Projects</a></li>
                    <li className="menu-item"><a href="#blog" data-scroll>Blog</a></li>
                    <li className="menu-item"><a href="http://www.google.com" target="_blank">Google</a></li>
                </ul>
            </nav>
        </header>

        <section id="home">
            <h1>Fixed Nav</h1>
        <p>The code and examples are hosted on GitHub and can be <a href="https://github.com/adtile/fixed-nav">found from here</a>. Read more about the approach from&nbsp;<a href="http://blog.adtile.me/2014/03/03/responsive-fixed-one-page-navigation/">our&nbsp;blog</a>.</p>
        </section>

        <section id="about">
            <h1>About</h1>
            </section>

            <section id="projects">
            <h1>Projects</h1>
            </section>

            <section id="blog">
            <h1>Blog</h1>
            </section></div>

    )
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

NavigationBar.propTypes = {
    userName:React.PropTypes.string,

    // Custom validations your component requires
    email(props, propName, component){
        if (!(propName in props)){
            return new Error(`missing ${propName}`)
        }
    }
}

NavigationBar.defualtProps = {
    userName: "Default user name"
}

// export default connect(mapStateToProps)(Profile);

export default NavigationBar
