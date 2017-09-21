import React from 'react';
import ReactDOM from 'react-dom';
// 解构
import {Router,Route,Link,hashHistory} from 'react-router';  // app

import App from './components/App.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import Index from './components/Index/index.jsx';
import Module_1 from './components/Module_1/Module_1.jsx';
import Module_2 from './components/Module_2/Module_2.jsx';
import Module_3 from './components/Module_3/Module_3.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="signin" component={SignIn}/>
      <Route path="index" component={Index}>
        <Route path="module1" component={Module_1}/>
        <Route path="module2" component={Module_2}/>
        <Route path="module3" component={Module_3}/>
      </Route>
    </Route>
  </Router>
  ,
  document.getElementById('app'));

//browserHistory
