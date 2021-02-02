import React from 'react';
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



