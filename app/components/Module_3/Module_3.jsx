// ======  功能3组件  ======

// 1.引包
import React from 'react'
//import {Link} from 'react-router'
import './Module_3.css';
// 2.定义组件
class Module_3 extends React.Component{
  render(){
    return (<div className='comment_all'>
      <CommentBox className='comment_all'> </CommentBox>
            </div>)
  }
}

class CommentBox extends React.Component{
  constructor(){
    super();
    this.state = {
      list:[
        {name:'小明',content:'我觉得这个文章写的不错',time:'2018-9-9'},
        {name:'小月',content:'我觉得小明说得对!',time:'2018-9-8'}
      ]
    }
    this.changeContentList = this.changeContentList.bind(this);
  }

  changeContentList(name,content,time){
    var stateListElement = {name:name,content:content,time:time}
    var stateArr = this.state.list;
    stateArr.push(stateListElement);
    this.setState({list:stateArr});
  }
  render(){
    return (
      <div>
        <h1>以下是评论内容</h1>
        <CommentList msg={this.state.list}/>
        <CommentText changeContentList={this.changeContentList}/>
      </div>
    )
  }
}

// 2.定义评论列表组件
class CommentList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const arr = [];
    for (let i = 0; i < this.props.msg.length; i++) {
      const item = this.props.msg[i];
      arr.push(<Comment key={i} msgs={item}/>)
    }

    return (
      <div>
        {arr}
      </div>
    )
  }
}

class CommentText extends React.Component{
  constructor(props){
    super(props);
    this.saveConentList = this.saveConentList.bind(this);
  }
    //获取当前时间
    showTime(){
    var date = new Date();
    var now = "";
    now = date.getFullYear()+"-";
    now += (date.getMonth()+1)+"-";
    now += date.getDate()+" ";
    now += date.getHours()+":";
    now += date.getMinutes()+":";
    now += date.getSeconds()+"";
    return now;
  }

  saveConentList(){
    var inputValue = this.refs.input.value;
    var textareaValue = this.refs.textarea.value;
    var timeStr = this.showTime();
    this.props.changeContentList(inputValue,textareaValue,timeStr);
  }

  render(){
    return (
      <div className="commenttext">
        <input ref="input"
          type="text" placeholder="昵称"/>
        <br />
          <textarea ref="textarea"
            name="" id="" cols="30" rows="10" placeholder="买家留言区..."></textarea>
        <button onClick={this.saveConentList}>保存评论</button>
      </div>
    )
  }
}

// 2.定义组件
class Comment extends React.Component{
  render(){
    return (
      // 最外层要用标签包裹
      <div className="commentSingle">
        <p>{this.props.msgs.name}</p>
        <span>{this.props.msgs.content} </span>
        <span>{this.props.msgs.time}</span>
      </div>
    )
  }
}



// 3.暴露
export default Module_3
