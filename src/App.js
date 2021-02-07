import React from 'react';
import Unmounting from './Components/Unmounting';
//import componentDidMountProgram from './Components/ComponentDidMountProgram';
import IncludingAll from './Components/IncludingAll';
//import Route1 from './Comp2-Router.js/Route1';
import Home from './Comp2-Router.js/Home';

class App extends React.Component{
    render(){
        return(
            <>
               <div>
                   <Unmounting />
               </div>
               <div>
                   <componentDidMountProgram />
               </div>
               <div>
                   <IncludingAll />
               </div>
               <div>
                   <Home />
               </div>
            </>
        );
    }
}

export default App;