
import React from 'react';
import { Item4, Sign} from "./Next";
const username = "Himani";
class Main  extends React.Component{
    render(){
        return(
            <>
                <div className="navbar">
                    <Item4 currentUser={username} />                    
                </div>
                <div>
                    <Sign />
                </div>
            </>
        );
    }
}

export default Main;


