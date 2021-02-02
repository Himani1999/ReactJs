import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';


const Header = () => {
	return (
		<div>
				<p>Header</p>
		</div>
	)
};

const Homepage = () => {
	return (
		<div>
				<Header/>
				<h1>Homepage </h1>
                <Home />
				<Link to='/about'>Go to Aboutpage</Link>
		</div>
	)
};

const Aboutpage = () => {
	return (
		<div>
				<Header/>
				<h1>Aboutpage</h1>
                <About />
				<Link to='/home'>Go to Homepage</Link>
		</div>
	)
};
export {Homepage, Aboutpage } ;