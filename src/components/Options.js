import React from 'react';

class Options extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mycar: 'Volvo'
      };
    }
    render() {
      return (
        <form>
        <select className="btn-sm" value={this.state.mycar}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
        </form>
      );
    }
  }

export default Options; 