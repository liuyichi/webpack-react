// ======  功能2组件  ======

// 1.引包
import React from 'react'
//import {Link} from 'react-router'
import './Module_2.css';
// 2.定义组件
class Module_2 extends React.Component{
  render(){
    return (<div className="yaohao_all">
      <ContentChange></ContentChange>
    </div>)
  }
}

// 定义组件
class ContentChange extends React.Component{
  constructor(){
    super();
    this.state = {
      index:4,
      name:'目前还不可以摇号',
      num:'系统正在加载...'
    }
  }

  componentDidMount(){
    setTimeout(function(){
      this.setState({name:'现在可以进行摇号了',index:3,num:'000000'})
    }.bind(this),3000)
  }

    // 事先写好一个事件方法
    myclick(){
      var numRandom = Math.ceil(Math.random()*1000000);
      var indexN = this.state.index;
      indexN--;
      this.setState({
        index:indexN,
        num:numRandom
      });
    }

  // 原型方法
  render(){
    var btn = null;
    var txt = null;
    if(this.state.index==4){
      btn = <button ref="btn" disabled="disabled">{this.state.name}</button>
      txt = <div ref="reminder" className="reminder">你还可以摇号{this.state.index-1}次</div>

    }else if(this.state.index>0&&this.state.index<4){
      btn = <button ref="btn" onClick={()=>{this.myclick()}} >{this.state.name}</button>
      txt = <div ref="reminder" className="reminder">你还可以摇号{this.state.index}次</div>
    }else{
      btn = <button ref="btn" disabled="disabled">现在已经不能摇号了</button>
      txt = <div ref="reminder" className="reminder">你还可以摇号{this.state.index}次</div>
    }

    return(
      <div>
        {btn}
        <div ref="txt1" className="yaohao_txt" style={{backgroundColor:'pink'}}>{this.state.num} </div>
        {txt}
      </div>)
  }
}

// 3.暴露
export default Module_2
