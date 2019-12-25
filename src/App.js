import React, { Component } from 'react'
import Login from './components/login'
import Register from './components/register'
import Home from './components/home'
import Topics from './components/topics'
import MessageList from './components/messageList'
import { Route, withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path="/login" render={() => <Login/>}/>
        
          <Route path="/register" render={() => <Register/>} />

          <Route path="/topics" render={() => <Topics/>} />
          <Route path="/topic/:topic_id" render={(props) => <MessageList {...props} />} />
          <Route exact path="/" render={() => <Home/>}/>
      </div>
    )
  }

  componentDidMount() {
    this.props.history.push('/login')
  }
}

export default withRouter(App);
