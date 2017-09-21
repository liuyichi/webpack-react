import React from 'react';
import SignIn from './Signin/SignIn.jsx'

require('./App.css');

class App extends React.Component {
      constructor(props) {
        super(props);
      }

  render() {
    return (<div>
              <h1>内部管理系统(我是公共部分)</h1>
              {this.props.children}
            </div>
              );
  }
}

export default App;
