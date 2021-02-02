import React from 'react';
import './css/index.css';
import MyComponent from './Components/MyComponent';

class App extends React.Component{
    render(){
        return(
                <div className="main">
                    <MyComponent h1Data="This is my h1 tag" divData="This is my Div1" />
                </div>
            );
    }
}


// function App(){
//     return(
//             <div>
//                <div style={ {color:"red",backgroundColor:"yellow", fontFamily:"arial"} }>hiii</div>
//                <h1>hiiiiiiiiiii</h1>
//             </div>
//     );
    
// }

export default App;

