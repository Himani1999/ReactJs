import React from 'react';


class WithErrorMessage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        age: null,
        errormessage: ''
      };
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      let err = '';
      if (nam === "age") {
        if (val !="" && !Number(val)) {
          err = <strong>Your age must be a number</strong>;
        }
      }
      this.setState({errormessage: err});
      this.setState({[nam]: val});
    }
    render() {
      return (
        <div className="container">
        <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
        <form>
        <h1 className="text-center text-danger">Hello {this.state.username} {this.state.age}</h1>
        <p className="text-info">Enter your name:</p>
        <input
          type='text'
          name='username'
          onChange={this.myChangeHandler}
        />
        <p className="text-info">Enter your age:</p>
        <input 
          type='text'
          name='age'
          onChange={this.myChangeHandler}
        />
        {this.state.errormessage}
        </form>
        </div>
        <div className="col-sm-3"></div>
        </div>
        </div>
      );
    }
  }
  
export default WithErrorMessage;
