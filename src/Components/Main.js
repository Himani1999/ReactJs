
import React from 'react';
import { InputText, Item1, Item2, Item4, Login , Sign} from "./Items";

class Main  extends React.Component{
    render(){
        return(
            <>
                <div className="main">
                    <Item2 />
                    <Item1 />
                </div>
                <div className="navbar">
                    <Item4 />                    
                </div>
                <div className="login">
                    <Login />
                </div>
                <div className="IText">
                    <InputText />
                </div>
                <div>
                    <Sign />
                </div>
            </>
        );
    }
}

export default Main;


