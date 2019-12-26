import React, { Component } from 'react'
import Login from './components/login'
import Register from './components/register'
import Home from './components/home'
import Topics from './components/topics'
import MessageList from './components/messageList'
import { Route, withRouter } from "react-router-dom";
import SendTopicForm from './components/SendTopicForm'
import SendMessageForm from './components/SendMessageForm'
import Message from './components/message'
import './App.css'
import topic from './components/topic'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path="/login" render={() =><> <Login/><Topics/></>}/>
        
          <Route path="/register" render={() => <Register/>} />

          <Route path="/topics" render={() =><> <Topics/><SendTopicForm/></>} />
    <Route path="/topic/:topic_id" render={(props) =><><SendMessageForm {...props}/> <MessageList {...props} /></>} />
          <Route exact path="/" render={() =><Home/> }/>
      </div>
    )
  }

  componentDidMount() {
    this.props.history.push('/login')
  }
}

export default withRouter(App);
