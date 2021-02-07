import React from 'react';
import Options from './Options';

class IncludingAll extends React.Component{
    constructor(props){
        super(props);
        this.state = {username : '' };
    }
    mySubmit = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.username);
      }
    myChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }
    render(){
            let header = '';
      if (this.state.username) {
        header = <h1 className="text-danger">Hello {this.state.username}</h1>;
      } else {
        header = '';
      }
      return (
          <div className="container">
              <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
        <form onSubmit={this.mySubmitHandler} className="form-group">
        {header}
        <p className="text-info form-control">Here Enter your name:</p>
        <input className="form-control"
          type='text'
          onChange={this.myChangeHandler}
        />
        <br />
        <Options />
        <br />
        <input type='submit' className="btn btn-primary btn-block"  />
        </form>
        </div>
        <div className="col-sm-3"></div>
        </div>
        </div>
        );
    }
}

export default IncludingAll;