import React from 'react';
import Form from './components/Form';
import IncludingAll from './components/IncludingAll';
import MultipleInputs from './components/MultipleInputs';
import WithErrorMessage from './components/WithErrorMessage';
import TextArea from './TextArea';
import Options from './components/Options';



class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '' };
    }
    myChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }
    render() {
      return (
        <form>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        <h1>Insert Value :</h1>
        <IncludingAll />
        <Options />
        <Form />
        <MultipleInputs />
        <WithErrorMessage />
        <TextArea />
        </form>
      );
    }
  }



export default App;