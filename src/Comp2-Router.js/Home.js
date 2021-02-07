import React from 'react';
import { Link } from 'react-router-dom';
import Products from './Products';


class Home extends React.Component {
    render() {
        return (
            <div>
                <p>Please choose a repository from the list below.</p>
                <ul>
                    <li><Link to="/about" ><button>
              Go to About Page  
            </button></Link></li>
                    <li><Link to="/Products">Product <Products /> </Link></li>
                </ul>
            </div>
        );
    }
}

export default Home;