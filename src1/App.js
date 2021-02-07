import React from 'react';
import './css/app.css';
// import Car from './Components/MyComponent.js';


class Car extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       brand: "Ford",
       model: "Mustang",
       color: "red",
       year: 1964
     };
   }
   render() {
     return (
       <div>
         <h1>My {this.state.brand}</h1>
         <p>
           It is a {this.state.color}
           {this.state.model}
           from {this.state.year}.
         </p>
       </div>
     );
   }
 }
export default Car;



// class App extends React.Component {
//    render(){
//       return(
//          <div className="main">
//             <div>Bye</div>
//             <h2>hey!!</h2>

//          </div>
//       );
//    }
// }
// export default App;



// class App extends React.Component{
//     render(){
//         return(
//                 <div className="main">
//                     <MyComponent h1Data="This is my h1 tag" divData="This is my Div1" />
//                 </div>
//             );
//     }
// }


// function App(){
//     return(
//             <div>
//                <div style={ {color:"red",backgroundColor:"yellow", fontFamily:"arial"} }>hiii</div>
//                <h1>hiiiiiiiiiii</h1>
//             </div>
//     );
    
// }

//  export default App;

