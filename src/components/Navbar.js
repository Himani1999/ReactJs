import React from 'react';
import Chart2 from '../img/Chart2.png';


class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <>
            <div className="first">
                <div><img src={Chart2} alt="THis is Logo" className="pic" />
                </div><h2>MANAGEMENT</h2>
                <div className="Second">
                    <div className="user">Enter Username</div>
                    <input className="name" type="text"></input>
                    <div className="pass">Enter Password</div>
                    <input className="word" type="password"></input>
                    <div><button className="login" onClick={() => alert('You are Successfully Logged in !')}>
                        LOGIN</button>
                        </div>
                    <div><button className="login" onClick={() => alert('You are Successfully Logged in !')}>
                        LOGIN</button></div>
                    <div><button className="signin" onClick={signIn}>SIGN UP</button></div>
                    <div>{ this.props.name } (age: { this.props.age })</div>
                </div>
            </div>
            </>
        );
    }
}

function signIn() {
    console.log('The link was clicked.');
  }


  Navbar.defaultProps = { age: 'unknown' };

export default Navbar;