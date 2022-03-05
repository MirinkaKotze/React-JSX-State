import React from 'react';

class Header extends React.Component {
    constructor(props) {
      super(props);  
      this.state = {
        checked: false,
      };
    }
  
    check() {       
      this.setState({
        checked: true
      });
    }
  
    render() {
      return (
        <div>                        
          <h1 onClick={ () => this.check() }>Click Me!</h1>
          { this.state.checked ? <h1>Checked</h1> : <h1>Not checked</h1> }
        </div>
      );
    }
  }

  export default Header
  