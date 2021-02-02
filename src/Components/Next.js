import React from 'react';




class Item4 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:null,
            password:null
        }
    }
    static getDerivedStateFromProps(props,state){
        return {username: props.currentUser};
    }
    changeUser = () => {
        this.setState({username: "Vivek"});
        alert(this.state.username)
    }
    render(){
        return(
            <>
                <div>
                    {/* Hello Welome {this.props.currentUser} */}

                    <div>Hello Welome {this.state.username}</div>
                    <button onClick={this.changeUser}>Change User</button>

                   
                </div>
            </>
        );
    }
}

class Sign extends React.Component{
    render(){
        return(
            <>
                <button className="Signin">
                    LOGIN
                </button>
            </>
        );
    }
}

export {Item4,Sign};




