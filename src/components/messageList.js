import React from 'react'
import ReactDOM from 'react-dom'
import Message from './message'
import axios from 'axios'
import SendMessageForm from './SendMessageForm'

class MessageList extends React.Component {
    constructor(props){
        super(props)
        this.state={
            topic_id:this.props.match.params.topic_id,
            messages: []
        }

        axios.get(`https://coetus.herokuapp.com/api/forum/message/${this.state.topic_id}`)
        .then((response) => {
            console.log('fdf', response);
            this.setState({...this.state, messages:response.data.messages})
        })
        .catch((error) => {
            this.setState({error:true})
        })
    
    }


    
    render() {
       /* if (!this.props.roomId) {
            return (
                <div className="message-list">
                    <div className="join-room">
                        Join a room! &rarr; 
                    </div>
                </div>
            )
        }*/
        return (
            <>
            <div className="message-list">
                {this.state.messages.map((message) => {
                    return (
                        <Message key={message.message_id} username={message.username} text={message.message} 
                        date={message.timestamp}/>
                        
                    )
                })}
            </div>
            <form
            onSubmit={this.handleSubmit}
            className="send-message-form">
            <input
                disabled={this.props.disabled}
                onChange={this.handleChange}
                value={this.state.message}
                placeholder="Type your message and hit ENTER"
                type="text" />
        </form>
        </>
        )
    }
}

export default MessageList