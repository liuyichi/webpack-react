// ======  登陆组件  ======

// 1.引包
import React from 'react';
import {Link} from 'react-router'
import './SignIn.css';

// 2.定义组件
class SignIn extends React.Component{
  render(){
    return (<div className="SignIn">
                  <div className="SignIn_header">
                    欢迎登录内部管理系统
                  </div>

                  <div className="SignIn_content">
                    <input type="text" placeholder="用户名"/><br />
                    <input type="text" placeholder="密码"/><br />
                    <Link to="/index">点击跳转到首页</Link>
                  </div>
            </div>)
  }
}

// 3.暴露
export default SignIn


