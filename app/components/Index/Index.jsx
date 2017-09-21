// ======  首页组件  ======

// 1.引包
import React from 'react'
import {Link} from 'react-router';
import './Index.css';

// 2.定义组件
class Index extends React.Component{
  render(){
    return (<div className="Index">

                <div className="Index_nav_top">
                  欢迎来到首页
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="/signin">
                    返回登录页
                  </Link>
                </div>

                <div className="Index_nav_aside">
                  <Link to="/index/module1">
                    商品搜索
                  </Link>
                  <Link to="/index/module2">
                    摇号系统
                  </Link>
                  <Link to="/index/module3">
                    评论框
                  </Link>

                </div>

              <div className="Index_content">
                {this.props.children}
              </div>

            </div>)
  }
}

// 3.暴露
export default Index
