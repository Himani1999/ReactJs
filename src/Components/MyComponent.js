import React from 'react';

class MyComponent extends React.Component{
    render(){
        return(
                <h1>
                    <div style={ {color:"red",backgroundColor:"yellow", fontFamily:"arial"} }  className="item1"> { this.props.divData } </div>
                    <div className="item1">{ this.props.h1Data}</div>
                </h1>
        );
    }
}

export default MyComponent;
