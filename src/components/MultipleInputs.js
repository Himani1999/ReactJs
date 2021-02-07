import React from 'react';

class Inputs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
      };
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }
    render() {
      return (
        <form>
            <h2>Multiple Entries</h2>
        <h1>Hello {this.state.username} {this.state.password}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          name='username'
          onChange={this.myChangeHandler}
        />
        <p>Enter your password:</p>
        <input
          type='password'
          name='password'
          onChange={this.myChangeHandler}
        />
        </form>
      );
    }
  }


  export default Inputs;