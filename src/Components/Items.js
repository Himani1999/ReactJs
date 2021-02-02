import React from 'react';

class Item1  extends React.Component{
    render(){
        return(
            <>
                <div>
                    Type of Item is 1
                </div>
            </>
        );
    }
}

class Item2  extends React.Component{
    render(){
        return(
            <>
                <div>
                    Type of Item is 2
                </div>
            </>
        );
    }
}

class Item3  extends React.Component{
    render(){
        return(
            <>
                <div>
                    Type of Item is 3
                </div>
            </>
        );
    }
}

class Item4 extends React.Component{
    render(){
        return(
            <>
                <div>
                    Hello
                </div>
            </>
        );
    }
}

class Login extends React.Component{
    render(){
        return(
            <>
                <div>
                    Login
                </div>
            </>
        );
    }
}

class InputText extends React.Component{
    render(){
        return(
            <>
                <div>Enter Username</div>
                <input type="text" placeholder="Username" style={{height:"20px", width:"200px"}}></input>
                <div>Enter Password</div>
                <input type="password" placeholder="password" style={{height:"20px", width:"200px"}}></input>
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

export {Item1,Item2,Item3,Item4,Login,InputText,Sign};


