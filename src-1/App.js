//CRUD - {Create, Read, Update, Delete}
import React from 'react';
import Client from './Containers/Client';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={};
    }
    render(){
        return(
            <>
                <Client />
            </>
        );
    }
}

export default App;