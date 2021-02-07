

/*  import React from 'react';
import './css/Navbar.css';
import Navbar from './components/Navbar';
import Next from './components/Next';



let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

// function test(a,b){
//   a>b? console.log('bigger') : 
//   a<b? console.log('smaller') : 
//   console.log('they are equal')} 

// test(3,2);




export default class App extends React.Component{
  render(){
    return(
      <>
         <div>
            <Navbar />
         </div>
         <div>
             <Next />
         </div>
         
      </>
    );
  }
}
*/

import React, { Component } from 'react';
import './css/Navbar.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import Navigation from './components/pages/Navigation';
import Navbar from './components/Navbar';
import Next from './components/Next';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <div>
              <Navbar />
          </div>
          <div>
              <Next />
          </div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
           
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;


