
import React, { Component } from 'react';
import './css/Navbar.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import Navigation from './components/pages/Navigation';

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
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