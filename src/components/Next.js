import React from 'react';
// import Chart2 from '../img/Chart2.png';

// class Next extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {};
//     }
//     render(){
//         return(
//             <>
//             <div className="third">
//                 <div><img src={Chart2} alt="THis is Logo" className="pic" /></div>
//                 <div className="Second">
//                     <div className="user">Username</div>
//                     <input className="name"></input>
//                     <div className="pass">Password</div>
//                     <input className="word"></input>
//                     <div><button className="login">LOGIN</button></div>
//                 </div>
//             </div>
//             </>
//         );
//     }
// }


// <div>
//   <ul>
//     <li></li>
//       ul>li.item$@-*10    // for creating 10 lists having different classname
//   </ul>
// </div>

class Next extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {
      return(
          <div className="third">
              
            <div className="fourth">
                I am a {this.state.color} Car!
            </div>
            <div className="fifth">
              <header>
              <span className="sixth">Home</span>
              <span className="sixth">   About</span>
              <span className="sixth">   ContactUs</span>

              </header>
            </div>
          </div>
          );
  }
}




export default Next;


