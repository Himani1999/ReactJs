import React from 'react';
import InputwithLabel from '../Components/Client Components/InputwithLabel';
//bg-primay, bg-success, bg-danger, bg-info, bg-warning
{/* <div className="container bg-warning">
                <div className="row">
                    <div className="col-sm-4 bg-primary">4</div>
                    <div className="col-sm-8 bg-warning">8</div>
                    <div className="col-sm-3 bg-danger">3</div>
                    <div className="col-sm-3 bg-success">3</div>
                </div>
                </div> */}
class Client extends React.Component{
    constructor(props){
        super(props);
        this.state = {clients: [],id:0}
    }
    client = {username:null,password:null};
    changeHander = (event) => {
        
        
        let nam = event.target.name;
        if(nam === "username"){
            this.client.username = event.target.value;
            console.log("usrname=>"+this.client.username);
        }else if(nam === "password"){
            this.client.password =  event.target.value;
            console.log("password=>"+this.client.password);
        }

        this.setState({clients: [...this.state.clients,this.client]});

    }
    mySubmitHandler = (event) => {
    event.preventDefault();
  alert("You are submitting "  + this.state.clients[0].password  + this.state.clients[0].username );

  }

    render(){
        return(
            <>
                <div className="container">
                   <div className="row">
                       <div className="col-sm-3"></div>
                       <div className="col-sm-6">
                            <form onSubmit={this.mySubmitHandler}>

                                { 
                                   this.state.clients.length ? "Username: "+this.state.clients[0].username+"\nPassword: "+this.state.clients[0].password : null
                                }
                                <h1 className="text-center text-danger">Please Login Here</h1>
                                <InputwithLabel changeHander={this.changeHander} forLabel="username" labelName="Username" inputType="text" name="username" placeholder="Enter Your Username" />
                                <InputwithLabel forLabel="password" changeHander={this.changeHander}  labelName="Password" inputType="password" name="password" placeholder="Enter Your Password" />
                                <input type="submit" className="btn btn-primary btn-md btn-block" value="Login"  />

                            </form>

                       </div>
                       <div className="col-sm-3"></div>
                   </div>
                </div>
            </>
        );
    }
}

export default Client;